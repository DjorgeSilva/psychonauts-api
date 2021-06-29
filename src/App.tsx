import React from 'react';
import axios, { CancelTokenSource } from "axios";
import { IPost } from './interfaces/data.interface';
import Posts from "./Components/Posts/index"


function App() {

  const defaultPosts: IPost[] = [];

  const [posts, setPosts]: [IPost[], (posts: IPost[]) => void] = React.useState(defaultPosts);
  const [loading, setLoading]: [boolean, (loading: boolean) => void] = React.useState<boolean>(true);
  const [error, setError]: [string, (error: string) => void] = React.useState('');

  const cancelToken = axios.CancelToken; //cria token pra cancelar 
  const [cancelTokenSource, setCancelTokenSource]: [CancelTokenSource, (cancelTokenSource: CancelTokenSource) => void] = React.useState(cancelToken.source());

  React.useEffect(() => {
    axios
      .get<IPost[]>('https://jsonplaceholder.typicode.com/posts', {
        cancelToken: cancelTokenSource.token,
        headers: {
          'Content-Type': 'application/json',
        },
        timeout: 10000,
      })
      .then((response) => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch((ex) => {
        let error = axios.isCancel(ex)
          ? 'Requisição cancelada'
          : ex.code === 'ECONNABORTED'
            ? 'Ocorreu um timeout'
            : ex.response.status === 404
              ? 'Arquivo não encontrado'
              : 'Ocorreu um erro';
        setError(error);
        setLoading(false);

        cancelTokenSource.cancel("Usuário cancelou a operação");
      });
  }, []);


  return (
    <React.Fragment>
      <Posts posts={posts} error={error} loading={loading} cancelTokenSource={cancelTokenSource} />
    </React.Fragment>
  );
}

export default App;

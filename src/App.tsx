import React from 'react';
//packages
import { ThemeProvider } from 'styled-components';
import axios, { CancelTokenSource } from "axios";
//interfaces
import { PersonagemInterface } from './interfaces/data.interface';
//styles
import { GlobalStyles } from './assets/GlobalStyle/GlobalStyles';
//components
import Lista from "./Components/Lista/index"
import { Banner } from "./Components/Banner/index"
import { Busca } from './Components/Busca';


function App() {

  const theme = {
    corPadrao: "#07A876",
    corSecudaria: "#1F1F1F",
    corBranco: "#fff",
  }

  const defaultdata: PersonagemInterface[] = [];
  const [data, setdata]: [PersonagemInterface[], (data: PersonagemInterface[]) => void] = React.useState(defaultdata);
  const [loading, setLoading]: [boolean, (loading: boolean) => void] = React.useState<boolean>(true);
  const [error, setError]: [string, (error: string) => void] = React.useState('');

  const cancelToken = axios.CancelToken; //cria token pra cancelar 
  const [cancelTokenSource, setCancelTokenSource]: [CancelTokenSource, (cancelTokenSource: CancelTokenSource) => void] = React.useState(cancelToken.source());

  const [filteredData, setFilteredData]: [PersonagemInterface[], (data: PersonagemInterface[]) => void] = React.useState(defaultdata);

  React.useEffect(() => {
    axios
      .get<PersonagemInterface[]>('https://psychonauts-api.herokuapp.com/api/characters', {
        cancelToken: cancelTokenSource.token,
        headers: {
          'Content-Type': 'application/json',
        },
        timeout: 10000,
      })
      .then((response) => {
        setdata(response.data);
        setFilteredData(response.data)
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

      <ThemeProvider theme={theme}>
        <GlobalStyles />

        <Banner />
        <Busca filteredData={filteredData} setFilteredData={setFilteredData} data={data} />
        <Lista filteredData={filteredData} error={error} loading={loading} cancelTokenSource={cancelTokenSource} />

      </ThemeProvider>

    </React.Fragment>
  );
}

export default App;

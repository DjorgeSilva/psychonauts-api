import React from 'react'
//interface
import { IPost } from '../../interfaces/data.interface';
//styles
import * as s from "./posts.style"
//axios
import { CancelTokenSource } from "axios";

interface Props {
    posts: IPost[];
    error: string;
    loading: boolean;
    cancelTokenSource: CancelTokenSource;
}

const Posts: React.FC<Props> = ({ posts, error, loading, cancelTokenSource }: Props): JSX.Element => {

    const handleCancelClick = () => {
        if (cancelTokenSource) {
            cancelTokenSource.cancel("Usuário cancelou a operação");
        }
    };


    return (
        <s.Container className="container">
            {loading && (
                <button onClick={handleCancelClick}>Cancel</button>
            )}
            <ul>
                {posts.map((post: any) => {
                    return (
                        <li key={post.id}>
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                        </li>
                    )
                })}
            </ul>
            {error && <p className="error">{error}</p>}
        </s.Container>
    )
}

export default Posts;


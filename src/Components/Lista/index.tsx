import React from 'react'
//interface
import { PersonagemInterface, PsiPower } from '../../interfaces/data.interface';
//styles
import * as s from "./posts.style"
//axios
import { CancelTokenSource } from "axios";
//icons
import { BsHeart, BsHeartFill } from "react-icons/bs"
import { MdExpandMore } from "react-icons/md"

interface Props {
    filteredData: PersonagemInterface[];

    error: string;
    loading: boolean;
    cancelTokenSource: CancelTokenSource;
}

const Lista: React.FC<Props> = ({ filteredData, error, loading, cancelTokenSource }: Props): JSX.Element => {

    const handleCancelClick = () => {
        if (cancelTokenSource) {
            cancelTokenSource.cancel("Usuário cancelou a operação");
        }
    };


    return (
        <s.Container className="container">
            {loading && (
                <button onClick={handleCancelClick}>Cancelar</button>
            )}
            <ul>
                {filteredData.map((item: PersonagemInterface) => {
                    return (
                        <li key={item._id}>
                            <div className="wrap-img">
                                <img src={item.img} alt="personagem" />
                            </div>

                            <div className="wrap-txt">
                                <p><span>Nome: </span>{item.name}</p>
                                <p><span>Gênero: </span>{item.gender}</p>

                                <div className="wrapper-icones">
                                    <MdExpandMore className="icone-mais icone" />
                                    <BsHeart className="icone-favoritos icone" />
                                </div>

                                {/* <p>{item.psiPowers.map((items:PsiPower) => {
                                    return(
                                        <li>{items.description}</li>
                                    )
                                })}</p> */}
                            </div>
                        </li>
                    )
                })}
            </ul>
            {error && <p className="error">{error}</p>}
        </s.Container>
    )
}

export default Lista;


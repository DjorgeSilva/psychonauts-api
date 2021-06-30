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
//img
import noData from "../../assets/img/nodata.png"
import { Loading } from '../Loading';

interface Props {
    filteredData: PersonagemInterface[];

    error: string;
    loading: boolean;
    cancelTokenSource: CancelTokenSource;
    dataSearch: string;
}

const Lista: React.FC<Props> = ({ filteredData, error, loading, cancelTokenSource, dataSearch }: Props): JSX.Element => {

    const handleCancelClick = () => {
        if (cancelTokenSource) {
            cancelTokenSource.cancel("Usuário cancelou a operação");
        }
    };


    return (
        <s.Container className="container">
            {loading && (
                <>
                    <Loading handleCancelClick={handleCancelClick} />
                </>
            )}
            <ul>
                {filteredData.length >= 1 ? filteredData.map((item: PersonagemInterface) => {
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
                })
                    :
                    dataSearch &&
                    <div className="wrapper-no-data">
                        <img src={noData} alt="personagem" />
                        <p>Não há nenhum personagem com a descrição!</p>
                    </div>
                }


            </ul>

            {error &&
                <div className="wrapper-error">
                    <img src={noData} alt="personagem" />
                    <p className="error">{error}</p>
                </div>
            }
        </s.Container>
    )
}

export default Lista;


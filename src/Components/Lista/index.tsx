import React from 'react'
//interface
import { PersonagemInterface, PsiPower } from '../../interfaces/data.interface';
//styles
import * as s from "./lista.style"
//axios
import { CancelTokenSource } from "axios";
//icons
import { BsHeart, BsHeartFill } from "react-icons/bs"
import { MdExpandMore } from "react-icons/md"
//img
import noData from "../../assets/img/nodata.png"
import { Loading } from '../Loading';
//packages
import { OverlayTrigger, Tooltip } from "react-bootstrap"

interface Props {
    filteredData: PersonagemInterface[];

    error: string;
    loading: boolean;
    cancelTokenSource: CancelTokenSource;
    dataSearch: string;
    clickFavoritos: boolean;
    setClickFavoritos: (data: boolean) => void
}

const Lista: React.FC<Props> = ({ filteredData, error, loading, cancelTokenSource, dataSearch, clickFavoritos, setClickFavoritos }: Props): JSX.Element => {

    const handleCancelClick = () => {
        if (cancelTokenSource) {
            cancelTokenSource.cancel("Usuário cancelou a operação");
        }
    };


    const renderTooltip = (props: any) => (
        <Tooltip id="button-tooltip" {...props}>
            Meus Favoritos
        </Tooltip>
    );


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

            <OverlayTrigger 
                placement="left"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip}>

                <div className="wrapper-icone-favoritos" onClick={() => setClickFavoritos(!clickFavoritos)}>
                    <BsHeartFill className="icone-favorito" />
                </div>

            </OverlayTrigger>

        </s.Container>

    )
}

export default Lista;


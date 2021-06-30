import React from 'react'
//interface
import { PersonagemInterface, PsiPower } from '../../interfaces/data.interface';
//styles
import * as s from "./lista.style"
//axios
import { CancelTokenSource } from "axios";
//icons
import { BsHeart, BsHeartFill } from "react-icons/bs"
//img
import noData from "../../assets/img/nodata.png"
import { Loading } from '../Loading';
//packages
import { OverlayTrigger, Tooltip } from "react-bootstrap"
import { ItemLista } from '../ItemLista';

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

            <ItemLista filteredData={filteredData} dataSearch={dataSearch} clickFavoritos={clickFavoritos} setClickFavoritos={setClickFavoritos}/>

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


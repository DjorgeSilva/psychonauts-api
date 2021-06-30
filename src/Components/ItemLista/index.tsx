import React from 'react'
//interface
import { PersonagemInterface } from '../../interfaces/data.interface'
//styles
import * as s from "../Lista/lista.style"
//icons
import { BsHeart } from "react-icons/bs"
import { ImBin } from "react-icons/im"
//img
import noData from "../../assets/img/nodata.png"
//redux
import { useDispatch } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'
import { actionsCreators } from '../../state'

interface Props {
    filteredData: PersonagemInterface[],
    dataSearch: string;
    clickFavoritos: boolean;
    setClickFavoritos: (data: boolean) => void
}

export const ItemLista: React.FC<Props> = ({ filteredData, dataSearch, clickFavoritos, setClickFavoritos }: Props): JSX.Element => {

    const dispatch = useDispatch();

    const { AdicionarFavoritosAction, RemoverFavoritosAction } = bindActionCreators(actionsCreators, dispatch)


    const handleAdicionarFavoritos = (item: PersonagemInterface) => {
        AdicionarFavoritosAction(item)
    }

    const handleRemoverFavoritos = (_id: string) => {
        RemoverFavoritosAction(_id)
    }


    return (
        <s.Container>
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
                                    <BsHeart className="icone-favoritos icone" onClick={() => handleAdicionarFavoritos(item)} />

                                    {clickFavoritos ?
                                        <ImBin className="icone-favoritos icone" onClick={() => handleRemoverFavoritos(item._id)} /> :
                                        null
                                    }

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
                        <p>Não há nenhum personagem!</p>
                    </div>
                }
            </ul>
        </s.Container>
    )
}

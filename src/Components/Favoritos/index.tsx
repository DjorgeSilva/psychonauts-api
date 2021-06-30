import React from 'react'
//styles
import * as s from "./favoritos.style"
//icons
import { IoClose } from 'react-icons/io5'
//redux
import { useSelector } from 'react-redux'
import { TypeReducer } from '../../state/CombineReducers'
import { ItemLista } from '../ItemLista'


interface Props {
    clickFavoritos: boolean;
    setClickFavoritos: (data: boolean) => void;
}

export const Favoritos: React.FC<Props> = ({ clickFavoritos, setClickFavoritos }: Props): JSX.Element => {


    //get state
    const state = useSelector((state: TypeReducer) => state.favoritos)

    return (
        <s.Container className="container" clickFavoritos={clickFavoritos}>

            <IoClose className="icone-close" onClick={() => setClickFavoritos(!clickFavoritos)} />
            <h1>Meus Favoritos</h1>

            <ItemLista filteredData={state} dataSearch='s' clickFavoritos={clickFavoritos} setClickFavoritos={setClickFavoritos} />

        </s.Container>

    )
}

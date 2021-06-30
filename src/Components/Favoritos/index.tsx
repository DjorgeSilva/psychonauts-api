import React from 'react'
//styles
import * as s from "./favoritos.style"
//icons


interface Props {
    clickFavoritos: boolean;
}

export const Favoritos: React.FC<Props> = ({ clickFavoritos }: Props): JSX.Element => {
    return (
        <s.Container className="container" clickFavoritos={clickFavoritos}>

        </s.Container>

    )
}

import React from 'react'
//styles
import * as s from "./banner.style"
//img
import banner from '../../assets/img/banner.webp'
import logo from '../../assets/img/logo.png'

export const Banner: React.FC = (): JSX.Element => {
    return (
        <React.Fragment>
            <s.Container>
                <img src={banner} alt="Imagem de fundo" />
            </s.Container>

            <s.Logo>
                <img src={logo} alt="logomarca" />
            </s.Logo>
        </React.Fragment>
    )
}

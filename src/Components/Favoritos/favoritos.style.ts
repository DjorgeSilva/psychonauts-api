import styled from "styled-components"

interface Props {
    clickFavoritos: boolean;
}


export const Container = styled.div.attrs((props: Props) => {
    return {
        clickFavoritos: props.clickFavoritos,
        style: {
            display: props.clickFavoritos ? 'block' : 'none'
        },
    };
})`
    width: 90%;
    height: 70vh;
    background: ${props => props.theme.corBranco};

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 20px;
    box-shadow: 2px 2px 5px #333;
`
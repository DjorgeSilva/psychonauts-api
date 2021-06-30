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
    height: fit-content;
    background: ${props => props.theme.corPadrao};

    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 20px;
    box-shadow: 2px 2px 5px #333;


    
    @media (min-width: 600px){
            width: 600px;
            margin: 0 auto;
        }


    .icone-close{
        cursor: pointer;
        position: absolute;
        right: 15px;
        top: 15px;
        font-size: 2rem;

        :hover{
           color:  red;
        }
    }

    h1{
        width: fit-content;
        margin: 0 auto;
        padding: 5px 30px;
        border-radius: 5px;
        text-align: center;
        margin-top: 20px;
        background: ${props => props.theme.corBranco};
        color: ${props => props.theme.corPadrao};
    }
`
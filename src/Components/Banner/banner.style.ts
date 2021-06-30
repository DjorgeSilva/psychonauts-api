import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 40vh;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`
export const Logo = styled.div`
    max-width: 380px;
    height: 100px;
    margin: 0 auto;
    position: relative;
    top: -50px;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        
        @media (max-width: 380px){
            width: 80%;
            object-fit: fill;
            margin-left: 25px;
        }
    }
`
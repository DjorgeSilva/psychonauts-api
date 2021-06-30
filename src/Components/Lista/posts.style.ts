import styled from "styled-components"


export const Container = styled.div`
    width: 100%;
    height: fit-content;
    margin: 0 auto;
    margin-top: 20px;

    ul{
        width: 90%;
        list-style: none;
        margin: 0 auto;
        padding: 0;

        @media (min-width: 600px){
            width: 550px;
            margin: 0 auto;
        }

        li{
           cursor: pointer;
           width: 100%;
           height: 150px;
           border-radius: 10px;
           margin-bottom: 15px;
           padding: 0 10px;
           
            display: flex;
            justify-content: space-between;
            align-items: center;


            background: ${props => props.theme.corBranco};

            &:hover{
                background: ${props => props.theme.corPadrao};
                color: ${props => props.theme.corBranco};
                transform: scale(1.07);
            }

            &:hover .wrap-txt .wrapper-icones .icone-mais{
                animation: mais 1s;
            }

            &:hover .wrap-txt .wrapper-icones .icone-favoritos{
                animation: favorito 1s;
            }

            .wrap-img{
                width: 100px;
                height: 100px;

                img{
                    background: #769F3F;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    border-radius: 80px;


                }
            }
            .wrap-txt{
                width: 70%;
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;

                p{
                    padding: 0;
                    margin: 0;
                    text-align: center;
                    margin-bottom: 10px;

                    span{
                        font-weight: bold;
                    }
                }

                .wrapper-icones{
                    width: 100%;
                    height: fit-content;

                    display: flex;
                    justify-content: space-around;

                    .icone{
                       font-size: 1.1rem;
                    }

                    .icone-favorito{
                        @keyframes favorito{
                            0%{
                                transform: rotate(0);
                            }
                            25%{
                                transform: rotate(-45deg);
                            }
                            50%{
                                transform: rotate(0);
                            }
                            75%{
                                transform: rotate(45deg);
                            }
                            100%{
                                transform: rotate(0);
                            }
                        }
                    }

                    .icone-mais{
                        font-size: 1.3rem;

                        @keyframes mais{
                            0%{
                                transform: translateY(0);
                            }
                            50%{
                                transform: translateY(-10px);
                            }
                            100%{
                                transform: translateY(0);
                            }
                        }

                    
                    }
                }
            }

        }
    }

    .wrapper-no-data, .wrapper-error{
        width: 100%;
        height: fit-content;
        margin-bottom: 30px;
        border-radius: 10px;
        background: ${props=> props.theme.corPadrao};
        padding: 20px 0;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        img{
            width: 200px;
            margin-bottom: 20px;;
        }

        p{
            color: ${props=> props.theme.corBranco};
            text-align: center;

            @media (max-width: 350px){
                width: 80%;
                
            }
        }
        
    }

    .wrapper-error{
        width: 90%;
        background: red;
        margin: 0 auto;
        
        @media (min-width: 600px){
            width: 550px;
        }
    }

`
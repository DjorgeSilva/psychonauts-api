import { Dispatch } from "react"
import { actionFavoritos, PersonagemInterface } from "../../interfaces/data.interface"



export const AdicionarFavoritosAction = (personagem: any) => {
    return ((dispatch: Dispatch<actionFavoritos>) => {
        dispatch({
            type: 'adicionar',
            payload: personagem
        })
    })
}
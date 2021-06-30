import { Dispatch } from "react"
import { actionAdicionarFavoritos, PersonagemInterface } from "../../interfaces/data.interface"



export const AdicionarFavoritosAction = (personagem: PersonagemInterface) => {
    return ((dispatch: Dispatch<any>) => {
        dispatch({
            type: 'adicionar',
            payload: personagem
        })
    })
}

// export const RemoverFavoritosAction = (id: number) => {
//     return ((dispatch: Dispatch<any>) => {
//         dispatch({
//             type: 'remover',
//             payload: id
//         })
//     })
// }



export const RemoverFavoritosAction = (_id: string) => {
    return ((dispatch: Dispatch<any>) => {
        dispatch({
            type: 'remover',
            payload: { _id },
        })
    })

};
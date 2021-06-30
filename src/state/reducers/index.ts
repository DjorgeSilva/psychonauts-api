import { actionFavoritos, PersonagemInterface } from "../../interfaces/data.interface";

const initialState: any = [];

export const reducer = (state: PersonagemInterface = initialState, action: actionFavoritos) => {
    switch (action.type) {

        case 'adicionar':
            return { ...state, ...action.payload.personagem };

        default:
            return state;
    }
}
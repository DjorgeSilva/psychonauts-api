import { actionAdicionarFavoritos, PersonagemInterface } from "../../interfaces/data.interface";

const initialState: PersonagemInterface[] = [];

export const reducer = (state = initialState, action: any) => {
    switch (action.type) {

        case 'adicionar':
            return [...state, action.payload];

        case 'remover':
            return state.filter(({ _id }) => _id !== action.payload._id);

        default:
            return state;
    }
}
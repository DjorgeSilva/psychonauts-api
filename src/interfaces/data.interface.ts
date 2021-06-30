export interface PsiPower {
    description: string;
    img: string;
    _id: string;
    name: string;
}

export interface PersonagemInterface {
    gender: string;
    img: string;
    _id: string;
    name: string;
    psiPowers: PsiPower[];
    __v: number;
}


export interface actionFavoritos {
    type: string,
    payload: {
        personagem: PersonagemInterface
    }
}

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


export interface actionAdicionarFavoritos {
    type: string,
    payload: {
        personagem: PersonagemInterface
    }
}

export interface actionRemoverFavoritos {
    type: string,
    payload: {
        _id: string;
    }
}

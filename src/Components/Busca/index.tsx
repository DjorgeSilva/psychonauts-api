import React from 'react'
//interface
import { PersonagemInterface } from '../../interfaces/data.interface';
//styles
import * as s from "./busca.style"
//icons
import { BsSearch } from "react-icons/bs"


interface Props {
    filteredData: PersonagemInterface[],
    setFilteredData: (data: PersonagemInterface[]) => void
    data: PersonagemInterface[],
}

export const Busca: React.FC<Props> = ({ filteredData, setFilteredData, data, }: Props): JSX.Element => {



    const handleSearch = (e: string) => {

        let entrada = e.toLowerCase();
        let result = [];

        console.log(entrada);

        result = data.filter((item) => {
            return item.name.search(entrada) !== -1;
        })

        setFilteredData(result);
    }


    return (
        <s.Container className="container">
            <div className="wrapper">
                <input type="search" name="busca" id="busca" placeholder="Buscar por personagem" onChange={(e) => handleSearch(e.target.value)} />
            </div>
            <BsSearch className="icone" />
        </s.Container>
    )
}

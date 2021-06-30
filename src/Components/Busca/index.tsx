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
    dataSearch: string,
    setDataSearch: (e: string) => void
}

export const Busca: React.FC<Props> = ({ filteredData, setFilteredData, data, dataSearch, setDataSearch}: Props): JSX.Element => {



    const handleSearch = (e: string) => {

        setDataSearch(e.toLowerCase());
        let result = [];

        result = data.filter((item) => {
            return item.name.search(dataSearch) !== -1;
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

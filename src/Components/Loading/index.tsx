import React from 'react'
//packages
import { Button, Spinner } from 'react-bootstrap'
//styles
import * as s from "./loading.style"

interface Props {
    handleCancelClick: () => void
}

export const Loading: React.FC<Props> = ({ handleCancelClick }: Props): JSX.Element => {
    return (
        <s.Container>
            <Button variant="success" style={{marginBottom: "20px"}}>
                <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                />
                <span > Carregando...</span>
            </Button>{' '}


            <Button variant="danger" onClick={handleCancelClick}>
                <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                />
                <span > Cancelar...</span>
            </Button >
        </s.Container>
    )
}

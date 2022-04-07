import { useState } from 'react'
import {
    Button,
    Form,
    FormControl,
    InputGroup
} from 'react-bootstrap'
import { IconSearch } from '../icons'

export default function Search({
    onSubmit,
    onChange,
    value
}){

    const inputOnChange = e => onChange(e.target.value)

    return (
        <Form onSubmit={onSubmit}>
            <InputGroup>
                <FormControl
                    id="search"
                    placeholder="Usuário do GitHub..."
                    onChange={inputOnChange}
                    value={value}
                    />
                <Button variant='light' type='submit'>
                    <IconSearch />
                </Button>
            </InputGroup>
        </Form>
    )
}
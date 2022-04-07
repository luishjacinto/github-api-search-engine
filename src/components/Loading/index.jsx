import {
    Spinner
} from 'react-bootstrap'

export default function Loading({ loading }){
    return loading && <Spinner animation="border" variant="light" />
}
import { Image } from 'react-bootstrap'

export default function Logo(){
    return (
        <div id="logo" className="d-flex align-items-end">
            <Image src='github-white-logo-text.png' alt="GitHub name logo"/>
            <div id="logo_name">
                <span>API Search Engine</span>
            </div>
        </div>
    )
}
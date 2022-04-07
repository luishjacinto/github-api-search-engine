import {
    Image,
} from 'react-bootstrap'
import Link from 'next/link'
import {
    IconStar,
    IconRepository,
    IconCompany,
    IconEmail,
    IconFollowers,
    IconLocation,
    IconLink
} from '../icons'

import useAppData from '../../data/hook/useAppData'
import Buttons from '../Buttons'

export default function User(){
    const {
        userData: {
            avatar_url,
            bio,
            blog,
            company,
            email,
            followers,
            following,
            location,
            login,
            name
        },
        getRepositories,
        getStars
    } = useAppData()

    return (
        <div id="user">
            <div className='d-flex justify-content-center align-items-center'>
                <Image id="user_avatar" src={avatar_url} alt="Avatar de usuário do GitHub"/>
            </div>
            <div id="user_info">
                <div id="user_name">
                    {name}
                </div>
                <div>
                    {login}
                </div>
            </div>
            <div id="user_bio">
                {bio}
            </div>
            <div id="user_network">
                <IconFollowers />
                {followers} <span>followers</span>
                {following} <span>following</span>
            </div>
            <div id="user_other_info">
                {company &&
                    <div>
                        <IconCompany />
                        {company}
                    </div>
                }
                {location &&
                    <div>
                        <IconLocation />
                        {location}
                    </div>
                }
                {email &&
                    <div>
                        <IconEmail />
                        {email}
                    </div>
                }
                {blog &&
                    <div>
                        <IconLink />
                        <Link href={blog} passHref>
                            {blog}
                        </Link>
                    </div>
                }
            </div>
            <div id="user_buttons" className='d-block d-md-none'>
                <Buttons />
            </div>
        </div>
    )
}
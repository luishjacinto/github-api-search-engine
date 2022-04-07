import useAppData from '../../data/hook/useAppData'
import Link from 'next/link'
import { IconEye, IconStar } from '../icons'

export default function RepositoriesList({
    title,
    data
}){
    return (
        <div className="repositories_list">
            <span className='repositories_list_title'>{title}:</span>
            {data && data[0] ?
                data.map(({
                    description,
                    id,
                    html_url,
                    language,
                    name,
                    stargazers_count,
                    visibility,
                    watchers
                }) => (
                    <div key={id} className='repo'>
                        <div>
                            <Link href={html_url}>
                                {name}
                            </Link>
                            <span className='repo_visibility'>{`${visibility.charAt(0).toUpperCase()}${visibility.slice(1)}`}</span>
                        </div>
                        <div className='repo_description'>{description}</div>
                        <div className='repo_info'>
                            {language &&
                                <span>
                                    {language}
                                </span>
                            }
                            <span>
                                <IconStar />
                                {stargazers_count}
                            </span>
                            <span>
                                <IconEye />
                                {watchers}
                            </span>
                        </div>
                    </div>
                )) : (<div className='text-center'>Nenhum repositório encontrado!</div>)
            }
        </div>
    )
}
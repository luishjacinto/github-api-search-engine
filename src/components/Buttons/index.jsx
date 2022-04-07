import {
    IconStar,
    IconRepository
} from '../icons'

import useAppData from '../../data/hook/useAppData'

export default function Buttons(){

    const {
        getRepositories,
        getStars
    } = useAppData()

    return (
        <>
            <div>
                <button className="action_btn" onClick={() => getRepositories()}>
                    <IconRepository />
                    Repositórios
                </button>
            </div>
            <div>
                <button className="action_btn" onClick={() => getStars()}>
                    <IconStar />
                    Stars
                </button>
            </div>
        </>
    )

}
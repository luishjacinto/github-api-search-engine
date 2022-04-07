import {
    Container,
    Col,
    Row
} from 'react-bootstrap'
import useAppData from '../../data/hook/useAppData'
import Buttons from '../Buttons'
import Loading from '../Loading'
import RepositoriesList from '../RepositoriesList'
import User from '../User'

export default function Content(){
    const {
        loading,
        userView,
        repositoriesData,
        starsData
    } = useAppData()

    return (
        <Container fluid id="content" className={`flex-column ${loading && 'd-flex justify-content-center align-items-center'}`}>
            <Loading loading={loading} />
            {!loading &&
                <>
                    <Row id="content_actions" className='flex-grow-1 justify-content-end d-none d-md-flex px-md-5'>
                        <Col md={9}>
                            <div id="content_actions_buttons" className='d-flex'>
                                <Buttons />
                            </div>
                        </Col>
                    </Row>
                    <Row className='px-3 px-md-5 flex-grow-1'>
                        <Col sm={12} md={3}>
                            <User />
                        </Col>
                        <Col sm={12} md={9}>
                            {userView === 'repos' &&
                                <RepositoriesList title="Repositórios" data={repositoriesData} />
                            }
                            {userView === 'stars' &&
                                <RepositoriesList title="Stars" data={starsData} />
                            }
                        </Col>
                    </Row>
                </>
            }
        </Container>
    )
}
/* eslint-disable @next/next/no-html-link-for-pages */
import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Logo from "../Logo";
import Loading from "../Loading";
import Search from "../Search";

import useAuth from "../../data/hook/useAuth";
import useAppData from "../../data/hook/useAppData";
import Content from "../Content";


export default function Main() {
    const [username, setUsername] = useState('');

    const {
        loading,
        loggedIn
    } = useAuth();
    const {
        getUser,
        onSearch
    } = useAppData();

    const onSubmit = (e) => {
        e.preventDefault();
        getUser(username);
    };

    if (loading)
        return (
            <Container
                fluid
                className="h-100 d-flex flex-column justify-content-center align-items-center"
            >
                <Loading loading={loading} />
            </Container>
        );

    return onSearch && loggedIn ? (
        <>
            <header>
                <Row
                    id="header"
                    className="px-3 flex-grow-1 d-flex justify-content-between align-items-center"
                >
                    <Col className="d-none d-md-block" sm={12} md={4}>
                        <Logo />
                    </Col>
                    <Col sm={12} md={6} xl={4}>
                        <Search
                            onSubmit={onSubmit}
                            onChange={setUsername}
                            value={username}
                        />
                    </Col>
                </Row>
            </header>
            <main>
                <Content/>
            </main>
        </>
    ) : (
        <main>
            <Container
                id="home"
                fluid
                className="d-flex flex-column justify-content-center align-items-center"
            >
                <Logo />
                <p>
                    Obtenha dados de respositórios e estrelas de usuários do
                    GitHub.
                </p>
                {loggedIn ? (
                    <Container className="d-flex justify-content-center mt-3">
                        <Row className="flex-grow-1 d-flex justify-content-center">
                            <Col sm={12} md={8} xl={6}>
                                <Search
                                    onSubmit={onSubmit}
                                    onChange={setUsername}
                                    value={username}
                                />
                            </Col>
                        </Row>
                    </Container>
                ) : (
                    <a href="/api/authorize">
                        <Button variant="light" className="mt-2">
                            Autorizar aplicativo com GitHub
                        </Button>
                    </a>
                )}
            </Container>
        </main>
    );
}

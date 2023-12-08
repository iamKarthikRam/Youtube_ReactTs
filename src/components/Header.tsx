import { FC } from "react";
import { Container, Navbar } from "react-bootstrap";

interface IHeaderProps {

}

const Header: FC<IHeaderProps> = (props) => {
    return (
        <Navbar fixed="top" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>
                    React Typescript Tutorial
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default Header;
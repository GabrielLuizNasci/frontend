import { Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router";
import { Icon } from "@iconify/react";
import 'bootstrap/dist/css/bootstrap.min.css';

interface Props {
    bgColor?: string;
}

export default function Navbar(props: Props) {
    return (
        <>
            <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#C73023" }}>
                <div className="container-fluid">
                    <Link className="navbar-brand" aria-current="page" to="/">
                        <Icon icon="solar:home-bold-duotone" width="36" height="36" color="black"/>
                    </Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item me-3">
                            <Link to="/livros">
                                <Icon icon="solar:book-bold" width="36" height="36" color="black"/>
                            </Link>
                        </li>
                        <li className="nav-item me-3">
                            <Link to="/editoras">
                                <Icon icon="file-icons:microsoft-publisher" width="36" height="36" color="black"/>
                            </Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
            
        </>
    );
}
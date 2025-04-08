import { Flex } from "@chakra-ui/react";
import { Link } from "react-router";
import { Icon } from "@iconify/react";

interface Props {
    bgColor?: string;
}

export default function Navbar(props: Props) {
    return (
        <>
            <Flex
                h="100px"
                justifyContent="space-around"
                alignItems="center"
                bg="S4"
                w="100%"
                gap="8"
            >
                <Flex w="980px" justifyContent="space-between" gap="8">
                    <Link to="/">
                        <Icon icon="solar:home-bold-duotone" width="36" height="36" color="black"/>
                    </Link>

                    <Link to="/livros">
                        <Icon icon="solar:book-bold" width="36" height="36" color="black"/>
                    </Link>
                    <Link to="/editoras">
                        <Icon icon="file-icons:microsoft-publisher" width="36" height="36" color="black"/>
                    </Link>
                </Flex>
            </Flex>
        </>
    );
}
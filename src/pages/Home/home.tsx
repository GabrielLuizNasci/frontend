import { Flex, Heading, Text } from "@chakra-ui/react";

export default function Home(){
    return (
        <>
            <div className="App">
                <Flex
                    h={{ base: '250px', lg: '100px' }}
                    w={{ base: '250px', lg: '100px' }}
                    bgColor="black"
                    borderRadius="15"
                    boxShadow="dark-lg"
                    alignItems="center"
                    flexDirection="column"
                    justifyContent="center"
                    p="2"
                >
                    <Heading>Bem-vindo!</Heading>
                
                    <Text>Essa aplicação é responsável por controlas livros e editoras</Text>
                </Flex>
            </div>
        </>
    );
}
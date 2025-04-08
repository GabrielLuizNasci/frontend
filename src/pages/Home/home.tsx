import { Button, Flex, Heading } from "@chakra-ui/react";

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
                    <header className="App-header">
                    <Heading>Bem-vindo!</Heading>
                    </header>
                
                    <Button>Socorro</Button>
                </Flex>
            </div>
        </>
    );
}
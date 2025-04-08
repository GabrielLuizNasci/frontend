import { getEditoras } from "../../api/editoras";
import { 
    Button, 
    CloseButton, 
    Drawer, 
    DrawerBody, 
    DrawerContent, DrawerFooter, DrawerHeader, Flex, Heading, Input, Portal, Table, useDisclosure } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

interface Editora {
    id?: number;
    nome: string;
    quantLivros: number;
}

export default function Editoras(){
const [editoras, setEditoras] = useState<Editora[]>([]);

useEffect(() => {
    getEditoras().then(setEditoras);
}, []);

    return (
        <>
            <Flex
                h={{ base: "auto", lg: "auto" }}
                w="100%"
                bgColor="blackAlpha.100"
                borderRadius="15"
                boxShadow="dark-lg"
                alignItems="center"
                flexDirection="column"
                justifyContent="center"
                p="2"
            >
                <Heading mb="4">Página de Editoras</Heading>
                
                <Table.Root size="sm">
                    <Table.Header>
                        <Table.Row>
                        <Table.ColumnHeader>Id</Table.ColumnHeader>
                        <Table.ColumnHeader>Nome</Table.ColumnHeader>
                        <Table.ColumnHeader>Quantidade de Livros</Table.ColumnHeader>
                        <Table.ColumnHeader textAlign="end">Ações</Table.ColumnHeader>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {editoras.map((editora) => (
                        <Table.Row key={editora.id}>
                            <Table.Cell>{editora.nome}</Table.Cell>
                            <Table.Cell>{editora.quantLivros}</Table.Cell>
                            <Table.Cell textAlign="end">{editora.quantLivros}</Table.Cell>
                        </Table.Row>
                        ))}
                    </Table.Body>
                </Table.Root>
            </Flex>
                
            <Drawer.Root>
                <Drawer.Trigger asChild>
                    <Button variant="outline" size="sm">
                    Open Drawer
                    </Button>
                </Drawer.Trigger>
                <Portal>
                    <Drawer.Backdrop />
                    <Drawer.Positioner>
                    <Drawer.Content>
                        <Drawer.Header>
                        <Drawer.Title>Drawer Title</Drawer.Title>
                        </Drawer.Header>
                        <Drawer.Body>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        </Drawer.Body>
                        <Drawer.Footer>
                        <Button variant="outline">Cancel</Button>
                        <Button>Save</Button>
                        </Drawer.Footer>
                        <Drawer.CloseTrigger asChild>
                        <CloseButton size="sm" />
                        </Drawer.CloseTrigger>
                    </Drawer.Content>
                    </Drawer.Positioner>
                </Portal>
            </Drawer.Root>
        </>
    );
}
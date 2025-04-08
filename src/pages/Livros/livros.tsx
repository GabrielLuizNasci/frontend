import { Button, Flex, For, Heading, Stack, Table } from "@chakra-ui/react";

export default function Livros(){
    return (
        <>
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
                <Heading>Página de Livros</Heading>
                <Stack gap="10">
                    <For each={["line", "outline"]}>
                        {(variant) => (
                        <Table.Root key={variant} size="sm" variant={variant}>
                            <Table.Header>
                            <Table.Row>
                                <Table.ColumnHeader>Product</Table.ColumnHeader>
                                <Table.ColumnHeader>Category</Table.ColumnHeader>
                                <Table.ColumnHeader textAlign="end">Price</Table.ColumnHeader>
                            </Table.Row>
                            </Table.Header>
                            <Table.Body>
                            {items.map((item) => (
                                <Table.Row key={item.id}>
                                <Table.Cell>{item.name}</Table.Cell>
                                <Table.Cell>{item.category}</Table.Cell>
                                <Table.Cell textAlign="end">{item.price}</Table.Cell>
                                </Table.Row>
                            ))}
                            </Table.Body>
                        </Table.Root>
                        )}
                    </For>
                </Stack>
            </Flex>
        </>
    );
}
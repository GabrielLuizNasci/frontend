import { Button, Flex, For, Heading, Stack, Table } from "@chakra-ui/react";

interface Livro {
    id?: number;
    nome: string;
    descricao?: string;
    edicao: number;
    lancamento: string; // será convertido para ISO string no formulário
    editoraId?: number | null;
    nomeEditora?: string;
}
  
interface Editora {
    id: number;
    nome: string;
    quantLivros: number;
}

export default function Livros(){
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
                <button className="btn btn-primary mb-3" onClick={abrirFecharModalIncluir}>
                    Nova Editora
                </button>
                <table className="table">
                    <thead className="table-light">
                        <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Número de Livros</th>
                        <th scope="col">Ações</th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        {editoras.map((editora) => (
                            <tr key={editora.id}>
                                <th scope="row">{editora.id}</th>
                                <td>{editora.nome}</td>
                                <td>{editora.quantLivros}</td>
                                <td>
                                    <div className="button-gap"> 
                                        <button className="btn btn-success" onClick={() => {
                                            setEditoraSelecionada(editora);
                                            setModalAtualizar(true)
                                        }}> 
                                            <Icon icon="mdi:pencil" width="24" height="24" /> 
                                        </button>
                                        <button className="btn btn-danger" onClick={() => abrirFecharModalExcluir(editora)}>  
                                            <Icon icon="mdi:trashcan" width="24" height="24" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Flex>
        </>
    );
}
import { getEditoras } from "../../api/editoras";
import { createLivro, deleteLivro, getLivros, updateLivro } from "../../api/livros";
import { Button, Flex, For, Heading, Stack, Table } from "@chakra-ui/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect, useState } from "react";
import CriarLivros from "./components/criarLivro";
import AtualizarLivros from "./components/atualizarLivro";
import DeletarLivros from "./components/deletarLivro";

interface Livro {
    id?: number;
    nome: string;
    descricao: string;
    edicao: number;
    lancamento: string;
    editoraId: number | null;
    nomeEditora?: string;
}
  
interface Editora {
    id: number;
    nome: string;
    quantLivros: number;
}

function formatarDataBR(data: string): string {
    return new Date(data).toLocaleDateString("pt-BR", {
      timeZone: "UTC" // Evita problemas com offset
    });
}

export default function Livros(){
    const [livros, setLivros] = useState<Livro[]>([]);
    const [editoras, setEditoras] = useState<Editora[]>([]);
    const [modalIncluir, setModalIncluir] = useState(false);
    const [modalAtualizar, setModalAtualizar] = useState(false);
    const [modalExcluir, setModalExcluir] = useState(false);
    const [livroSelecionado, setLivroSelecionado] = useState<Livro>({
        nome: "",
        descricao: "",
        edicao: 1,
        lancamento: new Date().toISOString().split("T")[0], // para input[type="date"]
        editoraId: null,
    })

    const carregarLivros = async () => {
        const data = await getLivros();
        setLivros(data);
    };

    const carregarEditoras = async () => {
        const data = await getEditoras();
        setEditoras(data);
    };

    useEffect(() => {
        carregarLivros();
        carregarEditoras();
    }, []);

    const abrirFecharModalIncluir = () => {
        setModalIncluir(!modalIncluir);
    };

    const abrirFecharModalAtualizar = (livro?: Livro) => {
        if (livro){
            setLivroSelecionado(livro);
        }
        setModalAtualizar(!modalAtualizar);
    };

    const abrirFecharModalExcluir = (livro?: Livro) => {
        setModalExcluir(!modalExcluir);
        if (livro) setLivroSelecionado(livro);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setLivroSelecionado((prev) => ({
          ...prev,
          [name]:
            name === "edicao" ? Number(value) :
            name === "editoraId" ? (value === "null" ? null : Number(value)) :
            value,
        }));
    };

    const handleCreate = async () => {
        try {
            await createLivro({
                ...livroSelecionado,
            });
            abrirFecharModalIncluir(); // fecha o modal
            await carregarLivros(); // recarrega a lista de livros
            setLivroSelecionado({
                nome: "",
                descricao: "",
                edicao: 1,
                lancamento: new Date().toISOString().split("T")[0],
                editoraId: null,
            });
        } catch (error) {
            console.error("Erro ao criar livro:", error);
            alert("Erro ao criar livro.");
        }
    };

    const handleUpdate = async () => {
        if (!livroSelecionado.id) {
            console.warn("Editora selecionada sem ID.");
            return;
        }
        try {
          await updateLivro(livroSelecionado.id, {
            id: livroSelecionado.id!,
            nome: livroSelecionado.nome,
            descricao: livroSelecionado.descricao,
            edicao: livroSelecionado.edicao,
            lancamento: livroSelecionado.lancamento,
            editoraId: livroSelecionado.editoraId,
        });
          abrirFecharModalAtualizar();
          await carregarLivros();
        } catch (error) {
          console.error("Erro ao atualizar livro:", error);
          alert("Erro ao atualizar livro.");
        }
    };

    const handleDelete = async () => {
            try {
            await deleteLivro(livroSelecionado.id!);
            abrirFecharModalExcluir();
            await carregarLivros();
            } catch (error) {
            console.error("Erro ao deletar editora:", error);
            }
    };

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
                <Heading mb="4">Página de Livros</Heading>
                <button className="btn btn-primary mb-3" onClick={abrirFecharModalIncluir}>
                    Novo Livro
                </button>
                <table className="table">
                    <thead className="table-light">
                        <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Descrição</th>
                        <th scope="col">Edição</th>
                        <th scope="col">Editora</th>
                        <th scope="col">Data de Lançamento</th>
                        <th scope="col">Ações</th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        {livros.map((livro) => (
                            <tr key={livro.id}>
                                <th scope="row">{livro.id}</th>
                                <td>{livro.nome}</td>
                                <td>{livro.descricao}</td>
                                <td>{livro.edicao}</td>
                                <td>{livro.nomeEditora ?? "Nenhuma"}</td>
                                <td>{formatarDataBR(livro.lancamento)}</td>
                                <td>
                                    <div className="button-gap"> 
                                        <button className="btn btn-success" onClick={() => {
                                            setLivroSelecionado(livro);
                                            setModalAtualizar(true)
                                        }}> 
                                            <Icon icon="mdi:pencil" width="24" height="24" /> 
                                        </button>
                                        <button className="btn btn-danger" onClick={() => abrirFecharModalExcluir(livro)}>  
                                            <Icon icon="mdi:trashcan" width="24" height="24" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Flex>
            <CriarLivros
                isOpen={modalIncluir}
                onClose={abrirFecharModalIncluir}
                onSubmit={handleCreate}
                onChange={handleChange}
                formData={livroSelecionado}
                editoras={editoras}
            />

            <AtualizarLivros
            isOpen={modalAtualizar}
            onClose={abrirFecharModalAtualizar}
            onSubmit={handleUpdate}
            onChange={handleChange}
            formData={livroSelecionado}
            editoras={editoras}
            />

            <DeletarLivros
                isOpen={modalExcluir}
                onClose={abrirFecharModalExcluir}
                onConfirmDelete={handleDelete}
                livroNome={livroSelecionado?.nome}
            />
        </>
    );
}
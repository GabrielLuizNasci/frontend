import { createEditora, deleteEditora, getEditoras, updateEditora } from "../../api/editoras";
import { Flex, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import CriarEditoras from "./components/criarEditora";
import { Icon } from "@iconify/react/dist/iconify.js";
import AtualizarEditoras from "./components/atualizarEditora";
import DeletarEditoras from "./components/deletarEditora";

interface Editora {
    id?: number;
    nome: string;
    quantLivros: number;
}

export default function Editoras(){
    const [editoras, setEditoras] = useState<Editora[]>([]);
    const [modalIncluir, setModalIncluir] = useState(false);
    const [modalAtualizar, setModalAtualizar] = useState(false);
    const [modalExcluir, setModalExcluir] = useState(false);
    const [editoraSelecionada, setEditoraSelecionada] = useState<Editora>({
        nome: "",
        quantLivros: 0,
    });

    const carregarEditoras = async () => {
        const data = await getEditoras();
        setEditoras(data);
    };

    useEffect(() => {
        carregarEditoras();
    }, []);

    const abrirFecharModalIncluir = () => {
        setModalIncluir(!modalIncluir);
        setEditoraSelecionada({ nome: "", quantLivros: 0 });
    };

    const abrirFecharModalAtualizar = (editora?: Editora) => {
        if (editora) {
            setEditoraSelecionada(editora);
        }
        setModalAtualizar(!modalAtualizar);
    };

    const abrirFecharModalExcluir = (editora?: Editora) => {
        setModalExcluir(!modalExcluir);
        if (editora) setEditoraSelecionada(editora);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setEditoraSelecionada((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleCreate = async () => {
        try {
            await createEditora({
            nome: editoraSelecionada.nome,
            quantLivros: 0, 
            });
            abrirFecharModalIncluir();
            await carregarEditoras();
        } catch (error) {
            console.error("Erro ao criar editora:", error);
        }
    };

    const handleUpdate = async () => {
        if (!editoraSelecionada.id) {
            console.warn("Editora selecionada sem ID.");
            return;
        }
        try {
            await updateEditora(editoraSelecionada.id, {
                id: editoraSelecionada.id!,
                nome: editoraSelecionada.nome,
                quantLivros: editoraSelecionada.quantLivros,
            });
            abrirFecharModalAtualizar();
            await carregarEditoras();
        } catch (error) {
            console.error("Erro ao atualizar editora:", error);
        }
    };

    const handleDelete = async () => {
        try {
        await deleteEditora(editoraSelecionada.id!);
        abrirFecharModalExcluir();
        await carregarEditoras();
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
            <CriarEditoras
                isOpen={modalIncluir}
                onClose={abrirFecharModalIncluir}
                onSubmit={handleCreate}
                onChange={handleChange}
                formData={{ nome: editoraSelecionada.nome }}
            />

            <AtualizarEditoras
                isOpen={modalAtualizar}
                onClose={() => abrirFecharModalAtualizar()}
                onSubmit={handleUpdate}
                onChange={handleChange}
                formData={editoraSelecionada}
            />

            <DeletarEditoras
            isOpen={modalExcluir}
            onClose={abrirFecharModalExcluir}
            onConfirmDelete={handleDelete}
            editoraNome={editoraSelecionada?.nome}
            />
        </>
    );
}
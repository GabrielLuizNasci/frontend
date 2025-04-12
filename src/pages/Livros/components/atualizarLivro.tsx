import {Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';

interface AtualizarLivrosProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: () => void;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    formData: {
      nome: string;
      descricao: string;
      edicao: number;
      lancamento: string;
      editoraId: number | null;
    };
    editoras: {
      id: number;
      nome: string;
    }[];
  }

export default function AtualizarLivros({
    isOpen,
    onClose,
    onSubmit,
    onChange,
    formData,
    editoras
}: AtualizarLivrosProps){

    return (
        <>
            <Modal isOpen={isOpen}>
                <ModalHeader>Incluir Livros</ModalHeader>
                <ModalBody>
                <div className="form-group mb-2">
                    <label>Nome:</label>
                    <input
                        type="text"
                        className="form-control"
                        name="nome"
                        value={formData.nome}
                        onChange={onChange}
                    />
                </div>

                <div className="form-group mb-2">
                    <label>Descrição:</label>
                    <input
                        type="text"
                        className="form-control"
                        name="descricao"
                        value={formData.descricao}
                        onChange={onChange}
                    />
                </div>

                <div className="form-group mb-2">
                    <label>Edição:</label>
                    <input
                        type="number"
                        className="form-control"
                        name="edicao"
                        value={formData.edicao}
                        onChange={onChange}
                        min="1"
                    />
                </div>

                <div className="form-group mb-2">
                    <label>Data de Lançamento:</label>
                    <input
                        type="date"
                        className="form-control"
                        name="lancamento"
                        value={formData.lancamento}
                        onChange={onChange}
                    />
                </div>

                <div className="form-group mb-2">
                    <label>Editora:</label>
                    <select
                        className="form-control"
                        name="editoraId"
                        value={formData.editoraId ?? "null"}
                        onChange={onChange}
                    >
                        <option value="null">Nenhuma</option>
                        {editoras.map((editora) => (
                        <option key={editora.id} value={editora.id}>
                            {editora.nome}
                        </option>
                        ))}
                    </select>
                </div>
                </ModalBody>
                <ModalFooter>
                    <button className="btn btn-success" onClick={onSubmit}>Atualizar</button>
                    <button className="btn btn-danger" onClick={onClose}>Cancelar</button>
                </ModalFooter>
            </Modal>
        </>
    );
}

import {Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';

interface AtualizarEditorasProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: () => void;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    formData: {
        nome: string;
        quantLivros: number;
        id?: number;
    };
}

export default function AtualizarEditoras({
    isOpen,
    onClose,
    onSubmit,
    onChange,
    formData,
}: AtualizarEditorasProps){

    return (
        <>
            <Modal isOpen={isOpen}>
                <ModalHeader>Atualizar Editoras</ModalHeader>
                <ModalBody>
                    <div className="form-group">
                        <label>Nome: </label>
                        <br />
                        <input type="text" className="form-control" name="nome" value={formData.nome}  onChange={onChange}/>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <button className="btn btn-success" onClick={onSubmit}> Atualizar </button>
                    <button className="btn btn-danger" onClick={onClose}>Cancelar</button>
                </ModalFooter>
            </Modal>
        </>
    );
}

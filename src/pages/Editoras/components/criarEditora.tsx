import {Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';

interface CriarEditorasProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: () => void;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    formData: {
      nome: string;
    };
}

export default function CriarEditoras({
    isOpen,
    onClose,
    onSubmit,
    onChange,
    formData,
}: CriarEditorasProps){

    return (
        <>
            <Modal isOpen={isOpen}>
                <ModalHeader>Incluir Editoras</ModalHeader>
                <ModalBody>
                    <div className="form-group">
                        <label>Nome: </label>
                        <br />
                        <input type="text" className="form-control" name="nome" value={formData.nome}  onChange={onChange}/>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <button className="btn btn-success" onClick={onSubmit}> Incluir </button>
                    <button className="btn btn-danger" onClick={onClose}>Cancelar</button>
                </ModalFooter>
            </Modal>
        </>
    );
}

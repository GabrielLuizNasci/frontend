import {Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';

interface DeletarEditorasProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirmDelete: () => void;
    editoraNome?: string;
}

export default function DeletarEditoras({
    isOpen,
    onClose,
    onConfirmDelete,
    editoraNome,
}: DeletarEditorasProps){

    return (
        <>
            <Modal isOpen={isOpen}>
                <ModalHeader>Remover Editoras</ModalHeader>
                <ModalBody>
                    Confirma a exclusão da editora: <strong>{editoraNome}</strong>?
                </ModalBody>
                <ModalFooter>
                    <button className="btn btn-success" onClick={onConfirmDelete}> Remover </button>
                    <button className="btn btn-danger" onClick={onClose}>Cancelar</button>
                </ModalFooter>
            </Modal>
        </>
    );
}

import {Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';

interface DeletarEditorasProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirmDelete: () => void;
    livroNome?: string;
}

export default function DeletarLivros({
    isOpen,
    onClose,
    onConfirmDelete,
    livroNome,
}: DeletarEditorasProps){

    return (
        <>
            <Modal isOpen={isOpen}>
                <ModalHeader>Remover Editoras</ModalHeader>
                <ModalBody>
                    Confirma a exclusão do livro: <strong>{livroNome}</strong>?
                </ModalBody>
                <ModalFooter>
                    <button className="btn btn-success" onClick={onConfirmDelete}> Remover </button>
                    <button className="btn btn-danger" onClick={onClose}>Cancelar</button>
                </ModalFooter>
            </Modal>
        </>
    );
}

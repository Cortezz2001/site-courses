import { Button, Modal, ModalActions, Header, Icon } from "@/UI/SUI";

const MessageModal: React.FC<{ open: boolean; onClose: () => void }> = ({
    open,
    onClose,
}) => {
    return (
        <Modal basic size="small" open={open} onClose={onClose}>
            <Header icon>
                <Icon name="envelope" style={{ margin: "20px" }} />
                Сообщение успешно отправлено
            </Header>

            <ModalActions>
                <Button onClick={onClose} icon="close" negative></Button>
            </ModalActions>
        </Modal>
    );
};

export default MessageModal;

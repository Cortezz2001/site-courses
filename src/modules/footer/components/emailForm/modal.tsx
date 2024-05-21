import { Button, Modal, ModalActions, Header, Icon } from "@/UI/SUI";
import { useTranslations } from "next-intl";

const MessageModal: React.FC<{ open: boolean; onClose: () => void }> = ({
    open,
    onClose,
}) => {
    const t = useTranslations("Modal");
    return (
        <Modal basic size="small" open={open} onClose={onClose}>
            <Header icon>
                <Icon name="envelope" style={{ margin: "20px" }} />
                {t('sendSuccessfully')}
            </Header>

            <ModalActions>
                <Button onClick={onClose} icon="close" negative></Button>
            </ModalActions>
        </Modal>
    );
};

export default MessageModal;

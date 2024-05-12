import { API_URL } from "../consts";
import axios from "axios";

export const MessagesService = {
    async sendMessage(formData: IFormMessageData) {
        try {
            const response = await axios.post(
                `${API_URL}/api/v1/form_messages/`,
                formData
            );
            return response.data;
        } catch (error) {
            throw new Error("Failed to send message");
        }
    },
};

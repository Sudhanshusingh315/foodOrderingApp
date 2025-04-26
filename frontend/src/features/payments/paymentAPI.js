import axios from "axios";
import { baseConfig } from "../../const/constant";
export const keyId = async () => {
    const response = await axios.get(`${baseConfig.url}/api/payments/getKey`);
    return response;
};

export const checkout = async (amount) => {
    const response = await axios.post(
        `${baseConfig.url}/api/payments/checkout`,
        { amount }
    );
    return response;
};

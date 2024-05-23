import axios from "axios";
export const keyId = async () => {
  const response = await axios.get("/api/payments/getKey");
  return response;
};

export const checkout = async (amount) => {
  const response = await axios.post("/api/payments/checkout", { amount });
  return response;
};

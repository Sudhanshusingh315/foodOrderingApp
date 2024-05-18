import axios from "axios";

const myToken = JSON.parse(localStorage.getItem("userInfo"));
export const addItemsToCart = async (itemId) => {
  const response = await axios.post(
    "/api/cart/addToCart",
    { itemId: itemId },
    {
      headers: {
        Authorization: "Bearer " + myToken?.accessToken,
      },
    }
  );
  console.log(response);
};

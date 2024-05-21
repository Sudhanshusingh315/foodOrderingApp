import axios from "axios";

// adding items to the cart
const myToken = JSON.parse(localStorage.getItem("userInfo"));
export const addItemsToCart = async (itemId) => {
  const { data } = await axios.post(
    "/api/cart/addToCart",
    { itemId: itemId },
    {
      headers: {
        Authorization: "Bearer " + myToken?.accessToken,
      },
    }
  );
  return data;
};

// fetching items from the cart
export const fetchItemsFromCart = async () => {
  const { data } = await axios.get("/api/cart/showCart", {
    headers: {
      Authorization: "Bearer " + myToken?.accessToken,
    },
  });
  console.log("cart api", data?.getItem);
  return data?.getItem;
};

// will remove the item from the cart regardless of it's quantity
export const deleteParticulateItemFromCart = async (itemId) => {
  const { data } = await axios.patch(
    "/api/cart/deletingParticular",
    {
      itemId: itemId,
    },
    {
      headers: {
        Authorization: "Bearer " + myToken?.accessToken,
      },
    }
  );
  return itemId;
};

// this will decrease the items in the cart
export const deleteFromCart = async (itemId) => {
  const { data } = await axios.patch(
    "/api/cart/deleteSpecific",
    { itemId: itemId },
    {
      headers: {
        Authorization: "Bearer " + myToken?.accessToken,
      },
    }
  );
  return itemId;
};

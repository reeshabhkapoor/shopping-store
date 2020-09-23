export const initialState = {
  basket: [],
  user: null,
  addProduct: null,
  removeProduct: null,
};

// Selector

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_MESSAGE":
      return { ...state, addProduct: null };
    case "REMOVE_MESSAGE":
      return { ...state, removeProduct: null };
    case "ADD_TO_BASKET":
      // console.log("Visited");
      // // let productAlreadyAdded = false;
      // let existingBasket = [...state.basket];
      // if (existingBasket) {
      //   let element = existingBasket.find((el) => el.id === action.item.id);
      //   console.log("Element:", element);
      //   if (element) {
      //     element.qty += 1;
      //     console.log("Product already added. ", element.qty);
      //     return {
      //       ...state,
      //       basket: existingBasket,
      //       addProduct: action.addProduct,
      //     };
      //   } else {
      //     existingBasket.push(action.item);
      //   }
      // }

      return {
        ...state,
        basket: [...state.basket, action.item],
        addProduct: action.addProduct,
      };
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];
      let remove = null;
      if (index >= 0) {
        newBasket.splice(index, 1);
        remove = action.removeProduct;
      } else {
        console.warn(
          `Can't remove product (id: ${action.id}) as its not in basket`
        );
      }
      return { ...state, basket: newBasket, removeProduct: remove };

    case "SET_USER":
      return { ...state, user: action.user };

    case "EMPTY_BASKET":
      return { ...state, basket: [] };

    default:
      return state;
  }
};

export default reducer;

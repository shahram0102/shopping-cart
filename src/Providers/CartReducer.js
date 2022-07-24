const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const updatedCart = [...state.cart];
      const updatedCartIndex = updatedCart.findIndex(
        (p) => p.id === action.payLoad.id
      );

      if (updatedCartIndex < 0) {
        updatedCart.push({ ...action.payLoad, quantity: 1 });
      } else {
        const updatedItem = { ...updatedCart[updatedCartIndex] };
        updatedItem.quantity++;
        updatedCart[updatedCartIndex] = updatedItem;
      }
      // const total = updatedCart.reduce((acc, cur) => {
      //   return acc + cur.price * cur.quantity;
      // }, 0);
      console.log(updatedCart);
      return {
        cart: updatedCart,
        total: state.total + action.payLoad.offPrice,
      };
    }

    case "REMOVE_FROM_CART": {
      const updatedCart = [...state.cart];
      const updatedIndex = updatedCart.findIndex(
        (p) => p.id === action.payLoad.id
      );
      const updatedItem = { ...updatedCart[updatedIndex] };
      if (updatedItem.quantity === 1) {
        const filteredItem = updatedCart.filter(
          (p) => p.id !== action.payLoad.id
        );
         //  const total = updatedCart.reduce((acc, cur) => {
         //    return acc + cur.price * cur.quantity;
         //  }, 0);
        return {
          total: state.total - action.payLoad.offPrice,
          cart: filteredItem,
        };
      }
      updatedItem.quantity--;
      updatedCart[updatedIndex] = updatedItem;
      // const total = updatedCart.reduce((acc, cur) => {
      //   return acc + cur.price * cur.quantity;
      // }, 0);

      return {
        total: state.total - action.payLoad.offPrice,
        cart: updatedCart,
      };
    }

    default:
      return state;
  }
};

export default cartReducer;

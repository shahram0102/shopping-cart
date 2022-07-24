import { createContext, useContext, useReducer } from "react";
import cartReducer from "./CartReducer";

// createContext
const CartContext = createContext();
const CartContextDispatcher = createContext();

// initialState
const initialState = {
  cart: [],
  total: 0,
};

// context
const CartProvider = ({ children }) => {
  const [product, dispatch] = useReducer(cartReducer, initialState);
  return (
    <CartContext.Provider value={product}>
      <CartContextDispatcher.Provider value={dispatch}>
        {children}
      </CartContextDispatcher.Provider>
    </CartContext.Provider>
  );
};

export default CartProvider;

// CustomHook useContext
export const useCart = () => useContext(CartContext);
export const useCartActions = () => useContext(CartContextDispatcher);

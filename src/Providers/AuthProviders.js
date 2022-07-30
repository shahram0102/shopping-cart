import { createContext, useContext, useEffect, useState } from "react";

// createContext
const AuthorProviderContext = createContext();
const AuthorProviderContextDispatcher = createContext();

// context
const AuthProvider = ({ children }) => {
  const [state, setState] = useState(false);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("authState")) || false;
    setState(userData);
  }, []);

  return (
    <AuthorProviderContext.Provider value={state}>
      <AuthorProviderContextDispatcher.Provider value={setState}>
        {children}
      </AuthorProviderContextDispatcher.Provider>
    </AuthorProviderContext.Provider>
  );
};

export default AuthProvider;

// CustomHook useContext
export const useAuth = () => useContext(AuthorProviderContext);
export const useAuthActions = () => useContext(AuthorProviderContextDispatcher);

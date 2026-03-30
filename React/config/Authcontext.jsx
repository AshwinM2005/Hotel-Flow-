// AuthContext.js
import { createContext ,useState } from "react";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{  role, setRole ,user , setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

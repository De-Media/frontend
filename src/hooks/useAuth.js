import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import getWalletAddress from "../utils/getWalletAddress";

const useAuth = () => {
  const address = getWalletAddress();
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(
    address !== null && address !== undefined ? true : false
  );

  useEffect(() => {
    if (address !== null && address !== undefined) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [address]);

  const signOut = () => {
    sessionStorage.clear();
    navigate(0);
  };

  return { isAuthenticated, signOut };
};

export default useAuth;

import { useState, useCallback, useMemo, useContext } from "react";
import { UserContext } from "../context";
import { UserStateData } from "../interfaces/context";
import { getToken } from "@/utils/localStorage.utils";

const INITIAL_VALUES: UserStateData = {
  token: "",
  email: "",
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useOrder must be used within a OrderProvider");
  }
  return context;
};

export const useUserContext = () => {
  const [user, setUser] = useState<UserStateData>(INITIAL_VALUES);

  const getTokenUser = useCallback(() => {
    const { email, token } = getToken();

    setUser({
      email,
      token,
    });
  }, []);

  const removeTokenUser = useCallback(() => {
    setUser(INITIAL_VALUES);
  }, []);

  return useMemo(
    () => ({
      user,
      getTokenUser,
      removeTokenUser,
    }),
    [user, getTokenUser, removeTokenUser]
  );
};

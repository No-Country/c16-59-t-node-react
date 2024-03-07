type User = {
  email: string;
  token: string;
};

// Función para setear el token
export const getToken = (): User => {
  const dataUser = localStorage.getItem("user");

  if (dataUser) {
    return JSON.parse(dataUser);
  }
  return {
    email: "",
    token: "",
  };
};

// Función para setear el token
export const setToken = (token: string, email: string) =>
  localStorage.setItem(
    "user",
    JSON.stringify({
      token,
      email,
    })
  );

// Función para remover el token
export const removeToken = () => localStorage.removeItem("user");

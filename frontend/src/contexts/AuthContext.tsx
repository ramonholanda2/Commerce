import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { auth } from "../services/firebase";
import { useHistory, useLocation } from "react-router-dom";
import firebase from "firebase";
import axios from "axios";

interface Address {
  id: Long;
  street: string;
  number: number;
  complement: string;
  cep: string;
  city: string;
  district: string;
}

interface Product {
  id: Long;
  name: string;
  price: Number;
  item: Item;
}

interface Item {
  id: Long;
  quantity: number;
  subtotal: number;
}

interface User {
  id: string;
  name?: string;
  surname?: string;
  address?: Address[];
  products?: Product[];
}

interface AuthContextType {
  user: User | undefined;
  error: string | undefined;
  signInWithGoogle: () => Promise<void>;
  createAccountWithEmailAndPassword: (
    email: string,
    password: string,
    name: string,
    surname: string
  ) => Promise<void>;
  loginWithEmailAndPassword: (email: string, password: string) => Promise<void>;

  logout: () => Promise<void>;
}

interface AuthContextProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextType);
export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const { push } = useHistory();
  const { pathname } = useLocation();
  const [user, setUser] = useState<User>();
  const [error, setError] = useState();

  async function signInWithGoogle(): Promise<void> {
    const provider = new firebase.auth.GoogleAuthProvider();
    const result = await auth.signInWithPopup(provider);
    if (result.user) {
      const { uid, displayName } = result.user;
      if (uid && displayName) {
        var nameAndSurname = displayName.split(" ");
        const nameClient = nameAndSurname[0];
        const surnameClient =
          nameAndSurname.length > 1 ? nameAndSurname[1] : "";

        setUser({ id: uid, name: nameClient, surname: surnameClient });
        await axios.post("https://milk-holanda.herokuapp.com/clients", {
          id: uid,
          name: nameClient,
          surname: surnameClient,
        });
      }
    }
  }
  async function createAccountWithEmailAndPassword(
    email: string,
    password: string,
    name: string,
    surname: string
  ): Promise<void> {
    try {
      await auth
        .createUserWithEmailAndPassword(email, password)
        .then((response) => {
          axios
            .post(`https://milk-holanda.herokuapp.com/clients`, {
              id: response.user?.uid,
              name,
              surname,
            })
            .then((resp) => {
              push("/");
            });
        })
        .catch((error) => {
          setError(error.code);
        });
    } catch (error) {
      throw new Error("erro ao criar conta");
    }
  }

  async function loginWithEmailAndPassword(email: string, password: string) {
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        axios
          .get(
            `https://milk-holanda.herokuapp.com/clients/${response.user?.uid}`
          )
          .then((result) => {
            setUser(result.data);
            push("/");
          });
      })
      .catch((error) => {
        console.log(error);
        setError(error.code);
      });
  }

  async function logout() {
    await auth.signOut().then((resp) => {
      push("/login");

      if (sessionStorage.getItem("Name")) {
        sessionStorage.removeItem("Name");
      }
    });
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setTimeout(() => {
          const { uid } = user;
          
          if (!uid) {
            throw new Error("Missing Collect information");
          }
          
          axios
          .get(`https://milk-holanda.herokuapp.com/clients/${uid}`)
            .then((result) => {
              setUser(result.data);
              if (!localStorage.getItem("token")) {
                localStorage.setItem("token", "logged");
              }
              if (!sessionStorage.getItem("Name") !== result.data.name) {
                sessionStorage.setItem("Name", result.data.name);
              }
            });

          return () => {
            unsubscribe();
          };
        }, 1000);
      } else {
        localStorage.removeItem("token");
      }
    });

  }, [push]);

  useEffect(() => {
    if (!localStorage.getItem("token") && pathname !== "/criar-conta")
      push("/login");
  }, [push, pathname]);

  return (
    <AuthContext.Provider
      value={{
        user,
        error,
        logout,
        signInWithGoogle,
        createAccountWithEmailAndPassword,
        loginWithEmailAndPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => {
  return useContext(AuthContext);
};

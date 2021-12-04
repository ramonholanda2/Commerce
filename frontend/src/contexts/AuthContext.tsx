import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { auth } from "../services/firebase";
import { useHistory } from "react-router-dom";
import firebase from "firebase";
import axios from "axios";

interface Address {
  id: Long;
  street: string;
  number: number;
  complement: string;
  cep: string;
  city: string;
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
  address?: Address;
  products?: Product[];
}

interface AuthContextType {
  user: User | undefined;
  error: string | undefined;
  signInWithGoogle: () => Promise<void>;
  createAccountWithEmailAndPassword: (
    email: string,
    password: string,
    name: string
  ) => Promise<void>;
  loginWithEmailAndPassword: (email: string, password: string) => Promise<void>;
}

interface AuthContextProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const { push } = useHistory();
  const [user, setUser] = useState<User>();
  const [error, setError] = useState();

  async function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();

    const result = await auth.signInWithPopup(provider);

    if (result.user) {
      const { uid, displayName } = result.user;

      if (uid && displayName) {
        setUser({ id: uid, name: displayName });
        await axios.post("https://milk-holanda.herokuapp.com/clients", {
          id: uid,
          name: displayName,
        });
      }
    }
  }

  async function createAccountWithEmailAndPassword(
    email: string,
    password: string,
    name: string
  ) {
    try {
      await auth
        .createUserWithEmailAndPassword(email, password)
        .then((response) => {
          axios
            .post(`https://milk-holanda.herokuapp.com/clients`, {
              id: response.user?.uid,
              name,
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
          });
      })
      .catch((error) => {
        console.log(error);
        setError(error.code);
      });
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const { uid } = user;

        if (!uid) {
          throw new Error("Missing Collect information");
        }

        if (!localStorage.getItem("token")) {
          localStorage.setItem("token", "logged");
        }

        axios
          .get(`https://milk-holanda.herokuapp.com/clients/${uid}`)
          .then((result) => {
            setUser(result.data);
            !localStorage.getItem("Name") &&
              localStorage.setItem("Name", result.data.name);
          });

        return () => {
          unsubscribe();
        };
      } else {
        localStorage.removeItem("token");
      }
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        error,
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

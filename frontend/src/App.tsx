import axios from "axios";
import { useForm } from "react-hook-form";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";

type FormValues = {
  name: string;
};

function App() {
  const { register, handleSubmit, formState: { errors } } =
    useForm<FormValues>();

  const [toggleUpdateData, setToggleUpdateData] = useState<Boolean>(false);

  const [clients, setClients] = useState([
    {
      name: "ramon",
      address: {
        city: "logragina"
      }
    },
  ]);
  const [client, setClient] = useState();

  const [name, setName] = useState<string>();

  useEffect(() => {
    axios
      .get("http://localhost:8080/clients")
      .then((response) => {
        const { data } = response;

        setClients(data);
      })
      .catch((error) => {
        console.log(error);
      });

  }, [toggleUpdateData]);

  async function addClient(data: Object) {
    await axios
      .post("http://localhost:8080/clients", data)
      .then((response) => {
        console.log(response.data);
      });
  }

  async function getClientById() {
    await axios.get(`http://localhost:8080/clients/3`).then((response) => {
      const { data } = response;
      console.log(data);
      setClient(data);
    });
  }

  const getFormData = handleSubmit((data: FormValues) => {
    const sendJson = {
      id: null,
      name: data.name,
      address: {
        id:null,
        number: 7899,
        complement: "perto de chagas",
        rua: "pedros",
        cep: "2312323",
        city: "picos"
      }
    }
    addClient(sendJson);
    
    setToggleUpdateData(!toggleUpdateData);
  });

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/clients" exact>
          <div className="App">
            <form onSubmit={getFormData}>
              
              <label htmlFor="name">name</label>
              <input {...register("name", { required: true, minLength: 5 })} name="name" id="name" type="text" />
              {errors.name && errors.name.type === "required" && <span>This is required</span>}
              {errors.name && errors.name.type === "minLength" && <span>Max length exceeded</span> }

              <button type='submit' >SUBMIT</button>
            </form>

            {clients.map((client, index) => (
              <><li key={index}>{client.name}</li>
              <span>localizado em {client.address.city}</span></>
            ))}
          </div>
        </Route>

        <Route path="/clients/:id">
          <button onClick={getClientById}>GET CLIENT</button>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

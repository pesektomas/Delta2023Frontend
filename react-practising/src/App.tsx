import './App.css'
import ExampleComponent from "./components/ExampleComponent";
import MySecondExampleComponent from "./components/MySecondExampleComponent";
import {MyFormComponent} from "./components/MyFormComponent";
import {useEffect, useState} from "react";

interface JsonPlaceholderResponse {
    completed?: Boolean,
    id?: Number,
    title?: string,
    userId?: number,
}

function App() {

  const name = 'Tomas Pesek';

  const [apiJsonResponse, setApiJsonResponse] = useState<JsonPlaceholderResponse>({});


  useEffect(() => {
      void (async () => {
          const apiResponse = await fetch('https://jsonplaceholder.typicode.com/todos/1');
          const jsonResponse = await apiResponse.json();

          setApiJsonResponse(jsonResponse);
      })();

  }, []);

  return (
    <>
        <h1 className="text-3xl font-bold underline border-inherit">App component</h1>

        <ExampleComponent name={name} name2="Tomas" />
        <MySecondExampleComponent />
        <MyFormComponent />

        <h2>API RESPONSE</h2>

        <table>
            <tbody>
                <tr>
                    <td>ID</td><td>{'' + apiJsonResponse.id}</td>
                </tr>
                <tr>
                    <td>TITLE</td><td>{'' + apiJsonResponse.title}</td>
                </tr>
                <tr>
                    <td>USER ID</td><td>{'' + apiJsonResponse.userId}</td>
                </tr>
            </tbody>
        </table>


    </>
  )
}

export default App

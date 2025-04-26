import React, {createContext} from "react";

// 4 - importação de componentes
import FirstComponents from "./components/FirstComponents";

// 5 - desestruturando props
import SecondComponents from "./components/SecondComponents";
import Destructuring, { Category } from "./components/Destructuring";

// 6 - useState
import State from "./components/State";

// 10 - Utilizando contexto
import Context from "./components/Context";

// 8 - Type
type textOrNull = string | null;

// 9 - context 
interface IAppContext {
  language: string
  framework: string
  projects: number
}
export const AppContext = createContext<IAppContext | null>(null);

function App() {
  // 1 - variaveis
  const name: string = "Gabriel";
  const age: number = 20;
  const isWorking: boolean = true;

  // 2 - funçoes
  const userGreeting = (name: string): string => {
    return `Olá ${name}!`;
  };

  // 8 - type
  const myText: textOrNull = "Tem algum texto aqui";
  let mySecondText: textOrNull = null;

  const contextValue: IAppContext = {
    language: "JavaScript",
    framework: "React",
    projects: 5
  };

  return (
    <AppContext.Provider value={contextValue}>
    <div className="App">
      <h1>React com Typescript</h1>
      <h2>Nome: {name}</h2>
      <p>Idade: {age}</p>
      {isWorking && <p>Está trabalhando!</p>}
      <h3>{userGreeting(name)}</h3>

      <FirstComponents />

      <SecondComponents name="Segundo" />

      <Destructuring
        title="Primeiro Post"
        content="Algum conteúdo"
        commentsQty={10}
        tags={["Ts", "Js"]}
        category={Category.TS}
      />

      <Destructuring
        title="Segundo Post"
        content="Outro conteúdo"
        commentsQty={5}
        tags={["Python"]}
        category={Category.PY}
      />

      <State />

      {myText && <p>Tem texto na variável</p>}
      {mySecondText && <p>Tem texto na variável</p>}

      <Context/>
    </div>
    </AppContext.Provider>
  );
}

export default App;

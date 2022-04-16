import { Button } from "antd";
import Button2 from "./components/Button2";

const App = () => {
  const onClickHome = () => {
    console.log("Indo para a página inicial")
  }
  const onClickEquipe = () => {
    console.log("Indo para a página da equipe")
  }

  return (
    <div>
      <h1>Teste</h1>
      <nav>
        <Button type="link">Home</Button>
        <Button type="link">Equipe</Button>
        <Button type="link">Sobre Nós</Button>
        <Button type="link">Contato</Button>
      </nav>  
      <main>
        <h2>Listagem</h2>
        <Button>Cadastrar item</Button>
      </main>
      <div>
        <Button2 text="Home" onClick={onClickHome} />
        <Button2 text="Equipe" onClick={onClickEquipe} />
      </div>
    </div>
  );
}

export default App;

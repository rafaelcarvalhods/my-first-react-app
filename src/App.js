import { Button } from "antd";
import Menu from "./components/Menu";
import Button2 from "./components/Button2";
import Main from "./components/Main";
import Button3 from "./components/Button3";

const App = () => {
  const onClickHome = () => {
    console.log("Indo para a página inicial")
  }
  const onClickEquipe = () => {
    console.log("Indo para a página da equipe")
  }
  const onClickButton3 = () => {
    console.log("Teste do Button3 com children")
  }

  return (
    <div>
      <h1>Teste</h1>
      <Menu />
      <Main />
      <div className="button2">
        <Button2 text="Home" onClick={onClickHome} />
        <Button2 text="Equipe" onClick={onClickEquipe} />
        <Button3 onClick={onClickButton3}>
          Botão 3
        </Button3>
      </div>
    </div>
  );
}

export default App;

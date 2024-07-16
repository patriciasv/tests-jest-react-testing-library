import { useState } from "react";
import Button from "./Button";

function App() {
  const [message, setMessage] = useState("Vamos aprender mais sobre testes no React");
  const [counter, setCounter] = useState(0);

  const handleMessageChange = () => {
    setMessage('Nova Mensagem!');
    setCounter(counter + 1);
  };

  return (
    <div>
      <h1>Olá mundo!</h1>
      <p>{message}</p>
      <Button
        disabled={counter >= 5}
        onClick={handleMessageChange}
      >
        Alterar mensagem
        
      </Button>
      <p>Botão clicado {counter} vezes</p>
      <Button
        disabled={counter >= 5}
        onClick={() => setCounter(0)}
      >
        Limpar contador
      </Button>
    </div>
  );
}

export default App;
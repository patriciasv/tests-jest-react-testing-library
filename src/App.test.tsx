import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  it("Deve renderizar o component corretamente", () => {
    const { container } = render(<App />);
    expect(container).toBeInTheDocument();
  });
  it("Deve renderizar o component com a mensagem inicial", () => {
    render(<App />);
    expect(
      screen.getByText("Vamos aprender mais sobre testes no React")
    ).toBeInTheDocument();
  });

  it("Deve alterar a mensagem quando o botão é clicado", () => {
    render(<App />);
    const button = screen.getByText("Alterar mensagem");
    fireEvent.click(button);
    expect(screen.getByText("Nova Mensagem!")).toBeInTheDocument();
  });

  it("Deve incrementar o contador quando o botão é clicado", () => {
    render(<App />);
    const button = screen.getByText("Alterar mensagem");
    fireEvent.click(button);
    fireEvent.click(button);
    expect(screen.getByText("Botão clicado 2 vezes")).toBeInTheDocument();
  });

  it("Deve desativar os botões quando o contador chegar a 5", () => {
    render(<App />);
    const changeMessageButton = screen.getByText("Alterar mensagem");
    const resetButton = screen.getByText("Limpar contador");

    for (let i = 0; i < 5; i++) {
      fireEvent.click(changeMessageButton);
    }

    expect(changeMessageButton).toBeDisabled();
    expect(resetButton).toBeDisabled();
  });

  it("Deve limpar o contador quando o botão reset é clicado", () => {
    render(<App />);
    const changeMessageButton = screen.getByText("Alterar mensagem");
    const resetButton = screen.getByText("Limpar contador");

    for (let i = 0; i < 3; i++) {
      fireEvent.click(changeMessageButton);
    }

    fireEvent.click(resetButton);
    expect(screen.getByText("Botão clicado 0 vezes")).toBeInTheDocument();
  });
});

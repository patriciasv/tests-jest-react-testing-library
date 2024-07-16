import { fireEvent, render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button component", () => {
  it("Deve renderizar o component corretamente", () => {
    const { container } = render(
      <Button disabled={false} onClick={() => {}}>
        Click me
      </Button>
    );
    expect(container).toBeInTheDocument();
  });
  it("Deve renderizar o botão com o texto correto", () => {
    render(
      <Button disabled={false} onClick={() => {}}>
        Click me
      </Button>
    );
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("Deve aplicar os estilos corretos com base na prop desabilitada", () => {
    render(
      <Button disabled={true} onClick={() => {}}>
        Botão desabilitado
      </Button>
    );
    const button = screen.getByText("Botão desabilitado");
    expect(button).toHaveStyle("background-color: gray");
    expect(button).toHaveStyle("cursor: not-allowed");

    render(
      <Button disabled={false} onClick={() => {}}>
        Botão habilitado
      </Button>
    );
    const enabledButton = screen.getByText("Botão habilitado");
    expect(enabledButton).toHaveStyle("background-color: green");
    expect(enabledButton).toHaveStyle("cursor: pointer");
  });

  it("Deve chamar a função onClick quando o botão é clicado", () => {
    const mockOnClick = jest.fn();
    render(
      <Button disabled={false} onClick={mockOnClick}>
        Click me
      </Button>
    );
    const button = screen.getByText("Click me");
    fireEvent.click(button);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});

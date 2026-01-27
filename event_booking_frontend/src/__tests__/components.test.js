import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "../components/Button";
import Input from "../components/Input";
import Card from "../components/Card";
import Modal from "../components/Modal";

test("Button renders with props and handles click", () => {
  const fn = jest.fn();
  render(<Button variant="success" onClick={fn}>ClickMe</Button>);
  expect(screen.getByText("ClickMe")).toBeInTheDocument();
  userEvent.click(screen.getByText("ClickMe"));
  expect(fn).toHaveBeenCalled();
});

test("Input renders label, error", () => {
  render(<Input label="Name" error="Invalid" value="" onChange={()=>{}} />);
  expect(screen.getByText("Name")).toBeInTheDocument();
  expect(screen.getByText("Invalid")).toBeInTheDocument();
});

test("Card renders children", () => {
  render(<Card>Inside Card</Card>);
  expect(screen.getByText("Inside Card")).toBeInTheDocument();
});

test("Modal shows content when open", () => {
  render(<Modal open={true} title="MyModal" onClose={() => {}} >Modal Body</Modal>);
  expect(screen.getByText("MyModal")).toBeInTheDocument();
  expect(screen.getByText("Modal Body")).toBeInTheDocument();
});

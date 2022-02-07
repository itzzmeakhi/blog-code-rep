import { screen } from "@testing-library/dom";

import Task from "../../components/Task/Task";
import { renderWithState } from "../utils";

const task = {
  name: 'Task 1',
  id: '123'
}

test('has a paragraph tag', () => {
  renderWithState(<Task task={task} />);
  const paraElem = screen.getByText(task.name);
  expect(paraElem).toBeInTheDocument();
});

test('has a remove button rendered', () => {
  renderWithState(<Task task={task} />);
  const btnElem = screen.getByRole('button', { name: 'Remove' });
  expect(btnElem).toBeInTheDocument();
});
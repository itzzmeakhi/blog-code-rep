import { screen } from "@testing-library/dom";

import { renderWithState } from "../utils";
import Tasks from './../../components/Tasks/Tasks';

test('renders no tasks text when tasks not available', () => {
  const initialState = {
    tasks: []
  }
  renderWithState(<Tasks />, { initialState });
  const noTasksElem = screen.getByText('No tasks available');
  expect(noTasksElem).toBeInTheDocument();
});

test('renders as expected when tasks available', () => {
  const initialState = {
    tasks: [
      { name: 'Task 1', id: '123' },
      { name: 'Task 2', id: '1234' }
    ]
  }
  const { container } = renderWithState(<Tasks />, { initialState });
  const noTasksElem = screen.queryByText('No tasks available');
  expect(noTasksElem).not.toBeInTheDocument();

  expect(container.getElementsByClassName('task')).toHaveLength(2);
});
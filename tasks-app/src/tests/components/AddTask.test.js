import {
  render,
  screen
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import AddTask from '../../components/AddTask/AddTask';

test('input field rendered with correct label', () => {
  render(<AddTask />);
  const inputElem = screen.getByRole('textbox', { name: 'Task' });
  expect(inputElem).toBeInTheDocument();
});

test('input field value changes wrt to type events', () => {
  render(<AddTask />);
  const inputElem = screen.getByRole('textbox', { name: 'Task' });

  userEvent.clear(inputElem);
  userEvent.type(inputElem, 'Listen to a podcast');
  expect(inputElem.value).toBe('Listen to a podcast');

  userEvent.clear(inputElem);
  expect(inputElem.value).toBe('');
});

test('button element rendered with correct name', () => {
  render(<AddTask />);
  const btnElem = screen.getByRole('button', { name: 'Add Task' });
  expect(btnElem).toBeInTheDocument();
});
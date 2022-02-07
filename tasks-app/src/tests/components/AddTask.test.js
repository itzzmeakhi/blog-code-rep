import {
  screen
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderWithState } from './../utils';
import AddTask from '../../components/AddTask/AddTask';

test('input field rendered with correct label', () => {
  renderWithState(<AddTask />);
  const inputElem = screen.getByRole('textbox', { name: 'Task' });
  expect(inputElem).toBeInTheDocument();
});

test('input field value changes wrt to type events', () => {
  renderWithState(<AddTask />);
  const inputElem = screen.getByRole('textbox', { name: 'Task' });

  userEvent.clear(inputElem);
  userEvent.type(inputElem, 'Listen to a podcast');
  expect(inputElem.value).toBe('Listen to a podcast');

  userEvent.clear(inputElem);
  expect(inputElem.value).toBe('');
});

test('add button element rendered with correct name', () => {
  renderWithState(<AddTask />);
  const btnElem = screen.getByRole('button', { name: 'Add Task' });
  expect(btnElem).toBeInTheDocument();
});

test('dummy tasks button rendered on screen', () => {
  renderWithState(<AddTask />);
  const btnElem = screen.getByRole('button', { name: 'Load dummy data' });
  expect(btnElem).toBeInTheDocument();
});
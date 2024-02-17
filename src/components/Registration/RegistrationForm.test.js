import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import RegistrationForm from './RegistrationForm';

test('renders registration form', () => {
  render(<RegistrationForm />);
  const formTitle = screen.getByText('Registration Form');
  expect(formTitle).toBeInTheDocument();
});

test('updates ID input field correctly', () => {
  render(<RegistrationForm />);
  const idInput = screen.getByLabelText('ID:');
  fireEvent.change(idInput, { target: { value: '123' } });
  expect(idInput.value).toBe('123');
});

test('handles invalid characters in ID input field', () => {
  render(<RegistrationForm />);
  const idInput = screen.getByLabelText('ID:');
  fireEvent.change(idInput, { target: { value: 'abc' } });
  expect(idInput.value).toBe('');
});

// Write more test cases for other input fields and form submission

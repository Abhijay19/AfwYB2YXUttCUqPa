import '@testing-library/jest-dom'
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BmiCalculator from '../BmiCalculator';

describe('BmiCalculator', () => {
  test('displays error messages for invalid weight and height inputs', async () => {
    render(<BmiCalculator />);

    // Submit form without entering any values
    fireEvent.click(screen.getByText('Calculate'));

    // Check for error messages
    expect(await screen.findByText('Weight is required')).toBeInTheDocument();
    expect(await screen.findByText('Height is required')).toBeInTheDocument();

    // Enter invalid values
    userEvent.type(screen.getByLabelText('Weight:'), '-10');
    userEvent.type(screen.getByLabelText('Height:'), '0');
    fireEvent.click(screen.getByText('Calculate'));

    // Check for error messages
    expect(await screen.findByText('weight cannot be less than 0kgs')).toBeInTheDocument();
    expect(await screen.findByText('height cannot be less than 0.1m')).toBeInTheDocument();
  });

  test('displays BMI result for valid inputs', async () => {
    render(<BmiCalculator />);

    // Enter valid values
    userEvent.type(screen.getByLabelText('Weight:'), '70');
    userEvent.type(screen.getByLabelText('Height:'), '1.75');
    fireEvent.click(screen.getByText('Calculate'));

    // Check for BMI result
    expect(await screen.findByText(/Your BMI is/)).toBeInTheDocument();
  });
});
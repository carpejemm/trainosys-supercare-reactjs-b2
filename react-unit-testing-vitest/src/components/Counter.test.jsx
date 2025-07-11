import React from 'react';
import { render, screen } from '@testing-library/react';
import Counter from './Counter'
import { describe, it, expect } from 'vitest';
import userEvent from '@testing-library/user-event';
import "@testing-library/jest-dom/vitest";

describe('Counter Component', () => {
  // Test case number 1
  // it('renders the Counter Component correctly', () =>{
  //   render(<Counter />)
  //   expect(screen.getByText('Counter Component')).toBeInTheDocument()
  //   expect(screen.getByText('0')).toBeInTheDocument()
  // })

  // Test case number 2
  it('increments the count when the button is clicked', async () => {
    render(<Counter />);
    const button = await screen.findByRole("button", { name: /increment/i });
    let counterValue = await screen.findByTestId('counter-value');

    expect(counterValue).toHaveTextContent('0');

    await userEvent.click(button);
    counterValue = await screen.findByTestId('counter-value');
    expect(counterValue).toHaveTextContent('1');

    await userEvent.click(button);
    counterValue = await screen.findByTestId('counter-value');
    expect(counterValue).toHaveTextContent('2');
  })
})
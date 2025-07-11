import React from 'react';
// render - This is a function from the React Testing Library that renders a React component into a virtual DOM for testing purposes.
// screen - This is an object from the React Testing Library that provides access to the rendered DOM
import { render, screen } from '@testing-library/react';
import Greetings from './Greetings';
// describe - This is a function from Vitest that groups related tests together.
// it - This is a function from Vitest that defines an individual test case.
// expect - This is a function from Vitest that is used to make assertions about the expected outcome of a test.
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';

describe('Greetings Component', () => {
  // Test case number 1: 
  it('renders the Greetings component correctly', () => {
    render(<Greetings />);
    expect(screen.getByText('Hello, World')).toBeInTheDocument();
  })

  // Test case number 2:
  it('renders the Greetings component with a name prop', () => {
    render(<Greetings name="Jem" />);
    expect(screen.getByText('Hello, Jem')).toBeInTheDocument();
  })
})
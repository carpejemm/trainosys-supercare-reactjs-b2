import React from 'react';
import { render, screen } from '@testing-library/react'
import Greetings from './Greetings';
import { describe, it, expect } from 'vitest';
import "@testing-library/jest-dom/vitest"

describe('Greetings Component', () => {
  // Test case number 1
  it('renders the Greetings component correctly', () =>{
    render(<Greetings />)
    expect(screen.getByText('Hello, World!')).toBeInTheDocument()
  })

  // Test case number 2
  it('renders the Greetings component when a name is passed as props', () => {
    render(<Greetings name='Mary' /> )
    expect(screen.getByText('Hello, Mary!')).toBeInTheDocument()
  })
})
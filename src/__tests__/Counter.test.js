import { fireEvent, render, screen } from '@testing-library/react';
import Counter from '../counter/Counter';

describe('Counter Button', () => {
  test('counter has correct initial value', () => {
    render(<Counter/>)
    const initialValue = screen.getByText(0)
    expect(initialValue).toBeInTheDocument()
  })

  test('counter value has correct value when doing increment', () => {
    render(<Counter/>)
    // const initialValue = screen.getByText(0)
    // const buttonIncrement = screen.getByRole('button', {name: "Tambah"})
    const buttonIncrement = screen.getByText("Tambah")
    fireEvent.click(buttonIncrement)
    expect(screen.getByText('1')).toBeInTheDocument()
    // expect(initialValue.textContent).toBe("1")
  })

  test('counter value has correct value when doing decrement', () => {
    render(<Counter initial={1}/>)
    // const initialValue = screen.getByText(0)
    const buttonDecrement = screen.getByRole('button', {name: "Kurang"})
    fireEvent.click(buttonDecrement)
    expect(screen.getByText('0')).toBeInTheDocument()
    // expect(initialValue.textContent).toBe("-1")
  })

  test('counter value show error message when doing decrement to -1', () => {
    render(<Counter/>)
    // const initialValue = screen.getByText(0)
    const buttonDecrement = screen.getByRole('button', {name: "Kurang"})
    fireEvent.click(buttonDecrement)
    expect(screen.getByText('Tidak boleh negatif')).toBeInTheDocument()
    // expect(initialValue.textContent).toBe("-1")
  })

  test('counter value show error message when doing increment more than 3', () => {
    render(<Counter initial={3}/>)
    const buttonIncrement = screen.getByText("Tambah")
    fireEvent.click(buttonIncrement)
    expect(screen.getByText('Tidak boleh lebih dari 3')).toBeInTheDocument()
  })
})

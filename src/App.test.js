import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// test('render learn react link with learn react words', () => {
//   render(<App />);
//   const linkElement = screen.getByRole('link', {name: 'Learn React'});
//   expect(linkElement).toBeInTheDocument();
// });

// test suites
describe('App Button', () => {
  test('button has correct initial color', () => {
    render(<App/>)
    const colorButton = screen.getByRole('button', {name: "Change to blue"})
    expect(colorButton).toHaveStyle({backgroundColor: 'red'})
  })

  test('button has correct color when doing event', () => {
    render(<App/>)
    const colorButton = screen.getByRole('button', {name: "Change to blue"})
    fireEvent.click(colorButton)
    expect(colorButton).toHaveStyle({backgroundColor: 'blue'})
    expect(colorButton.textContent).toBe('Change to red')
  
  })

})

import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('should render the Header component', () => {
    const { container } = render(<App />);
    expect(container.querySelector(`[class*="header"]`)).toBeInTheDocument();
  });

  it('should render the CardTabs component', () => {
    const { container } = render(<App />);
    expect(container.querySelector(`[class*="card-tabs"]`)).toBeInTheDocument();
  });
});

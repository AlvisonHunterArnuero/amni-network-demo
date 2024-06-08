import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

describe('App component', () => {
  it('rendered App Component', () => {
    render(<App />);

    expect(screen.getByText('Trulnsights')).toBeInTheDocument();
    expect(screen.getByText('Dashboard')).toBeVisible();

    // Check for the img element with the specific alt attribute value
    const imgElement = screen.getByRole('img');
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('alt', 'Amni Network Logo');

    // Check anchor linking the logo to Amni website
    const anchorElement = screen.getByTitle('logoAnchor');
    expect(anchorElement).toBeInTheDocument();
    expect(anchorElement).toHaveAttribute(
      'href',
      'https://amni.ai/amni-network/',
    );
  });
});

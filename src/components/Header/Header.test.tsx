import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '.';

describe('Testing Header component', () => {
  it('Header Component', () => {
    render(<Header />);

    expect(screen.getByText('Manufacturers')).toBeInTheDocument();
    expect(screen.getByText('Dashboard')).toBeVisible();

    // Check for the img element with the specific alt attribute value
    const imgElement = screen.getByRole('img');
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('class', 'h-auto');
    expect(imgElement).toHaveAttribute('alt', 'Amni Network Logo');

    // Check anchor linking the logo to Amni website
    const anchorElement = screen.getByTitle('logoAnchor');
    expect(anchorElement).toHaveAttribute('title', 'logoAnchor');
    expect(anchorElement).toHaveAttribute(
      'href',
      'https://amni.ai/amni-network/',
    );
  });
});

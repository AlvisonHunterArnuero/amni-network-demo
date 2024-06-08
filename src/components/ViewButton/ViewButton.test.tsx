import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { toast } from 'react-toastify';
import ViewButton from '../ViewButton/index';

vi.mock('react-toastify', () => ({
  toast: {
    info: vi.fn(),
  },
}));

describe('ViewButton component', () => {
  it('renders with default props', () => {
    render(<ViewButton btnCaption="View" />);

    const buttonElement = screen.getByRole('button', { name: /view/i });
    expect(buttonElement).toBeInTheDocument();
  });

  it('renders with provided props', () => {
    render(
      <ViewButton btnCaption="Check" btnSize="large" btnVariant="contained" />,
    );

    const buttonElement = screen.getByRole('button', { name: /check/i });
    expect(buttonElement).toHaveClass('MuiButton-contained');
  });

  it('calls toast.info on click', () => {
    render(<ViewButton btnCaption="View" />);

    const buttonElement = screen.getByRole('button', { name: /view/i });
    fireEvent.click(buttonElement);

    expect(toast.info).toHaveBeenCalledWith('Feature not yet implemented');
  });
});

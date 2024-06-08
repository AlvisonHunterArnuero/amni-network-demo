import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Wrapper from './index';

// Mock the child components for Wrapper
vi.mock('../Header', () => ({
  default: () => <div>Manufacturers</div>,
}));

vi.mock('../TableCaption', () => ({
  default: () => <div>My Products</div>,
}));

vi.mock('../DashboardDataGrid', () => ({
  default: () => <div>Last Order Date</div>,
}));

describe('Testing Wrapper component', () => {
  it('renders Header, TableCaption, & DashboardDataGrid components', () => {
    render(<Wrapper />);

    expect(screen.getByText('Manufacturers')).toBeInTheDocument();
    expect(screen.getByText('My Products')).toBeInTheDocument();
    expect(screen.getByText('Last Order Date')).toBeInTheDocument();
  });
});

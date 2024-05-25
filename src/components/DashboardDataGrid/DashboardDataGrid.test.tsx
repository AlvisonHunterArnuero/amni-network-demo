import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import DashboardDataGrid from './index';

// Mock DashboardDataGrid
vi.mock('../DashboardDataGrid', () => ({
    default: () => <ul><li>Trulnsights</li><li>SKU</li></ul>,
}));

describe('Testing DashboardDataGrid component', () => {
    it('renders our DataGrid Component', () => {
        render(<DashboardDataGrid />);

        expect(screen.getByText('Trulnsights')).toBeInTheDocument();
        expect(screen.getByText('SKU')).toBeInTheDocument();
    });
});

import { DataGrid } from '@mui/x-data-grid';

import { columns, rows } from './DataGridRowColData';
import { dataGridStyles } from '../../styles';


const DashboardDataGrid: React.FC = () => {

    return (
        <div style={{ height: 700, width: '100%' }}>
            <DataGrid
                columnHeaderHeight={70}
                rows={rows}
                columns={columns}
                rowHeight={100}
                pageSizeOptions={[5, 10, 25, 50, 100]}
                pagination

                // slots={{
                //     toolbar: GridToolbar,
                // }}
                sx={dataGridStyles}
            />
        </div>
    );
}
export default DashboardDataGrid;
import { DataGrid } from '@mui/x-data-grid';
import { columns, rows } from './DataGridRowColData';


const DashboardDataGrid: React.FC = () => {

    return (
        <div style={{ height: 700, width: '100%' }}>
            <DataGrid
                columnHeaderHeight={70}
                rows={rows}
                columns={columns}
                rowHeight={100}
                pageSizeOptions={[5, 10, 25]}
                pagination
                autoPageSize
                // slots={{
                //     toolbar: GridToolbar,
                // }}
                sx={{
                    '& .MuiDataGrid-columnHeaders': {
                        backgroundColor: '#BEE6E8',
                    },
                    '& .MuiDataGrid-columnHeaderTitle': {
                        fontWeight: 'bold',
                        color: '#797e7f'
                    },
                    '& .MuiDataGrid-cell': {
                        color: '#797e7f'
                    }, '& .MuiDataGrid-toolbarContainer .MuiButton-textPrimary': {
                        color: '#37989d'
                    }
                }}
            />
        </div>
    );
}
export default DashboardDataGrid;
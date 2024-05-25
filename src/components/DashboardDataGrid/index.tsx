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
                pageSizeOptions={[5, 10, 25, 50, 100]}
                pagination

                // slots={{
                //     toolbar: GridToolbar,
                // }}
                sx={{
                    borderTopLeftRadius: '12px',
                    borderTopRightRadius: '12px',
                    '& .MuiDataGrid-columnHeaders': {
                        backgroundColor: '#BEE6E8',
                        borderTopLeftRadius: '12px',
                        borderTopRightRadius: '12px'
                    },
                    '& .MuiDataGrid-columnHeaderTitle, & .MuiDataGrid-columnHeader': {
                        fontWeight: 'bold',
                        color: '#797e7f',
                        textAlign: 'center',
                        justifyContent: 'center',
                    },
                    '& .MuiDataGrid-cell': {
                        color: '#797e7f'
                    }, '& .MuiDataGrid-toolbarContainer .MuiButton-textPrimary': {
                        color: '#37989d'
                    }, '& .MuiDataGrid-columnHeader, & .MuiDataGrid-cell': {
                        justifyContent: 'center',
                        textAlign: 'center',
                    },
                }}
            />
        </div>
    );
}
export default DashboardDataGrid;
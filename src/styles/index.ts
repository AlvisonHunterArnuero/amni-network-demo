import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
    dataGrid: {
        '& .MuiDataGrid-columnHeader, & .MuiDataGrid-cell': {
            justifyContent: 'center',
            textAlign: 'center',
        },
    },
}));
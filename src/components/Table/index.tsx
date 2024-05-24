import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import { visuallyHidden } from '@mui/utils';
import sampleBottle from '../../assets/bottle.png'
import { Data } from '../../CustomTypes';
import { headCells, rows } from './tableData';
import ToggleSwitch from '../ToggleSwitch';
import Button from '@mui/material/Button';
import ViewButton from '../ViewButton';
import DropDown from '../DropDown';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Collapse from '@mui/material/Collapse';
import { toast } from 'react-toastify';



function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

type Order = 'asc' | 'desc';

function getComparator<Key extends keyof any>(
    order: Order,
    orderBy: Key,
): (
    a: { [key in Key]: number | string },
    b: { [key in Key]: number | string },
) => number {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort<T>(array: readonly T[], comparator: (a: T, b: T) => number) {
    const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

interface EnhancedTableProps {
    numSelected: number;
    onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void;
    onSelectAllClick?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    order: Order;
    orderBy: string;
    rowCount: number;
}


const StyledTableCell = styled(TableCell)(() => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#cbebec',
        color: '#143751',
        fontWeight: 'bold',
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
    '&:first-of-type': {
        borderTopLeftRadius: '16px',
        overflow: 'hidden',
    },
    '&:last-of-type': {
        borderTopRightRadius: '16px',
        overflow: 'hidden',
    },
}));

function EnhancedTableHead(props: EnhancedTableProps) {
    const { order, orderBy, onRequestSort } =
        props;
    const createSortHandler =
        (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
            onRequestSort(event, property);
        };

    return (
        <TableHead>
            <TableRow>
                <StyledTableCell padding="checkbox">
                    {" "}
                </StyledTableCell>
                {headCells.map((headCell) => (
                    <StyledTableCell
                        key={headCell.id}
                        align="center"
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </StyledTableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

export default function EnhancedTable() {
    const [order, setOrder] = React.useState<Order>('asc');
    const [orderBy, setOrderBy] = React.useState<keyof Data>('name');
    const [selected, setSelected] = React.useState<number>();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [open, setOpen] = React.useState(false);

    const handleRequestSort = (
        _event: React.MouseEvent<unknown>,
        property: keyof Data,
    ) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleClick = (_event: React.MouseEvent<unknown>, id: number) => {
        setSelected(id);
        setOpen(!open);
    };

    const handleChangePage = (_event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };



    const isSelected = (id: number) => id !== -1;

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const visibleRows = React.useMemo(
        () =>
            stableSort(rows, getComparator(order, orderBy)).slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage,
            ),
        [order, orderBy, page, rowsPerPage],
    );

    return (
        <Box sx={{ width: '100%' }}>
            <Paper sx={{ width: '100%', mb: 2, overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 700 }}>
                    <Table stickyHeader
                        sx={{ minWidth: 900 }}
                        aria-labelledby="tableTitle"
                        size='medium'
                    >
                        <EnhancedTableHead
                            numSelected={selected as number}
                            order={order}
                            orderBy={orderBy}
                            onRequestSort={handleRequestSort}
                            rowCount={rows.length}
                        />
                        <TableBody>
                            {visibleRows.map((row, index) => {
                                const isItemSelected = isSelected(row.sku as unknown as number);
                                const labelId = `enhanced-table-checkbox-${index}`;

                                return (<>
                                    <TableRow
                                        hover
                                        onClick={(event) =>
                                            handleClick(
                                                event,
                                                row.sku as unknown as number,
                                            )
                                        }
                                        role="checkbox"
                                        aria-checked={isItemSelected}
                                        tabIndex={-1}
                                        key={row.sku}
                                        selected={isItemSelected}
                                        sx={{
                                            cursor: 'pointer',
                                            '&.MuiTableRow-root.Mui-selected': {
                                                backgroundColor: 'white'
                                            }
                                        }
                                        }
                                    >
                                        <TableCell
                                            sx={{ marginLeft: '12px' }}
                                            padding="checkbox"
                                        >
                                            <IconButton
                                                aria-label="expand row"
                                                size="small"
                                                onClick={() => setOpen(!open)}
                                            >
                                                {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                            </IconButton>
                                        </TableCell>
                                        <TableCell
                                            component="th"
                                            id={labelId}
                                            scope="row"
                                            padding="none"
                                            align="center"
                                        >
                                            {row.sku}
                                        </TableCell>
                                        <TableCell align="center">
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="center">
                                            {row.type}
                                        </TableCell>
                                        <TableCell align="center">
                                            <img
                                                className="mx-auto"
                                                src={sampleBottle}
                                            />
                                        </TableCell>
                                        <TableCell align="left">
                                            <div className="flex flex-col items-center justify-center gap-y-0">
                                                <ToggleSwitch
                                                    isDisabled={true}
                                                    isChecked={
                                                        row.truln as unknown as boolean
                                                    }
                                                />
                                                <ViewButton
                                                    className="!text-[#797e7f] !border-[#797e7f] w-20 rounded-lg text-sm"
                                                    btnCaption="View"
                                                />
                                            </div>
                                        </TableCell>
                                        <TableCell align="center">
                                            {row.orderDate}
                                        </TableCell>
                                        <TableCell align="center">
                                            <div className="flex flex-row items-center justify-center gap-2">
                                                <Button
                                                    onClick={(event: React.MouseEvent<unknown>) => {
                                                        event.stopPropagation();
                                                        toast.info("Feature not yet implemented");
                                                    }}
                                                    sx={{ textTransform: 'none' }}
                                                    variant="outlined"
                                                    size="small"
                                                    className='!bg-[#BEE6E8] !text-[#797e7f] !border-[#797e7f] '
                                                >
                                                    Order Now
                                                </Button>
                                                <DropDown />
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell
                                            style={{ paddingBottom: 0, paddingTop: 0 }}
                                            colSpan={8}>
                                            {selected === row.sku && <Collapse in={open} timeout="auto" unmountOnExit>
                                                <Box sx={{ margin: 1 }}>

                                                    <Typography variant="h6" gutterBottom component="div">
                                                        {row.name}
                                                    </Typography>
                                                    <p className='text-gray-500 max-w-full'>This section is dedicated to displaying item descriptions and other relevant details for an ongoing project. It serves as a placeholder to showcase the intended content and layout, but the project is still in progress and may undergo further development and refinement.</p>
                                                </Box>

                                            </Collapse>}
                                        </TableCell>

                                    </TableRow></>
                                );
                            })}
                            {emptyRows > 0 && (
                                <TableRow
                                    style={{
                                        height: 33 * emptyRows,
                                    }}
                                >
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </Box>
    );
}
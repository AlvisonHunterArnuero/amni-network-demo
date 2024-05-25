import Button from '@mui/material/Button';
import { GridColDef, GridRowsProp } from '@mui/x-data-grid';
import { toast } from 'react-toastify';
import DropDown from '../DropDown';
import ToggleSwitch from '../ToggleSwitch';
import ViewButton from '../ViewButton';
import sampleBottle from '../../assets/bottle.png'

export const rows: GridRowsProp = [
    { id: 14, name: 'Melatomin Mix', type: 'Gummy', img: 'bottle.png', truln: true, lastOrderDate: '11/03/23', actions: 'Order Now' },
    { id: 22, name: 'Multivitamin Blend', type: 'Capsule', img: 'bottle.png', truln: false, lastOrderDate: '10/16/23', actions: 'Order Now' },
    { id: 23, name: 'Daily Protein Shake', type: 'Powder', img: 'bottle.png', truln: true, lastOrderDate: '12/06/23', actions: 'Order Now' },
    { id: 24, name: 'Gut Health Probiotic', type: 'Gummy', img: 'bottle.png', truln: true, lastOrderDate: '01/12/24', actions: 'Order Now' },
    { id: 25, name: 'Gingerbread Mix', type: 'Powder', img: 'bottle.png', truln: false, lastOrderDate: '11/03/23', actions: 'Order Now' },
    { id: 26, name: 'Honeycomb Vitamin', type: 'Gummy', img: 'bottle.png', truln: true, lastOrderDate: '10/16/23', actions: 'Order Now' },
    { id: 27, name: 'Vitamin E', type: 'Capsule', img: 'bottle.png', truln: true, lastOrderDate: '12/06/23', actions: 'Order Now' },
    { id: 28, name: 'Jelly Bean', type: 'Gummy', img: 'bottle.png', truln: false, lastOrderDate: '01/12/24', actions: 'Order Now' },
    { id: 29, name: 'Milk Thistle', type: 'Capsule', img: 'bottle.png', truln: false, lastOrderDate: '11/03/23', actions: 'Order Now' },
    { id: 10, name: 'Ashwagandha', type: 'Capsule', img: 'bottle.png', truln: true, lastOrderDate: '10/16/23', actions: 'Order Now' },
    { id: 11, name: 'Vitamin D3', type: 'Capsule', img: 'bottle.png', truln: true, lastOrderDate: '12/06/23', actions: 'Order Now' },
    { id: 12, name: 'Melatomin Puritans', type: 'Gummy', img: 'bottle.png', truln: true, lastOrderDate: '01/12/24', actions: 'Order Now' },
    { id: 13, name: 'Melatamin B', type: 'Capsule', img: 'bottle.png', truln: true, lastOrderDate: '11/03/23', actions: 'Order Now' },
];

export const columns: GridColDef[] = [
    { field: 'id', headerName: 'SKU', width: 150 },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'type', headerName: 'Type', width: 150 },
    {
        field: 'img', headerName: 'Image', width: 150,
        renderCell: (params) => (<img
            className="mx-auto"
            src={sampleBottle}
            alt={params.value}
        />),
    },
    {
        field: 'truln', headerName: 'TruInsights', width: 150,
        renderCell: (params) => (
            <div className="flex flex-col items-center justify-center gap-y-0">
                <ToggleSwitch
                    isDisabled={true}
                    isChecked={params.value}
                />
                <ViewButton
                    className="!text-[#797e7f] !border-[#797e7f] w-20 rounded-lg text-sm"
                    btnCaption="View"
                />
            </div>
        ),



    },
    { field: 'lastOrderDate', headerName: 'Last Order Date', width: 150 },

    {
        field: 'actions',
        headerName: 'Actions',
        width: 200,
        renderCell: (params) => (
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
                   {params.value}
                </Button>
                <DropDown />
            </div>
        ),
    },
    { field: 'lastOrderSize', headerName: 'Last Order Size', width: 150 },
    { field: 'description', headerName: 'Description', width: 150 },
    { field: 'productsCategories', headerName: 'Product Categories', width: 150 },
    { field: 'dietaryInfo', headerName: 'Allergen & Dietary Info', width: 150 },
    { field: 'servingSize', headerName: 'Serving Size', width: 150 },
    { field: 'amountPerPackage', headerName: 'Amount per package', width: 150 },
    { field: 'reOrderFreq', headerName: 'Reorder Frequency', width: 150 },
];



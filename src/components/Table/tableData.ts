import { Data, HeadCell } from "../../CustomTypes";

export const rows = [
    createData(14, 'Melatomin Mix', 'Gummy', 'bottle.png', true, '11/03/23','Order Now'),
    createData(22, 'Multivitamin Blend', 'Capsule', 'bottle.png', false, '10/16/23','Order Now'),
    createData(23, 'Daily Protein Shake', 'Powder', 'bottle.png', true, '12/06/23','Order Now'),
    createData(24, 'Gut Health Probiotic', 'Gummy', 'bottle.png', true, '01/12/24','Order Now'),
    createData(25, 'Gingerbread Mix', 'Powder', 'bottle.png', false, '11/03/23','Order Now'),
    createData(26, 'Honeycomb Vitamin', 'Gummy', 'bottle.png', true, '10/16/23','Order Now'),
    createData(27, 'Vitamin E', 'Capsule', 'bottle.png', true, '12/06/23','Order Now'),
    createData(28, 'Jelly Bean', 'Gummy', 'bottle.png', false, '01/12/24','Order Now'),
    createData(29, 'Milk Thistle', 'Capsule', 'bottle.png', false, '11/03/23','Order Now'),
    createData(10, 'Ashwagandha', 'Capsule', 'bottle.png', true, '10/16/23','Order Now'),
    createData(11, 'Vitamin D3', 'Capsule', 'bottle.png', true, '12/06/23','Order Now'),
    createData(12, 'Melatomin Puritans', 'Gummy', 'bottle.png', true, '01/12/24','Order Now'),
    createData(13, 'Melatamin B', 'Capsule', 'bottle.png', true, '11/03/23','Order Now'),
];

export const headCells: readonly HeadCell[] = [
    {
        id: 'sku',
        numeric: true,
        disablePadding: false,
        label: 'SKU',
    },
    {
        id: 'name',
        numeric: false,
        disablePadding: false,
        label: 'Name',
    },
    {
        id: 'type',
        numeric: false,
        disablePadding: false,
        label: 'Type',
    },
    {
        id: 'image',
        numeric: false,
        disablePadding: false,
        label: 'Image',
    },
    {
        id: 'truln',
        numeric: false,
        disablePadding: false,
        label: 'Trulnsights',
    },
    {
        id: 'orderDate',
        numeric: false,
        disablePadding: false,
        label: 'Last Order Date',
    },
    {
        id: 'actions',
        numeric: false,
        disablePadding: false,
        label: 'Actions',
    },
];


function createData(
    sku: number,
    name: string,
    type: string,
    image: string,
    truln: boolean,
    orderDate: string,
    actions,
): Data {
    return {
        sku,
        name,
        type,
        image,
        truln,
        orderDate,
        actions
    };
}

import Button from '@mui/material/Button';
import { GridColDef, GridRowsProp } from '@mui/x-data-grid';
import { toast } from 'react-toastify';
import DropDown from '../DropDown';
import ToggleSwitch from '../ToggleSwitch';
import ViewButton from '../ViewButton';
import sampleBottle from '../../assets/bottle.png';

export const rows: GridRowsProp = [
    {
        id: 14,
        name: 'Melatomin Mix',
        type: 'Gummy',
        img: 'bottle.png',
        truln: true,
        lastOrderDate: '11/03/23',
        actions: 'Order Now',
        lastOrderSize: 42,
        description: 'Promotes relaxation and sleep',
        productsCategories: 'Supplements',
        dietaryInfo: 'Non-GMO',
        servingSize: '1 scoop',
        amountPerPackage: 116,
        reOrderFrequency: 'Bi-Monthly',
    },
    {
        id: 22,
        name: 'Multivitamin Blend',
        type: 'Capsule',
        img: 'bottle.png',
        truln: false,
        lastOrderDate: '10/16/23',
        actions: 'Order Now',
        lastOrderSize: 16,
        description: 'Improves gut health',
        productsCategories: 'Minerals',
        dietaryInfo: 'Non-GMO',
        servingSize: '2 capsules',
        amountPerPackage: 168,
        reOrderFrequency: 'Bi-Monthly',
    },
    {
        id: 23,
        name: 'Daily Protein Shake',
        type: 'Powder',
        img: 'bottle.png',
        truln: true,
        lastOrderDate: '12/06/23',
        actions: 'Order Now',
        lastOrderSize: 66,
        description: 'Increases energy levels',
        productsCategories: 'Supplements',
        dietaryInfo: 'Vegan',
        servingSize: '5 ml',
        amountPerPackage: 178,
        reOrderFrequency: 'Bi-Monthly',
    },
    {
        id: 24,
        name: 'Gut Health Probiotic',
        type: 'Gummy',
        img: 'bottle.png',
        truln: true,
        lastOrderDate: '01/12/24',
        actions: 'Order Now',
        lastOrderSize: 48,
        description: 'Increases energy levels',
        productsCategories: 'Supplements',
        dietaryInfo: 'Gluten-Free',
        servingSize: '1 tablet',
        amountPerPackage: 11,
        reOrderFrequency: 'Annually',
    },
    {
        id: 25,
        name: 'Gingerbread Mix',
        type: 'Powder',
        img: 'bottle.png',
        truln: false,
        lastOrderDate: '11/03/23',
        actions: 'Order Now',
        lastOrderSize: 46,
        description: 'Enhances cognitive function',
        productsCategories: 'Proteins',
        dietaryInfo: 'Non-GMO',
        servingSize: '5 ml',
        amountPerPackage: 105,
        reOrderFrequency: 'Annually',
    },
    {
        id: 26,
        name: 'Honeycomb Vitamin',
        type: 'Gummy',
        img: 'bottle.png',
        truln: true,
        lastOrderDate: '10/16/23',
        actions: 'Order Now',
        lastOrderSize: 45,
        description: 'Enhances cognitive function',
        productsCategories: 'Proteins',
        dietaryInfo: 'Non-GMO',
        servingSize: '1 scoop',
        amountPerPackage: 110,
        reOrderFrequency: 'Annually',
    },
    {
        id: 27,
        name: 'Vitamin E',
        type: 'Capsule',
        img: 'bottle.png',
        truln: true,
        lastOrderDate: '12/06/23',
        actions: 'Order Now',
        lastOrderSize: 8,
        description: 'Promotes relaxation and sleep',
        productsCategories: 'Minerals',
        dietaryInfo: 'Vegan',
        servingSize: '1 scoop',
        amountPerPackage: 87,
        reOrderFrequency: 'Quarterly',
    },
    {
        id: 28,
        name: 'Jelly Bean',
        type: 'Gummy',
        img: 'bottle.png',
        truln: false,
        lastOrderDate: '01/12/24',
        actions: 'Order Now',
        lastOrderSize: 46,
        description: 'Increases energy levels',
        productsCategories: 'Probiotics',
        dietaryInfo: 'Organic',
        servingSize: '1 scoop',
        amountPerPackage: 198,
        reOrderFrequency: 'Annually',
    },
    {
        id: 29,
        name: 'Milk Thistle',
        type: 'Capsule',
        img: 'bottle.png',
        truln: false,
        lastOrderDate: '11/03/23',
        actions: 'Order Now',
        lastOrderSize: 62,
        description: 'Improves gut health',
        productsCategories: 'Minerals',
        dietaryInfo: 'Gluten-Free',
        servingSize: '2 capsules',
        amountPerPackage: 104,
        reOrderFrequency: 'Annually',
    },
    {
        id: 10,
        name: 'Ashwagandha',
        type: 'Capsule',
        img: 'bottle.png',
        truln: true,
        lastOrderDate: '10/16/23',
        actions: 'Order Now',
        lastOrderSize: 43,
        description: 'Boosts immune system',
        productsCategories: 'Vitamins',
        dietaryInfo: 'Dairy-Free',
        servingSize: '1 scoop',
        amountPerPackage: 105,
        reOrderFrequency: 'Monthly',
    },
    {
        id: 11,
        name: 'Vitamin D3',
        type: 'Capsule',
        img: 'bottle.png',
        truln: true,
        lastOrderDate: '12/06/23',
        actions: 'Order Now',
        lastOrderSize: 48,
        description: 'Enhances cognitive function',
        productsCategories: 'Supplements',
        dietaryInfo: 'Non-GMO',
        servingSize: '5 ml',
        amountPerPackage: 41,
        reOrderFrequency: 'Monthly',
    },
    {
        id: 12,
        name: 'Melatomin Puritans',
        type: 'Gummy',
        img: 'bottle.png',
        truln: true,
        lastOrderDate: '01/12/24',
        actions: 'Order Now',
        lastOrderSize: 45,
        description: 'Boosts immune system',
        productsCategories: 'Vitamins',
        dietaryInfo: 'Non-GMO',
        servingSize: '1 gummy',
        amountPerPackage: 122,
        reOrderFrequency: 'Quarterly',
    },
    {
        id: 13,
        name: 'Melatamin B',
        type: 'Capsule',
        img: 'bottle.png',
        truln: true,
        lastOrderDate: '11/03/23',
        actions: 'Order Now',
        lastOrderSize: 6,
        description: 'Promotes relaxation and sleep',
        productsCategories: 'Supplements',
        dietaryInfo: 'Non-GMO',
        servingSize: '5 ml',
        amountPerPackage: 126,
        reOrderFrequency: 'Bi-Monthly',
    },
    {
        id: 14,
        name: 'Product 14',
        type: 'Tablet',
        img: 'bottle.png',
        truln: false,
        lastOrderDate: '5/5/24',
        actions: 'Order Now',
        lastOrderSize: 31,
        description: 'Improves gut health',
        productsCategories: 'Supplements',
        dietaryInfo: 'Gluten-Free',
        servingSize: '2 capsules',
        amountPerPackage: 84,
        reOrderFrequency: 'Bi-Monthly',
    },
    {
        id: 15,
        name: 'Product 15',
        type: 'Powder',
        img: 'bottle.png',
        truln: true,
        lastOrderDate: '2/13/24',
        actions: 'Order Now',
        lastOrderSize: 55,
        description: 'Increases energy levels',
        productsCategories: 'Vitamins',
        dietaryInfo: 'Vegan',
        servingSize: '2 capsules',
        amountPerPackage: 165,
        reOrderFrequency: 'Annually',
    },
    {
        id: 16,
        name: 'Product 16',
        type: 'Capsule',
        img: 'bottle.png',
        truln: true,
        lastOrderDate: '9/11/24',
        actions: 'Order Now',
        lastOrderSize: 27,
        description: 'Enhances cognitive function',
        productsCategories: 'Minerals',
        dietaryInfo: 'Vegan',
        servingSize: '1 scoop',
        amountPerPackage: 3,
        reOrderFrequency: 'Annually',
    },
    {
        id: 17,
        name: 'Product 17',
        type: 'Capsule',
        img: 'bottle.png',
        truln: true,
        lastOrderDate: '5/4/24',
        actions: 'Order Now',
        lastOrderSize: 16,
        description: 'Promotes relaxation and sleep',
        productsCategories: 'Vitamins',
        dietaryInfo: 'Vegan',
        servingSize: '1 gummy',
        amountPerPackage: 140,
        reOrderFrequency: 'Annually',
    },
    {
        id: 18,
        name: 'Product 18',
        type: 'Capsule',
        img: 'bottle.png',
        truln: true,
        lastOrderDate: '9/23/24',
        actions: 'Order Now',
        lastOrderSize: 6,
        description: 'Boosts immune system',
        productsCategories: 'Proteins',
        dietaryInfo: 'Gluten-Free',
        servingSize: '1 scoop',
        amountPerPackage: 140,
        reOrderFrequency: 'Monthly',
    },
    {
        id: 19,
        name: 'Product 19',
        type: 'Capsule',
        img: 'bottle.png',
        truln: true,
        lastOrderDate: '10/4/24',
        actions: 'Order Now',
        lastOrderSize: 93,
        description: 'Boosts immune system',
        productsCategories: 'Supplements',
        dietaryInfo: 'Organic',
        servingSize: '1 tablet',
        amountPerPackage: 26,
        reOrderFrequency: 'Quarterly',
    },
    {
        id: 20,
        name: 'Product 20',
        type: 'Tablet',
        img: 'bottle.png',
        truln: false,
        lastOrderDate: '8/10/24',
        actions: 'Order Now',
        lastOrderSize: 82,
        description: 'Increases energy levels',
        productsCategories: 'Supplements',
        dietaryInfo: 'Non-GMO',
        servingSize: '2 capsules',
        amountPerPackage: 36,
        reOrderFrequency: 'Bi-Monthly',
    },
    {
        id: 21,
        name: 'Product 21',
        type: 'Capsule',
        img: 'bottle.png',
        truln: false,
        lastOrderDate: '9/8/24',
        actions: 'Order Now',
        lastOrderSize: 48,
        description: 'Increases energy levels',
        productsCategories: 'Vitamins',
        dietaryInfo: 'Non-GMO',
        servingSize: '1 scoop',
        amountPerPackage: 54,
        reOrderFrequency: 'Annually',
    },
    {
        id: 22,
        name: 'Product 22',
        type: 'Powder',
        img: 'bottle.png',
        truln: true,
        lastOrderDate: '6/27/24',
        actions: 'Order Now',
        lastOrderSize: 93,
        description: 'Enhances cognitive function',
        productsCategories: 'Vitamins',
        dietaryInfo: 'Gluten-Free',
        servingSize: '1 scoop',
        amountPerPackage: 88,
        reOrderFrequency: 'Quarterly',
    },
    {
        id: 23,
        name: 'Product 23',
        type: 'Powder',
        img: 'bottle.png',
        truln: false,
        lastOrderDate: '1/16/24',
        actions: 'Order Now',
        lastOrderSize: 63,
        description: 'Increases energy levels',
        productsCategories: 'Vitamins',
        dietaryInfo: 'Vegan',
        servingSize: '1 scoop',
        amountPerPackage: 15,
        reOrderFrequency: 'Bi-Monthly',
    },
    {
        id: 24,
        name: 'Product 24',
        type: 'Powder',
        img: 'bottle.png',
        truln: true,
        lastOrderDate: '11/3/24',
        actions: 'Order Now',
        lastOrderSize: 48,
        description: 'Improves gut health',
        productsCategories: 'Vitamins',
        dietaryInfo: 'Non-GMO',
        servingSize: '1 gummy',
        amountPerPackage: 169,
        reOrderFrequency: 'Quarterly',
    },
    {
        id: 25,
        name: 'Product 25',
        type: 'Powder',
        img: 'bottle.png',
        truln: true,
        lastOrderDate: '7/8/24',
        actions: 'Order Now',
        lastOrderSize: 70,
        description: 'Improves gut health',
        productsCategories: 'Vitamins',
        dietaryInfo: 'Non-GMO',
        servingSize: '1 tablet',
        amountPerPackage: 14,
        reOrderFrequency: 'Monthly',
    },
    {
        id: 26,
        name: 'Product 26',
        type: 'Tablet',
        img: 'bottle.png',
        truln: false,
        lastOrderDate: '10/20/24',
        actions: 'Order Now',
        lastOrderSize: 28,
        description: 'Enhances cognitive function',
        productsCategories: 'Vitamins',
        dietaryInfo: 'Gluten-Free',
        servingSize: '2 capsules',
        amountPerPackage: 133,
        reOrderFrequency: 'Quarterly',
    },
    {
        id: 27,
        name: 'Product 27',
        type: 'Gummy',
        img: 'bottle.png',
        truln: false,
        lastOrderDate: '4/2/24',
        actions: 'Order Now',
        lastOrderSize: 48,
        description: 'Improves gut health',
        productsCategories: 'Minerals',
        dietaryInfo: 'Organic',
        servingSize: '2 capsules',
        amountPerPackage: 171,
        reOrderFrequency: 'Quarterly',
    },
    {
        id: 28,
        name: 'Product 28',
        type: 'Powder',
        img: 'bottle.png',
        truln: true,
        lastOrderDate: '7/16/24',
        actions: 'Order Now',
        lastOrderSize: 69,
        description: 'Promotes relaxation and sleep',
        productsCategories: 'Vitamins',
        dietaryInfo: 'Organic',
        servingSize: '1 tablet',
        amountPerPackage: 139,
        reOrderFrequency: 'Quarterly',
    },
    {
        id: 29,
        name: 'Product 29',
        type: 'Tablet',
        img: 'bottle.png',
        truln: true,
        lastOrderDate: '5/16/24',
        actions: 'Order Now',
        lastOrderSize: 33,
        description: 'Promotes relaxation and sleep',
        productsCategories: 'Vitamins',
        dietaryInfo: 'Non-GMO',
        servingSize: '1 tablet',
        amountPerPackage: 168,
        reOrderFrequency: 'Annually',
    },
    {
        id: 30,
        name: 'Product 30',
        type: 'Powder',
        img: 'bottle.png',
        truln: false,
        lastOrderDate: '10/14/24',
        actions: 'Order Now',
        lastOrderSize: 36,
        description: 'Enhances cognitive function',
        productsCategories: 'Supplements',
        dietaryInfo: 'Vegan',
        servingSize: '1 gummy',
        amountPerPackage: 195,
        reOrderFrequency: 'Bi-Monthly',
    },
    {
        id: 31,
        name: 'Product 31',
        type: 'Gummy',
        img: 'bottle.png',
        truln: true,
        lastOrderDate: '12/10/24',
        actions: 'Order Now',
        lastOrderSize: 22,
        description: 'Boosts immune system',
        productsCategories: 'Proteins',
        dietaryInfo: 'Organic',
        servingSize: '5 ml',
        amountPerPackage: 71,
        reOrderFrequency: 'Annually',
    },
    {
        id: 32,
        name: 'Product 32',
        type: 'Powder',
        img: 'bottle.png',
        truln: false,
        lastOrderDate: '11/28/24',
        actions: 'Order Now',
        lastOrderSize: 21,
        description: 'Improves gut health',
        productsCategories: 'Proteins',
        dietaryInfo: 'Vegan',
        servingSize: '5 ml',
        amountPerPackage: 106,
        reOrderFrequency: 'Monthly',
    },
    {
        id: 33,
        name: 'Product 33',
        type: 'Powder',
        img: 'bottle.png',
        truln: true,
        lastOrderDate: '7/24/24',
        actions: 'Order Now',
        lastOrderSize: 91,
        description: 'Increases energy levels',
        productsCategories: 'Minerals',
        dietaryInfo: 'Vegan',
        servingSize: '1 gummy',
        amountPerPackage: 110,
        reOrderFrequency: 'Monthly',
    },
    {
        id: 34,
        name: 'Product 34',
        type: 'Gummy',
        img: 'bottle.png',
        truln: true,
        lastOrderDate: '2/5/24',
        actions: 'Order Now',
        lastOrderSize: 52,
        description: 'Promotes relaxation and sleep',
        productsCategories: 'Vitamins',
        dietaryInfo: 'Vegan',
        servingSize: '2 capsules',
        amountPerPackage: 106,
        reOrderFrequency: 'Quarterly',
    },
    {
        id: 35,
        name: 'Product 35',
        type: 'Gummy',
        img: 'bottle.png',
        truln: true,
        lastOrderDate: '12/6/24',
        actions: 'Order Now',
        lastOrderSize: 61,
        description: 'Improves gut health',
        productsCategories: 'Probiotics',
        dietaryInfo: 'Gluten-Free',
        servingSize: '1 tablet',
        amountPerPackage: 98,
        reOrderFrequency: 'Quarterly',
    },
    {
        id: 36,
        name: 'Product 36',
        type: 'Powder',
        img: 'bottle.png',
        truln: false,
        lastOrderDate: '6/25/24',
        actions: 'Order Now',
        lastOrderSize: 19,
        description: 'Increases energy levels',
        productsCategories: 'Minerals',
        dietaryInfo: 'Gluten-Free',
        servingSize: '1 scoop',
        amountPerPackage: 198,
        reOrderFrequency: 'Monthly',
    },
    {
        id: 37,
        name: 'Product 37',
        type: 'Gummy',
        img: 'bottle.png',
        truln: true,
        lastOrderDate: '5/28/24',
        actions: 'Order Now',
        lastOrderSize: 43,
        description: 'Improves gut health',
        productsCategories: 'Minerals',
        dietaryInfo: 'Vegan',
        servingSize: '1 gummy',
        amountPerPackage: 15,
        reOrderFrequency: 'Monthly',
    },
];

export const columns: GridColDef[] = [
    {
        field: 'id',
        headerName: 'SKU',
        headerAlign: 'center',
        width: 150
    },
    {
        field: 'name',
        headerName: 'Name',
        headerAlign: 'center',
        width: 150
    },
    {
        field: 'type',
        headerName: 'Type',
        headerAlign: 'center',
        width: 150
    },
    {
        field: 'img',
        headerName: 'Image',
        headerAlign: 'center',
        width: 150,
        renderCell: (params) => (
            <img className="mx-auto" src={sampleBottle} alt={params.value} />
        ),
    },
    {
        field: 'truln',
        headerName: 'TruInsights',
        headerAlign: 'center',
        width: 150,
        renderCell: (params) => (
            <div className="flex flex-col items-center justify-center gap-y-0">
                <ToggleSwitch isDisabled={true} isChecked={params.value} />
                <ViewButton
                    className="!text-[#797e7f] !border-[#797e7f] w-20 rounded-lg text-sm"
                    btnCaption="View"
                />
            </div>
        ),
    },
    {
        field: 'lastOrderDate',
        headerName: 'Last Order Date',
        headerAlign: 'center',
        width: 150,
    },

    {
        field: 'actions',
        headerName: 'Actions',
        headerAlign: 'center',
        width: 200,
        renderCell: (params) => (
            <div className="flex flex-row items-center justify-center gap-2">
                <Button
                    onClick={(event: React.MouseEvent<unknown>) => {
                        event.stopPropagation();
                        toast.info('Feature not yet implemented');
                    }}
                    sx={{ textTransform: 'none' }}
                    variant="outlined"
                    size="small"
                    className="!bg-[#BEE6E8] !text-[#797e7f] !border-[#797e7f] "
                >
                    {params.value}
                </Button>
                <DropDown />
            </div>
        ),
    },
    {
        field: 'lastOrderSize',
        headerName: 'Last Order Size',
        headerAlign: 'center',
        width: 150
    },
    {
        field: 'description',
        headerName: 'Description',
        headerAlign: 'center',
        width: 150
    },
    {
        field: 'productsCategories',
        headerName: 'Product Categories',
        headerAlign: 'center',
        width: 150
    },
    {
        field: 'dietaryInfo',
        headerName: 'Allergen & Dietary Info',
        headerAlign: 'center',
        width: 150
    },
    {
        field: 'servingSize',
        headerName: 'Serving Size',
        headerAlign: 'center',
        width: 150
    },
    {
        field: 'amountPerPackage',
        headerName: 'Amount per package',
        headerAlign: 'center',
        width: 150
    },
    {
        field: 'reOrderFrequency',
        headerName: 'Reorder Frequency',
        headerAlign: 'center',
        width: 150
    },
];

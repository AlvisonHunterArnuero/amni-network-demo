import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material";
export interface Data {
    sku: number;
    name: string;
    type: string;
    image: string;
    truln: boolean;
    orderDate: string;
    actions: string;
}

export interface HeadCell {
    disablePadding: boolean;
    id: keyof Data;
    label: string;
    numeric: boolean;
}

export type ToggleSwitchProps = {
    isChecked: boolean;
    isDisabled: boolean;
};


export type CustomButtonProps = {
    className?: string,
    btnCaption: string;
    btnSize?: 'small' | 'medium' | 'large';
    btnVariant?: 'outlined' | 'text' | 'contained';
    btnIcon?: OverridableComponent<SvgIconTypeMap<object, "svg">> & { muiName: string };
    btnBgColor?: string;
    btnColor?: string;
    btnHoverColor?: string;
    btnHoverBgColor?: string;
};

export interface EnhancedTableToolbarProps {
    numSelected: number;
}

export interface Data {
    sku: number;
    name: string;
    type: string;
    image: string;
    truln: boolean;
    orderDate: string;
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

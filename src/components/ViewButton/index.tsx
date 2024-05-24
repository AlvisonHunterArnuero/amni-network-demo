import React from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Button, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';

export type ViewButtonProps = {
    className?: string,
    btnCaption: string;
    btnSize?: 'small' | 'medium' | 'large';
    btnVariant?: 'outlined' | 'text' | 'contained';
};

const ColorButton = styled(Button)<ButtonProps>(() => ({
    color: 'black',
    backgroundColor: 'transparent',
    '&:hover': {
        backgroundColor: '',
    },
}));


const ViewButton: React.FC<ViewButtonProps> = ({
    className,
    btnCaption = 'View',
    btnSize = 'small',
    btnVariant = 'outlined',
}) => (
    <ColorButton className={className} size={btnSize} variant={btnVariant} endIcon={<VisibilityIcon />}>
        {btnCaption}
    </ColorButton>
);
export default ViewButton;
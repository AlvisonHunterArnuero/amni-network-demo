import React from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Button, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { toast } from 'react-toastify';
import { ViewButtonProps } from '../../types';

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
  <ColorButton
    onClick={(event: React.MouseEvent<unknown>) => {
      event.stopPropagation();
      toast.info('Feature not yet implemented');
    }}
    className={className}
    size={btnSize}
    variant={btnVariant}
    endIcon={<VisibilityIcon />}
  >
    {btnCaption}
  </ColorButton>
);
export default ViewButton;

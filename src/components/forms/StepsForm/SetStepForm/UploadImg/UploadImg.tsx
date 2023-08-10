import React, { ChangeEvent } from 'react';
import { UploadImgProps } from './UploadImg.types';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import Button from '@mui/material/Button';
import { useController } from 'react-hook-form';
import { convertToBase64 } from '@/utils';
import { DeleteBtn } from '@/components/icon-buttons/DeleteBtn';
import { Stack } from '@mui/material';

export const UploadImg: React.FC<UploadImgProps> = ({ control,fieldName, isLoaded }) => {
  const {
    field: { onChange },
  } = useController({
    name: fieldName,
    control: control,
  });

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      return;
    }

    const file = e.target.files[0];
    convertToBase64(file, (img) => {
      onChange(img);
    });
  };

  const clearFile = () => {
    onChange(undefined);
  };

  return (
    <Stack
      spacing={ 1 }
      direction={ 'row' }
      sx={ {
        justifyContent: 'space-between',
        alignItems: 'center',
      } }
    >
      <Button
        fullWidth
        component={ 'label' }
        variant={ 'outlined' }
        startIcon={ <UploadFileIcon /> }
        color={ isLoaded ? 'success' : 'primary' }
      >
        { isLoaded ? 'Изменить изображение' : 'Загрузить изображение' }
        <input
          onChange={ handleFileUpload }
          type={ 'file' }
          accept={ '.jpg,.jpeg,.png' }
          hidden
        />
      </Button>
      { isLoaded &&
        <DeleteBtn title={ 'Удалить' } onClick={ clearFile } />
      }
    </Stack>
  );
};

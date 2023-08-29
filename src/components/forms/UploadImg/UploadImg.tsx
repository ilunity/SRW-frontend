import React, { ChangeEvent } from 'react';
import { DEFAULT_ACCEPTABLE_FILES, UploadImgProps } from './UploadImg.types';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import Button from '@mui/material/Button';
import { useController } from 'react-hook-form';
import { convertToBase64 } from '@/utils';
import { DeleteBtn } from '@/components/icon-buttons/DeleteBtn';
import { FormHelperText, Stack } from '@mui/material';

const DEFAULT_ERROR_MESSAGE = 'Выберите изображение!';

export const UploadImg: React.FC<UploadImgProps> = (
  {
    control,
    fieldName,
    isLoaded,
    acceptableFiles = DEFAULT_ACCEPTABLE_FILES,
  }) => {
  const {
    field: { onChange },
    formState: { errors },
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
    <>
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
            accept={ acceptableFiles.join(',') }
            hidden
          />
        </Button>
        { isLoaded &&
          <DeleteBtn title={ 'Удалить' } onClick={ clearFile } />
        }
      </Stack>
      <FormHelperText error={ !!errors[fieldName] }>
        { errors[fieldName] && DEFAULT_ERROR_MESSAGE }
      </FormHelperText>
    </>
  );
};

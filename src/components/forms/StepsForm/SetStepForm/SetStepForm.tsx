import React from 'react';
import { SetStepFormInputs, SetStepFormProps, SetStepFormSchema } from './SetStepForm.types';
import { PaperWrapper } from '@/components/layouts/PaperWrapper';
import { Stack } from '@mui/material';
import Button from '@mui/material/Button';
import { useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import { yupResolver } from '@hookform/resolvers/yup';
import { UploadImg } from 'src/components/forms/UploadImg';

export const SetStepForm: React.FC<SetStepFormProps> = ({ onSubmit, defaultValue }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
  } = useForm<SetStepFormInputs>({
    resolver: yupResolver(SetStepFormSchema),
    defaultValues: defaultValue,
  });

  const isImgLoaded = Boolean(watch('img'));

  return (
    <PaperWrapper>
      <Stack
        component={ 'form' }
        spacing={ 2 }
        sx={ {
          width: 500,
        } }
        onSubmit={ handleSubmit(onSubmit) }
      >
        <TextField
          { ...register('content') }
          error={ !!errors.content }
          helperText={ errors.content && 'Поле обязательно для заполнения' }
          label={ 'Текст' }
          multiline
          rows={ 10 }
        />
        <UploadImg control={ control } isLoaded={ isImgLoaded } fieldName={ 'img' } />
        <Button variant={ 'contained' } type={ 'submit' }>
          Сохранить
        </Button>
      </Stack>
    </PaperWrapper>
  );
};

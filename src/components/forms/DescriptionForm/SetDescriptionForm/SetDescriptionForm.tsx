import React from 'react';
import {
  SetDescriptionFormInputs,
  SetDescriptionFormProps,
  SetDescriptionFormSchema,
} from './SetDescriptionForm.types';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormHelperText, Stack } from '@mui/material';
import TextField from '@mui/material/TextField';
import { UploadImg } from 'src/components/forms/StepsForm/SetStepForm/UploadImg';
import Button from '@mui/material/Button';
import { PaperWrapper } from '@/components/layouts/PaperWrapper';
import { Description } from '@/redux/slices/created-recipe/created-recipe-slice.types';

const defineInitValue = (defaultValue: Description | null | undefined): SetDescriptionFormInputs | undefined => {
  if (defaultValue === undefined || defaultValue === null) {
    return undefined;
  }

  const { img, ...rest } = defaultValue;
  const defaultImg = img === null ? undefined : img;

  return { img: defaultImg, ...rest };
};

export const SetDescriptionForm: React.FC<SetDescriptionFormProps> = ({ onSubmit, defaultValue }) => {

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
  } = useForm<SetDescriptionFormInputs>({
    resolver: yupResolver(SetDescriptionFormSchema),
    defaultValues: defineInitValue(defaultValue),
  });

  const isImgLoaded = Boolean(watch('img'));
  const isError = errors.title || errors.description || errors.time || errors.servings_number;

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
          { ...register('title') }
          error={ !!errors.title }
          label={ 'Название' }
        />
        <TextField
          { ...register('description') }
          error={ !!errors.description }
          label={ 'Описание' }
          multiline
          rows={ 10 }
        />
        <TextField
          { ...register('time') }
          error={ !!errors.time }
          label={ 'Время приготовления' }
        />
        <TextField
          { ...register('servings_number') }
          error={ !!errors.servings_number }
          label={ 'Кол-во порций' }
        />
        <UploadImg control={ control } isLoaded={ isImgLoaded } fieldName={ 'img' } />
        <Button variant={ 'contained' } type={ 'submit' }>
          Сохранить
        </Button>
        { isError &&
          <FormHelperText>Все текстовые поля должны быть заполнены</FormHelperText>
        }
      </Stack>
    </PaperWrapper>
  );
};

import * as yup from 'yup';
import { Description } from '@/redux/slices/created-recipe/created-recipe-slice.types';

export const SetDescriptionFormSchema = yup.object({
  title: yup.string().required(),
  description: yup.string().required(),
  img: yup.string().required(),
  time: yup.number().required(),
  servings_number: yup.number().required(),
});

export type SetDescriptionFormInputs = yup.InferType<typeof SetDescriptionFormSchema>;

export interface SetDescriptionFormProps {
  onSubmit: (data: SetDescriptionFormInputs) => void;
  defaultValue?: Description | null;
}

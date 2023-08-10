import * as yup from 'yup';
import { Step } from '@/redux/slices/created-recipe/created-recipe-slice.types';

export const SetStepFormSchema = yup.object({
  content: yup.string().required(),
  img: yup.string(),
});

export type SetStepFormInputs = yup.InferType<typeof SetStepFormSchema>;

export interface SetStepFormProps {
  onSubmit: (data: SetStepFormInputs) => void;
  defaultValue?: Step;
}

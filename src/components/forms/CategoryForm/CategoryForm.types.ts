import * as yup from 'yup';

export const CategoryFormSchema = yup.object({
  name: yup.string().required(),
});

export type CategoryFormInputs = yup.InferType<typeof CategoryFormSchema>;

export interface CategoryFormProps {
  onSubmit: (data: CategoryFormInputs) => void;
  defaultName?: string;
}

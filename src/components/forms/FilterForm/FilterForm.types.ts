import * as yup from 'yup';

export const FilterFormSchema = yup.object({
  name: yup.string().required(),
});

export type FilterFormInputs = yup.InferType<typeof FilterFormSchema>;

export interface FilterFormProps {
  title: string;
  onSubmit: (data: FilterFormInputs) => void;
  defaultName?: string;
}
import * as yup from 'yup';

export const SignUpFormSchema = yup.object({
  username: yup.string().required(),
  email: yup.string().email().required(),
}).required();

export type SignUpFormInputs = yup.InferType<typeof SignUpFormSchema>;

export interface SignUpFormProps {
  onSubmit: () => void;
}

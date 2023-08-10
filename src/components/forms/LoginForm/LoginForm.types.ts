import * as yup from 'yup';

export const LoginFormSchema = yup.object({
  email: yup.string().email().required(),
}).required();

export type LoginFormInputs = yup.InferType<typeof LoginFormSchema>;

export interface LoginFormProps {
  onSubmit: () => void;
}

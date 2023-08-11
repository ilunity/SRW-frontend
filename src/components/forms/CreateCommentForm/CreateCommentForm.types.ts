import * as yup from 'yup';
import { IApiError } from '@/api/utils/api.types';

export const CreateCommentFormSchema = yup.object({
  text: yup.string().required(),
});

export type CreateCommentFormInputs = yup.InferType<typeof CreateCommentFormSchema>;

export interface CreateCommentFormProps {
  onSubmit: (data: CreateCommentFormInputs) => Promise<IApiError | null>;
}

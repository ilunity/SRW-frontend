import { Control } from 'react-hook-form';

export interface UploadImgProps {
  control: Control<any>;
  fieldName: string;
  isLoaded: boolean;
}

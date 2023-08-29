import { Control } from 'react-hook-form';

export interface UploadImgProps {
  control: Control<any>;
  fieldName: string;
  isLoaded: boolean;
  acceptableFiles?: `${ACCEPTABLE_FILES}`[];
}

export enum ACCEPTABLE_FILES {
  JPG = '.jpg',
  JPEG = '.jpeg',
  PNG = '.png',
  SVG = '.svg',
}

export const DEFAULT_ACCEPTABLE_FILES: `${ACCEPTABLE_FILES}`[] = [
  ACCEPTABLE_FILES.JPG,
  ACCEPTABLE_FILES.JPEG,
  ACCEPTABLE_FILES.PNG,
];

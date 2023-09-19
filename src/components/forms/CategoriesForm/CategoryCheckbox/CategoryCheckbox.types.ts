export interface CategoryCheckboxProps {
  label: string;
  level: number;
  isSelected: boolean;
  isIndeterminate: boolean;
  onChange: () => void;
}

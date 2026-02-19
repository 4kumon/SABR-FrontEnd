export interface FormField {
  key: string;
  label: string;
  type: 'text' | 'email' | 'number' | 'tel' | 'textarea' | 'select';
  placeholder?: string;
  required?: boolean;
  options?: { label: string; value: any }[]; // Para selects
  validators?: {
    required?: boolean;
    email?: boolean;
    minLength?: number;
    maxLength?: number;
    pattern?: string;
  };
}

export interface DialogConfig {
  title: string;
  fields: FormField[];
  initialData?: any;
}
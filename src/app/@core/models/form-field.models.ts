export interface FormFieldConfig {
  name: string;              // nome do campo (ex: 'store_name')
  label: string;             // rótulo exibido (ex: 'Nome da Loja')
  type: 'text' | 'number' | 'select' | 'textarea' | 'password';
  required?: boolean;
  minLength?: number;
  placeholder?: string;
  options?: { value: any; label: string }[];  // para select
  defaultValue?: any;
  halfWidth?: boolean;       // lado-a-lado
}
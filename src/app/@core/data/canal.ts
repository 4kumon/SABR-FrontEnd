export interface Canal {
  id: number;
  nome: string;
  tipo: string;
  status: string;
  dataCriacao: string;
}

export abstract class CanalData {
  abstract getData(): Canal[];
  abstract addRecord(record: Canal): void;
  abstract updateRecord(id: number, record: Canal): void;
  abstract deleteRecord(id: number): void;
}
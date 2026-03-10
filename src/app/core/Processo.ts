import { EstadoProcesso } from './EstadoProcesso';

export interface Processo {
  id: number;
  nome: string;
  descricao: string;
  status: EstadoProcesso;
  prioridade: 'BAIXA' | 'MEDIA' | 'ALTA';
  paginas: number;
  memoriaMb: number;
}

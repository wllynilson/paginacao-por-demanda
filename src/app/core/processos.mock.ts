import { EstadoProcesso } from './EstadoProcesso';
import { Processo } from './Processo';

const STATUS_CICLO = [
  EstadoProcesso.ABERTO,
  EstadoProcesso.EM_EXECUCAO,
  EstadoProcesso.BLOQUEADO,
  EstadoProcesso.FINALIZADO
] as const;

const PRIORIDADES = ['BAIXA', 'MEDIA', 'ALTA'] as const;

export const PROCESSOS_MOCK: Processo[] = new Array(8).fill(0).map((_, i) => ({
  id: i + 1,
  nome: `Processo ${i + 1}`,
  descricao: `Processo responsavel pela tarefa ${i + 1}`,
  status: STATUS_CICLO[i % STATUS_CICLO.length],
  prioridade: PRIORIDADES[i % PRIORIDADES.length],
  paginas: 6 + i,
  memoriaMb: 128 + i * 32
}));

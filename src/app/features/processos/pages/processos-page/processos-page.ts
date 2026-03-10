import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { EstadoProcesso } from '../../../../core/EstadoProcesso';
import { Processo } from '../../../../core/Processo';
import { PROCESSOS_MOCK } from '../../../../core/processos.mock';
import { ProcessoDetalhesDialog } from '../../components/processo-detalhes-dialog/processo-detalhes-dialog';

@Component({
  selector: 'app-processos-page',
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatChipsModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule
  ],
  templateUrl: './processos-page.html',
  styleUrl: './processos-page.scss'
})
export class ProcessosPage {
  readonly displayedColumns = ['id', 'nome', 'status', 'prioridade', 'paginas', 'memoriaMb', 'acoes'];
  readonly dataSource = new MatTableDataSource<Processo>(PROCESSOS_MOCK);

  readonly kpis = {
    total: PROCESSOS_MOCK.length,
    ativos: PROCESSOS_MOCK.filter((p) => p.status !== EstadoProcesso.FINALIZADO).length,
    bloqueados: PROCESSOS_MOCK.filter((p) => p.status === EstadoProcesso.BLOQUEADO).length,
    memoriaTotalMb: PROCESSOS_MOCK.reduce((total, p) => total + p.memoriaMb, 0)
  };

  constructor(private readonly dialog: MatDialog) {
    this.dataSource.filterPredicate = (processo, filter) => {
      const searchable = [
        processo.nome,
        processo.descricao,
        processo.status,
        processo.prioridade,
        processo.id.toString()
      ]
        .join(' ')
        .toLowerCase();

      return searchable.includes(filter);
    };
  }

  applyFilter(value: string): void {
    this.dataSource.filter = value.trim().toLowerCase();
  }

  openDetails(processo: Processo): void {
    this.dialog.open(ProcessoDetalhesDialog, {
      data: processo,
      width: '480px'
    });
  }
}

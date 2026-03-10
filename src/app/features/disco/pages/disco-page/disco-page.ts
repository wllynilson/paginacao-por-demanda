import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

type BlocoTipo = 'SWAP' | 'ARQUIVO';

interface BlocoDisco {
  bloco: number;
  tipo: BlocoTipo;
  dono?: string;
  pid?: number;
  pagina?: number;
}

@Component({
  selector: 'app-disco-page',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatChipsModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './disco-page.html',
  styleUrl: './disco-page.scss',
})
export class DiscoPage {
  readonly displayedColumns: string[] = ['bloco', 'tipo', 'dono', 'pid', 'pagina', 'acoes'];

  readonly dataSource = new MatTableDataSource<BlocoDisco>([
    { bloco: 10, tipo: 'SWAP', dono: 'Chrome', pid: 1, pagina: 1 },
    { bloco: 11, tipo: 'SWAP', dono: 'VSCode', pid: 2, pagina: 1 },
    { bloco: 42, tipo: 'ARQUIVO', dono: 'relatorio.pdf' },
  ]);

  get kpis() {
    const total = this.dataSource.data.length;
    const swap = this.dataSource.data.filter((b) => b.tipo === 'SWAP').length;
    const arquivos = total - swap;

    return { total, swap, arquivos };
  }

  applyFilter(value: string) {
    this.dataSource.filter = value.trim().toLowerCase();
  }

  openDetails(bloco: BlocoDisco) {
    console.log('Detalhes do bloco:', bloco);
  }
}

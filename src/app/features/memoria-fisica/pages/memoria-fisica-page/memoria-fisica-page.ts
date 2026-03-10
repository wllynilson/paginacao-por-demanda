import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

type QuadroStatus = 'LIVRE' | 'OCUPADO';

interface QuadroMemoriaFisica {
  indice: number;
  status: QuadroStatus;
  pid?: number;
  processo?: string;
  pagina?: number;
}

@Component({
  selector: 'app-memoria-fisica-page',
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
  templateUrl: './memoria-fisica-page.html',
  styleUrl: './memoria-fisica-page.scss',
})
export class MemoriaFisicaPage {
  readonly displayedColumns: string[] = ['indice', 'status', 'pid', 'processo', 'pagina', 'acoes'];

  readonly dataSource = new MatTableDataSource<QuadroMemoriaFisica>([
    { indice: 0, status: 'OCUPADO', pid: 1, processo: 'Chrome', pagina: 0 },
    { indice: 1, status: 'OCUPADO', pid: 2, processo: 'VSCode', pagina: 1 },
    { indice: 2, status: 'LIVRE' },
    { indice: 3, status: 'LIVRE' },
  ]);

  get kpis() {
    const total = this.dataSource.data.length;
    const ocupados = this.dataSource.data.filter((q) => q.status === 'OCUPADO').length;
    const livres = total - ocupados;

    return { total, ocupados, livres };
  }

  applyFilter(value: string) {
    this.dataSource.filter = value.trim().toLowerCase();
  }

  openDetails(quadro: QuadroMemoriaFisica) {
    // placeholder para dialog (igual você fez em Processos)
    console.log('Detalhes do quadro:', quadro);
  }
}

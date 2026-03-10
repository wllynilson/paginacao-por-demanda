import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

type PaginaStatus = 'NA_RAM' | 'NO_DISCO';

interface PaginaProcesso {
  pid: number;
  processo: string;
  pagina: number;
  status: PaginaStatus;
  quadro?: number;
  blocoDisco?: number;
}

@Component({
  selector: 'app-memoria-logica-page',
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
  templateUrl: './memoria-logica-page.html',
  styleUrl: './memoria-logica-page.scss',
})
export class MemoriaLogicaPage {
  readonly displayedColumns: string[] = [
    'pid',
    'processo',
    'pagina',
    'status',
    'quadro',
    'blocoDisco',
    'acoes',
  ];

  readonly dataSource = new MatTableDataSource<PaginaProcesso>([
    { pid: 1, processo: 'Chrome', pagina: 0, status: 'NA_RAM', quadro: 0 },
    { pid: 1, processo: 'Chrome', pagina: 1, status: 'NO_DISCO', blocoDisco: 10 },
    { pid: 2, processo: 'VSCode', pagina: 0, status: 'NA_RAM', quadro: 1 },
    { pid: 2, processo: 'VSCode', pagina: 1, status: 'NO_DISCO', blocoDisco: 11 },
  ]);

  get kpis() {
    const total = this.dataSource.data.length;
    const naRam = this.dataSource.data.filter((p) => p.status === 'NA_RAM').length;
    const noDisco = total - naRam;

    return { total, naRam, noDisco };
  }

  applyFilter(value: string) {
    this.dataSource.filter = value.trim().toLowerCase();
  }

  openDetails(pagina: PaginaProcesso) {
    console.log('Detalhes da página:', pagina);
  }
}

import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { Processo } from '../../../../core/Processo';

@Component({
  selector: 'app-processo-detalhes-dialog',
  imports: [MatDialogModule, MatButtonModule, MatChipsModule],
  templateUrl: './processo-detalhes-dialog.html',
  styleUrl: './processo-detalhes-dialog.scss'
})
export class ProcessoDetalhesDialog {
  readonly processo = inject<Processo>(MAT_DIALOG_DATA);
}


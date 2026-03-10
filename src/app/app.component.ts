import { Component } from '@angular/core';
import { AppShell } from './core/layout/app-shell/app-shell';

@Component({
  selector: 'app-root',
  imports: [AppShell],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'paginacao-por-demanda';
}

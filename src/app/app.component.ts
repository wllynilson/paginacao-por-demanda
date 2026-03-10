import {Component} from '@angular/core';
import {AppShell} from './core/layout/app-shell/app-shell';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [AppShell, MatSidenavModule, MatToolbarModule, MatListModule, MatIconModule, MatButtonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'paginacao-por-demanda';
}

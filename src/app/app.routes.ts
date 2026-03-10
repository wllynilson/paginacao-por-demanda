import { Routes } from '@angular/router';
import { DiscoPage } from './features/disco/pages/disco-page/disco-page';
import { MemoriaFisicaPage } from './features/memoria-fisica/pages/memoria-fisica-page/memoria-fisica-page';
import { MemoriaLogicaPage } from './features/memoria-logica/pages/memoria-logica-page/memoria-logica-page';
import { ProcessosPage } from './features/processos/pages/processos-page/processos-page';

export const routes: Routes = [
  { path: '', redirectTo: 'processos', pathMatch: 'full' },
  { path: 'processos', component: ProcessosPage },
  { path: 'memoria-fisica', component: MemoriaFisicaPage },
  { path: 'memoria-logica', component: MemoriaLogicaPage },
  { path: 'disco', component: DiscoPage }
];

import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'processos', pathMatch: 'full' },
  { path: 'processos' },
  { path: 'memoria-fisica' },
  { path: 'memoria-logica' },
  { path: 'disco' }
];

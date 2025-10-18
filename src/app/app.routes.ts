import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProblemEditorComponent } from './components/problem-editor/problem-editor.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'problem/:id', component: ProblemEditorComponent },
  { path: '**', redirectTo: '' },
];
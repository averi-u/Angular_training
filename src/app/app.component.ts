import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <header class="app-header">
      <a routerLink="/" class="brand">AI Edu Demo</a>
      <nav class="nav">
        <a routerLink="/">Dashboard</a>
      </nav>
    </header>
    <main class="container">
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [`
    .app-header { display:flex; align-items:center; justify-content:space-between; padding:12px 16px; border-bottom:1px solid #e5e7eb; }
    .brand { font-weight:700; text-decoration:none; }
    .nav a { margin-left:12px; text-decoration:none; }
    .container { padding:16px; }
  `]
})
export class AppComponent {}
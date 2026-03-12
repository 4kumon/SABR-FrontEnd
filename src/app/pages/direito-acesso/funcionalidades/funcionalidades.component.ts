import { Component } from '@angular/core';
import { NbCardModule, NbIconModule } from '@nebular/theme';

@Component({
  selector: 'ngx-funcionalidades',
  standalone: true,
  imports: [NbCardModule, NbIconModule],
  template: `
    <nb-card>
      <nb-card-header>
        <nb-icon icon="sun-outline"></nb-icon>
        Funcionalidades
      </nb-card-header>
      <nb-card-body>
        <p>Esta funcionalidade está em desenvolvimento.</p>
      </nb-card-body>
    </nb-card>
  `,
})
export class FuncionalidadesComponent {}

import { Component } from '@angular/core';
import { NbCardModule, NbIconModule } from '@nebular/theme';

@Component({
  selector: 'ngx-solicitacoes-recarga',
  standalone: true,
  imports: [NbCardModule, NbIconModule],
  template: `
    <nb-card>
      <nb-card-header>
        <nb-icon icon="pantone-outline"></nb-icon>
        Solicitações de Recarga
      </nb-card-header>
      <nb-card-body>
        <p>Esta funcionalidade está em desenvolvimento.</p>
      </nb-card-body>
    </nb-card>
  `,
})
export class SolicitacoesRecargaComponent {}

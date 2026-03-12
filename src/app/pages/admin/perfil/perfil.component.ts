import { Component } from '@angular/core';
import { NbCardModule, NbIconModule } from '@nebular/theme';

@Component({
    selector: 'ngx-admin-perfil',
    standalone: true,
    imports: [NbCardModule, NbIconModule],
    template: `
        <nb-card>
            <nb-card-header>
                <nb-icon icon="person-outline"></nb-icon>
                Perfil
            </nb-card-header>
            <nb-card-body>
                <p>Esta funcionalidade está em desenvolvimento.</p>
            </nb-card-body>
        </nb-card>
    `,
})
export class PerfilComponent {}

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NbCardModule, NbIconModule } from '@nebular/theme';

@Component({
    selector: 'ngx-cliente-placeholder',
    standalone: true,
    imports: [NbCardModule, NbIconModule],
    template: `
        <nb-card>
            <nb-card-header>
                <nb-icon icon="settings-2-outline" style="margin-right: 8px;"></nb-icon>
                {{ title }}
            </nb-card-header>
            <nb-card-body>
                <p>Esta funcionalidade está em desenvolvimento.</p>
            </nb-card-body>
        </nb-card>
    `,
})
export class ClientePlaceholderComponent {
    title = '';

    constructor(private route: ActivatedRoute) {
        this.title = this.route.snapshot.data['title']
            || this.route.parent?.snapshot.data['title']
            || 'Em Desenvolvimento';
    }
}

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NbCardModule, NbIconModule } from '@nebular/theme';
import { TranslationService } from '../../../@core/services/translation.service';

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
                <p>{{ message }}</p>
            </nb-card-body>
        </nb-card>
    `,
})
export class ClientePlaceholderComponent {
    title = '';
    message: string;

    constructor(
        private route: ActivatedRoute,
        private t: TranslationService,
    ) {
        this.title = this.route.snapshot.data['title']
            || this.route.parent?.snapshot.data['title']
            || this.t.get('common.inDevelopment');
        this.message = this.t.get('common.underDevelopment');
    }
}

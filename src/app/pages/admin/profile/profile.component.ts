import { Component } from '@angular/core';
import { NbCardModule, NbIconModule } from '@nebular/theme';
import { TranslationService } from '../../../@core/services/translation.service';

@Component({
    selector: 'ngx-admin-profile',
    standalone: true,
    imports: [NbCardModule, NbIconModule],
    template: `
        <nb-card>
            <nb-card-header>
                <nb-icon icon="person-outline"></nb-icon>
                {{ title }}
            </nb-card-header>
            <nb-card-body>
                <p>{{ message }}</p>
            </nb-card-body>
        </nb-card>
    `,
})
export class ProfileComponent {
    title: string;
    message: string;

    constructor(private t: TranslationService) {
        this.title = this.t.get('menu.admin.profile');
        this.message = this.t.get('common.underDevelopment');
    }
}

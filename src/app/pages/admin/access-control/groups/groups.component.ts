import { Component } from '@angular/core';
import { NbCardModule, NbIconModule } from '@nebular/theme';
import { TranslationService } from '../../../../@core/services/translation.service';

@Component({
  selector: 'ngx-groups',
  standalone: true,
  imports: [NbCardModule, NbIconModule],
  template: `
    <nb-card>
      <nb-card-header>
        <nb-icon icon="pie-chart-outline"></nb-icon>
        {{ title }}
      </nb-card-header>
      <nb-card-body>
        <p>{{ message }}</p>
      </nb-card-body>
    </nb-card>
  `,
})
export class GroupsComponent {
  title: string;
  message: string;

  constructor(private t: TranslationService) {
    this.title = this.t.get('menu.admin.groups');
    this.message = this.t.get('common.underDevelopment');
  }
}

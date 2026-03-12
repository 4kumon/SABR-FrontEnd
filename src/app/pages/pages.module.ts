import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { SharedModule } from '../shared/shared.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { ProfileRedirectComponent } from './profile-redirect.component';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    SharedModule,
    NbMenuModule,
    MiscellaneousModule,
  ],
  declarations: [
    PagesComponent,
    ProfileRedirectComponent,
  ],
})
export class PagesModule {
}

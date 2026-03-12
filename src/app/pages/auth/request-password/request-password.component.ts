import { Component, ChangeDetectorRef, Inject, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { NbRequestPasswordComponent as NbRequestPasswordBase, NbAuthService, NB_AUTH_OPTIONS } from '@nebular/auth';
import { NbAlertModule, NbInputModule, NbButtonModule, NbIconModule, NbSpinnerModule } from '@nebular/theme';

@Component({
    selector: 'ngx-request-password',
    templateUrl: './request-password.component.html',
    styleUrls: ['./request-password.component.scss'],
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        NbAlertModule,
        NbInputModule,
        NbButtonModule,
        NbIconModule,
        NbSpinnerModule,
        RouterModule,
    ],
})
export class RequestPasswordComponent extends NbRequestPasswordBase {

    constructor(
        service: NbAuthService,
        @Inject(NB_AUTH_OPTIONS) options: {},
        cd: ChangeDetectorRef,
        router: Router,
    ) {
        super(service, options, cd, router);
    }
}

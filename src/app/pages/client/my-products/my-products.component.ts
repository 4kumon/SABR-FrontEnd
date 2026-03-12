import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbCardModule, NbButtonModule, NbIconModule, NbInputModule, NbSelectModule } from '@nebular/theme';
import { AgGridMockDataService } from '../../../@core/mock/ag-grid-mock-data.service';
import { Produto } from '../../../@core/models/ag-grid.models';
import { TranslatePipe } from '../../../@core/pipes/translate.pipe';

@Component({
    selector: 'ngx-my-products',
    standalone: true,
    imports: [CommonModule, NbCardModule, NbButtonModule, NbIconModule, NbInputModule, NbSelectModule, TranslatePipe],
    templateUrl: './my-products.component.html',
    styleUrls: ['./my-products.component.scss'],
})
export class MyProductsComponent implements OnInit {
    produtos: Produto[] = [];

    constructor(private mockDataService: AgGridMockDataService) {}

    ngOnInit(): void {
        this.produtos = this.mockDataService.getProdutosData();
    }
}

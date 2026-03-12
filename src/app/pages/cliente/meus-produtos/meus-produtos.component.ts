import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbCardModule, NbButtonModule, NbIconModule, NbInputModule, NbSelectModule } from '@nebular/theme';
import { AgGridMockDataService } from '../../../@core/mock/ag-grid-mock-data.service';
import { Produto } from '../../../@core/models/ag-grid.models';

@Component({
    selector: 'ngx-meus-produtos',
    standalone: true,
    imports: [CommonModule, NbCardModule, NbButtonModule, NbIconModule, NbInputModule, NbSelectModule],
    templateUrl: './meus-produtos.component.html',
    styleUrls: ['./meus-produtos.component.scss'],
})
export class MeusProdutosComponent implements OnInit {
    produtos: Produto[] = [];

    constructor(private mockDataService: AgGridMockDataService) {}

    ngOnInit(): void {
        this.produtos = this.mockDataService.getProdutosData();
    }
}

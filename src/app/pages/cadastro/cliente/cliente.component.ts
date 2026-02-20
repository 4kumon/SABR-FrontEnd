import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NbCardModule, NbButtonModule, NbIconModule } from '@nebular/theme';

import { SmartTableData } from '../../../@core/data/smart-table';
import { SmartTableService } from '../../../@core/mock/smart-table.service';
import { NbDialogService } from '@nebular/theme';

import { CrudCreateDialogComponent } from '../../../shared/components/crud-dialogs/create-dialog/crud-create-dialog.component';
import { CrudEditDialogComponent } from '../../../shared/components/crud-dialogs/edit-dialog/crud-edit-dialog.component';
import { CrudDeleteDialogComponent } from '../../../shared/components/crud-dialogs/delete-dialog/crud-delete-dialog.component';
import { ActionsCellComponent } from '../../../shared/components/actions-cell/actions-cell.component';
import { CrudToolbarComponent } from '../../../shared/components/crud-toolbar/crud-toolbar.component';

@Component({
    selector: 'ngx-cliente',
    templateUrl: './cliente.component.html',
    styleUrls: ['./cliente.component.scss'],
    standalone: true,
    imports: [CrudToolbarComponent, Ng2SmartTableModule, NbCardModule, NbButtonModule, NbIconModule],
})

export class ClienteComponent {
    settings = {
        mode: 'external',
        hideSubHeader: true,
        actions: {
            position: 'right', add: false, edit: false, delete: false,
        },
        add: {
            addButtonContent: '<i class="nb-plus"></i>',
            createButtonContent: '<i class="nb-checkmark"></i>',
            cancelButtonContent: '<i class="nb-close"></i>',
        },
        edit: {
            editButtonContent: '<i class="nb-edit"></i>',
            saveButtonContent: '<i class="nb-checkmark"></i>',
            cancelButtonContent: '<i class="nb-close"></i>',
        },
        delete: {
            deleteButtonContent: '<i class="nb-trash"></i>',
            confirmDelete: true,
        },
        columns: {
            id: {
                title: 'Id',
                type: 'number',
            },
            name: {
                title: 'Nome',
                type: 'string',
            },
            storeName: {
                title: 'Nome da Loja',
                type: 'string',
            },
            email: {
                title: 'E-mail',
                type: 'string',
            },
            whatsapp: {
                title: 'Whatsapp',
                type: 'string',
            },
            currentBalance: {
                title: 'Saldo',
                type: 'decimal',
            },
            actions: {
                title: 'Ações',
                type: 'custom',
                filter: false,
                sort: false,
                renderComponent: ActionsCellComponent,
                onComponentInitFunction: (instance) => {
                instance.edit.subscribe((row) => this.onEdit({ data: row }));
                instance.delete.subscribe((row) => this.onDelete({ data: row }));
                },
            },
        },
    };

    source: LocalDataSource = new LocalDataSource();

    constructor(
        private service: SmartTableData,
        private smartTableService: SmartTableService,
        private dialogService: NbDialogService,
    ) {
        const data = this.service.getData();
        this.source.load(data);
    }

    onDeleteConfirm(event): void {
        if (window.confirm('Are you sure you want to delete?')) {
            event.confirm.resolve();
        } else {
            event.confirm.reject();
        }
    }

    onEdit(event): void {
        const ref = this.dialogService.open(CrudEditDialogComponent, {
            closeOnBackdropClick: false,
            context: {
                entityData: event.data,
            },
        });

        ref.onClose.subscribe((result) => {
            if (!result) {
                return;
            }
            
            const updatedRecord = {
                id: event.data.id,
                name: result.name,
                storeName: result.store_name || '',
                email: result.email || '',
                whatsapp: result.whatsapp || '',
                currentBalance: event.data.currentBalance,
            };

            this.smartTableService.updateRecord(event.data.id, updatedRecord);
            this.source.update(event.data, updatedRecord);
        });
    }

    onDelete(event): void {
        const ref = this.dialogService.open(CrudDeleteDialogComponent, {
            closeOnBackdropClick: false,
        });

        ref.componentRef.instance.entityName = event.data.name;
        ref.componentRef.instance.entityType = 'cliente';

        ref.onClose.subscribe((result) => {
            if (result) {
                // Remove do serviço (mock) e localStorage
                this.smartTableService.deleteRecord(event.data.id);

                // Remove da tabela
                this.source.remove(event.data);
            }
        });
    }

    onCreate(event?: any): void {
        const ref = this.dialogService.open(CrudCreateDialogComponent, {
            closeOnBackdropClick: false,
        });

        ref.componentRef.instance.title = 'Novo cliente';

        ref.onClose.subscribe(async (result) => {
            if (!result) {
                return;
            }

            // Gera novo ID sequencial
            const currentData = await this.source.getAll();
            const maxId = currentData.reduce((max: number, item: any) => item.id > max ? item.id : max, 0);
            const newId = maxId + 1;

            // Mapeia os campos para o formato esperado pela tabela
            const newRecord = {
                id: newId,
                name: result.name,
                storeName: result.store_name || '',
                email: result.email || '',
                whatsapp: result.whatsapp || '',
                currentBalance: 0,
            };

            // Adiciona ao serviço (mock) e localStorage
            console.log('Adicionando registro:', newRecord);
            console.log('SmartTableService data antes:', this.smartTableService.data.length);
            this.smartTableService.addRecord(newRecord);
            console.log('SmartTableService data depois:', this.smartTableService.data.length);

            // Adiciona à tabela
            this.source.append(newRecord);
        });
    }


}

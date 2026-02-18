import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableData } from '../../../@core/data/smart-table';
import { SmartTableService } from '../../../@core/mock/smart-table.service';
import { NbDialogService } from '@nebular/theme';
import { ClienteCreateDialogComponent } from './cliente-create-dialog/cliente-create-dialog.component';
import { ClienteEditDialogComponent } from './cliente-edit-dialog/cliente-edit-dialog.component';
import { ClienteDeleteDialogComponent } from './cliente-delete-dialog/cliente-delete-dialog.component';

@Component({
  selector: 'ngx-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss'],
})
export class ClienteComponent {

  settings = {
    mode: 'external',
    actions: {
        position: 'right',
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
    const ref = this.dialogService.open(ClienteEditDialogComponent, {
      closeOnBackdropClick: false,
    });
    
    // Passa os dados para o diálogo após ele ser aberto
    ref.componentRef.instance.clienteData = event.data;
    ref.componentRef.instance.form.patchValue({
      id: event.data.id,
      name: event.data.name,
      store_name: event.data.storeName,
      email: event.data.email,
      whatsapp: event.data.whatsapp,
    });

    ref.onClose.subscribe((result) => {
      if (!result) {
        return;
      }
      // Mapeia os campos para o formato esperado pela tabela
      const updatedRecord = {
        id: event.data.id,
        name: result.name,
        storeName: result.store_name || '',
        email: result.whatsapp || '',
        whatsapp: result.email || '',
        currentBalance: event.data.currentBalance,
      };
      
      // Atualiza no serviço (mock) e localStorage
      this.smartTableService.updateRecord(event.data.id, updatedRecord);
      
      // Atualiza na tabela
      this.source.update(event.data, updatedRecord);
    });
  }

  onDelete(event): void {
    const ref = this.dialogService.open(ClienteDeleteDialogComponent, {
      closeOnBackdropClick: false,
    });

    ref.componentRef.instance.clienteNome = event.data.name;

    ref.onClose.subscribe((result) => {
      if (result) {
        // Remove do serviço (mock) e localStorage
        this.smartTableService.deleteRecord(event.data.id);
        
        // Remove da tabela
        this.source.remove(event.data);
      }
    });
  }

  onCreate(event): void {
    const ref = this.dialogService.open(ClienteCreateDialogComponent, {
        closeOnBackdropClick: false,
    });

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
            email: result.whatsapp || '',
            whatsapp: result.email || '',
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

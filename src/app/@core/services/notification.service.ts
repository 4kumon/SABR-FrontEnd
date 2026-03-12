import { Injectable } from '@angular/core';
import { NbToastrService } from '@nebular/theme';

@Injectable({ providedIn: 'root' })
export class NotificationService {

    constructor(private toastrService: NbToastrService) {}

    // ---- SUCESSO CRUD ----
    successCreate(): void {
        this.toastrService.success('Registro criado com sucesso!', 'Sucesso');
    }

    successUpdate(): void {
        this.toastrService.success('Registro atualizado com sucesso!', 'Sucesso');
    }

    successDelete(count: number = 1): void {
        const msg = count === 1
            ? 'Registro excluído com sucesso!'
            : 'Registros excluídos com sucesso!';
        this.toastrService.success(msg, 'Sucesso');
    }

    successExport(): void {
        this.toastrService.success('Exportação realizada com sucesso!', 'Sucesso');
    }

    // ---- GENÉRICOS (para mensagens customizadas) ----
    success(message: string): void {
        this.toastrService.success(message, 'Sucesso');
    }

    error(message: string = 'Ocorreu um erro. Tente novamente.'): void {
        this.toastrService.danger(message, 'Erro');
    }

    warning(message: string): void {
        this.toastrService.warning(message, 'Atenção');
    }

    info(message: string): void {
        this.toastrService.info(message, 'Info');
    }
}
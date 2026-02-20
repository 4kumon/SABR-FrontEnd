import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbButtonModule, NbIconModule } from '@nebular/theme';

@Component({
  selector: 'ngx-crud-toolbar',
  templateUrl: './crud-toolbar.component.html',
  styleUrls: ['./crud-toolbar.component.scss'],
  standalone: true,
  imports: [CommonModule, NbButtonModule, NbIconModule],
})
export class CrudToolbarComponent {
  @Input() title: string = '';
  
  // Botão Novo
  @Input() showCreate: boolean = true;
  @Input() createButtonText: string = 'Novo';
  @Input() createButtonStatus: string = 'warning';
  
  // Botão Exportar CSV
  @Input() showExport: boolean = false;
  @Input() exportButtonText: string = 'Exportar CSV';
  @Input() exportButtonStatus: string = 'success';
  
  // Campo de busca
  @Input() showSearch: boolean = false;
  @Input() searchPlaceholder: string = 'Pesquisar...';
  @Input() searchValue: string = '';

  @Output() create = new EventEmitter<void>();
  @Output() export = new EventEmitter<void>();
  @Output() search = new EventEmitter<string>();

  onCreateClick(): void {
    this.create.emit();
  }

  onExportClick(): void {
    this.export.emit();
  }

  onSearchChange(value: string): void {
    this.searchValue = value;
    this.search.emit(value);
  }
}

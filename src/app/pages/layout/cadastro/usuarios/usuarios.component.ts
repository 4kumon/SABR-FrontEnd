import { Component } from '@angular/core';
import { NbToastrService } from '@nebular/theme';

interface Usuario {
  id: number;
  nome: string;
  email: string;
  cpf: string;
  telefone: string;
  status: 'ativo' | 'inativo';
  perfil: string;
}

@Component({
  selector: 'ngx-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent {
  
  usuarios: Usuario[] = [
    { id: 1, nome: 'João Silva', email: 'joao@email.com', cpf: '123.456.789-00', telefone: '(11) 99999-9999', status: 'ativo', perfil: 'Admin' },
    { id: 2, nome: 'Maria Santos', email: 'maria@email.com', cpf: '987.654.321-00', telefone: '(11) 88888-8888', status: 'ativo', perfil: 'Usuario' },
    { id: 3, nome: 'Pedro Oliveira', email: 'pedro@email.com', cpf: '111.222.333-44', telefone: '(11) 77777-7777', status: 'inativo', perfil: 'Usuario' },
  ];

  usuarioSelecionado: Usuario | null = null;
  modoEdicao = false;

  // Formulário
  form = {
    nome: '',
    email: '',
    cpf: '',
    telefone: '',
    status: 'ativo' as 'ativo' | 'inativo',
    perfil: 'Usuario'
  };

  constructor(private toastrService: NbToastrService) {}

  novoUsuario(): void {
    this.usuarioSelecionado = null;
    this.modoEdicao = true;
    this.form = {
      nome: '',
      email: '',
      cpf: '',
      telefone: '',
      status: 'ativo',
      perfil: 'Usuario'
    };
  }

  editarUsuario(usuario: Usuario): void {
    this.usuarioSelecionado = usuario;
    this.modoEdicao = true;
    this.form = { ...usuario };
  }

  salvarUsuario(): void {
    if (!this.form.nome || !this.form.email || !this.form.cpf) {
      this.toastrService.danger('Preencha todos os campos obrigatórios', 'Erro');
      return;
    }

    if (this.usuarioSelecionado) {
      // Editar
      const index = this.usuarios.findIndex(u => u.id === this.usuarioSelecionado!.id);
      this.usuarios[index] = { ...this.form, id: this.usuarioSelecionado.id };
      this.toastrService.success('Usuário atualizado com sucesso', 'Sucesso');
    } else {
      // Novo
      const novoId = Math.max(...this.usuarios.map(u => u.id)) + 1;
      this.usuarios.push({ ...this.form, id: novoId });
      this.toastrService.success('Usuário criado com sucesso', 'Sucesso');
    }

    this.cancelar();
  }

  excluirUsuario(usuario: Usuario): void {
    if (confirm(`Deseja realmente excluir o usuário "${usuario.nome}"?`)) {
      this.usuarios = this.usuarios.filter(u => u.id !== usuario.id);
      this.toastrService.success('Usuário excluído com sucesso', 'Sucesso');
    }
  }

  cancelar(): void {
    this.usuarioSelecionado = null;
    this.modoEdicao = false;
  }

  getPerfis(): string[] {
    return ['Admin', 'Usuario', 'Gestor', 'Operador'];
  }
}
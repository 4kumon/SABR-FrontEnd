# Setup do Front-end (Akveo Ngx-Admin / Nebular)

Esta guia apresenta o processo de  instalação do Sistema Front-End *SABR 3.0* em um ambiente de desenvolvimento local para instalar e rodar o Front-End e eliminar problemas de dependência.
Baseado no template **Akveo Ngx-Admin (Angular)** com UI do **Nebular**.

Repositórios oficiais usados que deram origem a esta aplicação: 
- Ngx-Admin:
https://github.com/akveo/ngx-admin 
- Componentes do Nebular:
https://github.com/akveo/nebular

------------------------------------------------------------------------

## 1) Setup (versões)

Dependências:

-   Git: versão mais atual.
-   Node.js: **v20.18.1** (via NVM).
-   Angular: **15.2.10**.

> Nota: o `package.json` do ngx-admin referencia Angular `^15.2.10` e
> Nebular `11.0.1`.

------------------------------------------------------------------------

## 2) Instalar o Git + configurar identidade

### 2.1 Instalar o Git

Para Windows, recomenda-se baixar o instalador do **Git for Windows**
via: https://git-scm.com/

Após instalar, valide no terminal (CMD/PowerShell/Git Bash):

``` bash
git --version
```

### 2.2 Configurar user.name e user.email

Configure sua identidade global para commits:

``` bash
git config --global user.name "Seu Nome"
git config --global user.email "seu.email@empresa.com"
```

Para verificar as configurações:

``` bash
git config --list
```

------------------------------------------------------------------------

## 3) Instalar o NVM + comandos principais

### 3.1 Windows: nvm-windows

No Windows, o gerenciador mais comum é o **nvm-windows
(coreybutler/nvm-windows)**.

Baixe o instalador pela página de releases:
https://github.com/coreybutler/nvm-windows/releases

Procure por `nvm-setup.exe`.

### Recomendações importantes:

-   Desinstale versões prévias do Node antes de usar o nvm-windows
    (evita conflito de PATH).
-   Reinicie o terminal após instalar.
-   Execute o terminal como **Administrador**, se necessário (symlinks).

------------------------------------------------------------------------

### 3.2 Comandos essenciais (install / use / list)

Instalar uma versão específica:

``` bash
nvm install 20.18.1
```

Usar (ativar) a versão instalada:

``` bash
nvm use 20.18.1
```

Listar versões instaladas:

``` bash
nvm list
```

Extras úteis:

Instalar Node mais recente:

``` bash
nvm install latest
```

Instalar LTS (Long Term Support) mais recente:

``` bash
nvm install lts
```

------------------------------------------------------------------------

## 4) Baixar o projeto e instalar dependências

### 4.1 Clonar e entrar na pasta

``` bash
git clone https://github.com/akveo/ngx-admin.git
cd ngx-admin
```

Confirme que existe um `package.json` na raiz.

------------------------------------------------------------------------

### 4.2 Garantir Node correto

``` bash
node -v
npm -v
```

Se não estiver em **v20.18.1**, rode:

``` bash
nvm use 20.18.1
```

------------------------------------------------------------------------

### 4.3 Instalar dependências

``` bash
npm install
```

Se ocorrer erro de conflito de dependências (peer dependencies), usar:

``` bash
npm install --legacy-peer-deps
```

------------------------------------------------------------------------

## 5) Rodar o frontend + troubleshooting rápido

### 5.1 Rodar

``` bash
npm start
```

O servidor de desenvolvimento será iniciado em:

    http://localhost:4200

------------------------------------------------------------------------

### 5.2 Problemas comuns

**nvm não troca a versão do Node:** - Verifique se não existe Node
instalado manualmente (conflito de PATH). - Execute o terminal como
Administrador.

**Erro no npm install:** - Use `npm install --legacy-peer-deps`.

**Alertas de vulnerabilidade:** - Tratar como item de manutenção. -
Avaliar antes de rodar `npm audit fix` automaticamente.

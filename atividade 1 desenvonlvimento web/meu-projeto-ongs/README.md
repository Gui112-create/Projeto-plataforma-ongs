# 📁 Projeto Plataforma ONGs# Projeto Plataforma ONGs — Entrega I



Projeto acadêmico desenvolvido em duas entregas para demonstrar conhecimentos em **HTML5** e **CSS3** aplicados ao desenvolvimento de uma plataforma web para ONGs.Este repositório contém as páginas HTML do projeto (index, projetos, cadastro) e os recursos necessários para a Entrega I (HTML5 semântico, formulários e multimídia).



---## 🌐 Site Online



## 📋 Descrição do ProjetoAcesse o projeto publicado: **https://gui112-create.github.io/Projeto-plataforma-ongs/**



Este repositório contém um site institucional para uma ONG fictícia chamada **"Esperança Viva"**, com foco em:## Como abrir

- Apresentação da missão, visão e valores da organização- Abra `index.html` no navegador (ou use um servidor local).

- Divulgação de projetos sociais- O formulário de `cadastro.html` possui validação nativa e máscaras via JavaScript em `js/scripts.js`.

- Formulário de cadastro para voluntários

## Estrutura

O projeto está dividido em **duas entregas distintas**, conforme especificado pelo professor:```

/meu-projeto-ongs

---├── index.html          # Página inicial com apresentação da ONG

├── projetos.html       # Lista de projetos e oportunidades

## 📦 Estrutura de Pastas├── cadastro.html       # Formulário de cadastro com validação

├── css/

```│   └── styles.css      # Estilos CSS para todas as páginas

meu-projeto-ongs/├── js/

││   └── scripts.js      # JavaScript com máscaras e validações

├── entrega1/                    ← ENTREGA I: HTML5 Puro└── images/

│   ├── index.html              (Página inicial)    └── logo.png        # Logo e outras imagens do projeto

│   ├── projetos.html           (Projetos sociais)```

│   ├── cadastro.html           (Formulário de cadastro)

│   └── imagens/                (Imagens da Entrega I)## Licença

│       ├── logo.pngMIT License - Sinta-se livre para usar este código como referência para seus próprios projetos.
│       ├── banner.jpg
│       ├── projeto1.jpg
│       └── projeto2.jpg
│
├── entrega2/                    ← ENTREGA II: HTML5 + CSS3 Completo
│   ├── index.html              (Página inicial estilizada)
│   ├── projetos.html           (Projetos com cards responsivos)
│   ├── cadastro.html           (Formulário estilizado)
│   │
│   ├── css/                    (Arquivos CSS organizados)
│   │   ├── style.css           (Variáveis CSS e reset)
│   │   ├── layout.css          (Grid 12 colunas e estrutura)
│   │   ├── components.css      (Componentes com Flexbox)
│   │   └── responsive.css      (5 breakpoints responsivos)
│   │
│   ├── js/                     (JavaScript)
│   │   └── menu.js             (Menu hambúrguer responsivo)
│   │
│   └── imagens/                (Imagens da Entrega II)
│       ├── logo.png
│       ├── banner.jpg
│       ├── projeto1.jpg
│       └── projeto2.jpg
│
└── README.md                    (Este arquivo)
```

---

## 🎯 ENTREGA I - HTML5 Semântico

### Requisitos Atendidos:
✅ **Estrutura semântica HTML5** em todas as páginas  
✅ **Hierarquia de títulos** (`<h1>` a `<h6>`) coerente  
✅ **Formulário completo** com validação nativa HTML5  
✅ **Campos obrigatórios**:
  - Nome completo
  - E-mail
  - CPF (com pattern)
  - Telefone (com pattern)
  - Data de nascimento
  - Endereço completo (CEP, rua, número, bairro, cidade, estado)

✅ **Validação HTML5** (required, pattern, minlength, maxlength, type)  
✅ **Imagens** inseridas com alt text para acessibilidade  
✅ **Código validado** no [W3C Validator](https://validator.w3.org/)

### Páginas:
1. **index.html** - Página inicial com missão, visão e valores
2. **projetos.html** - Lista de 6 projetos sociais
3. **cadastro.html** - Formulário de cadastro de voluntários

---

## 🎨 ENTREGA II - CSS3 Avançado

### Requisitos Atendidos:

#### 1️⃣ Sistema de Design (Variáveis CSS)
✅ **8 cores** definidas em variáveis  
✅ **5 tamanhos de fonte** (xs, sm, base, lg, xl)  
✅ **Espaçamento modular** (escala de 8px)  
✅ **Paleta de cores** completa (primary, secondary, success, danger, warning, info)

#### 2️⃣ Layout com CSS Grid
✅ **Sistema de grid 12 colunas**  
✅ **Classes utilitárias** (col-span-1 até col-span-12)  
✅ **Grids responsivos** (2, 3 e 4 colunas)

#### 3️⃣ Componentes com Flexbox
✅ **Cards** com hover effects  
✅ **Botões** (primary, secondary, outline, large, small, block)  
✅ **Formulários** estilizados com validação visual  
✅ **Alerts** (info, success, warning, danger)  
✅ **Badges** (primary, secondary, success, danger, warning, info)  
✅ **Modal** (estrutura preparada)

#### 4️⃣ Responsividade - 5 Breakpoints
✅ **320px** - Mobile pequeno  
✅ **480px** - Mobile médio  
✅ **768px** - Tablet  
✅ **1024px** - Desktop pequeno  
✅ **1440px** - Desktop grande

#### 5️⃣ Menu Responsivo (JavaScript)
✅ **Botão hambúrguer** para mobile  
✅ **Abre/fecha** com animação suave  
✅ **Fecha automaticamente** ao clicar em link  
✅ **Suporte a submenu** dropdown (comentado no código)  
✅ **Fecha com ESC** ou clique fora  
✅ **Smooth scroll** para âncoras

#### 6️⃣ Acessibilidade (WCAG 2.1 AA)
✅ **Contraste de cores** adequado  
✅ **Navegação por teclado** (focus-visible)  
✅ **ARIA labels** em botões e navegação  
✅ **Alt text** em todas as imagens  
✅ **Formulários** com labels associados  
✅ **Prefers reduced motion** (respeita preferências do usuário)

---

## 🚀 Como Rodar o Projeto

### Opção 1: Abrir Diretamente no Navegador
1. Navegue até a pasta desejada (`entrega1/` ou `entrega2/`)
2. Clique duas vezes em `index.html`

### Opção 2: Usar Live Server (Recomendado)
1. Instale a extensão **Live Server** no VS Code
2. Clique com botão direito em `index.html` → "Open with Live Server"
3. O site abrirá automaticamente em `http://127.0.0.1:5500`

### Opção 3: Servidor Python (se tiver Python instalado)
```bash
# Navegue até a pasta do projeto
cd entrega2

# Python 3
python -m http.server 8000

# Acesse: http://localhost:8000
```

### Opção 4: Servidor Node.js
```bash
# Instale o http-server globalmente
npm install -g http-server

# Navegue até a pasta
cd entrega2

# Inicie o servidor
http-server

# Acesse: http://localhost:8080
```

---

## 📸 Imagens Necessárias

Para o projeto funcionar perfeitamente, você precisa adicionar as seguintes imagens nas pastas `imagens/`:

- **logo.png** - Logotipo da ONG (150x150px recomendado)
- **banner.jpg** - Banner principal (1200x400px recomendado)
- **projeto1.jpg** - Imagem do Projeto Educação (600x400px)
- **projeto2.jpg** - Imagem do Projeto Capacitação (600x400px)

> **Dica:** Use sites como [Unsplash](https://unsplash.com) ou [Pexels](https://pexels.com) para imagens gratuitas e de alta qualidade.

---

## 🔗 Recursos Utilizados

- **HTML5** - Estrutura semântica
- **CSS3** - Estilização avançada (Grid, Flexbox, Variáveis CSS)
- **JavaScript** - Menu responsivo
- **Fontes:** System fonts (Inter, Arial, sans-serif)
- **Ícones:** Emojis Unicode (para simplificar)

---

## ✅ Checklist de Avaliação

### ENTREGA I
- [x] HTML5 semântico em todas as páginas
- [x] Hierarquia de títulos correta
- [x] Formulário com todos os campos solicitados
- [x] Validação HTML5 (required, pattern)
- [x] Imagens otimizadas com alt text
- [x] Código validado no W3C

### ENTREGA II
- [x] Sistema de design com variáveis CSS
- [x] Layout com CSS Grid (12 colunas)
- [x] Componentes com Flexbox
- [x] Responsividade (5 breakpoints)
- [x] Menu hambúrguer funcional
- [x] Acessibilidade WCAG 2.1 AA
- [x] Código organizado e comentado

---

## 👨‍💻 Autor

**Nome do Aluno:** [Seu Nome]  
**Matrícula:** [Sua Matrícula]  
**Curso:** [Seu Curso]  
**Disciplina:** Desenvolvimento Web  
**Professor:** [Nome do Professor]  
**Data:** Novembro/2024

---

## 📄 Licença

Este projeto é de uso acadêmico e educacional.

---

## 🔍 Validação W3C

Ambas as entregas foram validadas no [W3C Markup Validation Service](https://validator.w3.org/).

Para validar:
1. Acesse: https://validator.w3.org/
2. Escolha "Validate by File Upload" ou "Validate by Direct Input"
3. Faça upload do arquivo HTML ou cole o código
4. Verifique se não há erros

---

## 📝 Notas Finais

- **Entrega I** demonstra domínio de HTML5 semântico e estruturação de conteúdo
- **Entrega II** adiciona camadas de estilização profissional, responsividade e interatividade
- Ambas as entregas estão separadas em pastas distintas para facilitar a avaliação do professor
- Código totalmente comentado e indentado seguindo boas práticas

---

**🎓 Projeto desenvolvido para fins acadêmicos - 2024**

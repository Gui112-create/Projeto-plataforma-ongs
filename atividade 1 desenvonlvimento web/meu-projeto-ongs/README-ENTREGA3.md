# 📁 Projeto Plataforma ONGs

Projeto acadêmico desenvolvido em **três entregas** para demonstrar conhecimentos em **HTML5**, **CSS3** e **JavaScript** aplicados ao desenvolvimento de uma plataforma web para ONGs.

---

## 🌐 Site Online

Acesse o projeto publicado:

- **Link Principal:** https://gui112-create.github.io/Projeto-plataforma-ongs/
- **Entrega I (HTML5):** https://gui112-create.github.io/Projeto-plataforma-ongs/entrega1/
- **Entrega II (CSS3):** https://gui112-create.github.io/Projeto-plataforma-ongs/entrega2/
- **Entrega III (JavaScript):** https://gui112-create.github.io/Projeto-plataforma-ongs/entrega3/

---

## 📋 Descrição do Projeto

Este repositório contém um site institucional para uma ONG fictícia chamada **"Esperança Viva"**, com foco em:

- Apresentação da missão, visão e valores da organização
- Divulgação de projetos sociais
- Formulário de cadastro para voluntários

O projeto está dividido em **três entregas distintas**, conforme especificado pelo professor:

---

## 📦 Estrutura de Pastas

```
meu-projeto-ongs/
│
├── entrega1/                    ← ENTREGA I: HTML5 Puro
│   ├── index.html              (Página inicial)
│   ├── projetos.html           (Projetos sociais)
│   ├── cadastro.html           (Formulário de cadastro)
│   └── imagens/                (Imagens do projeto)
│
├── entrega2/                    ← ENTREGA II: HTML5 + CSS3
│   ├── index.html
│   ├── projetos.html
│   ├── cadastro.html
│   ├── css/                     (Arquivos CSS modulares)
│   │   ├── style.css
│   │   ├── layout.css
│   │   ├── components.css
│   │   └── responsive.css
│   ├── js/                      (Menu hambúrguer)
│   │   └── menu.js
│   └── imagens/
│
├── entrega3/                    ← ENTREGA III: JavaScript Avançado (SPA)
│   ├── index.html              (Single Page Application)
│   ├── css/                     (CSS da entrega2 + estilos adicionais)
│   │   ├── style.css
│   │   ├── layout.css
│   │   ├── components.css
│   │   ├── responsive.css
│   │   └── entrega3.css        (Estilos para validação e SPA)
│   ├── js/                      (JavaScript Modular - ES6 Modules)
│   │   ├── app.js              (Aplicação principal)
│   │   ├── router.js           (Sistema SPA com hash routing)
│   │   ├── templates.js        (Templates dinâmicos)
│   │   ├── formValidator.js    (Validação em tempo real)
│   │   ├── storage.js          (Sistema de armazenamento local)
│   │   └── menu.js             (Menu responsivo)
│   └── imagens/
│
├── index.html                   (Redirecionamento para entrega mais recente)
└── README.md
```

---

## 🎯 Entrega I — HTML5 Puro

### Objetivos
- Estrutura semântica HTML5
- Formulários com validação nativa
- Organização de conteúdo

### Tecnologias
- ✅ HTML5 semântico
- ✅ Formulários completos
- ✅ Imagens otimizadas

### Páginas
1. **index.html** — Apresentação da ONG (missão, visão, valores)
2. **projetos.html** — Lista de projetos sociais
3. **cadastro.html** — Formulário de cadastro de voluntários

---

## 🎨 Entrega II — CSS3

### Objetivos
- Aplicar CSS3 moderno e responsivo
- Sistema de grid e flexbox
- Design profissional e acessível

### Tecnologias
- ✅ CSS3 com variáveis CSS
- ✅ Grid System (12 colunas)
- ✅ Flexbox para componentes
- ✅ Media queries (5 breakpoints)
- ✅ Animações e transições
- ✅ Menu hambúrguer (JavaScript)

### Arquivos CSS Modulares
- **style.css** — Variáveis, reset, tipografia
- **layout.css** — Grid, containers, header, footer
- **components.css** — Cards, botões, formulários
- **responsive.css** — Breakpoints para mobile/tablet/desktop

---

## 🚀 Entrega III — JavaScript Avançado

### Objetivos
- Implementar Single Page Application (SPA)
- Sistema de templates dinâmicos
- Validação avançada de formulários
- Armazenamento local (localStorage)

### Funcionalidades Implementadas

#### ✅ 1. Single Page Application (SPA)
- Navegação sem recarregar a página
- Sistema de roteamento com hash (#)
- Transições suaves entre páginas
- Gerenciamento de histórico do navegador

#### ✅ 2. Sistema de Templates JavaScript
- Templates dinâmicos para cada página
- Renderização eficiente de conteúdo
- Componentes reutilizáveis

#### ✅ 3. Validação de Formulários
- **Validação em tempo real** (blur event)
- **Feedback visual** imediato ao usuário
- **Mensagens de erro** específicas para cada campo
- **Validações implementadas:**
  - Nome: mínimo 3 caracteres, apenas letras
  - E-mail: formato válido
  - Telefone: formato (00) 00000-0000
  - Data de nascimento: idade mínima 16 anos
  - Área de interesse: seleção obrigatória
  - Motivação: mínimo 20 caracteres
  - Termos: aceite obrigatório

#### ✅ 4. Armazenamento Local (localStorage)
- Salvamento automático de rascunhos (auto-save a cada 30s)
- Recuperação de dados ao recarregar a página
- Histórico de voluntários cadastrados
- Gerenciamento de preferências do usuário

#### ✅ 5. Menu Responsivo
- Menu hambúrguer para mobile
- Animações suaves
- Fechamento automático ao navegar
- Acessibilidade (ARIA labels)

### Arquitetura JavaScript (ES6 Modules)

```javascript
entrega3/js/
├── app.js              // Entry point, inicializa todos os módulos
├── router.js           // Gerencia navegação SPA
├── templates.js        // Define templates HTML de cada página
├── formValidator.js    // Sistema completo de validação
├── storage.js          // Wrapper para localStorage
└── menu.js             // Controle do menu hambúrguer
```

### Como Funciona

1. **Inicialização** (`app.js`)
   - Carrega todos os módulos
   - Inicializa o router
   - Configura event listeners

2. **Navegação** (`router.js`)
   - Escuta mudanças no hash da URL
   - Renderiza o template correspondente
   - Atualiza links ativos

3. **Validação** (`formValidator.js`)
   - Valida campos em tempo real
   - Mostra/esconde mensagens de erro
   - Previne submissão com erros
   - Salva dados válidos no localStorage

4. **Storage** (`storage.js`)
   - Gerencia localStorage com prefixo
   - Serializa/deserializa dados
   - Oferece métodos utilitários

---

## 🛠️ Tecnologias Utilizadas

### Entrega I
- HTML5

### Entrega II
- HTML5
- CSS3
- JavaScript (menu básico)

### Entrega III
- HTML5
- CSS3
- **JavaScript ES6+**
  - Modules (import/export)
  - Classes
  - Arrow functions
  - Template literals
  - Destructuring
  - LocalStorage API
  - DOM Manipulation
  - Event Delegation
  - Form Validation API

---

## 📝 Requisitos Atendidos

### Entrega III — Checklist

- ✅ Sistema de Single Page Application (SPA) básico
- ✅ Sistema de templates JavaScript
- ✅ Validação de formulários com feedback visual
- ✅ Mensagens de erro específicas para cada campo
- ✅ Armazenamento local (localStorage)
- ✅ Código JavaScript modular (ES6 modules)
- ✅ Estrutura de pastas organizada
- ✅ Arquivos separados por funcionalidade
- ✅ Comentários descritivos no código
- ✅ Repositório público no GitHub
- ✅ Site publicado no GitHub Pages

---

## 🚀 Como Executar Localmente

### Opção 1: Abrir diretamente
1. Clone o repositório
2. Navegue até a pasta `entrega3/`
3. Abra `index.html` no navegador

### Opção 2: Servidor local (recomendado para módulos ES6)
```bash
# Com Python 3
python -m http.server 8000

# Com Node.js (http-server)
npx http-server

# Com PHP
php -S localhost:8000
```

Depois acesse: `http://localhost:8000/entrega3/`

---

## 📱 Responsividade

O site é totalmente responsivo e funciona em:
- 📱 Smartphones (320px+)
- 📱 Tablets (768px+)
- 💻 Laptops (1024px+)
- 🖥️ Desktops (1280px+)
- 🖥️ Monitores grandes (1920px+)

---

## ♿ Acessibilidade

- Semântica HTML5 correta
- ARIA labels nos elementos interativos
- Contraste de cores adequado (WCAG 2.1 AA)
- Navegação por teclado
- Foco visível em elementos interativos

---

## 👨‍💻 Autor

**Guilherme** (Gui112-create)

---

## 📄 Licença

Projeto acadêmico - Todos os direitos reservados © 2024

---

## 🎓 Instituição de Ensino

Desenvolvimento Web - Fundamentos de HTML5, CSS3 e JavaScript

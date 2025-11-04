/**
 * ROUTER.JS - Sistema de Roteamento SPA
 * Gerencia navegação entre páginas sem recarregar
 */

import { templates } from './templates.js';

class Router {
    constructor() {
        this.routes = {
            'home': templates.home,
            'projetos': templates.projetos,
            'cadastro': templates.cadastro
        };
        this.currentRoute = '';
    }

    init() {
        // Escuta mudanças na URL (hash)
        window.addEventListener('hashchange', () => this.handleRoute());
        
        // Escuta cliques nos links de navegação
        this.setupNavigationLinks();
        
        // Carrega a rota inicial
        this.handleRoute();
    }

    setupNavigationLinks() {
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const page = link.getAttribute('data-page');
                if (page) {
                    e.preventDefault();
                    this.navigate(page);
                    
                    // Atualiza links ativos
                    this.updateActiveLink(link);
                }
            });
        });
    }

    updateActiveLink(activeLink) {
        // Remove classe ativa de todos os links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('nav__link--active');
        });
        
        // Adiciona classe ativa ao link clicado
        if (activeLink && activeLink.hasAttribute('data-page')) {
            activeLink.classList.add('nav__link--active');
        }
    }

    navigate(page) {
        window.location.hash = page;
    }

    handleRoute() {
        // Pega a rota atual do hash (remove o #)
        let page = window.location.hash.slice(1) || 'home';
        
        // Se a rota não existir, redireciona para home
        if (!this.routes[page]) {
            page = 'home';
            window.location.hash = 'home';
        }

        this.currentRoute = page;
        this.render(page);
        
        // Atualiza link ativo
        const activeLink = document.querySelector(`[data-page="${page}"]`);
        this.updateActiveLink(activeLink);
        
        console.log(`📄 Rota carregada: ${page}`);
    }

    render(page) {
        const appContainer = document.getElementById('app');
        const template = this.routes[page];
        
        if (!appContainer) {
            console.error('Container #app não encontrado!');
            return;
        }

        // Adiciona animação de saída
        appContainer.style.opacity = '0';
        
        setTimeout(() => {
            // Renderiza o template
            appContainer.innerHTML = template();
            
            // Adiciona animação de entrada
            appContainer.style.opacity = '1';
            
            // Se for a página de cadastro, inicializa o validador
            if (page === 'cadastro') {
                // Importação dinâmica para evitar circular dependency
                import('./formValidator.js').then(module => {
                    module.formValidator.init();
                });
            }
            
            // Scroll para o topo
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 150);
    }
}

export const router = new Router();

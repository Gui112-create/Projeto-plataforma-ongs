/**
 * MENU.JS - Gerenciamento do Menu Responsivo
 * Menu hambúrguer para dispositivos móveis
 */

class MenuHandler {
    constructor() {
        this.menuToggle = null;
        this.nav = null;
        this.isOpen = false;
    }

    init() {
        this.menuToggle = document.getElementById('menuToggle');
        this.nav = document.getElementById('mainNav');

        if (!this.menuToggle || !this.nav) {
            console.warn('Elementos do menu não encontrados');
            return;
        }

        this.setupEventListeners();
        console.log('✅ Menu handler inicializado');
    }

    setupEventListeners() {
        // Toggle do menu
        this.menuToggle.addEventListener('click', () => this.toggle());

        // Fecha o menu ao clicar em um link
        const navLinks = this.nav.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (this.isOpen) {
                    this.close();
                }
            });
        });

        // Fecha o menu ao clicar fora
        document.addEventListener('click', (e) => {
            if (this.isOpen && 
                !this.nav.contains(e.target) && 
                !this.menuToggle.contains(e.target)) {
                this.close();
            }
        });

        // Fecha o menu ao pressionar ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isOpen) {
                this.close();
            }
        });

        // Ajusta o menu no resize
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768 && this.isOpen) {
                this.close();
            }
        });
    }

    toggle() {
        if (this.isOpen) {
            this.close();
        } else {
            this.open();
        }
    }

    open() {
        this.isOpen = true;
        this.nav.classList.add('nav--open');
        this.menuToggle.setAttribute('aria-expanded', 'true');
        this.menuToggle.classList.add('menu-toggle--active');
    }

    close() {
        this.isOpen = false;
        this.nav.classList.remove('nav--open');
        this.menuToggle.setAttribute('aria-expanded', 'false');
        this.menuToggle.classList.remove('menu-toggle--active');
    }
}

export const menuHandler = new MenuHandler();

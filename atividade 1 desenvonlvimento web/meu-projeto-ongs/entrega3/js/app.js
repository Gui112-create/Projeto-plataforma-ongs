/**
 * APP.JS - Aplicação Principal (SPA)
 * Entrega III - JavaScript Avançado
 * Sistema de Single Page Application com Templates Dinâmicos
 */

import { router } from './router.js';
import { menuHandler } from './menu.js';
import { formValidator } from './formValidator.js';
import { storage } from './storage.js';

class App {
    constructor() {
        this.init();
    }

    init() {
        // Inicializa o ano no footer
        this.updateFooterYear();
        
        // Inicializa o menu hambúrguer
        menuHandler.init();
        
        // Inicializa o router
        router.init();
        
        // Inicializa o sistema de storage
        storage.init();
        
        // Carrega preferências salvas
        this.loadPreferences();
        
        console.log('✅ App inicializada com sucesso!');
    }

    updateFooterYear() {
        const yearElement = document.getElementById('currentYear');
        if (yearElement) {
            yearElement.textContent = new Date().getFullYear();
        }
    }

    loadPreferences() {
        const preferences = storage.get('preferences');
        if (preferences) {
            console.log('Preferências carregadas:', preferences);
        }
    }
}

// Inicializa a aplicação quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    new App();
});

export default App;

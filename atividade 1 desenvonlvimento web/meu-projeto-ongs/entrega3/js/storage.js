/**
 * STORAGE.JS - Sistema de Armazenamento Local
 * Gerencia localStorage com métodos utilitários
 */

class Storage {
    constructor() {
        this.prefix = 'ong_esperanca_';
        this.isAvailable = this.checkAvailability();
    }

    init() {
        if (!this.isAvailable) {
            console.warn('⚠️ localStorage não está disponível');
            return;
        }
        console.log('✅ Sistema de armazenamento inicializado');
    }

    checkAvailability() {
        try {
            const test = '__storage_test__';
            localStorage.setItem(test, test);
            localStorage.removeItem(test);
            return true;
        } catch (e) {
            return false;
        }
    }

    getKey(key) {
        return `${this.prefix}${key}`;
    }

    set(key, value) {
        if (!this.isAvailable) return false;

        try {
            const data = JSON.stringify({
                value: value,
                timestamp: new Date().toISOString()
            });
            localStorage.setItem(this.getKey(key), data);
            return true;
        } catch (e) {
            console.error('Erro ao salvar no localStorage:', e);
            return false;
        }
    }

    get(key) {
        if (!this.isAvailable) return null;

        try {
            const data = localStorage.getItem(this.getKey(key));
            if (!data) return null;

            const parsed = JSON.parse(data);
            return parsed.value;
        } catch (e) {
            console.error('Erro ao ler do localStorage:', e);
            return null;
        }
    }

    remove(key) {
        if (!this.isAvailable) return false;

        try {
            localStorage.removeItem(this.getKey(key));
            return true;
        } catch (e) {
            console.error('Erro ao remover do localStorage:', e);
            return false;
        }
    }

    clear() {
        if (!this.isAvailable) return false;

        try {
            const keys = Object.keys(localStorage);
            keys.forEach(key => {
                if (key.startsWith(this.prefix)) {
                    localStorage.removeItem(key);
                }
            });
            return true;
        } catch (e) {
            console.error('Erro ao limpar localStorage:', e);
            return false;
        }
    }

    getAll() {
        if (!this.isAvailable) return {};

        const result = {};
        const keys = Object.keys(localStorage);
        
        keys.forEach(key => {
            if (key.startsWith(this.prefix)) {
                const shortKey = key.replace(this.prefix, '');
                result[shortKey] = this.get(shortKey);
            }
        });

        return result;
    }

    // Métodos específicos para voluntários
    getVolunteers() {
        return this.get('volunteers') || [];
    }

    getVolunteerCount() {
        return this.getVolunteers().length;
    }
}

export const storage = new Storage();

/**
 * FORMVALIDATOR.JS - Sistema de Validação de Formulários
 * Validação em tempo real com feedback visual ao usuário
 */

import { storage } from './storage.js';

class FormValidator {
    constructor() {
        this.form = null;
        this.errors = {};
        this.validators = {
            nome: this.validateNome,
            email: this.validateEmail,
            telefone: this.validateTelefone,
            dataNascimento: this.validateDataNascimento,
            area: this.validateSelect,
            motivacao: this.validateMotivacao,
            termos: this.validateCheckbox
        };
    }

    init() {
        this.form = document.getElementById('volunteerForm');
        if (!this.form) {
            console.warn('Formulário não encontrado');
            return;
        }

        this.setupEventListeners();
        this.loadSavedData();
        console.log('✅ Validador de formulário inicializado');
    }

    setupEventListeners() {
        // Validação em tempo real (blur)
        const inputs = this.form.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', (e) => this.validateField(e.target));
            input.addEventListener('input', (e) => {
                // Remove erro ao começar a digitar
                this.clearFieldError(e.target);
            });
        });

        // Submissão do formulário
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));

        // Reset do formulário
        this.form.addEventListener('reset', (e) => this.handleReset(e));

        // Auto-save (salva dados a cada 30 segundos)
        setInterval(() => this.autoSave(), 30000);
    }

    validateField(field) {
        const fieldName = field.name;
        const validator = this.validators[fieldName];

        if (validator) {
            const error = validator.call(this, field);
            if (error) {
                this.showFieldError(field, error);
                this.errors[fieldName] = error;
                return false;
            } else {
                this.clearFieldError(field);
                delete this.errors[fieldName];
                return true;
            }
        }
        return true;
    }

    // Validadores específicos
    validateNome(field) {
        const value = field.value.trim();
        if (!value) {
            return 'Nome é obrigatório';
        }
        if (value.length < 3) {
            return 'Nome deve ter no mínimo 3 caracteres';
        }
        if (!/^[a-zA-ZÀ-ÿ\s]+$/.test(value)) {
            return 'Nome deve conter apenas letras';
        }
        return null;
    }

    validateEmail(field) {
        const value = field.value.trim();
        if (!value) {
            return 'E-mail é obrigatório';
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            return 'E-mail inválido';
        }
        return null;
    }

    validateTelefone(field) {
        const value = field.value.trim();
        if (!value) {
            return 'Telefone é obrigatório';
        }
        const telefoneRegex = /^\(\d{2}\) \d{4,5}-\d{4}$/;
        if (!telefoneRegex.test(value)) {
            return 'Telefone inválido. Use o formato: (00) 00000-0000';
        }
        return null;
    }

    validateDataNascimento(field) {
        const value = field.value;
        if (!value) {
            return 'Data de nascimento é obrigatória';
        }
        
        const birthDate = new Date(value);
        const today = new Date();
        const age = today.getFullYear() - birthDate.getFullYear();
        
        if (age < 16) {
            return 'Você deve ter pelo menos 16 anos para ser voluntário';
        }
        if (age > 100) {
            return 'Data de nascimento inválida';
        }
        return null;
    }

    validateSelect(field) {
        if (!field.value) {
            return 'Por favor, selecione uma opção';
        }
        return null;
    }

    validateMotivacao(field) {
        const value = field.value.trim();
        if (!value) {
            return 'Este campo é obrigatório';
        }
        if (value.length < 20) {
            return 'Por favor, escreva pelo menos 20 caracteres';
        }
        return null;
    }

    validateCheckbox(field) {
        if (!field.checked) {
            return 'Você deve aceitar os termos para continuar';
        }
        return null;
    }

    showFieldError(field, message) {
        const errorSpan = document.querySelector(`[data-field="${field.name}"]`);
        if (errorSpan) {
            errorSpan.textContent = message;
            errorSpan.style.display = 'block';
        }
        field.classList.add('error');
        field.setAttribute('aria-invalid', 'true');
    }

    clearFieldError(field) {
        const errorSpan = document.querySelector(`[data-field="${field.name}"]`);
        if (errorSpan) {
            errorSpan.textContent = '';
            errorSpan.style.display = 'none';
        }
        field.classList.remove('error');
        field.removeAttribute('aria-invalid');
    }

    handleSubmit(e) {
        e.preventDefault();
        
        // Valida todos os campos
        this.errors = {};
        const inputs = this.form.querySelectorAll('input, select, textarea');
        let hasErrors = false;

        inputs.forEach(input => {
            if (!this.validateField(input)) {
                hasErrors = true;
            }
        });

        if (hasErrors) {
            this.showMessage('error', 'Por favor, corrija os erros no formulário antes de enviar.');
            // Foca no primeiro campo com erro
            const firstError = this.form.querySelector('.error');
            if (firstError) {
                firstError.focus();
            }
            return;
        }

        // Coleta os dados do formulário
        const formData = new FormData(this.form);
        const data = Object.fromEntries(formData.entries());
        
        // Salva no localStorage
        this.saveFormData(data);
        
        // Mostra mensagem de sucesso
        this.showMessage('success', `✅ Cadastro realizado com sucesso! Obrigado, ${data.nome}!`);
        
        // Limpa o formulário após 2 segundos
        setTimeout(() => {
            this.form.reset();
            this.clearAllErrors();
        }, 2000);

        console.log('📝 Formulário enviado:', data);
    }

    handleReset(e) {
        setTimeout(() => {
            this.clearAllErrors();
            this.clearMessage();
            storage.remove('formDraft');
        }, 10);
    }

    clearAllErrors() {
        const errorSpans = this.form.querySelectorAll('.error-message');
        errorSpans.forEach(span => {
            span.textContent = '';
            span.style.display = 'none';
        });
        
        const errorInputs = this.form.querySelectorAll('.error');
        errorInputs.forEach(input => {
            input.classList.remove('error');
            input.removeAttribute('aria-invalid');
        });
        
        this.errors = {};
    }

    showMessage(type, message) {
        const messagesDiv = document.getElementById('formMessages');
        if (!messagesDiv) return;

        const messageClass = type === 'success' ? 'alert-success' : 'alert-error';
        messagesDiv.innerHTML = `
            <div class="alert ${messageClass}" role="alert">
                ${message}
            </div>
        `;

        // Remove a mensagem após 5 segundos
        setTimeout(() => this.clearMessage(), 5000);
    }

    clearMessage() {
        const messagesDiv = document.getElementById('formMessages');
        if (messagesDiv) {
            messagesDiv.innerHTML = '';
        }
    }

    // Salva dados do formulário no localStorage
    saveFormData(data) {
        const volunteers = storage.get('volunteers') || [];
        volunteers.push({
            ...data,
            id: Date.now(),
            timestamp: new Date().toISOString()
        });
        storage.set('volunteers', volunteers);
        storage.remove('formDraft');
    }

    // Auto-save (rascunho)
    autoSave() {
        if (!this.form) return;

        const formData = new FormData(this.form);
        const data = Object.fromEntries(formData.entries());
        
        // Só salva se houver algum dado preenchido
        if (Object.values(data).some(val => val)) {
            storage.set('formDraft', data);
            console.log('💾 Rascunho salvo automaticamente');
        }
    }

    // Carrega dados salvos (rascunho)
    loadSavedData() {
        const draft = storage.get('formDraft');
        if (draft) {
            Object.keys(draft).forEach(key => {
                const field = this.form.elements[key];
                if (field) {
                    if (field.type === 'checkbox') {
                        field.checked = draft[key] === 'on';
                    } else {
                        field.value = draft[key];
                    }
                }
            });
            this.showMessage('info', 'ℹ️ Rascunho anterior carregado. Você pode continuar de onde parou.');
        }
    }
}

export const formValidator = new FormValidator();

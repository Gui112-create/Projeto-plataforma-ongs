/**
 * VOLUNTEERS.JS - Listagem e ações de Voluntários (SPA)
 */

import { storage } from './storage.js';

class VolunteersView {
    init() {
        this.body = document.getElementById('volunteersBody');
        this.empty = document.getElementById('volunteersEmpty');
        this.clearBtn = document.getElementById('clearVolunteersBtn');

        this.render();
        this.bindEvents();
    }

    bindEvents() {
        if (this.clearBtn) {
            this.clearBtn.addEventListener('click', () => {
                const count = storage.getVolunteerCount();
                if (count === 0) return;
                if (confirm(`Tem certeza que deseja apagar ${count} registro(s)?`)) {
                    storage.clearVolunteers();
                    this.render();
                }
            });
        }

        // Delegação de eventos para remover cada item
        if (this.body) {
            this.body.addEventListener('click', (e) => {
                const btn = e.target.closest('[data-action="remove-volunteer"]');
                if (btn) {
                    const id = Number(btn.getAttribute('data-id'));
                    storage.removeVolunteer(id);
                    this.render();
                }
            });
        }
    }

    render() {
        const volunteers = storage.getVolunteers();

        if (!volunteers || volunteers.length === 0) {
            if (this.body) this.body.innerHTML = '';
            if (this.empty) this.empty.style.display = 'block';
            return;
        }

        if (this.empty) this.empty.style.display = 'none';

        const rows = volunteers
            .sort((a, b) => (b.timestamp || 0).localeCompare(a.timestamp || 0))
            .map(v => `
                <tr>
                    <td>${this.escape(v.nome)}</td>
                    <td>${this.escape(v.email)}</td>
                    <td>${this.escape(v.telefone)}</td>
                    <td>${this.escape(this.humanArea(v.area))}</td>
                    <td>${this.formatDate(v.timestamp)}</td>
                    <td>
                        <button class="btn btn-small btn-danger" data-action="remove-volunteer" data-id="${v.id}">Remover</button>
                    </td>
                </tr>
            `).join('');

        if (this.body) this.body.innerHTML = rows;
    }

    humanArea(area) {
        const map = {
            educacao: 'Educação',
            saude: 'Saúde',
            cultura: 'Cultura e Arte',
            alimentacao: 'Alimentação',
            administrativo: 'Administrativo',
            ti: 'Tecnologia da Informação'
        };
        return map[area] || area || '-';
    }

    formatDate(iso) {
        if (!iso) return '-';
        try {
            const d = new Date(iso);
            return d.toLocaleString('pt-BR');
        } catch {
            return '-';
        }
    }

    escape(str) {
        if (str == null) return '';
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }
}

export const volunteersView = new VolunteersView();

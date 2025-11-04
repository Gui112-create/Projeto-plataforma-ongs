/**
 * TEMPLATES.JS - Sistema de Templates JavaScript
 * Templates dinâmicos para cada página do SPA
 */

class Templates {
    home() {
        return `
            <div class="container">
                <!-- Hero Section -->
                <section class="hero">
                    <img src="imagens/banner.jpg" alt="Crianças participando de atividades educacionais" class="hero__image">
                    <div class="hero__content">
                        <h2 class="hero__title">Transformando vidas através da solidariedade</h2>
                        <p class="hero__subtitle">Há mais de 15 anos promovendo educação, cultura e cidadania para comunidades carentes.</p>
                    </div>
                </section>

                <!-- Grid com Missão, Visão e Valores -->
                <section class="grid grid-cols-3">
                    <article class="card">
                        <h3 class="card__title">Nossa Missão</h3>
                        <p>Promover a inclusão social e o desenvolvimento humano através de projetos educacionais, culturais e de assistência social, garantindo dignidade e oportunidades para todos.</p>
                    </article>

                    <article class="card">
                        <h3 class="card__title">Nossa Visão</h3>
                        <p>Ser referência nacional em transformação social, reconhecida pela excelência em nossos projetos e pelo impacto positivo nas comunidades atendidas.</p>
                    </article>

                    <article class="card">
                        <h3 class="card__title">Nossos Valores</h3>
                        <ul class="card__list">
                            <li><strong>Solidariedade:</strong> Agir com empatia e compromisso com o próximo</li>
                            <li><strong>Transparência:</strong> Gestão clara e prestação de contas rigorosa</li>
                            <li><strong>Respeito:</strong> Valorizar a diversidade e a dignidade humana</li>
                            <li><strong>Educação:</strong> Acreditar no poder transformador do conhecimento</li>
                            <li><strong>Sustentabilidade:</strong> Promover ações com impacto duradouro</li>
                        </ul>
                    </article>
                </section>

                <!-- Informações de contato -->
                <section class="contact-section">
                    <h2 class="section__title">Entre em Contato</h2>
                    <div class="grid grid-cols-2">
                        <div class="contact-info">
                            <address>
                                <p><strong>Endereço:</strong> Rua da Esperança, 123 - Centro - São Paulo/SP - CEP: 01234-567</p>
                                <p><strong>Telefone:</strong> <a href="tel:+551133334444">(11) 3333-4444</a></p>
                                <p><strong>WhatsApp:</strong> <a href="https://wa.me/5511999887766">(11) 99988-7766</a></p>
                                <p><strong>E-mail:</strong> <a href="mailto:contato@esperancaviva.org.br">contato@esperancaviva.org.br</a></p>
                            </address>
                        </div>
                        
                        <div class="contact-hours">
                            <h3>Horário de Atendimento</h3>
                            <p>Segunda a Sexta: 8h às 18h</p>
                            <p>Sábados: 9h às 13h</p>
                        </div>
                    </div>
                </section>

                <!-- Redes sociais -->
                <section class="social-section">
                    <h3 class="section__subtitle">Siga-nos nas Redes Sociais</h3>
                    <ul class="social-list">
                        <li><a href="https://facebook.com/esperancaviva" target="_blank" rel="noopener" class="social-link">Facebook</a></li>
                        <li><a href="https://instagram.com/esperancaviva" target="_blank" rel="noopener" class="social-link">Instagram</a></li>
                        <li><a href="https://youtube.com/esperancaviva" target="_blank" rel="noopener" class="social-link">YouTube</a></li>
                        <li><a href="https://linkedin.com/company/esperancaviva" target="_blank" rel="noopener" class="social-link">LinkedIn</a></li>
                    </ul>
                </section>
            </div>
        `;
    }

    projetos() {
        const projetos = [
            {
                titulo: 'Educação para Todos',
                imagem: 'imagens/projeto1.jpg',
                publico: 'Crianças e adolescentes de 6 a 17 anos',
                descricao: 'Oferecemos reforço escolar, oficinas de leitura, informática e idiomas para crianças em situação de vulnerabilidade social. O projeto atende mais de 200 alunos anualmente.',
                impacto: '95% dos alunos melhoraram o desempenho escolar e 80% foram aprovados no ano letivo.',
                localizacao: 'Zona Leste de São Paulo'
            },
            {
                titulo: 'Capacitação Profissional',
                imagem: 'imagens/projeto2.jpg',
                publico: 'Jovens de 16 a 24 anos',
                descricao: 'Cursos gratuitos de qualificação profissional em áreas como informática, administração, vendas, design gráfico e assistente administrativo, com foco na empregabilidade.',
                impacto: '70% dos formandos conquistaram emprego ou estágio em até 6 meses após conclusão.',
                localizacao: 'Centro de São Paulo'
            },
            {
                titulo: 'Alimentação Solidária',
                imagem: null,
                publico: 'Famílias em situação de insegurança alimentar',
                descricao: 'Distribuição mensal de cestas básicas e refeições comunitárias para famílias em situação de vulnerabilidade, beneficiando aproximadamente 150 famílias por mês.',
                impacto: 'Mais de 500 pessoas atendidas mensalmente com alimentação de qualidade.',
                localizacao: 'Diversas comunidades de São Paulo'
            }
        ];

        const projetosHTML = projetos.map(projeto => `
            <article class="card">
                ${projeto.imagem ? `<img src="${projeto.imagem}" alt="${projeto.titulo}" class="card__image">` : ''}
                <h3 class="card__title">${projeto.titulo}</h3>
                <p><strong>Público-alvo:</strong> ${projeto.publico}</p>
                <p><strong>Descrição:</strong> ${projeto.descricao}</p>
                <p><strong>Impacto:</strong> ${projeto.impacto}</p>
                <p><strong>Localização:</strong> ${projeto.localizacao}</p>
            </article>
        `).join('');

        return `
            <div class="container">
                <section class="page-header">
                    <h1 class="page-header__title">Nossos Projetos Sociais</h1>
                    <p class="page-header__subtitle">Conheça as iniciativas que estão transformando a vida de milhares de pessoas.</p>
                </section>

                <section class="grid grid-cols-1">
                    ${projetosHTML}
                </section>

                <section style="text-align: center; margin-top: 3rem;">
                    <h2>Como Você Pode Ajudar</h2>
                    <p>Sua contribuição é fundamental para mantermos e expandirmos nossos projetos sociais.</p>
                    <a href="#cadastro" class="btn" style="margin-top: 1rem;">Cadastre-se como Voluntário</a>
                </section>
            </div>
        `;
    }

    cadastro() {
        return `
            <div class="container">
                <section class="page-header">
                    <h1 class="page-header__title">Cadastro de Voluntários</h1>
                    <p class="page-header__subtitle">Preencha o formulário abaixo e faça parte da nossa equipe!</p>
                </section>

                <!-- Mensagens de feedback -->
                <div id="formMessages" style="margin-bottom: 2rem;"></div>

                <form id="volunteerForm" class="volunteer-form" novalidate>
                    <!-- Dados Pessoais -->
                    <fieldset>
                        <legend>Dados Pessoais</legend>
                        
                        <div class="form-group">
                            <label for="nome">Nome Completo: *</label>
                            <input type="text" id="nome" name="nome" required minlength="3" maxlength="100">
                            <span class="error-message" data-field="nome"></span>
                        </div>

                        <div class="form-group">
                            <label for="email">E-mail: *</label>
                            <input type="email" id="email" name="email" required>
                            <span class="error-message" data-field="email"></span>
                        </div>

                        <div class="form-group">
                            <label for="telefone">Telefone: *</label>
                            <input type="tel" id="telefone" name="telefone" required pattern="\\(\\d{2}\\) \\d{4,5}-\\d{4}" placeholder="(00) 00000-0000">
                            <span class="error-message" data-field="telefone"></span>
                        </div>

                        <div class="form-group">
                            <label for="dataNascimento">Data de Nascimento: *</label>
                            <input type="date" id="dataNascimento" name="dataNascimento" required>
                            <span class="error-message" data-field="dataNascimento"></span>
                        </div>
                    </fieldset>

                    <!-- Área de Interesse -->
                    <fieldset>
                        <legend>Informações de Voluntariado</legend>
                        
                        <div class="form-group">
                            <label for="area">Área de Interesse: *</label>
                            <select id="area" name="area" required>
                                <option value="">Selecione uma área</option>
                                <option value="educacao">Educação</option>
                                <option value="saude">Saúde</option>
                                <option value="cultura">Cultura e Arte</option>
                                <option value="alimentacao">Alimentação</option>
                                <option value="administrativo">Administrativo</option>
                                <option value="ti">Tecnologia da Informação</option>
                            </select>
                            <span class="error-message" data-field="area"></span>
                        </div>

                        <div class="form-group">
                            <label for="motivacao">Por que deseja ser voluntário? *</label>
                            <textarea id="motivacao" name="motivacao" rows="5" required minlength="20"></textarea>
                            <span class="error-message" data-field="motivacao"></span>
                        </div>
                    </fieldset>

                    <!-- Termos -->
                    <fieldset>
                        <legend>Termos e Condições</legend>
                        
                        <div class="form-group">
                            <input type="checkbox" id="termos" name="termos" required>
                            <label for="termos">Li e aceito os termos de uso e política de privacidade *</label>
                            <span class="error-message" data-field="termos"></span>
                        </div>
                    </fieldset>

                    <!-- Botões -->
                    <div class="form-actions">
                        <button type="submit" class="btn btn-primary">Enviar Cadastro</button>
                        <button type="reset" class="btn btn-secondary">Limpar Formulário</button>
                    </div>
                </form>

                <p class="form-note"><small>* Campos obrigatórios</small></p>
            </div>
        `;
    }

    voluntarios() {
        return `
            <div class="container">
                <section class="page-header">
                    <h1 class="page-header__title">Voluntários cadastrados</h1>
                    <p class="page-header__subtitle">Veja os cadastros salvos no seu navegador (localStorage).</p>
                </section>

                <section class="volunteers-actions">
                    <button id="clearVolunteersBtn" class="btn btn-secondary">Limpar todos</button>
                </section>

                <section class="volunteers-list">
                    <div id="volunteersEmpty" class="empty-state" style="display:none;">
                        <p>Não há voluntários cadastrados ainda.</p>
                        <a href="#cadastro" class="btn">Fazer meu cadastro</a>
                    </div>

                    <div class="table-wrapper">
                        <table class="table" aria-describedby="volunteersCaption">
                            <caption id="volunteersCaption" class="sr-only">Tabela de voluntários cadastrados</caption>
                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>E-mail</th>
                                    <th>Telefone</th>
                                    <th>Área</th>
                                    <th>Data</th>
                                    <th>Ações</th>
                                </tr>
                            </thead>
                            <tbody id="volunteersBody"></tbody>
                        </table>
                    </div>
                </section>
            </div>
        `;
    }
}

export const templates = new Templates();

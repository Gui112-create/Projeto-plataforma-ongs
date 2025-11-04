/**
 * menu.js - Menu responsivo com botão hambúrguer
 * - Abre/fecha o menu mobile
 * - Fecha automaticamente ao clicar em um link
 * - Suporte a submenu dropdown
 * - Animação suave
 */

document.addEventListener('DOMContentLoaded', () => {
    // Elementos do DOM
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav__link');
    const body = document.body;

    // Verifica se os elementos existem
    if (!menuToggle || !nav) {
        console.warn('Menu toggle ou navegação não encontrados');
        return;
    }

    /**
     * Abre ou fecha o menu
     */
    function toggleMenu() {
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
        
        // Alterna estado do menu
        menuToggle.setAttribute('aria-expanded', !isExpanded);
        nav.classList.toggle('nav--open');
        
        // Previne scroll do body quando menu está aberto
        if (!isExpanded) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = '';
        }
    }

    /**
     * Fecha o menu
     */
    function closeMenu() {
        menuToggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('nav--open');
        body.style.overflow = '';
    }

    // Event listener para o botão hambúrguer
    menuToggle.addEventListener('click', toggleMenu);

    // Fecha o menu ao clicar em um link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Só fecha se estiver em mobile (menu toggle visível)
            if (window.getComputedStyle(menuToggle).display !== 'none') {
                closeMenu();
            }
        });
    });

    // Fecha o menu ao pressionar ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && nav.classList.contains('nav--open')) {
            closeMenu();
        }
    });

    // Fecha o menu ao clicar fora dele
    document.addEventListener('click', (e) => {
        if (nav.classList.contains('nav--open') && 
            !nav.contains(e.target) && 
            !menuToggle.contains(e.target)) {
            closeMenu();
        }
    });

    // Fecha o menu ao redimensionar para desktop
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            if (window.innerWidth > 768 && nav.classList.contains('nav--open')) {
                closeMenu();
            }
        }, 250);
    });

    /**
     * SUBMENU DROPDOWN (opcional - caso queira adicionar submenus)
     * Descomente este código se precisar de submenu
     */
    /*
    const menuItemsWithSubmenu = document.querySelectorAll('.nav__item--has-submenu');
    
    menuItemsWithSubmenu.forEach(item => {
        const link = item.querySelector('.nav__link');
        const submenu = item.querySelector('.nav__submenu');
        
        if (link && submenu) {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const isOpen = item.classList.contains('nav__item--open');
                
                // Fecha todos os outros submenus
                menuItemsWithSubmenu.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('nav__item--open');
                    }
                });
                
                // Alterna o submenu atual
                item.classList.toggle('nav__item--open');
            });
        }
    });
    */

    /**
     * Animação suave ao rolar para âncoras
     */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            
            // Ignora links vazios ou apenas '#'
            if (href === '#' || href === '') {
                e.preventDefault();
                return;
            }
            
            const targetElement = document.querySelector(href);
            
            if (targetElement) {
                e.preventDefault();
                
                // Fecha o menu se estiver aberto
                if (nav.classList.contains('nav--open')) {
                    closeMenu();
                }
                
                // Scroll suave até o elemento
                const headerOffset = 80; // Altura do header fixo
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    /**
     * Destaque do link ativo baseado na posição do scroll
     */
    function highlightActiveLink() {
        const sections = document.querySelectorAll('section[id], main[id]');
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('nav__link--active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('nav__link--active');
                    }
                });
            }
        });
    }
    
    // Atualiza link ativo ao rolar (opcional)
    // window.addEventListener('scroll', highlightActiveLink);

    console.log('✅ Menu responsivo inicializado com sucesso');
});

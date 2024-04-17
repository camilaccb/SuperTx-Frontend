// Função para mostrar a seção correspondente ao item de navegação clicado e atualizar a classe dos itens de navegação
function showSection(sectionId) {
    // Oculta todas as seções
    var sections = document.querySelectorAll('section');
    sections.forEach(function(section) {
        section.style.display = 'none';
    });
    
    // Remove a classe 'selected' de todos os itens de navegação
    var navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(function(item) {
        item.classList.remove('selected');
    });
    
    // Exibe a seção correspondente ao ID passado como parâmetro
    var sectionToShow = document.querySelector('.' + sectionId);
    sectionToShow.style.display = 'block';
    
    // Adiciona a classe 'selected' ao item de navegação clicado
    var clickedNavItem = document.querySelector('.nav-item[data-section="' + sectionId + '"]');
    clickedNavItem.classList.add('selected');
}

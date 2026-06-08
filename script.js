// 1. Controle do Modo Escuro (Dark Mode)
const toggleButton = document.getElementById('toggle-dark-mode');

toggleButton.addEventListener('click', () => {
    // Verifica qual tema está ativo e inverte
    if (document.body.getAttribute('data-theme') === 'dark') {
        document.body.removeAttribute('data-theme');
        toggleButton.textContent = '🌓 Modo Escuro';
    } else {
        document.body.setAttribute('data-theme', 'dark');
        toggleButton.textContent = '☀️ Modo Claro';
    }
});

// 2. Barra de Pesquisa Dinâmica (Galeria de Aulas)
const searchBar = document.getElementById('search-bar');
const cardsAula = document.querySelectorAll('.card-aula');

searchBar.addEventListener('keyup', (e) => {
    const termoBusca = e.target.value.toLowerCase();

    cardsAula.forEach(card => {
        const conteudoCard = card.getAttribute('data-title');
        // Se o termo pesquisado estiver no atributo data-title, mostra o card, senão esconde
        if (conteudoCard.includes(termoBusca)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

// 3. Envio do Formulário de Cadastro
const form = document.getElementById('form-ministro');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Impede a página de recarregar
    
    const nome = document.getElementById('nome').value;
    const funcao = document.getElementById('funcao').value;

    // Feedback visual para o usuário
    alert(`Sucesso! ${nome} foi escalado(a) como ${funcao.toUpperCase()}.`);
    
    form.reset(); // Limpa o formulário
});

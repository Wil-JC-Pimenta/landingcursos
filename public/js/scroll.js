
// Função para verificar se a página chegou ao final
function isPageBottom() {
    return window.innerHeight + window.scrollY >= document.body.offsetHeight;
}

// Função para realizar o scroll automático
function scrollToBottom() {
    // Verifica se a página chegou ao final
    if (isPageBottom()) {
        // Faz o scroll para o final da página suavemente
        window.scrollTo({
            top: document.body.offsetHeight,
            behavior: 'smooth'
        });
    }
}

// Adiciona um listener para o evento de scroll
window.addEventListener('scroll', scrollToBottom);

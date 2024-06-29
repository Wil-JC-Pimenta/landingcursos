// Função para simular o efeito de máquina de escrever
function typeWriterEffect(element, speed) {
    const text = element.innerHTML.trim(); // Texto dentro da div
    element.innerHTML = ''; // Limpar o texto inicial

    let i = 0;
    const timer = setInterval(function() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(timer);
        }
    }, speed); // Velocidade da digitação em milissegundos
}

// Selecionar o elemento e chamar a função de efeito de máquina de escrever
const element = document.getElementById('texto-maquina-escrever');
if (element) {
    typeWriterEffect(element, 150); // 50 milissegundos de intervalo entre cada caractere
}

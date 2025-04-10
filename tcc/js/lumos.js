// Adiciona evento de clique a cada cartão
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function () { // Removida a vírgula
        const targetPage = this.dataset.page; // 'this' se refere ao cartão clicado
        this.classList.add('card-fullscreen');
        setTimeout(() => {
            this.classList.add('expand');
            setTimeout(() => {
                window.location.href = targetPage;
            }, 500);
        }, 100);
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav");

    menuToggle.addEventListener("click", function () {
        nav.classList.toggle("active");
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    const menuLinks = document.querySelectorAll('nav ul li a');
    
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active'); // Ativa/desativa o menu
    });

    // Trocar a cor de fundo do menu quando clicar em um link
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.toggle('change-bg'); // Muda a cor de fundo do menu
        });
    });
});

// Seleciona os botões e a notificação
const increaseFontButton = document.getElementById('increase-font');
const decreaseFontButton = document.getElementById('decrease-font');
const notification = document.getElementById('notification');

// Define o tamanho da fonte padrão
let fontSize = 16; // Tamanho da fonte em pixels

// Função para mostrar a notificação
function showNotification() {
    notification.style.display = 'block'; // Mostra a notificação
    setTimeout(() => {
        notification.style.display = 'none'; // Esconde a notificação após 3 segundos
    }, 3000);
}

// Função para aumentar o tamanho da fonte
increaseFontButton.addEventListener('click', () => {
    fontSize += 2; // Aumenta o tamanho da fonte em 2px
    document.body.style.fontSize = fontSize + 'px'; // Aplica o novo tamanho
    showNotification(); // Mostra a notificação
});

// Função para diminuir o tamanho da fonte
decreaseFontButton.addEventListener('click', () => {
    fontSize = Math.max(12, fontSize - 2); // Diminui o tamanho da fonte em 2px, mas não permite que fique menor que 12px
    document.body.style.fontSize = fontSize + 'px'; // Aplica o novo tamanho
    showNotification(); // Mostra a notificação
});


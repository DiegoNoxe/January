const segundos = () => 
{
    const clock = document.getElementsByClassName('clock')[0];
    const startDate = new Date(2007, 0, 10, 19, 50, 0);
    const now = new Date();
    const diferenca = now - startDate;
    const seconds = Math.floor(diferenca / 1000).toLocaleString('pt-BR');
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24)); 
    clock.innerHTML = `Você viveu até agora: ${seconds} segundos! Isso equivale a ${dias} repletos dias de histórias!`;
};

segundos();

setInterval(() => {
    segundos();
}, 1000);

///////////////////////////////////////////////////

const menu = document.getElementById('K2');
const nav = document.querySelector('nav ul');


menu.addEventListener('click', () => 
{
    nav.classList.add ('menuAltera'); 
    menu.style.display = 'none';
});
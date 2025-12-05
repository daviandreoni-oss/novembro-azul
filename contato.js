document.addEventListener("DOMContentLoaded", function(){
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault();


    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;    

    const numeroWhatsapp = "5511999999999";

    const texto = 'Olá, meu nome é ${nome}. Meu e-mail é ${email}. Mensagem: ${mensagem}';

    const url = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank");

    form.requestFullscreen();


    });
});
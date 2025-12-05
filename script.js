document.addEventListener("DOMContentLoaded", function(){
    const btn = document.getElementById("infoBtn");
    const extraInfo = document.getElementById("extraInfo");

    btn.addEventListener("click", function(){
        if (extraInfo.classList.contains("hidden")){
            extraInfo.classList.remove("hidden");
            btn.textContent = "Mostrar Menos";

        } else{
            extraInfo.classList.add("hidden");
            btn.textContent = "Saiba Mais";
        }
    })
})
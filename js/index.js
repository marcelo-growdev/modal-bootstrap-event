const botao = document.getElementById("botao-modal");
const minhaDiv = document.getElementById("minha-div");
const minhaModal = new bootstrap.Modal(document.getElementById('minha-modal'), {
    keyboard: false
  })

botao.addEventListener("click", function(){
    console.log("clicou no botao");
    minhaModal.show();
    minhaDiv.classList.remove("d-none");
});
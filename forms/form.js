document.addEventListener("DOMContentLoaded", function(){
    const form = document.getElementById("form-contact");

    form.addEventListener("submit", function(event){
        event.preventDefault();

        const formData = new FormData(form);

        fetch("http://localhost:3000/submit-form", {
            method: "POST",
            body: formData,
        })

        .then(() => {
            const mensagemsucesso = document.querySelector(".sent-message");
            mensagemsucesso.style.display = "block";
    
            form.reset();
          })
          .catch((error) => {
            console.error("Erro ao enviar formulário:", error);
    
            const mensagemerro = document.querySelector(".mensagem-erro");
            mensagemerro.style.display = "block";
          });
      });
    });
    
    
    
document.addEventListener("DOMContentLoaded", function(){

    const form = this.documentElementById("formCadastroJogo");
   
    form.addEventListener("submit", function(event){
       event.preventDefault();
   
       const nomeJogo = document.getElementById("nomeJogo").value;
       const anoLancamento = document.getElementById("anoLancamento").value;
       const numeroJogadores = document.getElementById("numeroJogadores").value;
   
       fetch('http://localhost:8080/api/jogo', {
           method: 'POST',
           headers: {
               'Content-Type':'application/json'
           },
           body: JSON.stringify({
               nomeJogo,
               anoLancamento,
               numeroJogadores
           })
       })
   
           .then(response => {
               if (!response.ok){
                   throw new Error('Erro ao cadastrar o jogo');
               }
               return response.json();
           })
    })
   
           .catch(error => {
               console.error('Erro no momento de cadastrar', error);
               alert('Nao foi possivel cadastrar o jogo, tente novamente.');
           }
           )
   
   })
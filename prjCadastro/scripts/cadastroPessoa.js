document.addEventListener("DOMContentLoaded", function(){

 const form = this.documentElementById("formCadastroPessoa");

 form.addEventListener("submit", function(event){
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;
    const senha = document.getElementById("senha").value;

    fetch('http://localhost:8080/api/pessoas', {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            nome,
            idade,
            senha
        })
    })

        .then(response => {
            if (!response.ok){
                throw new Error('Erro ao cadastrar o jogador');
            }
            return response.json();
        })
        .then(data => {
            localStorage.setItem('pessoaId', data.id);

            window.location.href = './pages/jogo.html'
        })
 })

        .catch(error => {
            console.error('Erro no momento de cadastrar', error);
            alert('Nao foi possivel cadastrar o jogador, tente novamente.');
        }
        )

})
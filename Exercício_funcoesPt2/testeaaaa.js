document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("cadastroClienteForm");

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const nome_usuario = document.getElementById("nome").value;
        const cpf = document.getElementById("cpf").value;
        const email = document.getElementById("email").value;
        const tel = document.getElementById("telefone").value;
        const dt_nascimento = document.getElementById("dt_nascimento").value;
        const senha = document.getElementById("senha").value;

        try {
            const response = await fetch("http://localhost:8080/usuarios", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    nome_usuario: nome_usuario,
                    cpf: cpf,
                    email: email,
                    tel: tel,
                    dt_nascimento: dt_nascimento,
                    senha: senha,
                    tipoUsuario: {
                        id: 2
                    }
                }),
            });

            then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Erro ao cadastrar usuário');
                }
            })
                .then(data => {
                    alert('Usuário cadastrado com sucesso!\nNomeUsuario: ' + data.nome_usuario);
                    window.location.href = 'index.html';
                })


            if (!response.ok) {
                throw new Error('Erro ao cadastrar pessoa');
            }

            const data = await response.json();

            localStorage.setItem('pessoaId', data.idUsuario); 
            window.location.href = './cadastroendereco.html';

        } catch (error) {
            console.error('Erro no cadastro:', error);
            alert('Falha ao cadastrar pessoa. Tente novamente.');
        }
    });
})
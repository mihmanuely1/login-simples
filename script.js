let usuarioCorreto = "camily"
let senhaCorreta = "1234"

function login() {
  let usuario = document.getElementById("usuario").value.toLowerCase()
  let senha = document.getElementById("senha").value
  let mensagem = document.getElementById("mensagem")

  console.log("Digitado:", usuario, senha)

  if (usuario === usuarioCorreto && senha === senhaCorreta) {
    mensagem.innerText = "Login bem-sucedido 💖"
    mensagem.style.color = "green"
  } else {
    mensagem.innerText = "Erro no login ❌"
    mensagem.style.color = "red"
  }
}
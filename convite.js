// Evento para o botão "Confirmar Presença"
document.getElementById("sendEmailBtn").addEventListener("click", function() {
    // Obtém o valor do nome do campo de entrada
    const name = document.getElementById("name").value;

    // Verifica se o campo de nome está preenchido
    if (!name) {
        alert("Por favor, insira seu nome antes de confirmar.");
        return;
    }

    // Desativa o botão para evitar múltiplos cliques
    const button = document.getElementById("sendEmailBtn");
    button.disabled = true;

    // Parâmetros do e-mail
    const templateParams = {
        name: name,
        to_email: "droprozolem@outlook.com", // Substitua pelo seu e-mail
        message: "Confirmação de presença no evento Save the Date"
    };

    // Envia o e-mail usando EmailJS
    emailjs.send("service_bo4k0s5", "template_bad8mw8", templateParams)
        .then(function(response) {
            // Redireciona para a nova página imediatamente após o envio do e-mail
            window.location.href = "pagina_de_confirmaçao_index.html"; // Substitua pela URL da nova página
        })
        
        .catch(function(error) {
            console.error("Erro ao enviar o e-mail:", error);
            alert("Erro ao enviar o e-mail. Tente novamente.");
            button.disabled = false; // Reativa o botão em caso de erro
        });
});
console.log('HEADERS', req.headers);
console.log('USER AGENT', req.headers['user-agent']);
export function middleware(req) {
    console.log('Middleware triggered');
    console.log('Headers:', req.headers);
    return NextResponse.next();
  }
  export async function getServerSideProps(context) {
    console.log('HEADERS:', context.req.headers);
    console.log('USER-AGENT:', context.req.headers['user-agent']);
    return { props: {} };
  }
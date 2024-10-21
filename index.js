const div = document.getElementById("Corpo");
div.remove();
const div1 = document.querySelector(".paragrafo1");
div1.remove();
function Entrar(){
    const Dicanome = document.getElementById("dicanome");
    const Dicanumero = document.getElementById("dicanumero");
    const nome = document.getElementById("nomeDoUsuario").value;
    const numero = document.getElementById("numeroDoUsuario").value;
    if (nome ==="" || numero===""){
       if (nome ===""){
           Dicanome.innerHTML ="O Campo do nome esta vazio por favor <br> digita o seu nome?"
           Dicanome.style.color= "red";    
        setTimeout(() => {
           Dicanome.innerHTML ="Digita seu nome completo"
           Dicanome.style.color="White";
        }, 4000);
       }if(numero==""){
        Dicanumero.innerHTML ="O Campo do numero esta vazio por favor <br> digita o seu numero?";
        Dicanumero.style.color="red"
        setTimeout(() => {
            Dicanumero.innerHTML ='Digita o seu numero da <span style="font-weight: 1000; color: red;">Vodacom</span>'
            Dicanumero.style.color="White"
        }, 4000);
       }
    }
}
document.querySelector(".BotaoEntar").addEventListener("click", function(){
   window.location.href="index3.html";
})

function E_mola() {
    const mola = document.createElement("div");
    mola.innerHTML = '<p>Ola Para continuar com o Pagamento basta trasferir o valor desejado para o numero <a style="text-decoration: none;" href="tel:874006962"><span style="color: rgb(34, 255, 0); font-weight: 800; font-size: 16px;"><br>874006962 <br> Nome: Alcidio Ruben Macuacua</span>  <br>NB: Introduz o numero o Qual pretende receber os megas no conteudo da trasacao</p>';
    mola.className = "como1";
    document.body.appendChild(mola);
    
}
function M_pesa() {
    const M_pesa = document.createElement("div");
    M_pesa.className = "como";
    document.body.appendChild(M_pesa);
    M_pesa.innerHTML = '<p>Ola Para continuar com o Pagamento basta trasferir o valor desejado para o numero <a style="text-decoration: none;" href="tel:857733693"><span style="color: rgb(34, 255, 0); font-weight: 800; font-size: 16px;"><br>857733693 <br> Nome: Alcidio Ruben Macuacua</span></p>';
    
}

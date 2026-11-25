// 1. máscara do WhatsApp: vai formatando como (11) 90000-0000
const zap = document.querySelector("#zap");

zap.addEventListener("input", function () {
  let n = zap.value.replace(/\D/g, "").slice(0, 11); // só números, no máximo 11
  if (n.length > 7) {
    n = "(" + n.slice(0, 2) + ") " + n.slice(2, 7) + "-" + n.slice(7);
  } else if (n.length > 2) {
    n = "(" + n.slice(0, 2) + ") " + n.slice(2);
  }
  zap.value = n;
});

// 2. ao enviar o formulário: mostra um aviso e limpa os campos
// (só simula, não manda a mensagem pra lugar nenhum)
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // impede a página de recarregar

  const nome = document.querySelector("#nome").value;
  const aviso = document.createElement("p");
  aviso.className = "aviso";
  aviso.textContent = "Obrigado, " + nome + "! Recebi sua mensagem.";
  form.appendChild(aviso);
  form.reset();

  setTimeout(function () {
    aviso.remove(); // some depois de 4 segundos
  }, 4000);
});

// 3. botão voltar ao topo
const btnTopo = document.querySelector("#btnTopo");

window.addEventListener("scroll", function () {
  if (window.scrollY > 400) {
    btnTopo.style.display = "block";
  } else {
    btnTopo.style.display = "none";
  }
});

btnTopo.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

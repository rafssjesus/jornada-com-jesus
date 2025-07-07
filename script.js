const introducao = `Você é alguém que acabou de conhecer Jesus e quer transformar sua vida, cuidando não só da alma, mas também do corpo. Suas decisões diárias vão mostrar como essa transformação acontece!`;

const perguntas = [
  {
    descricao: "Você está iniciando uma jornada que une fé e cuidado com o corpo. Vamos refletir sobre suas escolhas.",
    texto: "Qual é sua atitude ao acordar?",
    opcoes: [
      { texto: "Oro e faço um café da manhã nutritivo", valor: "a" },
      { texto: "Penso nas preocupações e já como qualquer coisa rápida", valor: "b" },
      { texto: "Vou direto à rotina, sem pensar na alimentação ou na oração", valor: "c" },
    ],
  },
  {
    descricao: "Relacionar-se bem com as pessoas que amamos é fundamental para a paz interior.",
    texto: "Como você trata sua família e amigos?",
    opcoes: [
      { texto: "Com amor, paciência e escuto suas necessidades", valor: "a" },
      { texto: "Às vezes com dificuldade, mas tento melhorar", valor: "b" },
      { texto: "Com impaciência e pouco tempo para escutar", valor: "c" },
    ],
  },
  {
    descricao: "A leitura da Bíblia e a reflexão diária alimentam a alma e fortalecem a fé.",
    texto: "Você dedica tempo à leitura da Bíblia e à reflexão?",
    opcoes: [
      { texto: "Diariamente, buscando sabedoria para alma e corpo", valor: "a" },
      { texto: "De vez em quando, quando sobra um tempo", valor: "b" },
      { texto: "Nunca, acho difícil conciliar", valor: "c" },
    ],
  },
  {
    descricao: "O cuidado com a alimentação reflete o amor próprio e a valorização do corpo que Deus nos deu.",
    texto: "Como você cuida da sua alimentação?",
    opcoes: [
      { texto: "Escolho alimentos naturais e equilibrados, sem exageros", valor: "a" },
      { texto: "Tento comer bem, mas às vezes pego comidas rápidas e processadas", valor: "b" },
      { texto: "Não presto muita atenção na alimentação", valor: "c" },
    ],
  },
  {
    descricao: "Todos enfrentamos falhas e desafios, mas a forma como reagimos faz a diferença.",
    texto: "Como reage às falhas e desafios pessoais?",
    opcoes: [
      { texto: "Peço perdão a Deus e busco recomeçar com fé e disciplina", valor: "a" },
      { texto: "Às vezes me culpo, mas tento melhorar", valor: "b" },
      { texto: "Fico desanimado e desisto com facilidade", valor: "c" },
    ],
  },
];

let etapa = -1;
const escolhas = [];

function iniciar() {
  document.getElementById("intro").innerText = introducao;
  document.getElementById("descricao").innerText = "";
  document.getElementById("pergunta").innerText = "";
  document.getElementById("botoes").innerHTML = `<button onclick="proximaPergunta()">Começar</button>`;
}

function proximaPergunta() {
  etapa++;
  if (etapa < perguntas.length) {
    mostrarPergunta();
  } else {
    mostrarResultado();
  }
}

function mostrarPergunta() {
  const pergunta = perguntas[etapa];
  document.getElementById("intro").innerText = "";
  document.getElementById("descricao").innerText = pergunta.descricao;
  document.getElementById("pergunta").innerText = pergunta.texto;

  const botoes = document.getElementById("botoes");
  botoes.innerHTML = "";

  pergunta.opcoes.forEach((opcao) => {
    const btn = document.createElement("button");
    btn.innerText = opcao.texto;
    btn.onclick = () => responder(opcao.valor);
    botoes.appendChild(btn);
  });
}

function responder(valor) {
  escolhas.push(valor);
  proximaPergunta();
}

function mostrarResultado() {
  const aCount = escolhas.filter((r) => r === "a").length;
  const bCount = escolhas.filter((r) => r === "b").length;
  const cCount = escolhas.filter((r) => r === "c").length;

  let resultado = "";

  if (aCount > bCount && aCount > cCount) {
    resultado =
      "Você está no caminho da transformação completa — espiritual, emocional e física! A fé em Jesus te fortalece, e o cuidado com seu corpo reflete essa renovação. Você tem paz, equilíbrio e esperança para um futuro saudável e abençoado.";
  } else if (bCount >= aCount && bCount >= cCount) {
    resultado =
      "Sua jornada é real, com altos e baixos. Você reconhece a importância da fé e do cuidado, mas ainda luta contra a desmotivação e tentações. Continue firme, pois cada pequena vitória é um passo em direção à vida plena que Jesus oferece.";
  } else {
    resultado =
      "Sua caminhada está enfrentando dificuldades. Talvez você esteja desconectado do cuidado espiritual e físico, e isso está afetando seu bem-estar. Jesus está de braços abertos, pronto para te ajudar a recomeçar. Que tal buscar apoio e dar um passo de fé hoje?";
  }

  document.getElementById("intro").innerText = "";
  document.getElementById("descricao").innerText = "";
  document.getElementById("pergunta").innerText = resultado;

  document.getElementById("botoes").innerHTML =
    '<button onclick="reiniciar()">Recomeçar</button>';
}

function reiniciar() {
  etapa = -1;
  escolhas.length = 0;
  iniciar();
}

// Inicializa
iniciar();

// Cursor peixe de verdade 🐟
window.addEventListener('mousemove', () => {
  document.body.style.cursor =
    "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABH0lEQVRYR+2XvQ2DMBBFv1ogRYhGkYgRoYgRpIgRoIgRtI0Qe08rUTLHuSnz/ppzvvdzD4i8FgAFuBdQHgDHODfCB+AFrfCNdpLQA84T5jPBch/YBt5ZKRBtJ/EHaFWbPHBMyP0VZIp1TOnjlduXns1jA+V7Fv8aqVzERoOpXoB6j51fxKHINAk6n6V8Rp0JEn8LzCLVDcLC88EsT+i5VKHwYoUYRrdp2PtHJNR5FcS3bZME80K/bSOeUVHDyMycN1gq7YFkZX0W2IOlqFx9GqGkSxUwnuEbU7B43YOI/OnU9KumYAYdWGyw8dExoAAAAASUVORK5CYII=') 16 16, auto";
}, { once: true });

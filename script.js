const introducao = `Você é alguém que acabou de conhecer Jesus e quer transformar sua vida, cuidando não só da alma, mas também do corpo. Suas decisões diárias vão mostrar como essa transformação acontece!`;

const perguntas = [
  {
    imagem: 'https://cdn-icons-png.flaticon.com/512/565/565547.png',
    descricao: "Você está iniciando uma jornada que une fé e cuidado com o corpo. Vamos refletir sobre suas escolhas.",
    texto: "Qual é sua atitude ao acordar?",
    opcoes: [
      { texto: "Oro e faço um café da manhã nutritivo", valor: "a" },
      { texto: "Penso nas preocupações e como qualquer coisa", valor: "b" },
      { texto: "Vou direto à rotina, sem orar ou cuidar da alimentação", valor: "c" }
    ]
  },
  {
    imagem: 'https://cdn-icons-png.flaticon.com/512/786/786453.png',
    descricao: "Relacionar-se bem com as pessoas que amamos é fundamental para a paz interior.",
    texto: "Como você trata sua família e amigos?",
    opcoes: [
      { texto: "Com amor e paciência", valor: "a" },
      { texto: "Às vezes com dificuldade, mas tento melhorar", valor: "b" },
      { texto: "Com impaciência e distância", valor: "c" }
    ]
  },
  {
    imagem: 'https://cdn-icons-png.flaticon.com/512/3534/3534060.png',
    descricao: "A leitura da Bíblia e a reflexão alimentam a alma.",
    texto: "Você dedica tempo à Bíblia?",
    opcoes: [
      { texto: "Diariamente, com oração", valor: "a" },
      { texto: "De vez em quando", valor: "b" },
      { texto: "Nunca, ainda não criei esse hábito", valor: "c" }
    ]
  },
  {
    imagem: 'https://cdn-icons-png.flaticon.com/512/1049/1049166.png',
    descricao: "Cuidar da alimentação reflete amor-próprio e gratidão.",
    texto: "Como você cuida da alimentação?",
    opcoes: [
      { texto: "Alimentos naturais e equilibrados", valor: "a" },
      { texto: "Tento me alimentar bem, às vezes escapo", valor: "b" },
      { texto: "Não penso muito nisso", valor: "c" }
    ]
  },
  {
    imagem: 'https://cdn-icons-png.flaticon.com/512/991/991950.png',
    descricao: "Todos enfrentamos desafios, mas como reagimos importa.",
    texto: "Como você lida com falhas pessoais?",
    opcoes: [
      { texto: "Peço perdão e recomeço com fé", valor: "a" },
      { texto: "Me culpo, mas tento seguir", valor: "b" },
      { texto: "Desisto fácil e me afasto", valor: "c" }
    ]
  }
];

let etapa = -1;
const escolhas = [];

function iniciar() {
  document.getElementById("intro").innerText = introducao;
  document.getElementById("descricao").innerText = "";
  document.getElementById("pergunta").innerText = "";
  document.getElementById("imagem-topo").src = "";
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
  document.getElementById("imagem-topo").src = pergunta.imagem;

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
  const som = document.getElementById("somClique");
  som.currentTime = 0;
  som.play();

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
      "Você está no caminho da transformação completa — espiritual, emocional e física! Continue com fé e disciplina, e verá frutos incríveis dessa jornada com Jesus.";
  } else if (bCount >= aCount && bCount >= cCount) {
    resultado =
      "Sua caminhada é real, com altos e baixos. Continue buscando Jesus e faça escolhas saudáveis. A transformação vem com persistência!";
  } else {
    resultado =
      "Sua fé está em início de construção e precisa de fortalecimento. Jesus está com você! Recomece hoje e cuide de si com amor e esperança.";
  }

  document.getElementById("intro").innerText = "";
  document.getElementById("descricao").innerText = "";
  document.getElementById("pergunta").innerText = resultado;
  document.getElementById("imagem-topo").src = "https://cdn-icons-png.flaticon.com/512/4359/4359603.png";
  document.getElementById("botoes").innerHTML =
    '<button onclick="reiniciar()">Recomeçar</button>';
}

function reiniciar() {
  etapa = -1;
  escolhas.length = 0;
  iniciar();
}

// Cursor cruz cristã ✝️
window.addEventListener('mousemove', () => {
  document.body.style.cursor =
    "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAtElEQVRYR+2X0QmAIAhFC98Q5H3/3Yl6sBLqLCaNaG8tuMcsyENM4e8iO+OMFGDIn1UAGz3QAwxkC4GeYuQns0clBznwZXgK3vDkDHR0tdhNMGcGRNlsA3+jMgEgi8opPiViNK6BIEpy8ZErCtwVjQYB20PAGJ1o2okE04cGUev5Yg2XBkQq8w3fN80kk3k0s7RpsHPj5k1Z7duJx0mgjL+y1NDhn8moyAAAAABJRU5ErkJggg==') 16 16, auto";
}, { once: true });

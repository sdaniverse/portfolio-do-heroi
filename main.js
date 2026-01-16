// Missão 1
const heroi = {
    nome: "Danielle Pinheiro",
    classe: "Aspirante a Dev",
    nivel: 1,
    vida: 100,
    mana: 50,
    ouro: 10,
    xp: 0
};

alert(
    `FICHA DO HERÓI\n` +
    `\n` +
    `Nome: ${heroi.nome}\n` +
    `Classe: ${heroi.classe}\n` +
    `\n` +
    `XP: ${heroi.xp}\n` +
    `Nível: ${heroi.nivel}\n` +
    `Ouro: ${heroi.ouro}\n` +
    `Vida: ${heroi.vida}\n` +
    `Mana: ${heroi.mana}\n`
);

console.log(`Herói: ${heroi.nome}, Classe: ${heroi.classe}, Nível: ${heroi.nivel}, Vida: ${heroi.vida}, Ouro: ${heroi.ouro}`);

// Missão 2
let tituloHeroi = "";
let nivelHeroi = 0;

for (let i = 1; i <= 10; i++) {
    heroi.xp += 100;
}

if (heroi.xp < 1000) {
    nivelHeroi = 1;
    tituloHeroi = "Novato";
} else {
    nivelHeroi = 20;
    tituloHeroi = "Veterano";
}

alert(
    `Fim das 10 batalhas!\n` +
    `\n` +
    `Nível: ${nivelHeroi}\n` +
    `Título: ${tituloHeroi}`
);

// Missão 3
function subirNivel(xpAtual) {
    if (xpAtual < 1000) return 1;
    if (xpAtual < 2000) return 5;
    if (xpAtual < 3000) return 10;
    return 20;
}

function formatarFicha(personagem) {
    return `--- FICHA DO HERÓI ---
Nome: ${personagem.nome}
Classe: ${personagem.classe}
Nível: ${personagem.nivel}
XP: ${personagem.xp}
Ouro: ${personagem.ouro}`;
}

// Missão 5
const elNome = document.querySelector("#hero-nome");
const elClasse = document.querySelector("#hero-classe");
const elNivel = document.querySelector("#hero-nivel");
const elXp = document.querySelector("#hero-xp");
const btnXp = document.querySelector("#btn-xp");

// atualizar a tela
function atualizarInterface() {
    elNome.textContent = heroi.nome;
    elClasse.textContent = heroi.classe;
    elNivel.textContent = heroi.nivel;
    elXp.textContent = heroi.xp;
}

if (btnXp) {
    btnXp.addEventListener("click", () => {
        heroi.xp += 100;
        
        const novoNivel = subirNivel(heroi.xp);
        
        if (novoNivel > heroi.nivel) {
            heroi.nivel = novoNivel;
            alert(`Você subiu para o nível ${heroi.nivel}!`);
        }
        
        atualizarInterface();
    });
}

// Missão 6
const btnOraculo = document.querySelector("#btn-oraculo");

async function consultarOraculo() {
    try {
        const resposta = await fetch("https://api.chucknorris.io/jokes/random");
        const dados = await resposta.json();
        alert("Piada mágica: " + dados.value);
    } catch (erro) {
        console.error("Erro ao buscar piada", erro);
        alert("Falha ao invocar a magia remota.");
    }
}

if (btnOraculo) {
    btnOraculo.addEventListener("click", consultarOraculo);
}

// inicialização
atualizarInterface();
const navbar = document.querySelector('.navbar');
const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
const navLinks = document.querySelector('.nav-links');
const overlay = document.querySelector('.overlay');
let isMenuOpen = false;

// Scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Toggle mobile menu
function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    mobileNavToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
}

mobileNavToggle.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (isMenuOpen) toggleMenu();
    });
});

// Close menu on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isMenuOpen) toggleMenu();
});

// Prevent scroll when menu is open
window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && isMenuOpen) {
        toggleMenu();
    }
});


class CartasMisticas {
    constructor() {
        // Elementos DOM
        this.containerCartas = document.getElementById("cards-container");
        this.containerMensagem = document.getElementById("message-container");
        this.tituloMensagem = document.getElementById("message-title");
        this.textoMensagem = document.getElementById("message-text");
        this.botaoEmbaralhar = document.getElementById("reshuffle-btn");
        this.canvas = document.getElementById("particle-canvas");
        this.ctx = this.canvas.getContext("2d");
        
        this.cartasTiradas = 0;
        this.limiteCartas = 3;
        this.tempoEspera = 24 * 60 * 60 * 1000; // 24 horas em milissegundos
        this.ultimaLeitura = null;
        this.intervaloContador = null;

        this.carregarEstado();
        // Dados das cartas
        this.cartas = [
            {
                symbol: "",
                title: "Três de Espadas",
                description: "Coração partido",
                fortune: "Dor emocional aguda está presente, mas esta ferida é necessária para crescimento. A cura começa quando você enfrenta a verdade, não quando foge dela. Esta tempestade vai passar."
            },
             {
                symbol: "",
                title: "O Diabo",
                description: "Ilusões e vícios",
                fortune: "Cuidado com correntes invisíveis. O Diabo expõe dependências emocionais, materiais ou toxidades que você insiste em manter. Você tem o poder de se libertar, mas primeiro precisa enxergar as algemas. Questionamento radical é necessário."
            },
            {
                symbol: "",
                title: "O Louco",
                description: "Liberdade e novos começos",
                fortune: "Abrace o desconhecido com coragem. O Louco representa saltos de fé e a pureza do início. Não carregue bagagens do passado: a vida é uma aventura a ser vivida, não controlada. Risco e recompensa andam de mãos dadas."
            },
            {
                symbol: "",
                title: "A Morte",
                description: "Transformação radical e fim de ciclos",
                fortune: "Não tema o fim, pois ele traz renascimento. A Morte anuncia a queda do que já não serve à sua evolução - relacionamentos, empregos ou crenças. É hora de liberar o passado para dar espaço ao novo. A dor é passageira; a transformação, eterna."
            },
            {
                symbol: "",
                title: "O Enforcado",
                description: "Sacrifício e nova perspectiva",
                fortune: "A estagnação atual é um convite à mudança de visão. O Enforcado pede pausa, entrega e aceitação. Você não está perdido, apenas vendo a vida de cabeça para baixo. A sabedoria vem quando você para de lutar."
            },
            {
                symbol: "",
                title: "Dez de Espadas",
                description: "Fim doloroso e rock bottom",
                fortune: "O fundo do poço chegou, mas também é o início da cura. Esta carta simboliza traição, perda total ou falência emocional. Você sobreviverá a isso. Agora, só resta reconstruir - com cicatrizes, mas mais sábio."
            },
            {
                symbol: "",
                title: "A Justiça",
                description: "Equilíbrio e karma",
                fortune: "Decisões importantes exigem clareza moral. A Justiça revela que toda ação tem consequências - agora é o momento de assumir responsabilidades. O universo está ajustando contas, e a verdade prevalecerá. Aja com integridade, mesmo que isso exija sacrifícios."
            },
            {
                symbol: "",
                title: "A Estrela",
                description: "Esperança e inspiração",
                fortune: "Você entra em um ciclo de cura profunda, onde a fé no futuro será restaurada. A Estrela indica um momento de conexão com o divino e com seu propósito. Confie no fluxo da vida: a serenidade retornará após tempos turbulentos."
            },
            {
                symbol: "",
                title: "A Lua",
                description: "Intuição e mistério",
                fortune: "Caminhos nebulosos se abrem à sua frente. Nem tudo é o que parece, e ilusões podem confundir seus julgamentos. A Lua convida à introspecção e escuta da voz interior. Sinais virão através dos sonhos e da sensibilidade. Cuidado com enganos ou autoengano."
            },
            {
                symbol: "",
                title: "O Sol",
                description: "Sucesso e positividade",
                fortune: "O Sol anuncia alegria genuína, clareza mental e êxito após desafios. Este é o momento para expressar quem você é com autenticidade. Progresso material e emocional estão ao seu alcance. A verdade será iluminada, e relações florescerão com leveza."
            },
            {
                symbol: "",
                title: "A Torre",
                description: "Mudança repentina",
                fortune: "Uma estrutura que já não sustenta sua evolução será abalada. A Torre não traz destruição gratuita, mas libertação. Aceite o colapso como necessário para renascer com mais força e autenticidade. O que é verdadeiro permanecerá; o que era ilusão, cairá."
            },
            {
                symbol: "",
                title: "O Mago",
                description: "Manifestação e poder",
                fortune: "Você possui todos os recursos — internos e externos — para iniciar algo grandioso. O Mago representa domínio da mente, ação consciente e o poder da palavra. É hora de transformar ideias em realidade, com intenção clara e alinhamento espiritual."
            },
            {
                symbol: "",
                title: "O Oceano",
                description: "Emoções e intuição",
                fortune: "O Oceano, como arquétipo, fala da vastidão emocional e do inconsciente coletivo. Ele pede rendição ao sentir, à empatia e ao acolhimento. Há uma necessidade de cura ancestral. Mergulhe sem medo: nas profundezas, está o encontro consigo mesmo."
            },
            {
            symbol: "",
            title: "O Carro",
            description: "Vitória através do controle",
            fortune: "Você está no comando, mas as rédeas devem ser equilibradas. Esta carta fala de disciplina focada. Forças opostas podem ser harmonizadas - direção clara levará ao triunfo. Siga em frente com determinação."
            }
        ];

        this.particulas = [];
        this.coresParticulas = ["#9969ff", "#ff69a1", "#69b4ff", "#ff9f69"];
        this.cartaSelecionada = null;
        this.revelado = false;

        this.iniciar();
        
    }

    

    iniciar() {
        this.criarCartas();
        this.configurarCanvas();
        this.botaoEmbaralhar.addEventListener("click", this.embaralharCartas.bind(this));
        this.animarParticulas();
    }

    criarCartas() {
        this.containerCartas.innerHTML = "";
        const cartasEmbaralhadas = [...this.cartas].sort(() => Math.random() - 0.5);

        cartasEmbaralhadas.forEach((carta, indice) => {
            const elementoCarta = document.createElement("div");
            elementoCarta.className = "card";
            elementoCarta.innerHTML = `
                <div class="card-face card-back"></div>
                <div class="card-face card-front">
                    <div class="card-symbol">${carta.symbol}</div>
                    <div class="card-title">${carta.title}</div>
                    <div class="card-desc">${carta.description}</div>
                </div>
            `;

            elementoCarta.addEventListener("click", () =>
                this.selecionarCarta(elementoCarta, carta)
            );

            const rotacao = Math.random() * 6 - 3;
            elementoCarta.style.transform = `rotateZ(${rotacao}deg)`;
            elementoCarta.style.animationDelay = `${indice * 0.1}s`;

            this.containerCartas.appendChild(elementoCarta);
        });
    }

    selecionarCarta(elemento, dadosCarta) {
        // Verificar limite
        if (this.cartasTiradas >= this.limiteCartas) {
            this.mostrarMensagemLimite();
            return;
        }

        if (this.revelado) return;

        this.cartasTiradas++;
        this.ultimaLeitura = new Date();
        this.salvarEstado();

        elemento.style.zIndex = '1002';
        elemento.style.position = 'relative';
        
        this.criarEfeitoMagico(elemento);
        elemento.classList.add("flipped");
        this.cartaSelecionada = { elemento, dados: dadosCarta };

        const todasCartas = this.containerCartas.querySelectorAll(".card");
        todasCartas.forEach((carta) => {
            if (carta !== elemento) {
                carta.style.opacity = window.innerWidth <= 768 ? "0.4" : "0.3";
                carta.style.transform = window.innerWidth <= 768 ? "scale(0.85)" : "scale(0.9)";
                carta.style.filter = window.innerWidth <= 768 ? "blur(1px)" : "grayscale(0.7)";
                carta.style.pointerEvents = "none";
                carta.style.zIndex = "10";
            }
        });

        setTimeout(() => {
            this.revelarMensagem(dadosCarta);
        }, 1000);
    }

    revelarMensagem(dados) {
        this.revelado = true;
        this.tituloMensagem.textContent = dados.title;
        this.textoMensagem.textContent = dados.fortune;
        this.containerMensagem.classList.add("visible");

        for (let i = 0; i < 50; i++) {
            this.criarParticula(window.innerWidth / 2, window.innerHeight / 2, true);
        }
    }

    embaralharCartas() {
        this.containerMensagem.classList.remove("visible");
        this.revelado = false;
        this.cartaSelecionada = null;

        setTimeout(() => {
            for (let i = 0; i < 30; i++) {
                this.criarParticula(window.innerWidth / 2, window.innerHeight / 2, true);
            }
            this.criarCartas();
        }, 500);
    }

    criarEfeitoMagico(elemento) {
        const rect = elemento.getBoundingClientRect();
        const centroX = rect.left + rect.width / 2;
        const centroY = rect.top + rect.height / 2;

        for (let i = 0; i < 15; i++) {
            const brilho = document.createElement("div");
            brilho.className = "magical-sparkle";

            const angulo = Math.random() * Math.PI * 2;
            const distancia = Math.random() * 100;
            const posX = centroX + Math.cos(angulo) * distancia;
            const posY = centroY + Math.sin(angulo) * distancia;

            brilho.style.left = `${posX}px`;
            brilho.style.top = `${posY}px`;

            const cores = ["#9969ff", "#ff69a1", "#ffeb3b", "#69b4ff"];
            brilho.style.background = cores[Math.floor(Math.random() * cores.length)];

            const tamanho = Math.random() * 8 + 3;
            brilho.style.width = `${tamanho}px`;
            brilho.style.height = `${tamanho}px`;

            document.body.appendChild(brilho);

            setTimeout(() => {
                brilho.remove();
            }, 1000);
        }

        for (let i = 0; i < 20; i++) {
            this.criarParticula(centroX, centroY);
        }
    }

    configurarCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;

        window.addEventListener("resize", () => {
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
        });

        for (let i = 0; i < 50; i++) {
            this.criarParticula(
                Math.random() * this.canvas.width,
                Math.random() * this.canvas.height
            );
        }
    }

    criarParticula(x, y, explosao = false) {
        const cor = this.coresParticulas[
            Math.floor(Math.random() * this.coresParticulas.length)
        ];

        const p = {
            x,
            y,
            tamanho: Math.random() * 4 + 1,
            cor,
            velX: (Math.random() - 0.5) * (explosao ? 8 : 1),
            velY: (Math.random() - 0.5) * (explosao ? 8 : 1),
            vida: 100,
            vidaMax: 100
        };

        this.particulas.push(p);
    }

    animarParticulas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        for (let i = 0; i < this.particulas.length; i++) {
            const p = this.particulas[i];

            p.x += p.velX;
            p.y += p.velY;
            p.velX *= 0.99;
            p.velY *= 0.99;
            p.vida--;

            const opacidade = p.vida / p.vidaMax;

            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.tamanho, 0, Math.PI * 2);
            this.ctx.fillStyle = `${p.cor}${Math.floor(opacidade * 255).toString(16).padStart(2, "0")}`;
            this.ctx.fill();

            if (p.vida <= 0) {
                this.particulas.splice(i, 1);
                i--;

                if (this.particulas.length < 50) {
                    this.criarParticula(
                        Math.random() * this.canvas.width,
                        Math.random() * this.canvas.height
                    );
                }
            }
        }

        requestAnimationFrame(this.animarParticulas.bind(this));
    }

    carregarEstado() {
        const estadoSalvo = localStorage.getItem('estadoTarot');
        if (estadoSalvo) {
            const estado = JSON.parse(estadoSalvo);
            this.cartasTiradas = estado.cartasTiradas || 0;
            this.ultimaLeitura = estado.ultimaLeitura ? new Date(estado.ultimaLeitura) : null;
            
            if (this.ultimaLeitura) {
                const tempoPassado = new Date() - this.ultimaLeitura;
                if (tempoPassado < this.tempoEspera) {
                    this.bloquearLeitura();
                } else {
                    this.resetarLeitura();
                }
            }
        }
    }
    
    salvarEstado() {
        const estado = {
            cartasTiradas: this.cartasTiradas,
            ultimaLeitura: this.ultimaLeitura ? this.ultimaLeitura.toISOString() : null
        };
        localStorage.setItem('estadoTarot', JSON.stringify(estado));
    }

    

    mostrarMensagemLimite() {
        // Esconder outras mensagens
        this.containerMensagem.classList.remove('visible');
        document.querySelectorAll('.message-container.visible').forEach(el => el.remove());
        
        const mensagemLimite = document.createElement('div');
        mensagemLimite.className = 'message-card';
        mensagemLimite.innerHTML = `
            <div class="message-title">Limite Atingido</div>
            <div class="message-text">
                Você já tirou suas ${this.limiteCartas} cartas hoje.<br>
                Novo ciclo em: <span id="contador-tempo">24h 59m</span>
            </div>
            <button id="fechar-mensagem">Entendi</button>
        `;
        
        mensagemLimite.style.background = 'rgba(50, 20, 70, 0.97)';
        
        const containerLimite = document.createElement('div');
        containerLimite.className = 'message-container visible';
        containerLimite.style.zIndex = '1100';
        containerLimite.appendChild(mensagemLimite);
        document.body.appendChild(containerLimite);
        
        document.getElementById('fechar-mensagem').addEventListener('click', () => {
            containerLimite.remove();
        });
        
        this.iniciarContador();
    }

    iniciarContador() {
        if (this.intervaloContador) {
            clearInterval(this.intervaloContador);
        }
        
        const contadorElemento = document.getElementById('contador-tempo');
        if (!contadorElemento) return;
        
        const fimBloqueio = new Date(this.ultimaLeitura.getTime() + this.tempoEspera);
        
        const atualizarContador = () => {
            const agora = new Date();
            const tempoRestante = fimBloqueio - agora;
            
            if (tempoRestante <= 0) {
                clearInterval(this.intervaloContador);
                this.resetarLeitura();
                document.querySelector('.message-container.visible')?.remove();
                return;
            }
            
            // Calcula horas, minutos e segundos
            const horas = Math.floor(tempoRestante / (1000 * 60 * 60));
            const minutos = Math.floor((tempoRestante % (1000 * 60 * 60)) / (1000 * 60));
            const segundos = Math.floor((tempoRestante % (1000 * 60)) / 1000);
            
            // Formata para 2 dígitos (00:00:00)
            const formato = (num) => num.toString().padStart(2, '0');
            contadorElemento.textContent = `${formato(horas)}:${formato(minutos)}:${formato(segundos)}`;
        };
        
        atualizarContador(); // Atualiza imediatamente
        this.intervaloContador = setInterval(atualizarContador, 1000);
    }

    bloquearLeitura() {
        const cartas = document.querySelectorAll('.card');
        cartas.forEach(carta => {
            carta.style.pointerEvents = 'none';
            carta.style.opacity = '0.5';
            carta.classList.add('bloqueado');
            carta.style.filter = 'grayscale(0.8)';
        });
        
        this.mostrarMensagemLimite();
    }

    resetarLeitura() {
        localStorage.removeItem('estadoTarot');
        this.cartasTiradas = 0;
        this.ultimaLeitura = null;
        
        const cartas = document.querySelectorAll('.card');
        cartas.forEach(carta => {
            carta.classList.remove('bloqueado');
        });
        
        this.embaralharCartas();
    }

    embaralharCartas() {
        // Fecha qualquer mensagem aberta
        this.containerMensagem.classList.remove("visible");
        this.revelado = false;
        this.cartaSelecionada = null;

        // Remove a mensagem de limite se estiver visível
        document.querySelector('.message-container.visible')?.remove();

        // Limpa o estado se não estiver bloqueado
        if (!this.ultimaLeitura || (new Date() - new Date(this.ultimaLeitura)) >= this.tempoEspera) {
            this.resetarLeitura();
        }

        // Cria efeito de partículas
        for (let i = 0; i < 30; i++) {
            this.criarParticula(window.innerWidth / 2, window.innerHeight / 2, true);
        }

        // Recria as cartas imediatamente
        this.criarCartas();
    }
}

window.addEventListener("load", () => {
    new CartasMisticas();
});

// Adicione este script para criar estrelas cintilantes
document.addEventListener('DOMContentLoaded', function() {
    const starsContainer = document.getElementById('about-stars');
    const starsCount = 50;
    
    for (let i = 0; i < starsCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        // Posição aleatória
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        
        // Tamanho aleatório
        const size = Math.random() * 3 + 1;
        star.style.width = `${10 * size}px`;
        star.style.height = `${10 * size}px`;
        star.style.clipPath = 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)';
        
        // Atraso de animação aleatório
        star.style.animationDelay = `${Math.random() * 3}s`;
        
        starsContainer.appendChild(star);
    }
});

document.getElementById('contact-form').addEventListener('submit', async function (e) {
    e.preventDefault(); // Impede o envio padrão

    const form = e.target;
    const formData = new FormData(form);

    const response = await fetch('enviar.php', {
        method: 'POST',
        body: formData
    });

    const texto = await response.text();

    // Exibe a resposta do PHP dentro da div
    document.getElementById('mensagem-retorno').innerHTML = texto;

    // Limpa o formulário
    form.reset();
});

document.querySelectorAll('.ancor').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



function setupResponsiveCards() {
    const container = document.getElementById('cards-container');
    if (!container) return;
    
    const isMobile = window.innerWidth <= 768 || 
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    // Aplicar classe mobile-view ao container
    if (isMobile) {
        container.classList.add('mobile-view');
    } else {
        container.classList.remove('mobile-view');
    }
    
    // Remover apenas estilos que interferem no layout
    container.removeAttribute('style');
    
    // Aplicar rotações aleatórias mantendo a responsividade
    document.querySelectorAll('.card').forEach((card, index) => {
        // Remove apenas estilos de dimensionamento
        card.style.width = '';
        card.style.height = '';
        card.style.flex = '';
        card.style.maxWidth = '';
        
        // Mantém ou aplica a rotação aleatória
        if (!card.style.transform) {
            const rotation = (Math.random() * 6) - 3; // Valores entre -3 e 3 graus
            card.style.transform = `rotate(${rotation}deg)`;
        }
    });
}

// Inicialização otimizada com debounce
function init() {
    let resizeTimeout;
    
    function handleResize() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            setupResponsiveCards();
        }, 100);
    }
    
    setupResponsiveCards();
    window.addEventListener('resize', handleResize);
    
    // Opcional: Observer para mudanças no DOM
    new MutationObserver(setupResponsiveCards).observe(document.body, {
        childList: true,
        subtree: true
    });
}

document.addEventListener('DOMContentLoaded', init);
class iPhone {
    constructor() {
        this.musicaTocando = false;
        this.chamadaAtiva = false;
        this.correioDeVoz = false;
        this.abasNavegador = [];
        this.paginaExibida = "";
    }

    tocarMusica() {
        if (!this.musicaTocando) {
            console.log("Reproduzindo música...");
            this.musicaTocando = true;
        } else {
            console.log("A música já está tocando.");
        }
    }

    pausarMusica() {
        if (this.musicaTocando) {
            console.log("Música pausada.");
            this.musicaTocando = false;
        } else {
            console.log("Não há música tocando para pausar.");
        }
    }

    selecionarMusica(musica) {
        console.log(`Selecionando a música: ${musica}`);
    }

   
    ligar() {
        if (!this.chamadaAtiva) {
            console.log("Ligando...");
            this.chamadaAtiva = true;
        } else {
            console.log("Já há uma chamada em andamento.");
        }
    }

    atenderChamada() {
        if (this.chamadaAtiva) {
            console.log("Chamada atendida.");
            this.chamadaAtiva = false;
        } else {
            console.log("Não há chamada para atender.");
        }
    }

    iniciarCorreioDeVoz() {
        console.log("Iniciando correio de voz...");
        this.correioDeVoz = true;
    }


    exibirPagina(pagina) {
        console.log(`Exibindo página: ${pagina}`);
        this.paginaExibida = pagina;
    }

    adicionarNovaAba(aba) {
        console.log(`Nova aba adicionada: ${aba}`);
        this.abasNavegador.push(aba);
    }

    atualizarPagina() {
        console.log("Página atualizada.");
    }
}




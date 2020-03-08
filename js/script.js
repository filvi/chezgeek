function Giocatore(numero, nome, vittoria) {
    this.numero = numero;
	this.nome = nome;
	this.tempo_libero = 0;
	this.salario = 0;
	this.cazzeggio = 0;
	this.punteggio = 0;
	this.persone = 0;
	this.attivita = 0;
	this.oggetti = 0;
	this.vittoria = false;
	this.sonno = 0;
	this.tv = 0;
	this.sveltina = 0;
	this.persona_no = 0;
	this.persona_ok = 0;
	this.gdr = 0;
	this.sigarette = 0;
	this.alcool = 0;
	this.cibo = 0;
	this.libri = 0;
	this.erba = 0;
	this.altro_oggetto = 0;
	this.altra_attivita = 0;
	this.tot_tot = 0;
	this.tot_attivita = 0;
	this.tot_oggetti = 0;
	this.tot_persone = 0;

	this.update_all = function (cazz, temp, sal) {
		//update all
		this.cazzeggio = cazz;
		this.tempo_libero = temp;
		this.salario = sal
	}


	/// da controllare questa parte non sono sicuro che funzioni
	(this.punteggio >= this.cazzeggio) ? (this.vittoria = true) : (this.vittoria = false);

	var seleziona_vincitore = document.querySelectorAll('h1')


	// fa ritornare il tot delle attivita
	this.return_tot_attivita = function () {
		this.tot_attivita = this.sonno + this.tv + this.sveltina + this.gdr + this.altra_attivita;
		return this.tot_attivita;
	};
	//fa ritornare il tot degli oggetti
	this.return_tot_oggetti = function () {
		this.tot_oggetti = this.sigarette + this.alcool + this.cibo + this.libri + this.erba + this.altro_oggetto;
		return this.tot_oggetti;
	};

	// fa ritornare il tot delle persone
	this.return_tot_persone = function () {
		this.tot_persone = this.persona_ok + this.persona_no;
		return this.tot_persone;
	};

	// fa ritornare il tot del totale
	this.return_tot_tot = function () {
		this.tot_tot = this.tot_attivita + this.tot_oggetti + this.tot_persone + this.punteggio
		return this.tot_tot;
	}

	this.modifica = function (operazione, cosa) {
		// caso somma
		if (operazione == "somma") {
			//se Tem. Libero
			if (cosa == "tempo_libero") {
				++this.tempo_libero;
				//se salario
			} else if (cosa == "salario") {
				++this.salario;
				//se punteggio
			} else if (cosa == "punteggio") {
				++this.punteggio;
			}

			//sottrazione
		} else if (operazione == "sottrazione") {
			if (cosa == "tempo_libero") {
				--this.tempo_libero;
			} else if (cosa == "salario") {
				--this.salario;
			} else if (cosa == "punteggio") {
				--this.punteggio;
			}
		}
		this.return_tot_tot();
	};
	this.aggiorna_attivita = function (operazione, cosa) {
		if (operazione == "somma") {
			if (cosa == "sonno") {
				++this.sonno;
			} else if (cosa == "tv") {
				++this.tv;
			} else if (cosa == "sveltina") {
				++this.sveltina;
			} else if (cosa == "gdr") {
				++this.gdr;
			} else if (cosa == "altra_attivita") {
				++this.altra_attivita;
			}
		} else if (operazione == "sottrazione") {
			if (cosa == "sonno") {
				--this.sonno;
			} else if (cosa == "tv") {
				--this.tv;
			} else if (cosa == "sveltina") {
				--this.sveltina;
			} else if (cosa == "gdr") {
				--this.gdr;
			} else if (cosa == "altra_attivita") {
				--this.altra_attivita;
			}
		}
		this.return_tot_attivita();
		this.return_tot_tot();
	};
	this.aggiorna_persona = function (operazione, cosa) {
		if (operazione == "somma") {
			if (cosa == "persona_ok") {
				++this.persona_ok;
			} else if (cosa == "persona_no") {
				++this.persona_no;
			}
		} else if (operazione == "sottrazione") {
			if (cosa == "persona_ok") {
				--this.persona_ok;
			} else if (cosa == "persona_no") {
				--this.persona_no;
			}
		}
		this.return_tot_persone();
		this.return_tot_tot();
	};

	this.aggiorna_oggetti = function (operazione, cosa) {

		//somma
		if (operazione == "somma") {
			if (cosa == "sigarette") {
				++this.sigarette;
			} else if (cosa == "alcool") {
				++this.alcool;
			} else if (cosa == "cibo") {
				++this.cibo;
			} else if (cosa == "libri") {
				++this.libri;
			} else if (cosa == "erba") {
				++this.erba;
			} else if (cosa == "altro_oggetto") {
				++this.altro_oggetto;
			}

			//sottrazione
		} else if (operazione == "sottrazione") {
			if (cosa == "sigarette") {
				--this.sigarette;
			} else if (cosa == "alcool") {
				--this.alcool;
			} else if (cosa == "cibo") {
				--this.cibo;
			} else if (cosa == "libri") {
				--this.libri;
			} else if (cosa == "erba") {
				--this.erba;
			} else if (cosa == "altro_oggetto") {
				--this.altro_oggetto;
			}
		}
		this.return_tot_oggetti();
		this.return_tot_tot();
	}
}

// funzione per aggiornare la vittoria del giocatore
var aggiorna_vittoria = (giocatore) => {
	giocatore.vittoria = true;
	return giocatore.vittoria
}


//funzione per cambiare il colore della scritta se un giocatore vince
var vittoria = (giocatore) => {
	aggiorna_vittoria(giocatore)
}

// costruisco un oggetto
var g0 = new Giocatore(0, "Giocatore 1", false)
var g1 = new Giocatore(1, "Giocatore 2", false)
var g2 = new Giocatore(2, "Giocatore 3", false)
var g3 = new Giocatore(3, "Giocatore 4", false)
var lista_giocatori = [g0, g1, g2, g3]

for (var i = 0; i < lista_giocatori.length; i++) {
	var nome = "nome_" + i;
	var tempo_libero = "tempo_libero_" + i;
	var salario = "salario_" + i;
	var punteggio = "punteggio_" + i;

	document.getElementById(nome).innerHTML = lista_giocatori[i].nome;
	document.getElementById(tempo_libero).innerHTML = '<span class="bio"> Tem. Libero <i class="fas fa-hourglass-half"> </i> -> </span>' + '<span class="erpunteggio">' + lista_giocatori[i].tempo_libero
	document.getElementById(salario).innerHTML = '<span class="bio"> Soldi <i class="fas fa-comment-dollar"> </i> -> </span>' + '<span class="erpunteggio">' + lista_giocatori[i].salario
	document.getElementById(punteggio).innerHTML = '<span class="bio"> Cazzeggio <i class="fas fa-pastafarianism"> </i> -> </span>' + '<span class="erpunteggio">' + lista_giocatori[i].punteggio //+ " su " + lista_giocatori[i].cazzeggio
}


// aggiorna punteggi player 1
function modifica_punteggio(giocatore, operazione, cosa) {
	let punteggio = "punteggio_" + giocatore.numero;
	let tempo_libero = "tempo_libero_" + giocatore.numero;
	let salario = "salario_" + giocatore.numero;
	let tot_tot = "tot_tot_" + giocatore.numero;



	giocatore.modifica(operazione, cosa);

	if (cosa === "punteggio") {
		document.getElementById(punteggio).innerHTML = '<span class="bio"> Cazzeggio <i class="fas fa-pastafarianism"> </i> -> </span>' + '<span class="erpunteggio">' + giocatore.punteggio //+ " su " + giocatore.cazzeggio;
	} else if (cosa === "tempo_libero") {
		document.getElementById(tempo_libero).innerHTML = '<span class="bio"> Tem. Libero <i class="fas fa-hourglass-half"></i> -> </span>' + '<span class="erpunteggio">' + giocatore.tempo_libero;
	} else if (cosa === "salario") {
		document.getElementById(salario).innerHTML = '<span class="bio"> Soldi <i class="fas fa-comment-dollar"></i> -> </span>' + '<span class="erpunteggio">' + giocatore.salario;
	}
	giocatore.return_tot_tot();
	document.getElementById(tot_tot).innerHTML = giocatore.tot_tot;

}



// aggiorna_attivita
function modifica_attivita(giocatore, operazione, cosa) {
	let sonno = "sonno_" + giocatore.numero;
	let tv = "tv_" + giocatore.numero;
	let sveltina = "sveltina_" + giocatore.numero;
	let gdr = "gdr_" + giocatore.numero;
	let altra_attivita = "altra_attivita_" + giocatore.numero;
	let tot_attivita = "tot_attivita_" + giocatore.numero;
	let tot_tot = "tot_tot_" + giocatore.numero;


	giocatore.aggiorna_attivita(operazione, cosa);
	if (cosa === "sonno") {
		document.getElementById(sonno).innerHTML = '<span class="att"> Sonno <i class="fas fa-bed"> </i> -> </span>' + '<span class="erpunteggio">' + giocatore.sonno //+ " su " + giocatore.cazzeggio;
	} else if (cosa === "tv") {
		document.getElementById(tv).innerHTML = '<span class="att">Tv <i class="fas fa-tv"></i> -> </span>' + '<span class="erpunteggio">' + giocatore.tv;
	} else if (cosa === "sveltina") {
		document.getElementById(sveltina).innerHTML = '<span class="att">Sveltina <i class="fas fa-transgender-alt"></i> -> </span>' + '<span class="erpunteggio">' + giocatore.sveltina;
	} else if (cosa === "gdr") {
		document.getElementById(gdr).innerHTML = '<span class="att">GDR <i class="fas fa-glasses"> </i> -> </span>' + '<span class="erpunteggio">' + giocatore.gdr;
	} else if (cosa === "altra_attivita") {
		document.getElementById(altra_attivita).innerHTML = '<span class="att">Altro <i class="fas fa-random"> </i> -> </span>' + '<span class="erpunteggio">' + giocatore.altra_attivita;
	}
	giocatore.return_tot_attivita();
	giocatore.return_tot_tot();
	document.getElementById(tot_attivita).innerHTML = giocatore.tot_attivita;
	document.getElementById(tot_tot).innerHTML = giocatore.tot_tot;
}


// aggiorna_oggetti
function modifica_oggetti(giocatore, operazione, cosa) {
	let sigarette = "sigarette_" + giocatore.numero;
	let alcool = "alcool_" + giocatore.numero;
	let cibo = "cibo_" + giocatore.numero;
	let libri = "libri_" + giocatore.numero;
	let erba = "erba_" + giocatore.numero;
	let altro_oggetto = "altro_oggetto_" + giocatore.numero;
	let tot_oggetti = "tot_oggetti_" + giocatore.numero;
	let tot_tot = "tot_tot_" + giocatore.numero;


	giocatore.aggiorna_oggetti(operazione, cosa);
	if (cosa === "sigarette") {
		document.getElementById(sigarette).innerHTML = '<span class="ogg"> Sigarette <i class="fas fa-smoking"> </i> -> </span>' + '<span class="erpunteggio">' + giocatore.sigarette //+ " su " + giocatore.cazzeggio;
	} else if (cosa === "alcool") {
		document.getElementById(alcool).innerHTML = '<span class="ogg"> Alcool <i class="fas fa-beer"></i>  -> </span>' + '<span class="erpunteggio">' + giocatore.alcool;
	} else if (cosa === "cibo") {
		document.getElementById(cibo).innerHTML = '<span class="ogg"> Cibo <i class="fas fa-cookie-bite"> </i> -> </span>' + '<span class="erpunteggio">' + giocatore.cibo;
	} else if (cosa === "libri") {
		document.getElementById(libri).innerHTML = '<span class="ogg">Libri <i class="fas fa-book-open"> </i>  -> </span>' + '<span class="erpunteggio">' + giocatore.libri;
	} else if (cosa === "erba") {
		document.getElementById(erba).innerHTML = '<span class="ogg">Erba <i class="fas fa-cannabis"> </i>  -> </span>' + '<span class="erpunteggio">' + giocatore.erba;
	} else if (cosa === "altro_oggetto") {
		document.getElementById(altro_oggetto).innerHTML = '<span class="ogg">Altro <i class="fas fa-random"> </i>  -> </span>' + '<span class="erpunteggio">' + giocatore.altro_oggetto;
	}
	giocatore.return_tot_oggetti();
	giocatore.return_tot_tot();
	document.getElementById(tot_oggetti).innerHTML = giocatore.tot_oggetti;
	document.getElementById(tot_tot).innerHTML = giocatore.tot_tot;
}

// modifica persona
function modifica_persona(giocatore, operazione, cosa) {
	let persona_ok = "persona_ok_" + giocatore.numero;
	let persona_no = "persona_no_" + giocatore.numero;
	var tot_persone = "tot_persone_" + giocatore.numero;
	let tot_tot = "tot_tot_" + giocatore.numero;



	giocatore.aggiorna_persona(operazione, cosa);
	if (cosa === "persona_ok") {
		document.getElementById(persona_ok).innerHTML = '<span class="persona"> Coinq. Cool <i class="fas fa-jedi"> </i> -> </span>' + '<span class="erpunteggio">' + giocatore.persona_ok //+ " su " + giocatore.cazzeggio;
	} else if (cosa === "persona_no") {
		document.getElementById(persona_no).innerHTML = '<span class="persona"> Coinq. Buu <i class="far fa-thumbs-down"> </i> -> </span>' + '<span class="erpunteggio">' + giocatore.persona_no;
	}

	giocatore.return_tot_persone();
	giocatore.return_tot_tot();
	document.getElementById(tot_persone).innerHTML = giocatore.tot_persone;
	document.getElementById(tot_tot).innerHTML = giocatore.tot_tot;
}




// aggiorna attivita giocatore in maniera passiva la prima volta
for (let i = 0; i < lista_giocatori.length; i++) {


	// attivita
	var sonno = "sonno_" + i;
	var tv = "tv_" + i;
	var sveltina = "sveltina_" + i;
	var gdr = "gdr_" + i;
	var altra_attivita = "altra_attivita_" + i;
	var tot_attivita = "tot_attivita_" + i;

	let tot_tot = "tot_tot_" + i;
	let cazzeggio = "cazzeggio_" + i;
	let punteggio = "punteggio_" + i;


	// oggetti
	var sigarette = "sigarette_" + i;
	var libri = "libri_" + i;
	var cibo = "cibo_" + i;
	var erba = "erba_" + i;
	var alcool = "alcool_" + i;
	var altro_oggetto = "altro_oggetto_" + i;
	var tot_oggetti = "tot_oggetti_" + i;


	var persona_ok = "persona_ok_" + i;
	var persona_no = "persona_no_" + i;
	var tot_persone = "tot_persone_" + i;
	//inserirsce le icone, il testo e il valore per le attivita
	document.getElementById(tot_tot).innerHTML = lista_giocatori[i].tot_tot;
	document.getElementById(cazzeggio).innerHTML = lista_giocatori[i].cazzeggio;


	document.getElementById(sonno).innerHTML = '<span class="att"> Sonno <i class="fas fa-bed"> </i> -> </span>' + '<span class="erpunteggio">' + lista_giocatori[i].sonno;
	document.getElementById(tv).innerHTML = '<span class="att"> Tv <i class="fas fa-tv"> </i> -> </span>' + '<span class="erpunteggio">' + lista_giocatori[i].tv;
	document.getElementById(sveltina).innerHTML = '<span class="att"> Sveltina <i class="fas fa-transgender-alt"> </i> -> </span>' + '<span class="erpunteggio">' + lista_giocatori[i].sveltina;
	document.getElementById(gdr).innerHTML = '<span class="att"> GDR <i class="fas fa-glasses"> </i> -> </span>' + '<span class="erpunteggio">' + lista_giocatori[i].gdr;
	document.getElementById(altra_attivita).innerHTML = '<span class="att"> Altro <i class="fas fa-random"> </i> -> </span>' + '<span class="erpunteggio">' + lista_giocatori[i].altra_attivita;
	document.getElementById(tot_attivita).innerHTML = lista_giocatori[i].tot_attivita;

	// inserirsce le icone, il testo e il valore per gli oggetti
	document.getElementById(sigarette).innerHTML = '<span class="ogg"> Sigarette <i class="fas fa-smoking"> </i> -> </span>' + '<span class="erpunteggio">' + lista_giocatori[i].sigarette;
	document.getElementById(libri).innerHTML = '<span class="ogg"> Libri <i class="fas fa-book-open"> </i> -> </span>' + '<span class="erpunteggio">' + lista_giocatori[i].libri;
	document.getElementById(cibo).innerHTML = '<span class="ogg"> Cibo <i class="fas fa-cookie-bite"> </i> -> </span>' + '<span class="erpunteggio">' + lista_giocatori[i].cibo;
	document.getElementById(erba).innerHTML = '<span class="ogg"> Erba <i class="fas fa-cannabis"> </i> -> </span>' + '<span class="erpunteggio">' + lista_giocatori[i].erba;
	document.getElementById(alcool).innerHTML = '<span class="ogg"> Alcool <i class="fas fa-beer"></i> -> </span>' + '<span class="erpunteggio">' + lista_giocatori[i].alcool;
	document.getElementById(altro_oggetto).innerHTML = '<span class="ogg"> Altro <i class="fas fa-random"> </i> -> </span>' + '<span class="erpunteggio">' + lista_giocatori[i].altro_oggetto;
	document.getElementById(tot_oggetti).innerHTML = lista_giocatori[i].tot_oggetti;


	document.getElementById(persona_ok).innerHTML = '<span class="persona"> Coinq. Cool <i class="fas fa-jedi"> </i> -> </span>' + '<span class="erpunteggio">' + lista_giocatori[i].persona_ok;
	document.getElementById(persona_no).innerHTML = '<span class="persona"> Coinq. Buu <i class="far fa-thumbs-down"> </i> -> </span>' + '<span class="erpunteggio">' + lista_giocatori[i].persona_no;
	document.getElementById(tot_persone).innerHTML = lista_giocatori[i].tot_persone;

}


// document.addEventListener("click", () => {var myNome =  window.prompt('Inserisci il nome '); return myNome;})


function gofullscreen() {
	document.documentElement.webkitRequestFullScreen()
}

function imposta_giocatore(id) {

	//inizializza le variabili
	var nome = "nome_" + id;
	var tempo_libero = "tempo_libero_" + id;
	var salario = "salario_" + id;
	var cazzeggio = "cazzeggio_" + id;


	//cambia la variabile per il numero di giocatore indicato

	//nome
	var set_name = prompt('Come si chiama il giocatore? ', "Nome");
	document.getElementById(nome).innerHTML = set_name;

	//obiettivo
	var set_cazzeggio = prompt('Quanto deve cazzeggiare per vincere? ', "0");
	document.getElementById(cazzeggio).innerHTML = set_cazzeggio;
	//tempo libero	
	var set_tempo_libero = prompt('Quanto tempo libero? ', "0");
	document.getElementById(tempo_libero).innerHTML = '<span class="bio"> Tem. Libero <i class="fas fa-hourglass-half"></i> -> </span>' + '<span class="erpunteggio">' + set_tempo_libero;
	//salario
	var set_salario = prompt('Quanti soldi? ', "0")
	document.getElementById(salario).innerHTML = '<span class="bio"> Soldi <i class="fas fa-comment-dollar"> </i> -> </span>' + '<span class="erpunteggio">' + set_salario;

	switch (id) {
		case 0:
			g0.update_all(set_cazzeggio, set_tempo_libero, set_salario);
			break;
		case 1:
			g1.update_all(set_cazzeggio, set_tempo_libero, set_salario);
			break;
		case 2:
			g2.update_all(set_cazzeggio, set_tempo_libero, set_salario);
			break;
		case 3:
			g3.update_all(set_cazzeggio, set_tempo_libero, set_salario);
			break;
	}

}
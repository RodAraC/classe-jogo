
class heroi{

    constructor() {
     this.nome = nomeHeroi
     this.idade = idadeHeroi
     this.tipo = tipoHeroi
     
    }
  
  }
  
  const nomeHeroi = "Rodrigo";
  const idadeHeroi = 500;
  const tipoHeroi = "guerreiro";
  let ataque = ""
  
  if(tipoHeroi === "mago"){
    ataque = "magia"
  }else if(tipoHeroi === "guerreiro"){
    ataque = "espada"
  }else if(tipoHeroi === "monge"){
    ataque = "artes marciais"
  }else{
    ataque = "usou shuriken"
  }
  
  
  let novoHeroi = new heroi(nomeHeroi, idadeHeroi, tipoHeroi)
  
  console.log(`O ${tipoHeroi} atacou usando ${ataque}`);
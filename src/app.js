

function generadorDominio() {
  //write your code here

  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon','pedro'];

  for (let pronouns of pronoun) {
    for (let adjs of adj) {
      for (let nouns of noun) {
        let dominio = "wwww." + pronouns + adjs + nouns + ".com";
        console.log(dominio)
      }
    }
  }

 
};
generadorDominio() // esta es la manera en la que se llama o invoca a una funcion 
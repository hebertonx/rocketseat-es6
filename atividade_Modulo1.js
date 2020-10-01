//exercicio1
/*
var endereco = {
    rua: 'Rua dos Pinheiros',
    numero: 458,
    bairro: "Centro",
    cidade: 'São Paulo',
    uf: 'SP'
};

function usuario(){
    return 'O usuario mora em ' + endereco.cidade + '/' + endereco.uf + ' no bairro ' + endereco.bairro + ', na rua ' + endereco.rua + ' com nº ' + endereco.numero 
}

console.log(usuario())
*/

//exercicio2
/*
function pares (x,y){
    for(var i = x; i <=y; i++){
        if (i % 2 === 0){
            console.log(i)
        }
    }
}
pares(32, 321)
*/

//exercicio3
/*
var skills = ["Javascript", "ReactJS", "React Native"];

function temHabilidade() {
    if(skills.indexOf("Javascript") !== -1){
        return ("Existe")
    } else{
         return 'Não existe'
    }
  
}

console.log(temHabilidade(skills))    
*/

//exercicio4
/*
function experiente(estudo){
 
    if(estudo >= 0 && estudo<= 1){
        return 'iniciante'
    } else if (estudo > 1 && estudo <=3){
        return 'Intermediario'
    } else if (estudo > 3 && estudo <= 6){
        return 'Avançado'
    }else{
        return 'JediMaster'
    }
    
}
var anoEstudo=1;
console.log(experiente(anoEstudo))
*/

//exercicio5

var usuarios = [
    {
    nome: "Diego",
    habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
    nome: "Gabriel",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
   ];

function habilitade (usuarios){
    for (usuario of usuarios) {
        console.log( "O " + usuario.nome + " possui as habilidades: " +usuario.habilidades.join(", "));
}
}
console.log(habilitade(usuarios))
 



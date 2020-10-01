/*
//Exercicio1

class Usuario {
    constructor(email,senha){
        this.email= email;
        this.senha= senha;
    }
    
    isAdmin (){
        return this.admin === true;
        }
}

class Admin extends Usuario{
    constructor(){
    super()
    this.admin = true;
    }
       
    
}

const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');

console.log(User1.isAdmin());
console.log(Adm1.isAdmin()); 

console.log(User1)
*/

//Exercicio2.1
/*
var usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
   ];

const a = usuarios.map(({idade}) => ({idade}).idade)
console.log(a)

//Exercicio2.2

var trabalha = usuarios.filter((emp) => emp.empresa==='Rocketseat')

//Pode ser feito das duas maneiras

var trabalha = usuarios.filter(function({empresa}){
    return empresa === 'Rocketseat'
})
console.log(trabalha)


//Exercicio2.3

var procura = usuarios.find (user => usuarios.empresa === 'Google')
console.log(procura)

//Exercicio2.4

var mult = usuarios.map(function({...usuarios}){
    return usuarios.idade*2 
}).filter(function(usuarios){
    return usuarios.idade <=60
})

console.log(mult)

*/

//Exercicio3.1

const arr = [1, 2, 3, 4, 5];

arr.map(item => item + 10);

//Exercicio3.2

const usuario = { nome: 'Diego', idade: 23 };
const mostraIdade = usuario => usuario.idade
console.log(mostraIdade(usuario))

//Exercicio3.3

const nome = "Diego";
const idade = 23;
const mostraUsuario= (nome = 'Diego', idade = 18) => ({nome, idade});

console.log(mostraUsuario());
console.log(mostraUsuario(nome));

const promise = function() {
    return new Promise(function(resolve, reject) {
    return resolve();
    })
   }
   
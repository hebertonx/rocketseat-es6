/*
class List{
    constructor(){
        this.data= [];
    }
    add(data){
        this.data.push(data);
        console.log(this.data)
    }

}

class TodoList extends List {
    constructor(){
        super();
        
        this.usuario = 'Diego';
    }
    mostraUsuario(){
        console.log(this.usuario);
    }
}

var MinhaLista = new TodoList();

document.getElementById ('novotodo').onclick = function(){
    MinhaLista.add('Novo Todo');
    MinhaLista.mostraUsuario();

}
*/

/*
Como usar metodos estaticos
class Matematica{
 static soma(a , b){
     return a + b;
 }
}

console.log(Matematica.soma(1,2))
*/

/*
    ----- Usando COnstante
const usuario = { nome: 'Diego Lira'} ;
usuario.nome= 'Cleiton Lira'

console.log(usuario)


 -------------INSTANCIAR VALOR DA FUNÇÃO-----  
function teste(x){
    let y =2
        
    if(x>5){
        let y =4
        console.log(x,y)
    }
}
teste(8)
*/

/*
 ------------- Array-------------
const arr = [1, 3, 4, 5, 8 ,9]

const newArr = arr.map(function(item){
    return item * 2

}); 

console.log(newArr)

const sum = arr.reduce(function(total,next){
    return total + next
})
console.log(sum)

const filter = arr.filter(function(item){
    return item % 2 === 0
})
console.log(filter)

const find = arr.find(function(item){
   return item ===2 
})
console.log(find)
*/

/*
 -----------Arrow FUNCTION-----------
const arr = [1,3,4,5,6]

const newArr = arr.map(item => item * 2)

    console.log(newArr)

const teste = () => ({nome: 'Diego'}) /* COnsigo realizar o retorno da
espressão sem usar o RETURN
 
console.log(teste())
*/

/*
---------Valores Padrão na FUNCTION
function soma(a=3,b=6){       -- Posso instanciar os valores da variavel na FUNCTION
    return a +b
}

console.log(soma(1))
console.log(soma())

const soma = (a=3,b=6) => a+b
console.log(soma(1))
console.log(soma())
*/

/*
---- Desestruturação
const usuario = {
   nome: 'Diego',
   idade: 23,
   endereco:{
       cidade: 'Rio do Sul',
       estado: "SC",
   }
}
const {nome, idade, endereco: {cidade} } = usuario  --Atrela a esse novo construtor todas as veriaveis do USUARIO
   console.log(nome)
   console.log(cidade)
   console.log(idade)
*/
// REST

/*
const usuario = {

    nome: 'DIego',
    idade: 23,
    empresa: 'Rocketseat'
};

const {nome,...resty } = usuario;
console.log(nome);
console.log(resty);

//OU

const arr = [1,2,3,4,5,6];
 
    const[a ,b ,...c] = arr;

    console.log(a);
    console.log(b);
    console.log(c);

function soma(...params){
    return params.reduce((total,next) => total+ next);
}
console.log(soma(1,2,3));
*/
//SPREAD

/*

const arr1 = [1,2,3];
const arr2 = [4,5,6];

const arr3 = [...arr1 , ...arr2]

console.log(arr3)


const usuario1 = {
    nome: 'Diego',
    idade: 23,
    empresa: 'Rock',
}

const usuario2 = {...usuario1, nome: 'Gabriel' };
console.log(usuario2)
*/

/*                                  WEB PACK                            */
"use strict";
"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
var usuarios = [{
  nome: "Diego",
  habilidades: ["Javascript", "ReactJS", "Redux"]
}, {
  nome: "Gabriel",
  habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
}];

function habilitade(usuarios) {
  var _iterator = _createForOfIteratorHelper(usuarios),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      usuario = _step.value;
      console.log("O " + usuario.nome + " possui as habilidades: " + usuario.habilidades.join(", "));
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}

console.log(habilitade(usuarios));
"use strict";

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
var arr = [1, 2, 3, 4, 5];
arr.map(function (item) {
  return item + 10;
}); //Exercicio3.2

var usuario = {
  nome: 'Diego',
  idade: 23
};

var mostraIdade = function mostraIdade(usuario) {
  return usuario.idade;
};

console.log(mostraIdade(usuario)); //Exercicio3.3

var nome = "Diego";
var idade = 23;

var mostraUsuario = function mostraUsuario() {
  var nome = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Diego';
  var idade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 18;
  return {
    nome: nome,
    idade: idade
  };
};

console.log(mostraUsuario());
console.log(mostraUsuario(nome));

var promise = function promise() {
  return new Promise(function (resolve, reject) {
    return resolve();
  });
};

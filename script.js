var vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
function exibirNumeros(){
    var vetorExibido = []
    for (var i = 0; i < vetor.length; i++){
        vetorExibido.push(vetor[i] + ' ')
    }
    document.getElementById('display').innerText=`\n ${vetorExibido}`
}
function limpar(){
    document.getElementById('display').innerText=''
}

var vetor1 = []
function adicionarNumero(){
    var display1 = document.getElementById('display1')
    var numeroAdicionado = document.getElementById('numero1').value
    if (!numeroAdicionado){
        display1.style.color = 'red'
        display1.innerText='\nAdicione um número!'
    } else{
        var numeroConvertido = parseInt(numeroAdicionado)
        display1.style.color = 'black'
        vetor1.push(numeroConvertido)
        document.getElementById('display1').innerText=`\n[ ${vetor1} ]`    
    }
}
function removerNumero(){
    var display1 = document.getElementById('display1')
    var numeroRemovido = document.getElementById('numero1').value
    var numeroConvertido = parseInt(numeroRemovido)
    for (var i = 0; i < vetor1.length; i++){
        if (numeroConvertido == vetor1[i]){
            display1.style.color = 'black'
            vetor1.splice(vetor1.indexOf(numeroConvertido), 1)
            document.getElementById('display1').innerText=`\n[ ${vetor1} ]`
        } else{
            document.getElementById('display1').innerText=`\n[ ${vetor1} ]`
        }    
    }
}
function limpar1(){
    document.getElementById('display1').innerText=''
    vetor1 = []  
}

var vetor2 = 
[   
    2, 
    4, 
    6, 
    8, 
    10, 
    12, 
    14, 
    16, 
    18, 
    20, 
    22, 
    24, 
    26, 
    28, 
    30,
    32,
    34,
    36, 
    38,
    40,
    42,
    44,
    46,
    48,
    50 
]
function buscarNumero(){
    var numeroBuscado = document.getElementById('numero2').value
    var buscaFeita = false
    var display2 = document.getElementById('display2')
    for (var i = 0; i < vetor2.length; i++){
        if (numeroBuscado == vetor2[i]){       
            display2.style.color = 'green'
            display2.innerText=`\n Encontrado no índice ${i}` 
            buscaFeita = true
        }
    }
    if (buscaFeita == false){
        display2.style.color = 'red'
        display2.innerText='\n Não está no vetor'
    } else if (numeroBuscado == null){
        document.getElementById('display2').innerText='Insira um número de 0 a 50'
    }
}
function limpar2(){
    var limpar = document.getElementById('display2').innerText=''
}

function exibirTabela(){
    let nome = ['Pessoa A ', 'Pessoa B', 'Pessoa C', 'Pessoa D', 'Pessoa E']
    let altura = [1.68, 1.82, 1.72, 1.63, 1.75]
    document.getElementById('display3').innerText='\n Aperte F12 e veja a tabela no console'
    console.log('  Nome:        Altura:')
    console.log('======================')
    for (var i = 0; i < 5; i++){
        console.log(`${nome[i]} \t ${altura[i]}`)        
    }
}
function limpar3(){
    document.getElementById('display3').innerText=''
}

function exibirMatriz(){
    let matriz = [ [1,2,3],[4,5,6],[7,8,9] ]
    let display4 = document.getElementById('display4')
    for (let lin = 0; lin < 3; lin++){
        for (let col = 0; col < 3; col++){
            document.write(`${matriz[lin][col]} `)
        }
        document.write('<hr>')
    }
}
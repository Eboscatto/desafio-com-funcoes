//Bootcamp potência tech ifood - programação do zero
//segundo desafio de projeto - Calculadora de partidas Rankeadas
//Desenvolvido por: Everaldo Boscatto

//Declarando variáveis:
let vitoria = 1
let derrota = 0
let saldo = calcularRanking(vitoria, derrota)
let vitorias = getLevel(saldo) 
var resultado = ""

//Saída:
console.log()
console.log(`-----> O herói tem saldo de ${saldo} vitórias e está no nível ${vitorias} <-----`)
console.log()

//Declarando funções:

//Função para calcular o saldo de vitórias
function calcularRanking(nVitoria, nDerrota){
    let saldo = nVitoria - nDerrota
    return saldo    
}

//Função para verificar o nível do herói
function getLevel(saldo){
    let vitorias = saldo
    if(vitorias < 10){
        resultado = "Ferro"        
        return resultado
    }  
    
    else if((vitorias > 10) && (vitorias < 20)){
        resultado = "Bronze"        
        return resultado
    }   
    
    else if((vitorias > 20) && (vitorias < 50)){
        resultado = "Prata"        
        return resultado
    }   

    else if((vitorias > 50) && (vitorias < 80)){
        resultado = "Ouro"        
        return resultado
    }
    
    else if((vitorias > 80) && (vitorias < 90)){
        resultado = "Diamante"        
        return resultado
    }   

    else if((vitorias > 90) && (vitorias < 100)){
        resultado = "Lendário"        
        return resultado
    }   

    else if(vitorias >= 101){
        resultado = "Imortal"        
        return resultado
    }   

    else{
        resultado = "não definido"
        return resultado
    }
}
//Fim de código

// Objetos
pessoa = {
    nome: 'Igor',
    idade: 19,
    altura: 1.85,
    andar() {
        console.log('Estou andando...');
    }
}

quadrado = {
    lados: 4,
    area(lado) {
        return lado * lado;
    },
    perimetro(lado) {
        return this.lados * lado;    
    }
}
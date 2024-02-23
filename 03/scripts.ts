const numeros = [1, 5, 2]

const tabuada = (numeros: number[]) => {
    let resultado: string = ''
    for (let numero of numeros) {

        for (let i = 0; i <= 10; i++) {
            resultado += (`${numero} x ${i} = ${numero * i}\n`)
        }
    }
    return resultado

}

console.log(tabuada(numeros))



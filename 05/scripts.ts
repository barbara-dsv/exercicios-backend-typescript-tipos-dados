const palavra = 'programador'

const soletrar = (palavra: string) => {
    return palavra.split("").join('-')
}
console.log(soletrar(palavra))
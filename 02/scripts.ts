const clientes = [
    {
        nome: "Guido",
        idade: 32,
        status: true,
    },
    {
        nome: "Dani",
        idade: 30,
        status: true,
    },
    {
        nome: "João",
        idade: 40,
        status: false,
    },
    {
        nome: "Guilherme",
        idade: 29,
        status: true,
    },
    {
        nome: "Ana",
        idade: 18,
        status: false,
    },
    {
        nome: "José",
        idade: 28,
        status: false,
    },
]


const buscarCliente = (clientes: { nome: string, idade: number, status: boolean }[], nomeCliente: string): {
    nome: string,
    idade: number,
    status: boolean
}[] => {

    const encontrarCliente = clientes.filter(function (cliente) {
        return cliente.nome.toLowerCase().includes(nomeCliente.toLowerCase())
    })

    return encontrarCliente
}
console.log(buscarCliente(clientes, 'Jo'))




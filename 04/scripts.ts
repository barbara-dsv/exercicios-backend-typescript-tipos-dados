const produto = {
    produto: 'CPU Dual Core 3.0GHZ',
    lote: 321,
    ano: 2022,
    qtd: 5
}

const etiquetar = (produto: { produto: string, lote: number, ano: number, qtd: number }): string[] => {
    const produtoEtiquetado: string[] = []
    for (let i = 1; i <= produto.qtd; i++) {
        produtoEtiquetado.push(
            `${produto.lote}-${produto.ano}-00${i} `
        )
    }
    return produtoEtiquetado
}

console.log(etiquetar(produto))
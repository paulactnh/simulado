let resposta = document.getElementById('resposta')
let btn_listar = document.getElementById('btn_listar')

btn_listar.addEventListener('click', (e)=>{
    e.preventDefault()

    fetch('http://localhost:3000/carros')
    .then(res => res.json())
    .then(dados =>{
        console.log(dados)
        resposta.innerHTML = ''  // apaga a escrita anterrior
        resposta.innerHTML += `
            <table>
                ${thead()}
                ${tbody(dados)}
            </table>
        `
    })
    .catch((err)=>{
        console.error('Erro ao listar o carro',err)
    })
})


function thead(){
    let cabTabela = `
    <thead>
        <tr>
            <th>Número</th>
            <th>Nome</th>
            <th>Marca</th>
            <th>Categoria</th>
            <th>Ano</th>
            <th>Preço Fabrica</th>
            <th>Preço Venda</th>
        </tr>
    </thead>    
    `
    return cabTabela
}

function tbody(dados){
    let tabela = `<tbody>`
    dados.forEach(el => {
        tabela +=`
        <tr>        
            <td>${el.codCarro}</td>
            <td>${el.nome}</td>
            <td>${el.marca}</td>
            <td>${el.categoria}</td>
            <td>${el.ano}</td>
            <td>${el.precoFabrica}</td>
            <td>${el.precoVenda}</td>
        </tr>
        `
    })
    tabela += `</tbody>`
    return tabela
}

/*

<table>
    <thead>
        <tr>
            <th>Número</th>
            <th>Nome</th>
            <th>Marca</th>
            <th>Categoria</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>Moisés</td>
            <td>90</td>
            <td>80</td>
        </tr>
    </tbody>
</table>

*/
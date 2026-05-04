let resposta = document.getElementById('resposta')
let btn_cadastrar = document.getElementById('btn_cadastrar')

btn_cadastrar.addEventListener('click',(e)=>{
    e.preventDefault

    
    const codigo = document.getElementById('codigo').value
    const nome = document.getElementById('nome').value
    const marca = document.getElementById('marca').value
    const categoria = document.getElementById('categoria').value
    const ano = document.getElementById('ano').value
    const preco_fabrica = document.getElementById('preco_fabrica').value

    const valores = {
        codigo: codigo,
        nome: nome,
        marca: marca,
        categoria: categoria,
        ano: ano,
        preco_fabrica: preco_fabrica
    }
    console.log(valores)
    
    if (!nome || !marca || !ano || !preco) {
        resposta.innerHTML = 'Preencha todos os campos';
        return;
    }

    if (categoria === "popular") {
        preco_venda = preco * 1.15;
    } else if (categoria === "sedan") {
        preco_venda = preco * 1.20;
    } else if (categoria === "luxo") {
        preco_venda = preco * 1.25;
    }

    fetch('http://localhost:3000/carro',{
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(valores)
    })
    .then(res => res.json())
    .then(dados=>{
        resposta.innerHTML = ''
        resposta.innerHTML += `<p>`
    })



})
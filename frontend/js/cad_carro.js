let resposta = document.getElementById('resposta')
let btn_cadastrar = document.getElementById('btn_cadastrar')
console.log(btn_cadastrar)

btn_cadastrar.addEventListener('click',(e)=>{
    e.preventDefault()

    const codigo = document.getElementById('codigo').value
    const nome = document.getElementById('nome').value
    const marca = document.getElementById('marca').value
    const categoria = document.getElementById('categoria').value
    const ano = document.getElementById('ano').value
    const precoFabrica = document.getElementById('precoFabrica').value

    const valores = {
        codigo: codigo,
        nome: nome,
        marca: marca,
        categoria: categoria,
        ano: ano,
        precoFabrica: precoFabrica
    }
    console.log(valores)
    
   

    fetch('http://localhost:3000/carro',{
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(valores)
    })
    .then(res => res.json())
    .then(dados=>{
        resposta.innerHTML = ''
        resposta.innerHTML += `<p>${dados.message}</p>`
        document.querySelector('form').reset()
    })
    .catch((err)=>{
        console.error('Erro ao tentar cadastrar o carro',err)
    })



})
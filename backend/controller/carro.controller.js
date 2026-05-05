    const Carro = require('../models/Carro')
    
    const cadastrar = async (req, res)=>{
       let precoVenda = 0
    const  valores = req.body


    if (valores.categoria === "popular") {
        precoVenda = valores.precoFabrica * 1.15;
    } else if  (valores.categoria === "sedan") {
        precoVenda = valores.precoFabrica * 1.20;
    } else if  (valores.categoria === "luxo") {
        precoVenda = valores.precoFabrica * 1.25;
    }

     const valores2 = {
        codCarro: valores.codigo,
        nome:valores.nome,
        marca:valores.marca,
        categoria:valores.categoria,
        ano:valores.ano,
        precoFabrica: valores.precoFabrica,
        precoVenda:precoVenda
    };

    try {
        await Carro.create(valores2)
        res.status(201).json({ message: "Dados do carro cadastrados com sucesso!" })
    } catch (err) {
        console.error(err) // COLOCA AQUI para ver o erro
        res.status(500).json({ message: 'Não foi possível cadastrar os dados do carro!' })
    }
    console.log(valores2)
    }
    
    const listar = async(req,res)=>{
        try{
            const carros = await Carro.findAll()
            res.status(201).json(carros)
        }
        catch (err){
            res.status(500).json({message: 'Erro ao tentar listar os veículos'})
        }
    }

    module.exports = {cadastrar, listar}
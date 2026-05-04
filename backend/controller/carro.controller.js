    const Carro = require('../models/Carro')
    
    const cadastrar = async (req, res)=>{
        const valores = req.body
        try{
            await Carro.create(valores)
            res.status(201).json({message: 'Dados do veículo cadastrados com sucesso!'})
        }
        catch (err){
            res.status(500).json({message: 'Erro ao tentar cadastrar dados do veículo!'})
        }
    }
    
    // const listar = async(req,res)=>{
    //     try{
    //         const carros = await Carro.findAll()
    //         res.status(201).json(carros)
    //     }
    //     catch (err){
    //         res.status(500).json({message: 'Erro ao tentar listar os veículos'})
    //     }
    // }

    module.exports = {cadastrar}
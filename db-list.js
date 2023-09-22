import { randomUUID } from 'crypto'

export class DataBaseTemp {

    produtos = []

    adicionar = (produto) => { 
        produto.id = randomUUID()
        return this.produtos.push(produto)
    }

    listarTodos = () => this.produtos;

    

    listarPorId = (idParam) => 
        this.produtos.find(produto => produto.id === idParam)
    

    atualizar = () => {

    }


}
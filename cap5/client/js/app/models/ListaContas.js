class ListaContas{
    constructor(){
        this._contas = []
    }
    adicionar(conta){
        this._contas.push(conta)
    }
    get contas(){
        return [].concat(this._contas)
    }
}
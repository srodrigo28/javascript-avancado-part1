class ListaContas{
    constructor(){
        this._contas = []
    }
    adiciona(conta){
        this._contas.push(conta)
    }
    get contas(){
        return [].concat(this._contas)
    }
}
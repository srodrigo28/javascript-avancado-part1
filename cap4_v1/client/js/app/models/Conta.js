class Conta{
    constructor(data,descricao,valor,total){
        this._data = new Date(data.getTime());
        this._descricao = descricao;
        this._valor = valor;
        this._total = total;
        //Object.freeze(this);
    }
    get data(){ return new Date(this._data.getTime()) }
    get descricao(){ return this._descricao }
    get valor(){ return this._valor }
    get total(){ return this._total =+ this._valor }
}
class NegociacaoController{

    constructor(){
        let $ = document.getElementById.bind(document)
        this._inputData = $('data')
        this._inputQuantidade = $('quantidade')
        this._inputValor = $('valor')
    }
    adiciona(event){
        event.preventDefault();

        let data = new Date(this._inputData.value.replace(/-/, ','));
        console.log(data)
    

        // let negoacao = new Negociacao(
        //     this._inputData.value,
        //     this._inputQuantidade.value,
        //     this._inputValor.value
        // )
        // console.log(negoacao)
    }
}
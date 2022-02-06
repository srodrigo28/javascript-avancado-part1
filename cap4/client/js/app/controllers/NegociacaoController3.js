class NegociacaoController{

    constructor(){
        let $ = document.getElementById.bind(document)
        this._inputData = $('data')
        this._inputQuantidade = $('quantidade')
        this._inputValor = $('valor')
    }
    adiciona(event){
        event.preventDefault();

        /***  1 forma
        let data = new Date(this._inputData.value.replace(/-/, ','));
        let data = new Date(...
            this._inputData.value
                .split('-')
                .map(function(item, indice){
                    if(indice == 1){
                        return item -1;
                    }
                    return item;
                })
        )
        */
       /***  2 forma
        let data = new Date(...
            this._inputData.value
                .split('-')
                .map(function(item, indice){
                    return item - indice % 2;
                })
        )
        */
       /***  3 forma */
        let data = new Date(...
            this._inputData.value
                .split('-')
                .map((item, indice) => item - indice % 2));
        console.log(data)
    

        // let negoacao = new Negociacao(
        //     this._inputData.value,
        //     this._inputQuantidade.value,
        //     this._inputValor.value
        // )
        // console.log(negoacao)
    }
}
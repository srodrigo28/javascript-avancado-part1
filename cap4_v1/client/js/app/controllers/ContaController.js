class ContaController{
// data,descricao,valor,total
    constructor(){
        let $ = document.getElementById.bind(document)
        this._inputData = $('data')
        this._inputDescricao = $('descricao')
        this._inputValor = $('valor')
        this._inputTotal = $('total')
        this._listaContas = new ListaContas();
    }

    adiciona(event){
        event.preventDefault();

        this._listaContas.adiciona(this._criaConta());
        this._limpaFormulario();
        
        console.log(this._listaContas.contas)
    }

    _criaConta(){
        return new Conta(
            DateHelper.textoParaData(this._inputData.value),
            this._inputDescricao.value,
            this._inputValor.value,
            this._inputTotal.value
        )
    }

    _limpaFormulario(){
        this._inputData.value = '';
        this._inputDescricao.value = 1;
        this._inputValor.value = 0.0;
        this._inputData.focus();
    }
    
}
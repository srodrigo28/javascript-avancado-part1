class ContaController{
    constructor(){
        let $ = document.getElementById.bind(document)
        this._inputData = $('data')
        this._inputDescricao = $('descricao')
        this._inputValor = $('valor')
        this._listaContas = new ListaContas()

        this._contasView = new ContasView($('contasView'))
        this._contasView.update(this._listaContas)
    }
    adiciona(event){
        event.preventDefault()
        
        this._listaContas.adiciona(this._criaConta())
        this._contasView.update(this._listaContas)
        this._limpaFormulario()
        console.log(this._listaContas.contas)
    }
    _criaConta(){
        return new Conta(
          //DataHelper.textoParaData(this._inputData.value),
            DateHelper.textoParaData(this._inputData.value),
            this._inputDescricao.value,
            this._inputValor.value)
    }
    _limpaFormulario(){
        this._inputData.value = ''
        this._inputDescricao = ''
        this._inputValor = 0.0
        this._inputData.focus()
    }
}
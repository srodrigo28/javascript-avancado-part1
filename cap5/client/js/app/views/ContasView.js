class ContasView{
    constructor(elemento){
        this._elemento = elemento;
    }
    _template(model){
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>DESCRICAO</th>
                        <th>VALOR</th>
                        <th>TOTAL</th>
                    </tr>
                </thead>
                
                <tbody>
                </tbody>
                    ${model.contas.map(n => `
                            <tr>
                                <td>${DateHelper.dataParaTexto(n.data)}</td>
                                <td>${n.descricao}</td>
                                <td>${n.valor}</td>
                                <td>${n.total}</td>
                            </tr>
                        ` ).join('')}
                <tfoot>
                    <td colspan="3"></td>
                    <td>
                        ${ model.contas.reduce((total, n) => total + n.valor, 0.0)}
                    </td>
                </tfoot>
            </table>
        `;
    }
    update(model){
        this._elemento.innerHTML = this._template(model);
    }
}
 
/*** 01
<td> 
    ${
        (function() {
            let total = 0;
            model.negociacoes.forEach(n=> total+= n.volume)
            return total;
        })()
    }
</td>
*/

/*** 02
<td>
    ${
        model.negociacoes.reduce(function(total, n){
            return total + n.volume;
        }, 0.0)
    }
</td>
*/

/*** 03
 <td>
    ${ model.negociacoes.reduce((total, n) => total + n.volume, 0.0)}
</td>
 */
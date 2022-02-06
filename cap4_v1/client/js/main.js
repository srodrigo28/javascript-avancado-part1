
/*** // https://cursos.alura.com.br/course/javascript-es6-orientacao-a-objetos-parte-1/task/16492
 * melhor parte que eu achei
 */
var campos = [
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor')
];

//console.log(campos)
var tbody = document.querySelector('table tbody')
document.querySelector('.form').addEventListener('submit', function(event) {
    event.preventDefault()
    // cria um elemento tr
    var tr = document.createElement('tr')
    
    campos.forEach(function(campo){
        var td = document.createElement('td')
        td.textContent = campo.value;
        tr.appendChild(td)
    })
    console.log(campos.length)
    var tdVolume = document.createElement('td')
    // faz calculo dos campos quantidade e valor
    tdVolume.textContent = campos[1].value * campos[2].value

    tr.appendChild(tdVolume)

    tbody.appendChild(tr)

    campos[0].value = '';
    campos[1].value = 0;
    campos[2].value = 0;

    campos[0].focus();
})
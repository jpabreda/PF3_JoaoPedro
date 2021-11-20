const calcular = document.getElementById('calcular');

function poupanca () {
    const nome = document.getElementById('nome').value;
    const valor_mensal = document.getElementById('valor_mensal').value;
    const i = document.getElementById('i').value;
    const n = document.getElementById('n').value;

    if (nome !== '' && valor_mensal !== '' && i !== '' && n !== '') {

        const juros = i/100

        const p = ((1+juros)**n-1)/juros

        const vf = valor_mensal*p.toFixed(2)
 
        resultado.textContent = `${nome}, se você aplicar R$ ${valor_mensal}, à taxa de juros de ${i} % ao mês, durante ${n} meses, acumulará uma poupança de R$ ${vf}.`;

    }else {
        resultado.textContent = 'Para simular o valor de seu financiamento, preencha todos os campos.';
    }
}
calcular.addEventListener('click', poupanca);
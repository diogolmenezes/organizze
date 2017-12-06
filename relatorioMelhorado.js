// Classe que inclui uma coluna com o percentual sobre a receita 
// no relatório do Organizze
class RelatorioMelhorado {
    constructor() {
        NodeList.prototype.map = Array.prototype.map;
    }

    melhorar() {
        let totalDeReceitas = this.converterParaNumero(document.querySelector('.earnings table tbody tr.total td:last-child'));
        let despesas = document.querySelectorAll('.expenses table tbody tr:not(.child):not(.total)');

        this.incluirHeader();

        let totalPercentual = 0;

        despesas.map((despesa, indice) => {
            let categoria = despesa.querySelector('td:first-child').textContent.trim();
            let valor = this.converterParaNumero(despesa.querySelector('td:last-child'));
            let percentual = ((valor / totalDeReceitas) * -100);

            totalPercentual += percentual;

            this.incluirPercentual(percentual, despesa);
        });

        this.incluirFooter(totalPercentual);

        alert('O Relatório foi ajustado com sucesso.');
    };

    incluirHeader() {
        let th = document.createElement('th');
        th.innerHTML = 'Percentual sobre a receita';
        th.className = 'align-center percentage';

        let tr = document.querySelector('.expenses table thead tr');
        tr.insertBefore(th, tr.children[2]);
    };

    incluirFooter(total) {
        let td = document.querySelector('.expenses table tbody tr.total').insertCell(2);
        td.innerHTML = `${total.toFixed(2)}%`;
        td.className = 'align-center percentage';
    };

    incluirPercentual(percentual, linha) {
        let td = linha.insertCell(2);
        td.innerHTML = `${percentual.toFixed(2)}%`;
        td.className = 'align-center percentage relative-to-earnings';
    };

    converterParaNumero(elemento) {
        return parseFloat(elemento.textContent.trim().replace('R$ ', '').replace('.', '').replace(',', '.'));
    };
};


(new RelatorioMelhorado()).melhorar();

// conversão para inline https://jscompress.com/
// class RelatorioMelhorado{constructor(){NodeList.prototype.map=Array.prototype.map}melhorar(){let a=this.converterParaNumero(document.querySelector('.earnings table tbody tr.total td:last-child')),b=document.querySelectorAll('.expenses table tbody tr:not(.child):not(.total)');this.incluirHeader();let c=0;b.map(d=>{let f=d.querySelector('td:first-child').textContent.trim(),g=this.converterParaNumero(d.querySelector('td:last-child')),h=-100*(g/a);c+=h,this.incluirPercentual(h,d)}),this.incluirFooter(c),alert('O Relat\xF3rio foi ajustado com sucesso.')}incluirHeader(){let a=document.createElement('th');a.innerHTML='Percentual sobre a receita',a.className='align-center percentage';let b=document.querySelector('.expenses table thead tr');b.insertBefore(a,b.children[2])}incluirFooter(a){let b=document.querySelector('.expenses table tbody tr.total').insertCell(2);b.innerHTML=`${a.toFixed(2)}%`,b.className='align-center percentage'}incluirPercentual(a,b){let c=b.insertCell(2);c.innerHTML=`${a.toFixed(2)}%`,c.className='align-center percentage relative-to-earnings'}converterParaNumero(a){return parseFloat(a.textContent.trim().replace('R$ ','').replace('.','').replace(',','.'))}}new RelatorioMelhorado().melhorar();
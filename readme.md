# Relatório melhorado para o Organizze

Criei esse script pois o Organizze não disponibiliza o percentual sobre a receita no
relatório por categoria.

## Como utilizar

Para utilizar, basta colocar o script minimizado abaixo no campo de URL do browser após acessar a página de relatório por categoria do seu Organizze.

1) Acessar seu organizze e ir em Relatórios > Categorias

1) Colar o código abaixo na URL. Alguns browsers vão retirar "javascript:" da frente da URL. Caso isso aconteça, escreva novamente "javascript:" na frente do conteúdo colado.

```javascript
javascript:class RelatorioMelhorado{constructor(){NodeList.prototype.map=Array.prototype.map}melhorar(){let a=this.converterParaNumero(document.querySelector('.earnings table tbody tr.total td:last-child')),b=document.querySelectorAll('.expenses table tbody tr:not(.child):not(.total)');this.incluirHeader();let c=0;b.map(d=>{let f=d.querySelector('td:first-child').textContent.trim(),g=this.converterParaNumero(d.querySelector('td:last-child')),h=-100*(g/a);c+=h,this.incluirPercentual(h,d)}),this.incluirFooter(c),alert('O Relat\xF3rio foi ajustado com sucesso.')}incluirHeader(){let a=document.createElement('th');a.innerHTML='Percentual sobre a receita',a.className='align-center percentage';let b=document.querySelector('.expenses table thead tr');b.insertBefore(a,b.children[2])}incluirFooter(a){let b=document.querySelector('.expenses table tbody tr.total').insertCell(2);b.innerHTML=`${a.toFixed(2)}%`,b.className='align-center percentage'}incluirPercentual(a,b){let c=b.insertCell(2);c.innerHTML=`${a.toFixed(2)}%`,c.className='align-center percentage relative-to-earnings'}converterParaNumero(a){return parseFloat(a.textContent.trim().replace('R$ ','').replace('.','').replace(',','.'))}}new RelatorioMelhorado().melhorar();
```

1) Caso você tenha gostado do script, basta criar um atalho na sua barra de favoritos com o código mostrado acima.
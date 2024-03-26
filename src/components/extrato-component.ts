import Conta from "../Types/conta.js";
import { FormatoData } from "../Types/enum-data.js";
import { GrupoTransacao } from "../Types/grupo-trasacao.js";
import { formatarMoeda, formatarData } from "../utils/formaters.js";

const elementoRegistroTransacoesExtrato:any = document.querySelector('.extrato .registro-transacoes');

renderizarExtrato();
function renderizarExtrato():void {
    const grupoTransacoes:GrupoTransacao[] = Conta.getGrupotransacoes();
    elementoRegistroTransacoesExtrato.innerHTML = '';
    let htmlRegistroTransacoes:string = '';

    for(let GrupoTransacao of grupoTransacoes) {
        let htmlTransacaoItem:string = '';
        for(let transacao of GrupoTransacao.transacoes){
            htmlTransacaoItem += `
            <div class="transacao-item">
                <div class="transacao-info">
                    <span class="tipo">${transacao.tipoTrasacao}</span>
                    <strong class="valor">${formatarMoeda(transacao.valor)}</strong>
                </div>
                <time class="data">${formatarData(transacao.data, FormatoData.DIA_MES)}</time>
            </div>
            `
        }

        htmlRegistroTransacoes += `
            <div class="transacoes-group">
                <strong class="mes-group">${GrupoTransacao.label}</strong>
                ${htmlTransacaoItem}
            </div>
        `
    }

    if(htmlRegistroTransacoes === ''){
        htmlRegistroTransacoes = "<div> Não Há transações registradas</div>"
    }
    elementoRegistroTransacoesExtrato.innerHTML = htmlRegistroTransacoes;
}
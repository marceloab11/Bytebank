import Conta from "../Types/conta.js";
import { FormatoData } from "../Types/enum-data.js";
import { formatarMoeda, formatarData } from "../utils/formaters.js";
const elementoRegistroTransacoesExtrato = document.querySelector('.extrato .registro-transacoes');
renderizarExtrato();
function renderizarExtrato() {
    const grupoTransacoes = Conta.getGrupotransacoes();
    elementoRegistroTransacoesExtrato.innerHTML = '';
    let htmlRegistroTransacoes = '';
    for (let GrupoTransacao of grupoTransacoes) {
        let htmlTransacaoItem = '';
        for (let transacao of GrupoTransacao.transacoes) {
            htmlTransacaoItem += `
            <div class="transacao-item">
                <div class="transacao-info">
                    <span class="tipo">${transacao.tipoTrasacao}</span>
                    <strong class="valor">${formatarMoeda(transacao.valor)}</strong>
                </div>
                <time class="data">${formatarData(transacao.data, FormatoData.DIA_MES)}</time>
            </div>
            `;
        }
        htmlRegistroTransacoes += `
            <div class="transacoes-group">
                <strong class="mes-group">${GrupoTransacao.label}</strong>
                ${htmlTransacaoItem}
            </div>
        `;
    }
    if (htmlRegistroTransacoes === '') {
        htmlRegistroTransacoes = "<div> Não Há transações registradas</div>";
    }
    elementoRegistroTransacoesExtrato.innerHTML = htmlRegistroTransacoes;
}

import { formatarData } from '../utils/formaters.js'
import { formatarMoeda } from '../utils/formaters.js'
import { FormatoData } from '../Types/enum-data.js'
import Conta from '../Types/conta.js';

const saldoElemento = document.querySelector('.saldo-valor .valor') as HTMLElement;
const elementoDataAcesso = document.querySelector('.block-saldo time') as HTMLElement

if(elementoDataAcesso !== null) {
    elementoDataAcesso.textContent = formatarData(Conta.getDate(), FormatoData.DIA_SEMANA_MES_ANO)
}

 renderizarSaldo()
 function renderizarSaldo():void {
    if(saldoElemento !== null) {
        saldoElemento.textContent = formatarMoeda(Conta.getSaldo())
    }
}

const saldoComponent = {
    atualizar() {
        renderizarSaldo()
    }
}

export default saldoComponent;



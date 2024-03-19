import { FormatoData } from '../Types/enum-data.js';
export function formatarData(data, formato = FormatoData.PARDRAO) {
    if (formato == FormatoData.DIA_SEMANA_MES_ANO) {
        return data.toLocaleDateString('pt-br', {
            weekday: "long",
            day: "2-digit",
            month: '2-digit',
            year: "numeric"
        });
    }
    else if (formato == FormatoData.DIA_MES) {
        return data.toLocaleDateString('pt-br', {
            day: "2-digit",
            month: '2-digit'
        });
    }
    return data.toLocaleDateString('pt-br');
}
export function formatarMoeda(moeda) {
    return moeda.toLocaleString('pt-br', { currency: 'BRL', style: "currency" });
}

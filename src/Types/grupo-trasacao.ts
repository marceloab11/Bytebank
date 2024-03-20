import { transacao } from "./transacao.js";

export type GrupoTransacoes = {
    label:string;
    transacoes:transacao[]
}
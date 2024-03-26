import { transacao } from "./transacao.js";

export type GrupoTransacao = {
    label:string;
    transacoes:transacao[]
}
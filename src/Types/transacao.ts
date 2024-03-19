import {tipoTrasacao} from "./tipo-trasacao.js"

export type transacao = {
    tipoTrasacao:tipoTrasacao,
    valor:number,
    data:Date
}
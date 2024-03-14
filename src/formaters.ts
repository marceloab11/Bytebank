function formatarData(data:Date):string {
   return data.toLocaleDateString('pt-br', {
        weekday: "long",
        day: "2-digit",
        month: '2-digit',
        year: "numeric"
    })
}

function formartarMoeda(moeda:number):string {
    return moeda.toLocaleString('pt-br', { currency: 'BRL', style: "currency"});
}
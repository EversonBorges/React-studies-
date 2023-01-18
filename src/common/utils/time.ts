export function tempoParaSegundos(tempo: string){
    const[horas = '0', minutos= '0', segundos='0'] = tempo.split(":")
    
    const horasSegundos = Number(horas) * 3600
    const minutosSegundos = Number(minutos) * 60

    return horasSegundos + minutosSegundos + Number(segundos);
}

export function segundosParaTempo(tempo: number){

    const minutos = Math.floor(tempo / 60)
    const segundos = tempo % 60
    
    const [minutoDezena, minutoUnidades] = String(minutos).padStart(2,'0');
    const [segundoDezena, segundoUnidades] = String(segundos).padStart(2,'0');
    
    return {
            minutoDezena, minutoUnidades, segundoDezena, segundoUnidades
    }
}
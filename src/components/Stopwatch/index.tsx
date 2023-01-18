import { useEffect, useState } from "react";
import { tempoParaSegundos } from "../../common/utils/time";
import { ITarefa } from "../../types/tarefa";
import Button from "../Button"
import Clock from './Clock'
import style from './Stopwatch.module.scss'

interface Props {
    selected: ITarefa | undefined
    finalizarTarefa: () => void
}


export default function Stopwatch({selected, finalizarTarefa}: Props){
    const [tempo, setTempo] = useState<number>();

    useEffect(()=>{
        if(selected?.tempo){
            setTempo(tempoParaSegundos(selected.tempo))
        }

    },[selected])

   function regressiva(contador:number = 0){
        
        setTimeout(() => {
            if(contador > 0){
                setTempo(contador -1)
                return regressiva(contador - 1)
            }
            finalizarTarefa();
        }, 1000);
    }

    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro </p>
            <div className={style.relogioWrapper}>
                <Clock tempo={tempo}></Clock>
            </div>
            <Button onClick={()=> regressiva(tempo)}>Iniciar</Button>
        </div>
    )
}
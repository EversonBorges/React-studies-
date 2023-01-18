import { segundosParaTempo } from '../../../common/utils/time';
import style from './Clock.module.scss';
interface Props{
    tempo: number | undefined
}

export default function Clock({tempo = 0}:Props){
    
    const {minutoDezena, minutoUnidades, segundoDezena, segundoUnidades}= segundosParaTempo(tempo);
   
    return(
        <>
            <span className={style.relogioNumero}>{minutoDezena}</span>
            <span className={style.relogioNumero}>{minutoUnidades}</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>{segundoDezena}</span>
            <span className={style.relogioNumero}>{segundoUnidades}</span>
        </>

    )
}
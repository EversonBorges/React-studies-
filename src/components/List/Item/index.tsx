import { ITarefa } from '../../../types/tarefa'
import style from './Item.module.scss'

interface Props extends ITarefa{
    selectTask: (taskSelected: ITarefa) => void
}

export default function Item({tarefa, tempo, completado, selecionado, id, selectTask}: Props){
    
    return(
            <li className={`${style.item} ${selecionado ? style.itemSelecionado : ''}`} onClick={() => selectTask(
                {
                    tarefa,
                    tempo,
                    selecionado,
                    completado,
                    id
                }
            )}>
                <h3> {tarefa} </h3>
                <span> {tempo} </span>
            </li>
    )
}
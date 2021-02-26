import { useState, useEffect } from 'react'
import {FiCheck} from 'react-icons/fi'
import Styles from '../styles/components/CountDown.module.css'

let countDownTimeOut : NodeJS.Timeout

export function CountDown(){
    const [hasTime , setHasTime] = useState(0.1 * 60) // Coloca tempo no timer = 25 min
    const [isActive, setIsActive] = useState(false) // ** Seta o Timer ativo ou nao 
    const [hasFinished, setHasFinished] =useState(false) // ** Verifica se o timer acabou

    const minutes = Math.floor(hasTime / 60)
    const seconds = hasTime % 60

    const [minuteLeft , minuteRigth] = String(minutes).padStart(2,'0').split('')
    const [secondLeft , secondRigth] = String(seconds).padStart(2,'0').split('')

    function StartCountDown(){
        setIsActive(true)
    }

    function ResetCountDonw(){
        clearTimeout(countDownTimeOut)
        setIsActive(false) 
        setHasTime(0.1 * 60)
    }

    useEffect(() => {
        if(isActive && hasTime > 0){
            countDownTimeOut = setTimeout(() => {
                setHasTime(hasTime - 1)
            }, 1000)
        } else if (isActive && hasTime === 0){
            setHasFinished(true)
            setIsActive(false)
        } 
    },[isActive, hasTime])

    return(
        <div>
            <div className={Styles.CountDownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRigth}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRigth}</span>
                </div>
            </div>

            {hasFinished ? (
                <button 
                    disabled
                    className={Styles.CountDownButton}>
                    Ciclo encerrado <FiCheck className={Styles.checked}/> 
                </button>
            ) : (
                <>
                {isActive ? (
                <button 
                type='button' 
                className={`${Styles.CountDownButton} ${Styles.CountDownButtonActive}`}
                onClick={() => ResetCountDonw() }
                >
                    Abandonar ciclo
                </button>
             ) : (
                <button 
                    type='button' 
                    className={Styles.CountDownButton}
                    onClick={() => StartCountDown() }
                >
                Iniciar ciclo
                </button>
            )}
           
                </>
            )}

            
             
        </div>
    )
}
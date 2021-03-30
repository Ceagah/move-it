import { useContext } from 'react'
import { ChallengeContext } from '../contexts/ChallengeContext'
import Styles from '../styles/components/CompletedChallenges.module.css'

export function CompletedChallenges() {
    const {challengesCompleted} = useContext(ChallengeContext)
    return(
        <div className={Styles.completedChallengesContainer}>
            <span>Desafios Completos </span>
            <span>{challengesCompleted}</span>
        </div>
    )
}
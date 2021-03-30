import Styles from '../styles/components/Profile.module.css'

export function Profile(){
    return(
        <div className={Styles.profileContainer}>
            <img src='https://github.com/Ceagah.png' alt='Avatar Ceagah' />
            <div>
                <strong>Carlos Henrique </strong>
                <p>
                    <img src='icons/level.svg' alt='Lvl'/>Level 1
                </p>
            </div>
        </div>
    )
}
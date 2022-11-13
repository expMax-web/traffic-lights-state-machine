import { FC } from "react"

import styles from './styles.module.scss'

interface TraficLightsButtonProps {
    onClick: () => void
}

export const TraficLightsButton: FC<TraficLightsButtonProps> = ({ onClick }) => {
    return <button type="button" className={styles.Button} onClick={onClick}>Переключить</button>
}
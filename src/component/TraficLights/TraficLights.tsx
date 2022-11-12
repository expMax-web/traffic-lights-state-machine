import { FC } from "react";

import styles from './styles.module.scss'
import { TraficLightsItem } from "./TraficLightsItem";

export const TraficLights: FC = () => {
    return <div className={styles.Container} >
        <TraficLightsItem color="green" />
        <TraficLightsItem color="yellow" />
        <TraficLightsItem color="red" />
    </div>
}
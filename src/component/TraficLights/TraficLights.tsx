import { FC, useReducer } from "react";
import { TRAFIC_LIGHTS_ITEMS_INITIAL_STATE } from "./constants";
import traficLightsReducer from "./reducers";

import styles from './styles.module.scss'
import { TraficLightsButton } from "./TraficLightsButton";
import { TraficLightsItem } from "./TraficLightsItem";

export const TraficLights: FC = () => {

    const [traficLightsItemsState, dispatch] = useReducer(traficLightsReducer, TRAFIC_LIGHTS_ITEMS_INITIAL_STATE);

    return (
        <div className={styles.Container}>
            <div className={styles.TraficLights} >
                {traficLightsItemsState.map((item) => {
                    return <TraficLightsItem color={item.color} isActive={item.isActive} key={item.color} />
                })}
            </div>
            <TraficLightsButton onClick={() => dispatch({ type: 'SWITCH_COLOR' })} />
        </div>
    )
}
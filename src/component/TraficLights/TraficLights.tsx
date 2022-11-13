import { FC, useReducer } from "react";

import { TraficLightsButton } from "./TraficLightsButton";
import { TraficLightsItem } from "./TraficLightsItem";
import { TRAFIC_LIGHTS_ITEMS_INITIAL_STATE } from "./constants";
import { TraficLightsSchema } from "./icon";
import traficLightsReducer from "./reducers";

import styles from './styles.module.scss'


export const TraficLights: FC = () => {

    const [traficLightsItemsState, dispatch] = useReducer(traficLightsReducer, TRAFIC_LIGHTS_ITEMS_INITIAL_STATE);

    return (
        <div className={styles.Container}>
            <div className={styles.TraficLights} >
                {traficLightsItemsState.map((item) => {
                    return <TraficLightsItem color={item.color} isActive={item.isActive} key={item.color} />
                })}
                <TraficLightsButton onClick={() => dispatch({ type: 'SWITCH_COLOR' })} />
            </div>
            <img
                src={TraficLightsSchema}
                alt=""
                width={286}
                height={407}
            />
        </div>
    )
}
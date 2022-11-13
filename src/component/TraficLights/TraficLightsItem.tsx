import { FC } from "react"
import cn from "classnames"

import { Color } from "./types"

import styles from './styles.module.scss'



interface TraficLightsItemProps {
    color: Color;
    isActive: boolean;
}

const COLOR_ITEM_CLASSNAME_MAP: Record<Color, string> = {
    green: styles.Item_Green,
    red: styles.Item_Red,
    yellow: styles.Item_Yellow,
}





export const TraficLightsItem: FC<TraficLightsItemProps> = ({ color, isActive }) => {

    const currentColor = COLOR_ITEM_CLASSNAME_MAP[color]

    return <div className={cn(styles.Item, currentColor,
        { [styles.Item_Active]: isActive })} />
}

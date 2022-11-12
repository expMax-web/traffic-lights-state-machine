import { FC } from "react"

import { Color } from "./types"

import styles from './styles.module.scss'


interface TraficLightsItemProps {
    color: Color
}

const COLOR_ITEM_MAP: Record<Color, string> = {
    red: "Item_Red",
    yellow: "Item_Red",
    green: "Item_Red",
}





export const TraficLightsItem: FC<TraficLightsItemProps> = ({ color }) => {
    return <div className={styles.Item} />
}

// {cn(styles.Button, {
//     [styles.Button_Active]:
//       bookingComponent === BookingComponentsEnum.bookingForm,
//   })}
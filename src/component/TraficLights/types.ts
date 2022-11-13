export type Color = "green" | "yellow" | "red";

export type TraficLightsActions = { type: "SWITCH_COLOR" };

export type TraficLightsItemState = { color: Color; isActive: boolean };

export type TraficLightsItemsState = TraficLightsItemState[];

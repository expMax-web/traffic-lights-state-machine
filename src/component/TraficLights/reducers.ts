import { TRAFIC_LIGHTS_ITEMS_INITIAL_STATE } from "./constants";
import {
  TraficLightsActions,
  TraficLightsItemsState,
  TraficLightsItemState,
} from "./types";

const RED_ACTIVE: TraficLightsItemsState = [
  { color: "red", isActive: true },
  { color: "yellow", isActive: false },
  { color: "green", isActive: false },
];

const YELLOW_ACTIVE: TraficLightsItemsState = [
  { color: "red", isActive: false },
  { color: "yellow", isActive: true },
  { color: "green", isActive: false },
];

const GREEN_ACTIVE: TraficLightsItemsState = [
  { color: "red", isActive: false },
  { color: "yellow", isActive: false },
  { color: "green", isActive: true },
];

function traficLightsReducer(
  state: TraficLightsItemsState,
  action: TraficLightsActions
): TraficLightsItemsState {
  if (action.type === "SWITCH_COLOR") {
    const activeColor = state.find(
      (item: TraficLightsItemState) => item.isActive
    );

    switch (activeColor?.color) {
      case "red":
        return YELLOW_ACTIVE;
      case "yellow":
        return GREEN_ACTIVE;
      case "green":
        return RED_ACTIVE;
      default:
        return RED_ACTIVE;
    }
  }
  return TRAFIC_LIGHTS_ITEMS_INITIAL_STATE;
}

export default traficLightsReducer;

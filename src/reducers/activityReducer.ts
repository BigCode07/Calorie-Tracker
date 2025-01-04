import { Activity } from "../types";

export type ActivityActions = {
  type: "SaveActiviy";
  payload: { newActivity: Activity };
};

type ActivityState = {
  activities: Activity[];
};

export const initialState: ActivityState = {
  activities: [],
};

export const activityReducer = (
  state: ActivityState = initialState,
  action: ActivityActions
) => {
  if (action.type === "SaveActiviy") {
    //Este codigo maneja la logica para actualizar el state

    return {
      ...state,
      activities: [...state.activities, action.payload.newActivity],
    };
  }
  return state;
};

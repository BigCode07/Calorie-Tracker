import { Activity } from "../types";

export type ActivityActions =
  | {
      type: "SaveActivity";
      payload: { newActivity: Activity };
    }
  | {
      type: "SetActivity";
      payload: { id: Activity["id"] };
    }
  | {
      type: "DeleteActivity";
      payload: { id: Activity["id"] };
    };

export type ActivityState = {
  activities: Activity[];
  activeID: Activity["id"];
};

export const initialState: ActivityState = {
  activities: [],
  activeID: "",
};

export const activityReducer = (
  state: ActivityState = initialState,
  action: ActivityActions
) => {
  if (action.type === "SaveActivity") {
    // Corregido el nombre del tipo de acción
    let updatedActivities: Activity[] = [];
    if (state.activeID) {
      updatedActivities = state.activities.map((activity) =>
        activity.id === state.activeID ? action.payload.newActivity : activity
      );
    } else {
      updatedActivities = [...state.activities, action.payload.newActivity];
    }

    return {
      ...state,
      activities: updatedActivities, // Corregido para usar updatedActivities
      activeID: "",
    };
  }

  if (action.type === "SetActivity") {
    return {
      ...state,
      activeID: action.payload.id, // Corregido
    };
  }

  if (action.type === "DeleteActivity") {
    return {
      ...state,
      activities: state.activities.filter(
        (activity) => activity.id != action.payload.id
      ),
    };
  }

  // Agregar un retorno por defecto para manejar otros tipos de acciones
  return state;
};

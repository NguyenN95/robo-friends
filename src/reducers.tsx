import { RobotsActionType, SearchActionType } from "./constants";

export const searchRobots = (
  state: SearchState = { searchField: "" },
  action: SearchAction = {}
) => {
  switch (action.type) {
    case SearchActionType.CHANGE_SEARCHFIELD:
      return Object.assign({}, state, { searchField: action.payload });
    default:
      return state;
  }
};

export const requestRobots = (
  state: RobotsState = { robots: [], isPending: true },
  action: RobotsAction = {}
) => {
  switch (action.type) {
    case RobotsActionType.REQUEST_ROBOTS_PENDING:
      return Object.assign({}, state, { isPending: true });
    case RobotsActionType.REQUEST_ROBOTS_SUCCESS:
      return Object.assign({}, state, {
        robots: action.payload,
        isPending: false,
      });
    case RobotsActionType.REQUEST_ROBOTS_FAILED:
      return Object.assign({}, state, { error: action.payload });
    default:
      return state;
  }
};

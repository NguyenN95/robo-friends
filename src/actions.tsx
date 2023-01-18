import { Dispatch } from "@reduxjs/toolkit";
import { apiCall } from "./api/api";
import { RobotsActionType, SearchActionType } from "./constants";

export const setSearchField = (text: string) => ({
  type: SearchActionType.CHANGE_SEARCHFIELD,
  payload: text,
});

export const requestRobots = () => (dispatch: Dispatch) => {
  dispatch({ type: RobotsActionType.REQUEST_ROBOTS_PENDING });
  apiCall("https://jsonplaceholder.typicode.com/users")
    .then((data) =>
      dispatch({ type: RobotsActionType.REQUEST_ROBOTS_SUCCESS, payload: data })
    )
    .catch((error) =>
      dispatch({ type: RobotsActionType.REQUEST_ROBOTS_FAILED, payload: error })
    );
};

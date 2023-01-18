type Robot = {
  id: number;
  name: string;
  email: string;
};

type SearchState = {
  searchField: string;
};

type SearchAction = {
  type?: SearchActionType;
  payload?: string;
};

type RobotsState = {
  robots: Robot[];
  isPending: boolean;
};

type RobotsAction = {
  type?: RobotsActionType;
  payload?: Robot[];
};

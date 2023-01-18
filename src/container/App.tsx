import React, { ChangeEvent, ChangeEventHandler } from "react";
import { connect } from "react-redux";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import "./App.css";
import ErrorBoundry from "../components/ErrorBoundry";
import { setSearchField, requestRobots } from "../actions";
import { AppDispatch, RootState } from "..";

// parameter state comes from index.js provider store state(rootReducers)
const mapStateToProps = (state: RootState) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
  };
};

// dispatch the DOM changes to call an action. note mapStateToProps returns object, mapDispatchToProps returns function
// the function returns an object then uses connect to change the data from redecers.
const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    onSearchChange: (event: ChangeEvent<HTMLInputElement>) =>
      dispatch(setSearchField(event.currentTarget.value)),
    onRequestRobots: () => dispatch(requestRobots()),
  };
};

interface IProps {
  onRequestRobots: any;
  robots: Robot[];
  searchField: string;
  onSearchChange: ChangeEventHandler<HTMLInputElement>;
  isPending: boolean;
}

interface IState {}

class App extends React.Component<IProps, IState> {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    const { robots, searchField, onSearchChange, isPending } = this.props;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          {isPending ? (
            <h1>Loading</h1>
          ) : (
            <ErrorBoundry>
              <CardList robots={filteredRobots} />
            </ErrorBoundry>
          )}
        </Scroll>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

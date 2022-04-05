import React from 'react';
import { createStore,combineReducers } from 'redux';
import * as ReactRedux from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import todoReducer from "../../../src/reducer/todolist";
import otherReducer from "../../../src/reducer/other";
import Main from '../../../src/component/Main';



const { Provider } = ReactRedux;

const generateComponent = (component, initState) => {
  const rootReducer = combineReducers({
    todoReducer,
    otherReducer,
  });
  const store = createStore(rootReducer, initState);
  const history = createMemoryHistory();
  return render(
    <Provider store={store}>
      <Router history={history}>
        {component}
      </Router>
    </Provider>,
  );
};

describe('Main', () => {
  test('Main_ClickTodoLisstLink_RenderTodoList', () => {
    const { getByTestId, queryByTestId  } = generateComponent(<Main />);
    expect(getByTestId('contentBlock')).toBeInTheDocument();
    const todolostLink = getByTestId('todolistLink');
    fireEvent.click(todolostLink);
    expect(queryByTestId('contentBlock')).toBeNull();
    expect(getByTestId('todolistBlock')).toBeInTheDocument();
  });
});
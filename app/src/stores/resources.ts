type State = Array<unknown>;

interface Action {
  data: unknown;
  type: string;
}
const INITIAL_STATE: State = [];

function reducer(state = INITIAL_STATE, action: Action): State {
  switch (action.type) {
    case 'ADD_GRAPH':
      return [...state, action?.data];
    default:
      return state;
  }
}

export default reducer;

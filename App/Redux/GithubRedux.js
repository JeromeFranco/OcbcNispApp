import Immutable from 'seamless-immutable';
import { createSlice } from 'redux-starter-kit';

export const INITIAL_STATE = Immutable({
  avatar: null,
  fetching: null,
  error: null,
  username: null,
});

const githubSlice = createSlice({
  initialState: INITIAL_STATE,
  reducers: {
    fetchUserRequest: (state, { username }) => {
      return state.merge({ fetching: true, username, avatar: null });
    },
    fetchUserSuccess: (state, { avatar }) => {
      return state.merge({ fetching: false, error: null, avatar });
    },
    fetchUserFailure: state => {
      return state.merge({ fetching: false, error: true, avatar: null });
    },
  },
});

export const GithubSelectors = {
  selectAvatar: state => state.github.avatar,
};

const { actions, reducer } = githubSlice;

export const GithubActions = actions;

export default reducer;

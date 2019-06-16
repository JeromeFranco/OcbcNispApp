import { takeLatest, all } from 'redux-saga/effects';
import API from '../Services/Api';
import FixtureAPI from '../Services/FixtureApi';
import DebugConfig from '../Config/DebugConfig';

/* ------------- Actions ------------- */

import { StartupActions } from '../Redux/StartupRedux';
import { GithubActions } from '../Redux/GithubRedux';

/* ------------- Sagas ------------- */

import { startup } from './StartupSagas';
import { getUserAvatar } from './GithubSagas';

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = DebugConfig.useFixtures ? FixtureAPI : API.create();

/* ------------- Connect Action Types To Sagas ------------- */

export default function* root() {
  yield all([
    // some sagas only receive an action
    takeLatest(StartupActions.startup.type, startup),

    // some sagas receive extra parameters in addition to an action
    takeLatest(GithubActions.fetchUserRequest.type, getUserAvatar, api),
  ]);
}

import { all } from 'redux-saga/effects';
import authSagas from './auth/saga';
import todoSagas from './todo/saga';
import chatSagas from './chat/saga';
import surveyListSagas from './surveyList/saga';
import surveyDetailSagas from './surveyDetail/saga';
import industrySagas from './industry/saga';

export default function* rootSaga() {
    yield all([
        authSagas(),
        todoSagas(),
        chatSagas(),
        surveyListSagas(),
        surveyDetailSagas(),
        industrySagas(),
    ]);
}
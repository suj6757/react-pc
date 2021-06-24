import axios from 'axios';
import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import {
  TREND_INDUSTRY_EFACTOR_GI,
  TREND_INDUSTRY_EFACTOR_GI_RELATEDWORDS,
  TREND_INDUSTRY_EFACTOR_TRENDANDFACTOR,
  TREND_INDUSTRY_EFACTOR_TRENDQUAD,
  TREND_INDUSTRY_PFACTOR_GI,
  TREND_INDUSTRY_PFACTOR_GI_RELATEDWORDS,
  TREND_INDUSTRY_PFACTOR_TRENDANDFACTOR,
  TREND_INDUSTRY_PFACTOR_TRENDQUAD,
  TREND_INDUSTRY_SHOWROOM,
  TREND_INDUSTRY_TOTALCATEGORY_LIST,
  TREND_SUCCESS_INDUSTRY_TOTALCATEGORY_LIST,
  TREND_ERROR_INDUSTRY_TOTALCATEGORY_LIST,
} from '../actions';

import {
  getIndustryEfactorGi,
  getIndustryEfactorGiRelatedwords,
  getIndustryEfactorTrendandfactor,
  getIndustryEfactorTrendquad,
  getIndustryPfactorGi,
  getIndustryPfactorGiRelatedwords,
  getIndustryPfactorTrendandfactor,
  getIndustryPfactorTrendquad,
  getIndustryShowroom,
  getIndustryTotalcategoryList,
  getSuccessIndustryTotalcategoryList,
  getErrorIndustryTotalcategoryList,
} from './actions';

import { adminRoot, currentUser } from '../../constants/defaultValues';
import { setCurrentUser } from '../../helpers/Utils';

function* industryEfactorGi({ payload }){
  // eslint-disable-next-line no-use-before-define
  console.log('industryEfactorGi');
}

export function* watchIndustryEfactorGi() {
  
  yield takeEvery(TREND_INDUSTRY_EFACTOR_GI, industryEfactorGi);
}

function* industryEfactorGiRelatedwords({ payload }){
  console.log('industryEfactorGiRelatedwords');
}

export function* watchIndustryEfactorGiRelatedwords() {
  // eslint-disable-next-line no-use-before-define
  yield takeEvery(TREND_INDUSTRY_EFACTOR_GI_RELATEDWORDS, industryEfactorGiRelatedwords);
}

function* industryEfactorTrendandfactor({ payload }){
  console.log('industryEfactorTrendandfactor');
}

export function* watchIndustryEfactorTrendandfactor() {
  // eslint-disable-next-line no-use-before-define
  yield takeEvery(TREND_INDUSTRY_EFACTOR_TRENDANDFACTOR, industryEfactorTrendandfactor);
}



export function* watchIndustryEfactorTrendquad() {
  // eslint-disable-next-line no-use-before-define
  yield takeEvery(TREND_INDUSTRY_EFACTOR_TRENDQUAD, industryEfactorTrendquad);
}

function* industryEfactorTrendquad({ payload }){
  console.log('industryEfactorTrendquad');
}

export function* watchIndustryPfactorGi() {
  // eslint-disable-next-line no-use-before-define
  yield takeEvery(TREND_INDUSTRY_PFACTOR_GI, industryPfactorGi);
}

function* industryPfactorGi({ payload }){
  console.log('industryPfactorGi');
}

export function* watchIndustryPfactorGiRelatedwords() {
  // eslint-disable-next-line no-use-before-define
  yield takeEvery(TREND_INDUSTRY_PFACTOR_GI_RELATEDWORDS, industryPfactorGiRelatedwords);
}

function* industryPfactorGiRelatedwords({ payload }){
  console.log('industryPfactorGiRelatedwords');
}

//우측 차트(바, 컬럼)
export function* watchIndustryPfactorTrendandfactor() {
    yield takeEvery(TREND_INDUSTRY_PFACTOR_TRENDANDFACTOR, industryPfactorTrendandfactor);
}
function* industryPfactorTrendandfactor({ payload }) {
    axios.post("/api/GetIndustry_PFactor_TrendAndFactor", payload)
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
}

export function* watchIndustryPfactorTrendquad() {
  // eslint-disable-next-line no-use-before-define
  yield takeEvery(TREND_INDUSTRY_PFACTOR_TRENDQUAD, industryPfactorTrendquad);
}

function* industryPfactorTrendquad({ payload }){
  console.log('industryPfactorTrendquad');
}

function* industryShowroom({ payload }){
  console.log('industryShowroom');
}

export function* watchIndustryShowroom() {
  // eslint-disable-next-line no-use-before-define
  yield takeEvery(TREND_INDUSTRY_SHOWROOM, industryShowroom);
}

//검색조건 카테고리

const industryTotalcategoryListAsync = async() => {
    await axios.post("/api/GetIndustry_TotalCategory_List")
    .then((response) => response)
    .catch((error) => error);
}

function* industryTotalcategoryList() {
    console.log('iiiiiiiii')
    try {
        const result = yield call(industryTotalcategoryListAsync);
        setCurrentUser();
        console.log('ssssssssss : ', result);

        yield put(getSuccessIndustryTotalcategoryList());
    }
    catch(error) {
        console.log('eeeeeeeeeeee')
        yield put(getErrorIndustryTotalcategoryList());
    }
}
export function* watchIndustryTotalcategoryList() {
    yield takeEvery(TREND_INDUSTRY_TOTALCATEGORY_LIST, industryTotalcategoryList);
}

export default function* rootSaga() {
  yield all([
    fork(watchIndustryEfactorGi),
    fork(watchIndustryEfactorGiRelatedwords),
    fork(watchIndustryEfactorTrendandfactor),
    fork(watchIndustryEfactorTrendquad),
    fork(watchIndustryPfactorGi),
    fork(watchIndustryPfactorGiRelatedwords),
    fork(watchIndustryPfactorTrendandfactor),
    fork(watchIndustryPfactorTrendquad),
    fork(watchIndustryShowroom),
    fork(watchIndustryTotalcategoryList),
  ]);
}

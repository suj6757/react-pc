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
    TREND_INDUSTRY_TOTALCATEGORY_LIST
} from '../actions';

export const getIndustryEfactorGi = () => ({
    type: TREND_INDUSTRY_EFACTOR_GI,
});

export const getIndustryEfactorGiRelatedwords = () => ({
    type: TREND_INDUSTRY_EFACTOR_GI_RELATEDWORDS,
   
});

export const getIndustryEfactorTrendandfactor = () => ({
    type: TREND_INDUSTRY_EFACTOR_TRENDANDFACTOR,
});

export const getIndustryEfactorTrendquad = () => ({
    type: TREND_INDUSTRY_EFACTOR_TRENDQUAD,
});

export const getIndustryPfactorGi = () => ({
    type: TREND_INDUSTRY_PFACTOR_GI,
});

export const getIndustryPfactorGiRelatedwords = () => ({
    type: TREND_INDUSTRY_PFACTOR_GI_RELATEDWORDS,
});

export const getIndustryPfactorTrendandfactor = (searchCondition) => ({
    type: TREND_INDUSTRY_PFACTOR_TRENDANDFACTOR,
    payload: searchCondition
});

export const getIndustryPfactorTrendquad = () => ({
    type: TREND_INDUSTRY_PFACTOR_TRENDQUAD,
});

export const getIndustryShowroom = () => ({
    type: TREND_INDUSTRY_SHOWROOM,
 
});

export const getIndustryTotalcategoryList = () => ({
    type: TREND_INDUSTRY_TOTALCATEGORY_LIST,
});
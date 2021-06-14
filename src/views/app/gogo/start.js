import React, { useState , useEffect } from 'react';
import { 
  Row, 
  Card, 
  CardBody, 
  Form, 
  FormGroup, 
  Nav,
  NavItem,
  
  Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { injectIntl } from 'react-intl';
import axios from 'axios';// eslint-disable-line no-unused-vars
import classnames from 'classnames';
import Select from 'react-select';
// import IntlMessages from '../../../helpers/IntlMessages';
import DatePicker from 'react-datepicker';
import { ko } from "date-fns/esm/locale";
import 'react-datepicker/dist/react-datepicker.css';
import ShowRoom from '../../../containers/pages/ShowRoom';
import Bubble from '../../../components/charts/Bubble';
import Line from '../../../components/charts/Line';
import Bar from '../../../components/charts/Bar';
import { ReactTableWithPaginationCard } from '../../../containers/ui/ReactTableCards';
import { Colxx } from '../../../components/common/CustomBootstrap';
import CustomSelectInput from '../../../components/common/CustomSelectInput';


// import Breadcrumb from '../../../containers/navs/Breadcrumb';
const callShowroomApi = async (paramValue,setShowroom) =>{ // eslint-disable-line no-unused-vars
  await axios.post("/api/GetIndustry_Showroom",paramValue)
    .then(function (response) {
      setShowroom(JSON.stringify(response) );
      /* 여기에서 데이타 갱신 함수 콜 */ // 여기가 로그인 확인
    })
    .catch(function (error) {
      console.log(error);
    });
};

const callPFactorTrendQuadApi = async (paramValue,setPFactorTrendQuad) =>{ // eslint-disable-line no-unused-vars
  await axios.post("/api/GetIndustry_PFactor_TrendQuad",paramValue)
    .then(function (response) {
      setPFactorTrendQuad(JSON.stringify(response) );
      /* 여기에서 데이타 갱신 함수 콜 */ // 여기가 로그인 확인
    })
    .catch(function (error) {
      console.log(error);
    });
};

const callPFactorTrendAndFactorApi = async (paramValue,setPFactorTrendAndFactor) =>{ // eslint-disable-line no-unused-vars
  await axios.post("/api/GetIndustry_PFactor_TrendAndFactor",paramValue)
    .then(function (response) {
      setPFactorTrendAndFactor(JSON.stringify(response) );
      /* 여기에서 데이타 갱신 함수 콜 */ // 여기가 로그인 확인
    })
    .catch(function (error) {
      console.log(error);
    });
};

const callEFactorTrendQuadApi = async (paramValue,setEFactorTrendQuad) =>{ // eslint-disable-line no-unused-vars
  await axios.post("/api/GetIndustry_EFactor_TrendQuad",paramValue)
    .then(function (response) {
      setEFactorTrendQuad(JSON.stringify(response) );
      /* 여기에서 데이타 갱신 함수 콜 */ // 여기가 로그인 확인
    })
    .catch(function (error) {
      console.log(error);
    });
};

const callEFactorTrendAndFactorApi = async (paramValue,setEFactorTrendAndFactor) =>{ // eslint-disable-line no-unused-vars
  await axios.post("/api/GetIndustry_EFactor_TrendAndFactor",paramValue)
    .then(function (response) {
      setEFactorTrendAndFactor(JSON.stringify(response) );
      /* 여기에서 데이타 갱신 함수 콜 */ // 여기가 로그인 확인
    })
    .catch(function (error) {
      console.log(error);
    });
};

const callPFactorGIApi = async (paramValue,setPFactorGI) =>{ // eslint-disable-line no-unused-vars
  await axios.post("/api/GetIndustry_PFactor_GI",paramValue)
    .then(function (response) {
      setPFactorGI(JSON.stringify(response) );
      /* 여기에서 데이타 갱신 함수 콜 */ // 여기가 로그인 확인
    })
    .catch(function (error) {
      console.log(error);
    });
};

const callEFactorGIApi = async (paramValue,setEFactorGI) =>{ // eslint-disable-line no-unused-vars
  await axios.post("/api/GetIndustry_EFactor_GI",paramValue)
    .then(function (response) {
      setEFactorGI(JSON.stringify(response) );
      /* 여기에서 데이타 갱신 함수 콜 */ // 여기가 로그인 확인
    })
    .catch(function (error) {
      console.log(error);
    });
};

const Start = ({ intl }) => {
  const [startDateRange, setStartDateRange] = useState(new Date());
  const [endDateRange, setEndDateRange] = useState(new Date());
  const [selectedOptionsStep1, setSelectedOptionsStep1] = useState([]);// eslint-disable-line no-unused-vars
  const [selectedOptionsStep2, setSelectedOptionsStep2] = useState([]);// eslint-disable-line no-unused-vars
  const [selectedOptionsStep3, setSelectedOptionsStep3] = useState([]);// eslint-disable-line no-unused-vars
  const [selectKeyword, setKeyword] = useState('');// eslint-disable-line no-unused-vars
  const [selectCategoryUpper , setCategoryUpper] = useState([]);// eslint-disable-line no-unused-vars
  const [selectName , setName] = useState('');// eslint-disable-line no-unused-vars
  let categoryList = [];
  let categoryList1 = []; // eslint-disable-line no-unused-vars
  let categoryList2 = []; // eslint-disable-line no-unused-vars
  const categoryList3 = [] ; // eslint-disable-line no-unused-vars
  const { messages } = intl;
  /*  함수 호출 전달용    */

  const [selectShowroom, setShowroom] = useState('');// eslint-disable-line no-unused-vars
  const [selectPFactorTrendQuad, setPFactorTrendQuad] = useState('');// eslint-disable-line no-unused-vars
  const [selectPFactorTrendAndFactor, setPFactorTrendAndFactor] = useState('');// eslint-disable-line no-unused-vars
  const [selectEFactorTrendQuad, setEFactorTrendQuad] = useState('');// eslint-disable-line no-unused-vars
  const [selectEFactorTrendAndFactor, setEFactorTrendAndFactor] = useState('');// eslint-disable-line no-unused-vars
  const [selectPFactorGI, setPFactorGI] = useState('');// eslint-disable-line no-unused-vars
  const [selectEFactorGI, setEFactorGI] = useState('');// eslint-disable-line no-unused-vars

  // Category select data step1 
  const [selectDataTypeStep1,setSelectDataTypeStep1] = useState([]); // eslint-disable-line no-unused-vars

  // Category select data step2 
  const [selectDataTypeStep2,setSelectDataTypeStep2] = useState([]); // eslint-disable-line no-unused-vars

  // Category select data step3
  const [selectDataTypeStep3,setSelectDataTypeStep3] = useState([]); // eslint-disable-line no-unused-vars

  const setCategory = () => {   // eslint-disable-line no-unused-vars       
    // console.log(categoryList.Data.length);
    let preKey = '';
    categoryList1 = [];
    categoryList.Data.forEach(function(item,index){ // eslint-disable-line no-unused-vars
      if (preKey !== item.Category1 ){
          preKey = item.Category1 ;
          categoryList1.push({label:preKey,value:preKey});
      }
    });
    setSelectDataTypeStep1(categoryList1)
    
  }
  useEffect(() => {
    axios.post("/api/GetIndustry_TotalCategory_List")
    .then(function (response) {
      
      console.log(response);
      categoryList = response.data; // eslint-disable-line no-unused-vars
      setCategory();
      // 
      // loginUserAction(values, history); // 여기가 로그인 확인
    })
    .catch(function (error) {
      console.log(error);
    });
  },[]);

  

  const [activeFirstTab, setActiveFirstTab] = useState('1');
  
  const category1Change = value =>{
    setSelectedOptionsStep1(value);
    setSelectedOptionsStep2([]); 
    setSelectedOptionsStep3([]); 
    console.log(value);
    let preKey = '-1';
    categoryList1 = [];
    categoryList.Data.forEach(function(item,index){ // eslint-disable-line no-unused-vars
      if (value.value === item.Category1 && preKey !== item.Category2 ){
          preKey = item.Category2 ;
          categoryList1.push({label:preKey,value:preKey});
      }
    });
    setSelectDataTypeStep2(categoryList1);
    console.log(categoryList1);
  }
  const category2Change = value =>{

    console.log(value);
    console.log(selectedOptionsStep1);
    setSelectedOptionsStep2(value); 
    setSelectedOptionsStep3([]);
    let preKey = '-1';
    categoryList2 = []; 
    categoryList.Data.forEach(function(item,index){ // eslint-disable-line no-unused-vars
      if (selectedOptionsStep1.value === item.Category1 && value.value === item.Category2 && preKey !== item.Category3 ){
          preKey = item.Category3 ;
          categoryList2.push({label:preKey,value:preKey});
      }
    });
    setSelectDataTypeStep3(categoryList2);
    console.log(categoryList2); 
  }
  const dateString = (dateValue) => {  // eslint-disable-line no-unused-vars
    let retStr = '';
    retStr = retStr.concat(dateValue.getFullYear());
    if (dateValue.getMonth() < 10){
      retStr = retStr.concat('-0' ,dateValue.getMonth()+1);
    }
    else{
      retStr = retStr.concat('-' ,dateValue.getMonth()+1);
    }
    if (dateValue.getDate() < 10){
      retStr = retStr.concat('-0' ,dateValue.getDate()+1);
    }
    else{
      retStr = retStr.concat('-' ,dateValue.getDate()+1);
    }
    return retStr;
  }
  const handleSearchClick = e =>{ // eslint-disable-line no-unused-vars
      const param1  = {
          FromDate : dateString(startDateRange), 
          ToDate :dateString(endDateRange), 
          Category1 : selectedOptionsStep1.value,
          Category2 : selectedOptionsStep2.value,
          Category3 :  selectedOptionsStep3.value,
          Keyword :selectKeyword
        } ; // callShowroomApi , callPFactorTrendQuadApi , callEFactorTrendQuadApi , callEFactorGIApi
       const param2 = {
          FromDate : dateString(startDateRange), 
          ToDate : dateString(endDateRange), 
          Category1 : selectedOptionsStep1.value,
          Category2 : selectedOptionsStep2.value,
          Category3 :  selectedOptionsStep3.value,
          Keyword : selectKeyword ,
          Category_upper : selectCategoryUpper,
          Name :selectName
        } ; // callPFactorTrendAndFactorApi , callEFactorTrendAndFactorApi , callEFactorGIApi

      callShowroomApi(param1,setShowroom);
      callPFactorTrendQuadApi(param1,setPFactorTrendQuad);
      callPFactorTrendAndFactorApi(param2,setPFactorTrendAndFactor);
      callPFactorGIApi(param1,setPFactorGI);
      callEFactorTrendQuadApi(param1,setEFactorTrendQuad);
      callEFactorTrendAndFactorApi(param2,setEFactorTrendAndFactor);
      callEFactorGIApi(param1,setEFactorGI);
      // console.log(dateString(startDateRange) , dateString(endDateRange) , selectedOptionsStep1.value , selectedOptionsStep2.value , selectedOptionsStep3.value); 
  }

  
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Card>
            <CardBody>
              { /* s: 검색 조건 일단 여기 */ }
              <Form className="select-box-wrap multi">
              <div className="tbl-vertical-heading">
                <table>
                  <tbody>
                    <tr>
                      {/* vertical유형의 테이블 th 값은 인라인 스타일로 지정 바랍니다. */}
                      <th style={{ width:'10%' }}>Period</th>
                      <td style={{ width:'90%' }} colSpan="3">
                        <div className="date-picker-wrap">
                          <DatePicker
                            locale={ko}
                            dateFormat="yyyy.MM.dd"
                            selected={startDateRange}
                            selectsStart
                            startDate={startDateRange}
                            endDate={endDateRange}
                            onChange={setStartDateRange}
                            placeholderText={messages['form-components.start']}
                          />
                          <span className="cal-range"> ~ </span>
                          <DatePicker
                            locale={ko}
                            dateFormat="yyyy.MM.dd"
                            selected={endDateRange}
                            selectsEnd
                            startDate={startDateRange}
                            endDate={endDateRange}
                            onChange={setEndDateRange}
                            placeholderText={messages['form-components.end']}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th style={{ width:'10%' }}>Product(上) Category</th>
                      <td style={{ width:'40%' }}>
                        <FormGroup className="select-box">
                          <Select
                            components={{ Input: CustomSelectInput }}
                            className="react-select"
                            classNamePrefix="react-select"
                            name="form-field-name"
                            value={selectedOptionsStep1 }
                            onChange={category1Change}
                            options={selectDataTypeStep1}
                          />
                        </FormGroup>
                        <FormGroup className="select-box">
                          <Select
                            components={{ Input: CustomSelectInput }}
                            className="react-select"
                            classNamePrefix="react-select"
                            name="form-field-name"
                            value={selectedOptionsStep2}
                            onChange={category2Change}
                            options={selectDataTypeStep2}
                          />
                        </FormGroup>
                        <FormGroup className="select-box">
                          <Select
                            components={{ Input: CustomSelectInput }}
                            className="react-select"
                            classNamePrefix="react-select"
                            name="form-field-name"
                            value={selectedOptionsStep3}
                            onChange={(val) => setSelectedOptionsStep3(val)}
                            options={selectDataTypeStep3}
                          />
                        </FormGroup>
                      </td>
                      <th style={{ width:'10%' }}>Product(下) Category</th>
                      <td style={{ width:'40%' }}>No Keywords</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="text-center">
                <Button className="btn-xl mt-4" color="gray" onClick={handleSearchClick} >
                  ENTER
                </Button>
              </div>
              </Form>
              { /* e: 검색 조건 일단 여기 */ }
            </CardBody>
          </Card>
        </Colxx>
      </Row>
      {/* s:showwoom */}
      <Row className="mt-5">
        <Colxx xxs="12">
          <Card>
            <CardBody>
              <div className="box-title">
                <h2>Showroom</h2>
                <span className="help"><img src="/assets/img/icon/icon_help.png" alt="도움말" /></span>
              </div>
              {/* 이미지 갤러리 */}
              <div className="showroom-gallery">
                {/* 이미지 갤러리 */}
                <ShowRoom />
              </div>
            </CardBody>
          </Card>
        </Colxx>
      </Row>
      {/* e:showwoom */}
      {/* s:tab menu */}
      <Row className="mt-5">
        <Colxx xxs="12">
          {/* s: 탭메뉴 */}
          <Nav tabs className="card-header-tabs ">
            <NavItem>
              <NavLink
                to="#"
                location={{}}
                className={classnames({
                  active: activeFirstTab === '1',
                  'nav-link': true,
                })}
                onClick={() => {
                  setActiveFirstTab('1');
                }}
              >
                P-Factor Analysis
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="#"
                location={{}}
                className={classnames({
                  active: activeFirstTab === '2',
                  'nav-link': true,
                })}
                onClick={() => {
                  setActiveFirstTab('2');
                }}
              >
                E-Factor Analysis
              </NavLink>
            </NavItem>
          </Nav>
          {/* e: 탭메뉴 */}
        </Colxx>
      </Row>
      {/* e:tab menu */}
      {/* s:trend-quad */}
      <Row className="mt-5">
        <Colxx xxs="12">
          <Card>
            <CardBody>
              <div className="box-title">
                 <h2>Trend-Quad</h2>
                 <span className="help"><img src="/assets/img/icon/icon_help.png" alt="도움말" /></span>
              </div>
              <div className="clearfix box-line">
                <div className="box left">
                  {/* 각 차트별 height 값은 props로 전달 차트 */}
                  <Bubble height={550} />
                </div>
                <div className="box right">
                  <div className="chart-area">
                    <div className="chart-header">
                      <div className="chart-title">
                        <h4>Post-Trend</h4>
                        <span className="help"><img src="/assets/img/icon/icon_help_small.png" alt="도움말" /></span>
                      </div>
                      <span className="mean">Pre-Trend <span className="number">85.5%</span></span>
                    </div>
                    {/* 각 차트별 height 값은 props로 전달 */}
                    <Line height={210} />
                  </div>
                  <div className="chart-area mb-0">
                    <div className="chart-header">
                      <div className="chart-title">
                        <h4>Sentiment Factor | <span>Brand</span></h4>
                        <span className="help"><img src="/assets/img/icon/icon_help_small.png" alt="도움말" /></span>
                      </div>
                    </div>
                    {/* 각 차트별 height 값은 props로 전달 */}
                    <Bar height={210} />
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </Colxx>
      </Row>
      {/* e:trend-quad */}
      {/* s:grobal index analysis */}
      <Row className="mt-5">
        <Colxx xxs="12">
          <Card>
            <CardBody>
              <div className="box-title">
                <h2>GI(Global Index) Analysis</h2>
                  <span className="help"><img src="/assets/img/icon/icon_help_small.png" alt="도움말" /></span>
                </div>
                <div className="table-sort-area">
                  <div className="clearfix box-line">
                    <div className="box left">
                      <ReactTableWithPaginationCard />
                    </div>
                    <div className="box right">
                      <Bubble height={400} />
                    </div>
                  </div>
                </div>
            </CardBody>
          </Card>
        </Colxx>
      </Row>
      {/* e:grobal index analysis */}
    </>
  );
};

export default injectIntl(Start);
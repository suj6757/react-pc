import React, { useState , useEffect ,createRef } from 'react';
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
import classnames from 'classnames';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import { ko } from "date-fns/esm/locale";
import 'react-datepicker/dist/react-datepicker.css';
import ShowRoom from '../../../containers/pages/ShowRoom';
import Bubble from '../../../components/charts/Bubble';
import Line from '../../../components/charts/Line';
import Bar from '../../../components/charts/Bar';
import Scatter from '../../../components/charts/ScatterDatetime';
import { ReactTableWithPaginationCard } from '../../../containers/ui/ReactTableCards';
import { Colxx } from '../../../components/common/CustomBootstrap';
import CustomSelectInput from '../../../components/common/CustomSelectInput';
import { useDispatch, useSelector } from 'react-redux';
import { saveSearchCondition, getIndustryTotalcategoryList } from '../../../redux/actions';
import axios from 'axios';

const Start = ({ intl }) => {
    const dispatch = useDispatch();
    const { industryApp } = useSelector(state => state.industryApp);
    
    let param1 = {};
    const [startDateRange, setStartDateRange] = useState(new Date());
    const [endDateRange, setEndDateRange] = useState(new Date());
    
    const [selectedOptionsStep1, setSelectedOptionsStep1] = useState([]);// eslint-disable-line no-unused-vars
    const [selectedOptionsStep2, setSelectedOptionsStep2] = useState([]);// eslint-disable-line no-unused-vars
    const [selectedOptionsStep3, setSelectedOptionsStep3] = useState([]);// eslint-disable-line no-unused-vars
    
    const [selectDataTypeStep1,setSelectDataTypeStep1] = useState([]); // eslint-disable-line no-unused-vars
    const [selectDataTypeStep2,setSelectDataTypeStep2] = useState([]); // eslint-disable-line no-unused-vars
    const [selectDataTypeStep3,setSelectDataTypeStep3] = useState([]); // eslint-disable-line no-unused-vars

    const [selectCategoryUpper , setCategoryUpper] = useState([]);// eslint-disable-line no-unused-vars
    const [selectName , setName] = useState('');// eslint-disable-line no-unused-vars
    const [selectCategoryList, setCategoryList] = useState([]);// eslint-disable-line no-unused-vars
    
    let categoryList = [];
    let categoryList1 = [];
    let categoryList2 = [];
    const categoryList3 = [];
    
    const { messages } = intl;

    const [selectKeyword, setKeyword] = useState('');      
    const [activeFirstTab, setActiveFirstTab] = useState('1');

    useEffect(() => {
        console.log('start.js 렌더완료');

        // Product(上) Category
        axios.post("/api/GetIndustry_TotalCategory_List")
        .then((response) => {
            categoryList = response.data;
            setCategoryList(categoryList);
            setCategory();
        })
        .catch(function (error) {
            console.log(error);
        });

        // 페이지 첫 로드 시 검색조건 저장 후 재렌더링
        saveSearchDataInStore();
    }, []);

    // useEffect(() => {

    // }, [industryApp]);

    const setCategory = () => {
        let preKey = '';
        categoryList1 = [];
        let categoryData = {};
        categoryList.Data.forEach(function(item, index) {
            if ( index === 0 ) {
                categoryData = item;
            }
            if (preKey !== item.Category1 ){
                preKey = item.Category1 ;
                categoryList1.push({ label : preKey, value : preKey });
            }
        });
        setSelectDataTypeStep1(categoryList1);
    }
  
    const category1Change = value =>{
        setSelectedOptionsStep1(value);
        setSelectedOptionsStep2([]); 
        setSelectedOptionsStep3([]);
      
        let preKey = '-1';
        categoryList1 = [];
        selectCategoryList.Data.forEach(function(item,index){ // eslint-disable-line no-unused-vars
            if (value.value === item.Category1 && preKey !== item.Category2 ){
                preKey = item.Category2 ;
                categoryList1.push({label:preKey,value:preKey});
            }
        });
        setSelectDataTypeStep2(categoryList1);
    }
    const category2Change = value =>{
        setSelectedOptionsStep2(value); 
        setSelectedOptionsStep3([]);
        let preKey = '-1';
        categoryList2 = []; 
        selectCategoryList.Data.forEach(function(item,index){ // eslint-disable-line no-unused-vars
            if (selectedOptionsStep1.value === item.Category1 && value.value === item.Category2 && preKey !== item.Category3 ){
                preKey = item.Category3 ;
                categoryList2.push({label:preKey,value:preKey});
            }
        });
        setSelectDataTypeStep3(categoryList2);
    }

    //datePicker format 수정
    const dateString = (dateValue) => {
        let retStr = '';

        //Year
        retStr = retStr.concat(dateValue.getFullYear());
        
        //Month
        if(dateValue.getMonth() < 10) {
            retStr = retStr.concat('-0', dateValue.getMonth() + 1);
        }
        else {
            retStr = retStr.concat('-', dateValue.getMonth() + 1);
        }

        //Date
        if(dateValue.getDate() < 10) {
            retStr = retStr.concat('-0', dateValue.getDate());
        }
        else {
            retStr = retStr.concat('-', dateValue.getDate());
        }

        return retStr;
    }

    // 검색조건 엔터버튼 클릭
    const handleSearchClick = (e) => {
      saveSearchDataInStore();
    }
    
    const saveSearchDataInStore = () => {
        var param = {};
        // 실제 인풋 검색조건
        // param.FromDate = dateString(startDateRange);
        // param.ToDate = dateString(endDateRange);
        // param.Category1 = selectedOptionsStep1.value;
        // param.Category2 = selectedOptionsStep2.value;
        // param.Category3 = selectedOptionsStep3.value;
        // param.Keyword = selectKeyword;
        
        // (데이터 나오는) 테스트용 검색조건
        param.FromDate = '2021-05-01';
        param.ToDate = '2021-05-30';
        param.Category1 = '패션의류';
        param.Category2 = '여성의류';
        param.Category3 = '티셔츠';
        param.Keyword = '';
        param.Category_upper = '스타일';
        param.Name = '베이직';
        
        // 검색조건 스토어에 저장 후 재렌더링
        dispatch(saveSearchCondition(param));
    }

    //keyword check(validate) ? setState X
    const onSearchKey = e => {
        // 변경 예정
        // setKeyword(e.target.value);
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
                      <td style={{ width:'40%' }}> <input type="text"
                                                          name="keyword"
                                                          id="search"
                                                          placeholder='No Keywords'
                                                          onKeyPress={(e) => onSearchKey(e)}
                                                          /></td>
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
                {/* <ShowRoom  ref={showRoonGetData} /> */}
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
                  {/* <Bubble height={550} /> */}
                  <Scatter height={550} />
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

// const mapStateToProps = ({ authUser }) => {
//   const { loading, error } = authUser;

//   return { loading, error };
// }

// export default connect(mapStateToProps, {
//     loginUserAction : loginUser,
// })(Start);
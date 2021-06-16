import React from 'react';
import axios from 'axios';
import ReactApexChart from "react-apexcharts";
import { bubbleChartOptions } from './config';

const Bubble = ({height}) => {
    //라인 옵션
    const [bubbleOptions, setLineOption] = React.useState(bubbleChartOptions);
    //서버에 보낼 파라미터
    const [resParam, setResParam] = React.useState({
        FromDate : "2021-05-01",
        ToDate : "2021-05-10",
        Category1 : "패션의류",
        Category2 : "여성의류",
        Category3 : "티셔츠",
        Keyword : "켈린클라인"
    });
    //서버 호출 후 받는 데이터
    const [resData, setResData] = React.useState({
        BubbleData : [
            {
                'Category': '핏',
                'PGI': 38,
                'SGI': 57,
                'DGI': 48,
                'AssociatedBubbleData' : [
                    {
                        'name': '단정',
                        'Value': 320,
                    },
                    {
                        'name': '슬림',
                        'Value': 230,
                    },
                    {
                        'name': '와이드',
                        'Value': 510
                    },
                    {
                        'name': '오버',
                        'Value': 210,
                    },
                    {
                        'name': '루즈',
                        'Value': 107,
                    }
                ],
                'URL' : [
                    {
                        'ImageURL': 'https://shopping-phinf.pstatic.net/main_2411456/24114562274.20200910215059.jpg?type=f168',
                        'SiteURL': 'https://cr2.shopping.naver.com/adcr.nhn?x=fN38eRrQHyN0e%2BkyMiDJUP%2F%2F%2Fw%3D%3DsL%2BEuWBl%2FIfhJ5jpHdycO92p1P9wGp0xvVXdMo%2FpgZQOD30aTE%2FZO1%2Bgc%2FUHRdOQ63L6QXh6cq0h6WsfR9jJF5mM5ywTNbvkDUq403b3HrmP3mrP9L3bKHJ%2FdpwvsNiiCtR27Kupb1OdU%2F6jfhYptx%2FlcBicb6E5CIk5VrZGWqe%2F5D04B%2FnxoLVBlSPGFYrF24ZJ1yhgbIwyc0Vzw8hlsYMt31Fyt68lal37inYyponkqjgjWudOcde%2FjNwY9lsSnjtuQL6DwLLJ3GbI%2FUSuyoTkO0vJJ39ze%2BTHyk5NfF4NzfbxIOTZJTfQuuaP%2BohXDIG9L%2BerXAGhNA2jid2DeW9qUHsgHKRqzd6nX3jcvUwNAyJ0E5ZZ4JwNcjVikpEkvmHGCRnDCD%2Fs9hovS%2Bt1gJlwb6nugN4eS4XOJH3l81QB2y7e8daYj3zMKxjmrZV04rtUB%2B4Ps67wdYqzoRUL7bc51QSMOY1vSvIZnvyD7FqUVB%2Fd9YwyIjbPFvZKa9eyh93NFiESDva%2FBrkGZg26uAeVL8ljHAvLUFk1sFBLkuCVk0rxLX%2FPTTa1t75hFvH3%2FxDE6Y1gPipOOPZVaD%2Fje7JozPLj5eAhlnoa0M%2FWp3py4hbhA8Yh8dwwX8RKeLh5e5ZTEfICVt9hbMee0RKTLJYbnbVDZMur7Ze%2B%2F64cTvFdjNzzCDtia3%2FA18ojShV0lvs7wO8E%2BS1QmV9xLymsQdA%3D%3D',
                    },
                    {
                        'ImageURL': 'https://shopping-phinf.pstatic.net/main_2411456/24114562274.20200910215059.jpg?type=f168',
                        'SiteURL': 'https://cr2.shopping.naver.com/adcr.nhn?x=fN38eRrQHyN0e%2BkyMiDJUP%2F%2F%2Fw%3D%3DsL%2BEuWBl%2FIfhJ5jpHdycO92p1P9wGp0xvVXdMo%2FpgZQOD30aTE%2FZO1%2Bgc%2FUHRdOQ63L6QXh6cq0h6WsfR9jJF5mM5ywTNbvkDUq403b3HrmP3mrP9L3bKHJ%2FdpwvsNiiCtR27Kupb1OdU%2F6jfhYptx%2FlcBicb6E5CIk5VrZGWqe%2F5D04B%2FnxoLVBlSPGFYrF24ZJ1yhgbIwyc0Vzw8hlsYMt31Fyt68lal37inYyponkqjgjWudOcde%2FjNwY9lsSnjtuQL6DwLLJ3GbI%2FUSuyoTkO0vJJ39ze%2BTHyk5NfF4NzfbxIOTZJTfQuuaP%2BohXDIG9L%2BerXAGhNA2jid2DeW9qUHsgHKRqzd6nX3jcvUwNAyJ0E5ZZ4JwNcjVikpEkvmHGCRnDCD%2Fs9hovS%2Bt1gJlwb6nugN4eS4XOJH3l81QB2y7e8daYj3zMKxjmrZV04rtUB%2B4Ps67wdYqzoRUL7bc51QSMOY1vSvIZnvyD7FqUVB%2Fd9YwyIjbPFvZKa9eyh93NFiESDva%2FBrkGZg26uAeVL8ljHAvLUFk1sFBLkuCVk0rxLX%2FPTTa1t75hFvH3%2FxDE6Y1gPipOOPZVaD%2Fje7JozPLj5eAhlnoa0M%2FWp3py4hbhA8Yh8dwwX8RKeLh5e5ZTEfICVt9hbMee0RKTLJYbnbVDZMur7Ze%2B%2F64cTvFdjNzzCDtia3%2FA18ojShV0lvs7wO8E%2BS1QmV9xLymsQdA%3D%3D',
                    },
                    {
                        'ImageURL': 'https://shopping-phinf.pstatic.net/main_2411456/24114562274.20200910215059.jpg?type=f168',
                        'SiteURL': 'https://cr2.shopping.naver.com/adcr.nhn?x=fN38eRrQHyN0e%2BkyMiDJUP%2F%2F%2Fw%3D%3DsL%2BEuWBl%2FIfhJ5jpHdycO92p1P9wGp0xvVXdMo%2FpgZQOD30aTE%2FZO1%2Bgc%2FUHRdOQ63L6QXh6cq0h6WsfR9jJF5mM5ywTNbvkDUq403b3HrmP3mrP9L3bKHJ%2FdpwvsNiiCtR27Kupb1OdU%2F6jfhYptx%2FlcBicb6E5CIk5VrZGWqe%2F5D04B%2FnxoLVBlSPGFYrF24ZJ1yhgbIwyc0Vzw8hlsYMt31Fyt68lal37inYyponkqjgjWudOcde%2FjNwY9lsSnjtuQL6DwLLJ3GbI%2FUSuyoTkO0vJJ39ze%2BTHyk5NfF4NzfbxIOTZJTfQuuaP%2BohXDIG9L%2BerXAGhNA2jid2DeW9qUHsgHKRqzd6nX3jcvUwNAyJ0E5ZZ4JwNcjVikpEkvmHGCRnDCD%2Fs9hovS%2Bt1gJlwb6nugN4eS4XOJH3l81QB2y7e8daYj3zMKxjmrZV04rtUB%2B4Ps67wdYqzoRUL7bc51QSMOY1vSvIZnvyD7FqUVB%2Fd9YwyIjbPFvZKa9eyh93NFiESDva%2FBrkGZg26uAeVL8ljHAvLUFk1sFBLkuCVk0rxLX%2FPTTa1t75hFvH3%2FxDE6Y1gPipOOPZVaD%2Fje7JozPLj5eAhlnoa0M%2FWp3py4hbhA8Yh8dwwX8RKeLh5e5ZTEfICVt9hbMee0RKTLJYbnbVDZMur7Ze%2B%2F64cTvFdjNzzCDtia3%2FA18ojShV0lvs7wO8E%2BS1QmV9xLymsQdA%3D%3D',
                    },
                    {
                        'ImageURL': 'https://shopping-phinf.pstatic.net/main_2411456/24114562274.20200910215059.jpg?type=f168',
                        'SiteURL': 'https://cr2.shopping.naver.com/adcr.nhn?x=fN38eRrQHyN0e%2BkyMiDJUP%2F%2F%2Fw%3D%3DsL%2BEuWBl%2FIfhJ5jpHdycO92p1P9wGp0xvVXdMo%2FpgZQOD30aTE%2FZO1%2Bgc%2FUHRdOQ63L6QXh6cq0h6WsfR9jJF5mM5ywTNbvkDUq403b3HrmP3mrP9L3bKHJ%2FdpwvsNiiCtR27Kupb1OdU%2F6jfhYptx%2FlcBicb6E5CIk5VrZGWqe%2F5D04B%2FnxoLVBlSPGFYrF24ZJ1yhgbIwyc0Vzw8hlsYMt31Fyt68lal37inYyponkqjgjWudOcde%2FjNwY9lsSnjtuQL6DwLLJ3GbI%2FUSuyoTkO0vJJ39ze%2BTHyk5NfF4NzfbxIOTZJTfQuuaP%2BohXDIG9L%2BerXAGhNA2jid2DeW9qUHsgHKRqzd6nX3jcvUwNAyJ0E5ZZ4JwNcjVikpEkvmHGCRnDCD%2Fs9hovS%2Bt1gJlwb6nugN4eS4XOJH3l81QB2y7e8daYj3zMKxjmrZV04rtUB%2B4Ps67wdYqzoRUL7bc51QSMOY1vSvIZnvyD7FqUVB%2Fd9YwyIjbPFvZKa9eyh93NFiESDva%2FBrkGZg26uAeVL8ljHAvLUFk1sFBLkuCVk0rxLX%2FPTTa1t75hFvH3%2FxDE6Y1gPipOOPZVaD%2Fje7JozPLj5eAhlnoa0M%2FWp3py4hbhA8Yh8dwwX8RKeLh5e5ZTEfICVt9hbMee0RKTLJYbnbVDZMur7Ze%2B%2F64cTvFdjNzzCDtia3%2FA18ojShV0lvs7wO8E%2BS1QmV9xLymsQdA%3D%3D',
                    },
                    {
                        'ImageURL': 'https://shopping-phinf.pstatic.net/main_2411456/24114562274.20200910215059.jpg?type=f168',
                        'SiteURL': 'https://cr2.shopping.naver.com/adcr.nhn?x=fN38eRrQHyN0e%2BkyMiDJUP%2F%2F%2Fw%3D%3DsL%2BEuWBl%2FIfhJ5jpHdycO92p1P9wGp0xvVXdMo%2FpgZQOD30aTE%2FZO1%2Bgc%2FUHRdOQ63L6QXh6cq0h6WsfR9jJF5mM5ywTNbvkDUq403b3HrmP3mrP9L3bKHJ%2FdpwvsNiiCtR27Kupb1OdU%2F6jfhYptx%2FlcBicb6E5CIk5VrZGWqe%2F5D04B%2FnxoLVBlSPGFYrF24ZJ1yhgbIwyc0Vzw8hlsYMt31Fyt68lal37inYyponkqjgjWudOcde%2FjNwY9lsSnjtuQL6DwLLJ3GbI%2FUSuyoTkO0vJJ39ze%2BTHyk5NfF4NzfbxIOTZJTfQuuaP%2BohXDIG9L%2BerXAGhNA2jid2DeW9qUHsgHKRqzd6nX3jcvUwNAyJ0E5ZZ4JwNcjVikpEkvmHGCRnDCD%2Fs9hovS%2Bt1gJlwb6nugN4eS4XOJH3l81QB2y7e8daYj3zMKxjmrZV04rtUB%2B4Ps67wdYqzoRUL7bc51QSMOY1vSvIZnvyD7FqUVB%2Fd9YwyIjbPFvZKa9eyh93NFiESDva%2FBrkGZg26uAeVL8ljHAvLUFk1sFBLkuCVk0rxLX%2FPTTa1t75hFvH3%2FxDE6Y1gPipOOPZVaD%2Fje7JozPLj5eAhlnoa0M%2FWp3py4hbhA8Yh8dwwX8RKeLh5e5ZTEfICVt9hbMee0RKTLJYbnbVDZMur7Ze%2B%2F64cTvFdjNzzCDtia3%2FA18ojShV0lvs7wO8E%2BS1QmV9xLymsQdA%3D%3D',
                    }
                ]
            },
            {
                'Category': '멋있다',
                'PGI': 94,
                'SGI': 32,
                'DGI': 97,
                'AssociatedBubbleData' : [
                    {
                        'name': '단정',
                        'Value': 320,
                    },
                    {
                        'name': '슬림',
                        'Value': 230,
                    },
                    {
                        'name': '와이드',
                        'Value': 510
                    },
                    {
                        'name': '오버',
                        'Value': 210,
                    },
                    {
                        'name': '루즈',
                        'Value': 107,
                    }
                ],
                'URL' : [
                    {
                        'ImageURL': 'https://shopping-phinf.pstatic.net/main_2411456/24114562274.20200910215059.jpg?type=f168',
                        'SiteURL': 'https://cr2.shopping.naver.com/adcr.nhn?x=fN38eRrQHyN0e%2BkyMiDJUP%2F%2F%2Fw%3D%3DsL%2BEuWBl%2FIfhJ5jpHdycO92p1P9wGp0xvVXdMo%2FpgZQOD30aTE%2FZO1%2Bgc%2FUHRdOQ63L6QXh6cq0h6WsfR9jJF5mM5ywTNbvkDUq403b3HrmP3mrP9L3bKHJ%2FdpwvsNiiCtR27Kupb1OdU%2F6jfhYptx%2FlcBicb6E5CIk5VrZGWqe%2F5D04B%2FnxoLVBlSPGFYrF24ZJ1yhgbIwyc0Vzw8hlsYMt31Fyt68lal37inYyponkqjgjWudOcde%2FjNwY9lsSnjtuQL6DwLLJ3GbI%2FUSuyoTkO0vJJ39ze%2BTHyk5NfF4NzfbxIOTZJTfQuuaP%2BohXDIG9L%2BerXAGhNA2jid2DeW9qUHsgHKRqzd6nX3jcvUwNAyJ0E5ZZ4JwNcjVikpEkvmHGCRnDCD%2Fs9hovS%2Bt1gJlwb6nugN4eS4XOJH3l81QB2y7e8daYj3zMKxjmrZV04rtUB%2B4Ps67wdYqzoRUL7bc51QSMOY1vSvIZnvyD7FqUVB%2Fd9YwyIjbPFvZKa9eyh93NFiESDva%2FBrkGZg26uAeVL8ljHAvLUFk1sFBLkuCVk0rxLX%2FPTTa1t75hFvH3%2FxDE6Y1gPipOOPZVaD%2Fje7JozPLj5eAhlnoa0M%2FWp3py4hbhA8Yh8dwwX8RKeLh5e5ZTEfICVt9hbMee0RKTLJYbnbVDZMur7Ze%2B%2F64cTvFdjNzzCDtia3%2FA18ojShV0lvs7wO8E%2BS1QmV9xLymsQdA%3D%3D',
                    },
                    {
                        'ImageURL': 'https://shopping-phinf.pstatic.net/main_2411456/24114562274.20200910215059.jpg?type=f168',
                        'SiteURL': 'https://cr2.shopping.naver.com/adcr.nhn?x=fN38eRrQHyN0e%2BkyMiDJUP%2F%2F%2Fw%3D%3DsL%2BEuWBl%2FIfhJ5jpHdycO92p1P9wGp0xvVXdMo%2FpgZQOD30aTE%2FZO1%2Bgc%2FUHRdOQ63L6QXh6cq0h6WsfR9jJF5mM5ywTNbvkDUq403b3HrmP3mrP9L3bKHJ%2FdpwvsNiiCtR27Kupb1OdU%2F6jfhYptx%2FlcBicb6E5CIk5VrZGWqe%2F5D04B%2FnxoLVBlSPGFYrF24ZJ1yhgbIwyc0Vzw8hlsYMt31Fyt68lal37inYyponkqjgjWudOcde%2FjNwY9lsSnjtuQL6DwLLJ3GbI%2FUSuyoTkO0vJJ39ze%2BTHyk5NfF4NzfbxIOTZJTfQuuaP%2BohXDIG9L%2BerXAGhNA2jid2DeW9qUHsgHKRqzd6nX3jcvUwNAyJ0E5ZZ4JwNcjVikpEkvmHGCRnDCD%2Fs9hovS%2Bt1gJlwb6nugN4eS4XOJH3l81QB2y7e8daYj3zMKxjmrZV04rtUB%2B4Ps67wdYqzoRUL7bc51QSMOY1vSvIZnvyD7FqUVB%2Fd9YwyIjbPFvZKa9eyh93NFiESDva%2FBrkGZg26uAeVL8ljHAvLUFk1sFBLkuCVk0rxLX%2FPTTa1t75hFvH3%2FxDE6Y1gPipOOPZVaD%2Fje7JozPLj5eAhlnoa0M%2FWp3py4hbhA8Yh8dwwX8RKeLh5e5ZTEfICVt9hbMee0RKTLJYbnbVDZMur7Ze%2B%2F64cTvFdjNzzCDtia3%2FA18ojShV0lvs7wO8E%2BS1QmV9xLymsQdA%3D%3D',
                    },
                    {
                        'ImageURL': 'https://shopping-phinf.pstatic.net/main_2411456/24114562274.20200910215059.jpg?type=f168',
                        'SiteURL': 'https://cr2.shopping.naver.com/adcr.nhn?x=fN38eRrQHyN0e%2BkyMiDJUP%2F%2F%2Fw%3D%3DsL%2BEuWBl%2FIfhJ5jpHdycO92p1P9wGp0xvVXdMo%2FpgZQOD30aTE%2FZO1%2Bgc%2FUHRdOQ63L6QXh6cq0h6WsfR9jJF5mM5ywTNbvkDUq403b3HrmP3mrP9L3bKHJ%2FdpwvsNiiCtR27Kupb1OdU%2F6jfhYptx%2FlcBicb6E5CIk5VrZGWqe%2F5D04B%2FnxoLVBlSPGFYrF24ZJ1yhgbIwyc0Vzw8hlsYMt31Fyt68lal37inYyponkqjgjWudOcde%2FjNwY9lsSnjtuQL6DwLLJ3GbI%2FUSuyoTkO0vJJ39ze%2BTHyk5NfF4NzfbxIOTZJTfQuuaP%2BohXDIG9L%2BerXAGhNA2jid2DeW9qUHsgHKRqzd6nX3jcvUwNAyJ0E5ZZ4JwNcjVikpEkvmHGCRnDCD%2Fs9hovS%2Bt1gJlwb6nugN4eS4XOJH3l81QB2y7e8daYj3zMKxjmrZV04rtUB%2B4Ps67wdYqzoRUL7bc51QSMOY1vSvIZnvyD7FqUVB%2Fd9YwyIjbPFvZKa9eyh93NFiESDva%2FBrkGZg26uAeVL8ljHAvLUFk1sFBLkuCVk0rxLX%2FPTTa1t75hFvH3%2FxDE6Y1gPipOOPZVaD%2Fje7JozPLj5eAhlnoa0M%2FWp3py4hbhA8Yh8dwwX8RKeLh5e5ZTEfICVt9hbMee0RKTLJYbnbVDZMur7Ze%2B%2F64cTvFdjNzzCDtia3%2FA18ojShV0lvs7wO8E%2BS1QmV9xLymsQdA%3D%3D',
                    },
                    {
                        'ImageURL': 'https://shopping-phinf.pstatic.net/main_2411456/24114562274.20200910215059.jpg?type=f168',
                        'SiteURL': 'https://cr2.shopping.naver.com/adcr.nhn?x=fN38eRrQHyN0e%2BkyMiDJUP%2F%2F%2Fw%3D%3DsL%2BEuWBl%2FIfhJ5jpHdycO92p1P9wGp0xvVXdMo%2FpgZQOD30aTE%2FZO1%2Bgc%2FUHRdOQ63L6QXh6cq0h6WsfR9jJF5mM5ywTNbvkDUq403b3HrmP3mrP9L3bKHJ%2FdpwvsNiiCtR27Kupb1OdU%2F6jfhYptx%2FlcBicb6E5CIk5VrZGWqe%2F5D04B%2FnxoLVBlSPGFYrF24ZJ1yhgbIwyc0Vzw8hlsYMt31Fyt68lal37inYyponkqjgjWudOcde%2FjNwY9lsSnjtuQL6DwLLJ3GbI%2FUSuyoTkO0vJJ39ze%2BTHyk5NfF4NzfbxIOTZJTfQuuaP%2BohXDIG9L%2BerXAGhNA2jid2DeW9qUHsgHKRqzd6nX3jcvUwNAyJ0E5ZZ4JwNcjVikpEkvmHGCRnDCD%2Fs9hovS%2Bt1gJlwb6nugN4eS4XOJH3l81QB2y7e8daYj3zMKxjmrZV04rtUB%2B4Ps67wdYqzoRUL7bc51QSMOY1vSvIZnvyD7FqUVB%2Fd9YwyIjbPFvZKa9eyh93NFiESDva%2FBrkGZg26uAeVL8ljHAvLUFk1sFBLkuCVk0rxLX%2FPTTa1t75hFvH3%2FxDE6Y1gPipOOPZVaD%2Fje7JozPLj5eAhlnoa0M%2FWp3py4hbhA8Yh8dwwX8RKeLh5e5ZTEfICVt9hbMee0RKTLJYbnbVDZMur7Ze%2B%2F64cTvFdjNzzCDtia3%2FA18ojShV0lvs7wO8E%2BS1QmV9xLymsQdA%3D%3D',
                    },
                    {
                        'ImageURL': 'https://shopping-phinf.pstatic.net/main_2411456/24114562274.20200910215059.jpg?type=f168',
                        'SiteURL': 'https://cr2.shopping.naver.com/adcr.nhn?x=fN38eRrQHyN0e%2BkyMiDJUP%2F%2F%2Fw%3D%3DsL%2BEuWBl%2FIfhJ5jpHdycO92p1P9wGp0xvVXdMo%2FpgZQOD30aTE%2FZO1%2Bgc%2FUHRdOQ63L6QXh6cq0h6WsfR9jJF5mM5ywTNbvkDUq403b3HrmP3mrP9L3bKHJ%2FdpwvsNiiCtR27Kupb1OdU%2F6jfhYptx%2FlcBicb6E5CIk5VrZGWqe%2F5D04B%2FnxoLVBlSPGFYrF24ZJ1yhgbIwyc0Vzw8hlsYMt31Fyt68lal37inYyponkqjgjWudOcde%2FjNwY9lsSnjtuQL6DwLLJ3GbI%2FUSuyoTkO0vJJ39ze%2BTHyk5NfF4NzfbxIOTZJTfQuuaP%2BohXDIG9L%2BerXAGhNA2jid2DeW9qUHsgHKRqzd6nX3jcvUwNAyJ0E5ZZ4JwNcjVikpEkvmHGCRnDCD%2Fs9hovS%2Bt1gJlwb6nugN4eS4XOJH3l81QB2y7e8daYj3zMKxjmrZV04rtUB%2B4Ps67wdYqzoRUL7bc51QSMOY1vSvIZnvyD7FqUVB%2Fd9YwyIjbPFvZKa9eyh93NFiESDva%2FBrkGZg26uAeVL8ljHAvLUFk1sFBLkuCVk0rxLX%2FPTTa1t75hFvH3%2FxDE6Y1gPipOOPZVaD%2Fje7JozPLj5eAhlnoa0M%2FWp3py4hbhA8Yh8dwwX8RKeLh5e5ZTEfICVt9hbMee0RKTLJYbnbVDZMur7Ze%2B%2F64cTvFdjNzzCDtia3%2FA18ojShV0lvs7wO8E%2BS1QmV9xLymsQdA%3D%3D',
                    }
                ]
            },
            {
                'Category': '마무리감',
                'PGI': 77,
                'SGI': 67,
                'DGI': 85,
                'AssociatedBubbleDatas' : [
                    {
                        'name': '단정',
                        'Value': 320,
                    },
                    {
                        'name': '슬림',
                        'Value': 230,
                    },
                    {
                        'name': '와이드',
                        'Value': 510
                    },
                    {
                        'name': '오버',
                        'Value': 210,
                    },
                    {
                        'name': '루즈',
                        'Value': 107,
                    }
                ],
                'URL' : [
                    {
                        'ImageURL': 'https://shopping-phinf.pstatic.net/main_2411456/24114562274.20200910215059.jpg?type=f168',
                        'SiteURL': 'https://cr2.shopping.naver.com/adcr.nhn?x=fN38eRrQHyN0e%2BkyMiDJUP%2F%2F%2Fw%3D%3DsL%2BEuWBl%2FIfhJ5jpHdycO92p1P9wGp0xvVXdMo%2FpgZQOD30aTE%2FZO1%2Bgc%2FUHRdOQ63L6QXh6cq0h6WsfR9jJF5mM5ywTNbvkDUq403b3HrmP3mrP9L3bKHJ%2FdpwvsNiiCtR27Kupb1OdU%2F6jfhYptx%2FlcBicb6E5CIk5VrZGWqe%2F5D04B%2FnxoLVBlSPGFYrF24ZJ1yhgbIwyc0Vzw8hlsYMt31Fyt68lal37inYyponkqjgjWudOcde%2FjNwY9lsSnjtuQL6DwLLJ3GbI%2FUSuyoTkO0vJJ39ze%2BTHyk5NfF4NzfbxIOTZJTfQuuaP%2BohXDIG9L%2BerXAGhNA2jid2DeW9qUHsgHKRqzd6nX3jcvUwNAyJ0E5ZZ4JwNcjVikpEkvmHGCRnDCD%2Fs9hovS%2Bt1gJlwb6nugN4eS4XOJH3l81QB2y7e8daYj3zMKxjmrZV04rtUB%2B4Ps67wdYqzoRUL7bc51QSMOY1vSvIZnvyD7FqUVB%2Fd9YwyIjbPFvZKa9eyh93NFiESDva%2FBrkGZg26uAeVL8ljHAvLUFk1sFBLkuCVk0rxLX%2FPTTa1t75hFvH3%2FxDE6Y1gPipOOPZVaD%2Fje7JozPLj5eAhlnoa0M%2FWp3py4hbhA8Yh8dwwX8RKeLh5e5ZTEfICVt9hbMee0RKTLJYbnbVDZMur7Ze%2B%2F64cTvFdjNzzCDtia3%2FA18ojShV0lvs7wO8E%2BS1QmV9xLymsQdA%3D%3D',
                    },
                    {
                        'ImageURL': 'https://shopping-phinf.pstatic.net/main_2411456/24114562274.20200910215059.jpg?type=f168',
                        'SiteURL': 'https://cr2.shopping.naver.com/adcr.nhn?x=fN38eRrQHyN0e%2BkyMiDJUP%2F%2F%2Fw%3D%3DsL%2BEuWBl%2FIfhJ5jpHdycO92p1P9wGp0xvVXdMo%2FpgZQOD30aTE%2FZO1%2Bgc%2FUHRdOQ63L6QXh6cq0h6WsfR9jJF5mM5ywTNbvkDUq403b3HrmP3mrP9L3bKHJ%2FdpwvsNiiCtR27Kupb1OdU%2F6jfhYptx%2FlcBicb6E5CIk5VrZGWqe%2F5D04B%2FnxoLVBlSPGFYrF24ZJ1yhgbIwyc0Vzw8hlsYMt31Fyt68lal37inYyponkqjgjWudOcde%2FjNwY9lsSnjtuQL6DwLLJ3GbI%2FUSuyoTkO0vJJ39ze%2BTHyk5NfF4NzfbxIOTZJTfQuuaP%2BohXDIG9L%2BerXAGhNA2jid2DeW9qUHsgHKRqzd6nX3jcvUwNAyJ0E5ZZ4JwNcjVikpEkvmHGCRnDCD%2Fs9hovS%2Bt1gJlwb6nugN4eS4XOJH3l81QB2y7e8daYj3zMKxjmrZV04rtUB%2B4Ps67wdYqzoRUL7bc51QSMOY1vSvIZnvyD7FqUVB%2Fd9YwyIjbPFvZKa9eyh93NFiESDva%2FBrkGZg26uAeVL8ljHAvLUFk1sFBLkuCVk0rxLX%2FPTTa1t75hFvH3%2FxDE6Y1gPipOOPZVaD%2Fje7JozPLj5eAhlnoa0M%2FWp3py4hbhA8Yh8dwwX8RKeLh5e5ZTEfICVt9hbMee0RKTLJYbnbVDZMur7Ze%2B%2F64cTvFdjNzzCDtia3%2FA18ojShV0lvs7wO8E%2BS1QmV9xLymsQdA%3D%3D',
                    },
                    {
                        'ImageURL': 'https://shopping-phinf.pstatic.net/main_2411456/24114562274.20200910215059.jpg?type=f168',
                        'SiteURL': 'https://cr2.shopping.naver.com/adcr.nhn?x=fN38eRrQHyN0e%2BkyMiDJUP%2F%2F%2Fw%3D%3DsL%2BEuWBl%2FIfhJ5jpHdycO92p1P9wGp0xvVXdMo%2FpgZQOD30aTE%2FZO1%2Bgc%2FUHRdOQ63L6QXh6cq0h6WsfR9jJF5mM5ywTNbvkDUq403b3HrmP3mrP9L3bKHJ%2FdpwvsNiiCtR27Kupb1OdU%2F6jfhYptx%2FlcBicb6E5CIk5VrZGWqe%2F5D04B%2FnxoLVBlSPGFYrF24ZJ1yhgbIwyc0Vzw8hlsYMt31Fyt68lal37inYyponkqjgjWudOcde%2FjNwY9lsSnjtuQL6DwLLJ3GbI%2FUSuyoTkO0vJJ39ze%2BTHyk5NfF4NzfbxIOTZJTfQuuaP%2BohXDIG9L%2BerXAGhNA2jid2DeW9qUHsgHKRqzd6nX3jcvUwNAyJ0E5ZZ4JwNcjVikpEkvmHGCRnDCD%2Fs9hovS%2Bt1gJlwb6nugN4eS4XOJH3l81QB2y7e8daYj3zMKxjmrZV04rtUB%2B4Ps67wdYqzoRUL7bc51QSMOY1vSvIZnvyD7FqUVB%2Fd9YwyIjbPFvZKa9eyh93NFiESDva%2FBrkGZg26uAeVL8ljHAvLUFk1sFBLkuCVk0rxLX%2FPTTa1t75hFvH3%2FxDE6Y1gPipOOPZVaD%2Fje7JozPLj5eAhlnoa0M%2FWp3py4hbhA8Yh8dwwX8RKeLh5e5ZTEfICVt9hbMee0RKTLJYbnbVDZMur7Ze%2B%2F64cTvFdjNzzCDtia3%2FA18ojShV0lvs7wO8E%2BS1QmV9xLymsQdA%3D%3D',
                    },
                    {
                        'ImageURL': 'https://shopping-phinf.pstatic.net/main_2411456/24114562274.20200910215059.jpg?type=f168',
                        'SiteURL': 'https://cr2.shopping.naver.com/adcr.nhn?x=fN38eRrQHyN0e%2BkyMiDJUP%2F%2F%2Fw%3D%3DsL%2BEuWBl%2FIfhJ5jpHdycO92p1P9wGp0xvVXdMo%2FpgZQOD30aTE%2FZO1%2Bgc%2FUHRdOQ63L6QXh6cq0h6WsfR9jJF5mM5ywTNbvkDUq403b3HrmP3mrP9L3bKHJ%2FdpwvsNiiCtR27Kupb1OdU%2F6jfhYptx%2FlcBicb6E5CIk5VrZGWqe%2F5D04B%2FnxoLVBlSPGFYrF24ZJ1yhgbIwyc0Vzw8hlsYMt31Fyt68lal37inYyponkqjgjWudOcde%2FjNwY9lsSnjtuQL6DwLLJ3GbI%2FUSuyoTkO0vJJ39ze%2BTHyk5NfF4NzfbxIOTZJTfQuuaP%2BohXDIG9L%2BerXAGhNA2jid2DeW9qUHsgHKRqzd6nX3jcvUwNAyJ0E5ZZ4JwNcjVikpEkvmHGCRnDCD%2Fs9hovS%2Bt1gJlwb6nugN4eS4XOJH3l81QB2y7e8daYj3zMKxjmrZV04rtUB%2B4Ps67wdYqzoRUL7bc51QSMOY1vSvIZnvyD7FqUVB%2Fd9YwyIjbPFvZKa9eyh93NFiESDva%2FBrkGZg26uAeVL8ljHAvLUFk1sFBLkuCVk0rxLX%2FPTTa1t75hFvH3%2FxDE6Y1gPipOOPZVaD%2Fje7JozPLj5eAhlnoa0M%2FWp3py4hbhA8Yh8dwwX8RKeLh5e5ZTEfICVt9hbMee0RKTLJYbnbVDZMur7Ze%2B%2F64cTvFdjNzzCDtia3%2FA18ojShV0lvs7wO8E%2BS1QmV9xLymsQdA%3D%3D',
                    },
                    {
                        'ImageURL': 'https://shopping-phinf.pstatic.net/main_2411456/24114562274.20200910215059.jpg?type=f168',
                        'SiteURL': 'https://cr2.shopping.naver.com/adcr.nhn?x=fN38eRrQHyN0e%2BkyMiDJUP%2F%2F%2Fw%3D%3DsL%2BEuWBl%2FIfhJ5jpHdycO92p1P9wGp0xvVXdMo%2FpgZQOD30aTE%2FZO1%2Bgc%2FUHRdOQ63L6QXh6cq0h6WsfR9jJF5mM5ywTNbvkDUq403b3HrmP3mrP9L3bKHJ%2FdpwvsNiiCtR27Kupb1OdU%2F6jfhYptx%2FlcBicb6E5CIk5VrZGWqe%2F5D04B%2FnxoLVBlSPGFYrF24ZJ1yhgbIwyc0Vzw8hlsYMt31Fyt68lal37inYyponkqjgjWudOcde%2FjNwY9lsSnjtuQL6DwLLJ3GbI%2FUSuyoTkO0vJJ39ze%2BTHyk5NfF4NzfbxIOTZJTfQuuaP%2BohXDIG9L%2BerXAGhNA2jid2DeW9qUHsgHKRqzd6nX3jcvUwNAyJ0E5ZZ4JwNcjVikpEkvmHGCRnDCD%2Fs9hovS%2Bt1gJlwb6nugN4eS4XOJH3l81QB2y7e8daYj3zMKxjmrZV04rtUB%2B4Ps67wdYqzoRUL7bc51QSMOY1vSvIZnvyD7FqUVB%2Fd9YwyIjbPFvZKa9eyh93NFiESDva%2FBrkGZg26uAeVL8ljHAvLUFk1sFBLkuCVk0rxLX%2FPTTa1t75hFvH3%2FxDE6Y1gPipOOPZVaD%2Fje7JozPLj5eAhlnoa0M%2FWp3py4hbhA8Yh8dwwX8RKeLh5e5ZTEfICVt9hbMee0RKTLJYbnbVDZMur7Ze%2B%2F64cTvFdjNzzCDtia3%2FA18ojShV0lvs7wO8E%2BS1QmV9xLymsQdA%3D%3D',
                    }
                ]
            },
            {
                'Category': '깔끔함',
                'PGI': 50,
                'SGI': 54,
                'DGI': 60,
                'AssociatedBubbleDatas' : [
                    {
                        'name': '단정',
                        'Value': 320,
                    },
                    {
                        'name': '슬림',
                        'Value': 230,
                    },
                    {
                        'name': '와이드',
                        'Value': 510
                    },
                    {
                        'name': '오버',
                        'Value': 210,
                    },
                    {
                        'name': '루즈',
                        'Value': 107,
                    }
                ],
                'URL' : [
                    {
                        'ImageURL': 'https://shopping-phinf.pstatic.net/main_2411456/24114562274.20200910215059.jpg?type=f168',
                        'SiteURL': 'https://cr2.shopping.naver.com/adcr.nhn?x=fN38eRrQHyN0e%2BkyMiDJUP%2F%2F%2Fw%3D%3DsL%2BEuWBl%2FIfhJ5jpHdycO92p1P9wGp0xvVXdMo%2FpgZQOD30aTE%2FZO1%2Bgc%2FUHRdOQ63L6QXh6cq0h6WsfR9jJF5mM5ywTNbvkDUq403b3HrmP3mrP9L3bKHJ%2FdpwvsNiiCtR27Kupb1OdU%2F6jfhYptx%2FlcBicb6E5CIk5VrZGWqe%2F5D04B%2FnxoLVBlSPGFYrF24ZJ1yhgbIwyc0Vzw8hlsYMt31Fyt68lal37inYyponkqjgjWudOcde%2FjNwY9lsSnjtuQL6DwLLJ3GbI%2FUSuyoTkO0vJJ39ze%2BTHyk5NfF4NzfbxIOTZJTfQuuaP%2BohXDIG9L%2BerXAGhNA2jid2DeW9qUHsgHKRqzd6nX3jcvUwNAyJ0E5ZZ4JwNcjVikpEkvmHGCRnDCD%2Fs9hovS%2Bt1gJlwb6nugN4eS4XOJH3l81QB2y7e8daYj3zMKxjmrZV04rtUB%2B4Ps67wdYqzoRUL7bc51QSMOY1vSvIZnvyD7FqUVB%2Fd9YwyIjbPFvZKa9eyh93NFiESDva%2FBrkGZg26uAeVL8ljHAvLUFk1sFBLkuCVk0rxLX%2FPTTa1t75hFvH3%2FxDE6Y1gPipOOPZVaD%2Fje7JozPLj5eAhlnoa0M%2FWp3py4hbhA8Yh8dwwX8RKeLh5e5ZTEfICVt9hbMee0RKTLJYbnbVDZMur7Ze%2B%2F64cTvFdjNzzCDtia3%2FA18ojShV0lvs7wO8E%2BS1QmV9xLymsQdA%3D%3D',
                    },
                    {
                        'ImageURL': 'https://shopping-phinf.pstatic.net/main_2411456/24114562274.20200910215059.jpg?type=f168',
                        'SiteURL': 'https://cr2.shopping.naver.com/adcr.nhn?x=fN38eRrQHyN0e%2BkyMiDJUP%2F%2F%2Fw%3D%3DsL%2BEuWBl%2FIfhJ5jpHdycO92p1P9wGp0xvVXdMo%2FpgZQOD30aTE%2FZO1%2Bgc%2FUHRdOQ63L6QXh6cq0h6WsfR9jJF5mM5ywTNbvkDUq403b3HrmP3mrP9L3bKHJ%2FdpwvsNiiCtR27Kupb1OdU%2F6jfhYptx%2FlcBicb6E5CIk5VrZGWqe%2F5D04B%2FnxoLVBlSPGFYrF24ZJ1yhgbIwyc0Vzw8hlsYMt31Fyt68lal37inYyponkqjgjWudOcde%2FjNwY9lsSnjtuQL6DwLLJ3GbI%2FUSuyoTkO0vJJ39ze%2BTHyk5NfF4NzfbxIOTZJTfQuuaP%2BohXDIG9L%2BerXAGhNA2jid2DeW9qUHsgHKRqzd6nX3jcvUwNAyJ0E5ZZ4JwNcjVikpEkvmHGCRnDCD%2Fs9hovS%2Bt1gJlwb6nugN4eS4XOJH3l81QB2y7e8daYj3zMKxjmrZV04rtUB%2B4Ps67wdYqzoRUL7bc51QSMOY1vSvIZnvyD7FqUVB%2Fd9YwyIjbPFvZKa9eyh93NFiESDva%2FBrkGZg26uAeVL8ljHAvLUFk1sFBLkuCVk0rxLX%2FPTTa1t75hFvH3%2FxDE6Y1gPipOOPZVaD%2Fje7JozPLj5eAhlnoa0M%2FWp3py4hbhA8Yh8dwwX8RKeLh5e5ZTEfICVt9hbMee0RKTLJYbnbVDZMur7Ze%2B%2F64cTvFdjNzzCDtia3%2FA18ojShV0lvs7wO8E%2BS1QmV9xLymsQdA%3D%3D',
                    },
                    {
                        'ImageURL': 'https://shopping-phinf.pstatic.net/main_2411456/24114562274.20200910215059.jpg?type=f168',
                        'SiteURL': 'https://cr2.shopping.naver.com/adcr.nhn?x=fN38eRrQHyN0e%2BkyMiDJUP%2F%2F%2Fw%3D%3DsL%2BEuWBl%2FIfhJ5jpHdycO92p1P9wGp0xvVXdMo%2FpgZQOD30aTE%2FZO1%2Bgc%2FUHRdOQ63L6QXh6cq0h6WsfR9jJF5mM5ywTNbvkDUq403b3HrmP3mrP9L3bKHJ%2FdpwvsNiiCtR27Kupb1OdU%2F6jfhYptx%2FlcBicb6E5CIk5VrZGWqe%2F5D04B%2FnxoLVBlSPGFYrF24ZJ1yhgbIwyc0Vzw8hlsYMt31Fyt68lal37inYyponkqjgjWudOcde%2FjNwY9lsSnjtuQL6DwLLJ3GbI%2FUSuyoTkO0vJJ39ze%2BTHyk5NfF4NzfbxIOTZJTfQuuaP%2BohXDIG9L%2BerXAGhNA2jid2DeW9qUHsgHKRqzd6nX3jcvUwNAyJ0E5ZZ4JwNcjVikpEkvmHGCRnDCD%2Fs9hovS%2Bt1gJlwb6nugN4eS4XOJH3l81QB2y7e8daYj3zMKxjmrZV04rtUB%2B4Ps67wdYqzoRUL7bc51QSMOY1vSvIZnvyD7FqUVB%2Fd9YwyIjbPFvZKa9eyh93NFiESDva%2FBrkGZg26uAeVL8ljHAvLUFk1sFBLkuCVk0rxLX%2FPTTa1t75hFvH3%2FxDE6Y1gPipOOPZVaD%2Fje7JozPLj5eAhlnoa0M%2FWp3py4hbhA8Yh8dwwX8RKeLh5e5ZTEfICVt9hbMee0RKTLJYbnbVDZMur7Ze%2B%2F64cTvFdjNzzCDtia3%2FA18ojShV0lvs7wO8E%2BS1QmV9xLymsQdA%3D%3D',
                    },
                    {
                        'ImageURL': 'https://shopping-phinf.pstatic.net/main_2411456/24114562274.20200910215059.jpg?type=f168',
                        'SiteURL': 'https://cr2.shopping.naver.com/adcr.nhn?x=fN38eRrQHyN0e%2BkyMiDJUP%2F%2F%2Fw%3D%3DsL%2BEuWBl%2FIfhJ5jpHdycO92p1P9wGp0xvVXdMo%2FpgZQOD30aTE%2FZO1%2Bgc%2FUHRdOQ63L6QXh6cq0h6WsfR9jJF5mM5ywTNbvkDUq403b3HrmP3mrP9L3bKHJ%2FdpwvsNiiCtR27Kupb1OdU%2F6jfhYptx%2FlcBicb6E5CIk5VrZGWqe%2F5D04B%2FnxoLVBlSPGFYrF24ZJ1yhgbIwyc0Vzw8hlsYMt31Fyt68lal37inYyponkqjgjWudOcde%2FjNwY9lsSnjtuQL6DwLLJ3GbI%2FUSuyoTkO0vJJ39ze%2BTHyk5NfF4NzfbxIOTZJTfQuuaP%2BohXDIG9L%2BerXAGhNA2jid2DeW9qUHsgHKRqzd6nX3jcvUwNAyJ0E5ZZ4JwNcjVikpEkvmHGCRnDCD%2Fs9hovS%2Bt1gJlwb6nugN4eS4XOJH3l81QB2y7e8daYj3zMKxjmrZV04rtUB%2B4Ps67wdYqzoRUL7bc51QSMOY1vSvIZnvyD7FqUVB%2Fd9YwyIjbPFvZKa9eyh93NFiESDva%2FBrkGZg26uAeVL8ljHAvLUFk1sFBLkuCVk0rxLX%2FPTTa1t75hFvH3%2FxDE6Y1gPipOOPZVaD%2Fje7JozPLj5eAhlnoa0M%2FWp3py4hbhA8Yh8dwwX8RKeLh5e5ZTEfICVt9hbMee0RKTLJYbnbVDZMur7Ze%2B%2F64cTvFdjNzzCDtia3%2FA18ojShV0lvs7wO8E%2BS1QmV9xLymsQdA%3D%3D',
                    },
                    {
                        'ImageURL': 'https://shopping-phinf.pstatic.net/main_2411456/24114562274.20200910215059.jpg?type=f168',
                        'SiteURL': 'https://cr2.shopping.naver.com/adcr.nhn?x=fN38eRrQHyN0e%2BkyMiDJUP%2F%2F%2Fw%3D%3DsL%2BEuWBl%2FIfhJ5jpHdycO92p1P9wGp0xvVXdMo%2FpgZQOD30aTE%2FZO1%2Bgc%2FUHRdOQ63L6QXh6cq0h6WsfR9jJF5mM5ywTNbvkDUq403b3HrmP3mrP9L3bKHJ%2FdpwvsNiiCtR27Kupb1OdU%2F6jfhYptx%2FlcBicb6E5CIk5VrZGWqe%2F5D04B%2FnxoLVBlSPGFYrF24ZJ1yhgbIwyc0Vzw8hlsYMt31Fyt68lal37inYyponkqjgjWudOcde%2FjNwY9lsSnjtuQL6DwLLJ3GbI%2FUSuyoTkO0vJJ39ze%2BTHyk5NfF4NzfbxIOTZJTfQuuaP%2BohXDIG9L%2BerXAGhNA2jid2DeW9qUHsgHKRqzd6nX3jcvUwNAyJ0E5ZZ4JwNcjVikpEkvmHGCRnDCD%2Fs9hovS%2Bt1gJlwb6nugN4eS4XOJH3l81QB2y7e8daYj3zMKxjmrZV04rtUB%2B4Ps67wdYqzoRUL7bc51QSMOY1vSvIZnvyD7FqUVB%2Fd9YwyIjbPFvZKa9eyh93NFiESDva%2FBrkGZg26uAeVL8ljHAvLUFk1sFBLkuCVk0rxLX%2FPTTa1t75hFvH3%2FxDE6Y1gPipOOPZVaD%2Fje7JozPLj5eAhlnoa0M%2FWp3py4hbhA8Yh8dwwX8RKeLh5e5ZTEfICVt9hbMee0RKTLJYbnbVDZMur7Ze%2B%2F64cTvFdjNzzCDtia3%2FA18ojShV0lvs7wO8E%2BS1QmV9xLymsQdA%3D%3D',
                    }
                ]
            }
        ]
    });

    React.useEffect(() => {
        var seriesData = [];
        var bubbleXArr = [];
        var bubbleYArr = [];
        var xMin, xMax, yMin, yMax = 0;

        // data: [X축(DGI), Y축(SGI), 크기(PGI)] 순
        resData.BubbleData.map((res) => {
            seriesData.push({
                name: res.Category,
                data: [[res.DGI, res.SGI, res.PGI]], 
            });

            bubbleXArr.push(res.DGI);
            bubbleYArr.push(res.SGI);
        });

        // x, y축 최소/최대값 계산해서 중앙 쯤 위치하게 +-5
        xMin = Math.min.apply(null, bubbleXArr) - 5;
        xMax = Math.max.apply(null, bubbleXArr) + 5;
        yMin = Math.min.apply(null, bubbleYArr) - 5;
        yMax = Math.max.apply(null, bubbleYArr) + 5;
        
        setLineOption({
            series: seriesData,
            options: {
                chart: {
                  toolbar: {
                    show: false,
                  },
                  zoom: {
                    enabled: false
                  }
                },
                dataLabels: {
                  enabled: true,
                  formatter: function(value, { seriesIndex, dataPointIndex, w }) {
                    return w.config.series[seriesIndex].name
                  }
                },
                fill: {
                  opacity: 0.7
                },
                title: {
                   //text: ""
                },
                xaxis: {
                  min: xMin,
                  max: xMax,
                  tickAmount: 12,
                  type: "category"
                },
                yaxis: {
                  min: yMin,
                  max: yMax
                }
            }
        });
    }, []);
    
    return (
        <ReactApexChart options={bubbleOptions.options} series={bubbleOptions.series} type="bubble" height={height} />
    );
};

export default Bubble;
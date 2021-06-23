/* eslint-disable react/no-array-index-key */
import React , { useState , useEffect ,forwardRef, useImperativeHandle } from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types'; // eslint-disable-line no-unused-vars

const thumbs = {URL : [
  {
    ImageURL:'/assets/img/showroom/thumb1.png',
    SiteURL: '#'
  },
  {
    ImageURL:'/assets/img/showroom/thumb2.png' ,
    SiteURL: '#'
  },
  {
    ImageURL:'/assets/img/showroom/thumb3.png',
    SiteURL: '#'},
  {
    ImageURL:'/assets/img/showroom/thumb4.png',
    SiteURL: '#'},
  {
    ImageURL:'/assets/img/showroom/thumb1.png',
    SiteURL: '#'},
  {
    ImageURL:'/assets/img/showroom/thumb3.png',
    SiteURL: '#'},
  {
    ImageURL:'/assets/img/showroom/thumb2.png',
    SiteURL: '#'},
  {
    ImageURL:'/assets/img/showroom/thumb1.png',
    SiteURL: '#'},
  {
    ImageURL:'/assets/img/showroom/thumb4.png',
    SiteURL: '#'},
  {
    ImageURL:'/assets/img/showroom/thumb3.png',
    SiteURL: '#'},
  {
    ImageURL:'/assets/img/showroom/thumb1.png',
    SiteURL: '#'},
  {
    ImageURL:'/assets/img/showroom/thumb2.png',
    SiteURL: '#'},
  {
    ImageURL:'/assets/img/showroom/thumb4.png',
    SiteURL: ''},
  {
    ImageURL:'/assets/img/showroom/thumb1.png',
    SiteURL: '#'},
  ]
};

const ShowRoom = React.forwardRef((props,ref) => { // eslint-disable-line no-unused-vars
    const [thumbList , setThumbList] = useState(thumbs); // eslint-disable-line no-unused-vars
    useImperativeHandle(ref, () => ({
      showRoonGetCallApi(objShowRoomData) {
        //console.log('�ڽ��� ������');
        //console.log(objShowRoomData);
        setThumbList(objShowRoomData);
      }
    }));

    return (
      <>
        <ul>
          {thumbList.URL.map((item, index) => {
            return (
              <li key={index}>
                <a href={item.SiteURL}>
                <img
                  className="img-fluid border-radius"
                  src={item.ImageURL}
                  alt="thumbnail"
                />
                </a>
              </li>
            );
          })}
        </ul>
      </>
    );
});    

ShowRoom.displayName = 'ShowRoom';

export default ShowRoom;

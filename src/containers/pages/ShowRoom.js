/* eslint-disable react/no-array-index-key */
import React from 'react';

const thumbs = [
  '/assets/img/showroom/thumb1.png',
  '/assets/img/showroom/thumb2.png',
  '/assets/img/showroom/thumb3.png',
  '/assets/img/showroom/thumb4.png',
  '/assets/img/showroom/thumb1.png',
  '/assets/img/showroom/thumb3.png',
  '/assets/img/showroom/thumb2.png',
  '/assets/img/showroom/thumb1.png',
  '/assets/img/showroom/thumb4.png',
  '/assets/img/showroom/thumb3.png',
  '/assets/img/showroom/thumb1.png',
  '/assets/img/showroom/thumb2.png',
  '/assets/img/showroom/thumb4.png',
  '/assets/img/showroom/thumb1.png',

];

const ShowRoom = () => {

  return (
    <>
      <ul>
        {thumbs.map((item, index) => {
          return (
            <li key={index}>
              <img
                className="img-fluid border-radius"
                src={item}
                alt="thumbnail"
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ShowRoom;

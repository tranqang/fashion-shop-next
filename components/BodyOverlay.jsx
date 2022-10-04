import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { show } from '../redux/reducers/toggleSlice';

function BodyOverlay() {
  const searchState = useSelector(state => state.toggle.search);
  const mobileSubnavState = useSelector(state => state.toggle.mobile_subnav);
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => {
        dispatch(show({ key: 'search', value: false }));
        dispatch(show({ key: 'mobile_subnav', value: false }));
      }}
      id='body_overlay'
      className={`position-fixed ${
        searchState || mobileSubnavState ? '' : 'd-none'
      }`}
    ></div>
  );
}

export default BodyOverlay;

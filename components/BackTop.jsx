import React, { useEffect, useState } from 'react';

function BackTop() {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 500) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);

    return () => {
      window.removeEventListener('scroll', toggleVisible);
    };
  }, []);
  return (
    <div
      onClick={scrollToTop}
      style={{
        display: visible ? 'inline' : 'none',
      }}
      className={`back_top d-block position-fixed text-center ${
        visible ? 'back_show' : ''
      }`}
    >
      ↑<span className='d-block text-center'>Lên đầu trang</span>
    </div>
  );
}

export default BackTop;

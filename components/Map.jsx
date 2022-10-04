import React from 'react';

function Map({ width, height }) {
  return (
    <div id='map' style={{ position: 'relative', overflow: 'hidden' }}>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.6463972334054!2d105.8650134142704!3d21.04682998598855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abd3d35c939d%3A0xff3f40f85d83032f!2zMzQgTmcuIDIgxJAuIE5n4buNYyBUaOG7pXksIE5n4buNYyBUaOG7pXksIExvbmcgQmnDqm4sIEjDoCBO4buZaSwgVmlldG5hbQ!5e0!3m2!1sen!2sus!4v1663229132840!5m2!1sen!2sus'
        width={width}
        height={height}
        style={{ border: 0 }}
        allowFullScreen
        loading='lazy'
        title='map'
        referrerPolicy='no-referrer-when-downgrade'
      />
    </div>
  );
}

export default Map;

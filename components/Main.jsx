import React from 'react';
import Loader from './Loader';

function Main() {
  return (
    <div className="App">
      <Loader />
      {/* Your other components go here */}
      <div className="main">
        <div className="page1" data-scroll data-scroll-speed="-2">
          <h1>
            <em>We</em><em> are a </em>CREATIVE<em> studio<br /> </em>DEDICATED
            <em> to </em>CULTURAL<br />
            ADVANCEMENT <em> through </em> <br />
            STRATEGY <em> and </em>DESIGN.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Main;

import React, { Component } from 'react';
import info1 from './images/ico_emergency_info1.png';
import info2 from './images/ico_emergency_info2.png';
import info3 from './images/ico_emergency_info3.png';
import info4 from './images/ico_emergency_info4.png';
import './css/Emergency.css';

class Emergency extends Component {
  render() {
    return (
      <div className="Emergency-fund">
        <h2>비상금 이럴때 유용해요!</h2>
        <ul>
          <li>
            <img src={info1} className="img-top" alt="Emergency_info1" />
            <span className="Emergency-info">현금이 없는데<br />경조사비를 내야할 때</span>
          </li>
          <li>
            <img src={info2} className="img-top" alt="Emergency_info2" />
            <span className="Emergency-info">월급날 전 갑자기<br />돈이 필요할 때</span>
          </li>
          <li>
            <img src={info3} alt="Emergency_info3" />
            <span className="Emergency-info">무심코 사용했던<br />현금서비스로 신용등급이<br />하락했을 때</span>
          </li>
          <li>
            <img src={info4} alt="Emergency_info4" />
            <span className="Emergency-info">혹시 현금이 필요할<br />때를 대비해서 미리미리</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default Emergency;

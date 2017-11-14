import React, { Component } from 'react';
import './css/Interest.css';

class Interest extends Component {
  render() {
    return (
      <div className="Interest">
        <h4>하루 이자 273원!</h4>
        <p>비상금으로 필요할 때만 꺼내쓰고 이자는 사용한 만큼만 내세요.<br />
           ※ 위 이자는 대출한도 3백만원(대출금리 연3.32%)을 전부 사용한 경우를 기준으로 하루 이자를 계산하였습니다. <br />
           (2017.6.19기준 최저금리: 연 3.32%)
        </p>
      </div>
    );
  }
}

export default Interest;

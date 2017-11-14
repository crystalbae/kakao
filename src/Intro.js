import React, { Component } from 'react';
import './css/Intro.css';

class Intro extends Component {
  render() {
    return (
      <div className="Intro">
        <h1>카카오뱅크 비상금대출</h1>
        <p>60초면 충전 끝</p>
        <p>모바일 비상금 </p>
        <span className="sub">(소액 마이너스 대출)</span>
        <table>
          <tbody>
            <tr>
              <td>
                <div className="td-box">
                  <span className="td-title">최대한도</span>
                  <div className="td-content">
                    300<span className="unit">만원</span>
                  </div>
                </div>
              </td>
              <td className="center">
                <div className="td-box">
                  <span className="td-title">최저금리</span>
                  <div className="td-content">
                    <span className="year">연</span>3.34<span className="unit">%</span>
                  </div>
                </div>
              </td>
              <td className="right">
                <div className="td-box">
                  <span className="td-title">평균소요시간</span>
                  <div className="td-content">
                    60<span className="unit">초</span>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Intro;

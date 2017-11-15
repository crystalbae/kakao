import React, { Component } from 'react';
import CountUp from 'react-countup';
import './css/Charge.css';

class Charge extends Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);

    this.state = {
      countup: "0"
    }
  }

  handleScroll(e) {
    const scroll = window.pageYOffset;
    const device = document.getElementById('device');
    const card = document.getElementById('card');
    const text = document.getElementById('text');

    if (scroll >= 350) {
      device.classList.add("active");
      setTimeout(() => { text.classList.add("active"); card.classList.add("active"); }, 1000);
      setTimeout(() => { this.setState({ countup: <CountUp start={0} end={3854000} duration={1.25} separator={','} useGrouping={true} /> }) } , 1000);
      window.removeEventListener("scroll", this.handleScroll);
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  render() {
    return (
      <div className="Charge">
        <h3>최대 300만원까지 바로 충전</h3>
        <p>휴대폰 본인 인증만으로 신용 등급 조회 후 바로 비상금을 충전(계좌에서 바로 출금가능)할 수 있습니다. 신용등급에 따라 최소 50만원에서 최대 300만원까지 충전됩니다.</p>
        <div onScroll={this.handleScroll} id="device-wrapper">
          <div id="device">
            <div id="card">
              <p id="text"><span className="counting-number">{this.state.countup}</span>원</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Charge;

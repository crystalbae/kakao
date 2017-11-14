import React, { Component } from 'react';
import CountUp from 'react-countup';
import './css/Apply.css';

class Apply extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countup: "0"
    }
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll(e) {
    const scroll = window.pageYOffset;
    const people = document.getElementById('people-wrapper');
    const radial = document.getElementById('radial-progress');
    const full = document.getElementsByClassName("full");
    const fills = document.getElementsByClassName("fill");

    if (scroll >= 1300) {
      people.classList.add("active");
      radial.classList.add("active");
      full[0].classList.add("active");
      for (var i = 0; i < fills.length; i++) {
        fills[i].classList.add("active");
      }
      setTimeout(() => { this.setState({ countup: <CountUp onStart={this.onStart} start={0} end={90} duration={5.5} useGrouping={true} /> }) } , 200);
      window.removeEventListener("scroll", this.handleScroll);
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  render() {
    return (
      <div className="Apply">
        <h5>만 19세 이상<br />대한민국 국민의 90% 신청가능</h5>
        <p>만 19세 이상 성인의 경우, 신용등급이 1등급에서 8등급까지 비상금 신청이 가능합니다. (단, 비상금은 고객마다 1계좌만 가능합니다.)</p>
        <div id="radial-progress">
          <div className="line"></div>
          <div className="circle">
            <div className="mask full">
              <div className="fill"></div>
            </div>
            <div className="mask half">
              <div className="fill"></div>
              <div className="fill fix"></div>
            </div>
          </div>
          <div className="inset"></div>

          <div className="background"></div>
          <div id="people-wrapper" onScroll={this.handleScroll}>
            <ul className="people">
              <li className="people-img"></li>
              <li className="people-img"></li>
              <li className="people-img"></li>
              <li className="people-img"></li>
              <li className="people-img"></li>
              <li className="people-img"></li>
              <li className="people-img"></li>
              <li className="people-img"></li>
              <li className="people-img"></li>
            </ul>
          </div>
          <span className="counting">{this.state.countup}%</span>
        </div>

      </div>
    );
  }
}

export default Apply;

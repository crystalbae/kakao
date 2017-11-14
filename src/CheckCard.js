import React, { Component } from 'react';
import update from 'react-addons-update';
import './css/CheckCard.css';
import particles from './images/img_checkcard_top.png'

class CheckCard extends Component {
  constructor(props) {
    super(props);
    this.state  = {
      particleXY: [],
      count: 0
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll(e) {
    const scroll = window.pageYOffset;
    const handCard = document.getElementById("card-img");
    const highlight = document.getElementById("highlight");

    if (scroll >= 1450) {
      handCard.classList.add("active");
      setTimeout(() => { highlight.classList.add("active"); }, 800);

      if (scroll >= 1700) {
        for(var i = 0; i < 32; i++) {
          let newState = update(this.state, {
            particleXY: { $push: [{
              "midSpotX": -130 + (Math.random() * 260),       // 올라갈때 x좌표 -130 ~ 130px
              "midSpotY": -120 + (Math.random() * 200),       // 올라갈때 y좌표 -120 ~ 80px
              "endSpotX": -250 + (Math.random() * 500),       // 내려갈때 x좌표 -250 ~ 250px
              "endSpotY": 80 + (Math.random() * 100),         // 내려갈때 y좌표 80 ~ 180 px
              "upDuration": 50 + (Math.random() * 250),       // 올라가는 시간 0.05 ~ 0.3초
              "downDuration": 1200 + (Math.random() * 2800),  // 내려오는 시간 1.2 ~ 4초
              "ratateY": 720 + (Math.random() * 1980)         // 회전 각도 720 ~ 2700deg
            }] }
          });
          this.setState(newState);
        }
        let that = this;
        window.requestAnimationFrame(this.moveUpParticle.bind(this));
        setTimeout(function() {
          that.moveUpParticle();
          setTimeout(function() {
            that.moveUpParticle();
            setTimeout(function() {
              that.moveUpParticle();
            }, 4000);
          }, 4000);
        }, 4000);
        window.removeEventListener("scroll", this.handleScroll);
      }
    }
  }

  moveUpParticle() {
    let that = this;
    for(var i = 1; i < 33; i++) {
      let particle = document.getElementById("particle-"+i);
      particle.animate([
        { transform: 'translate(0) rotateY(0)', opacity: 0.5 },
        { transform: 'translate('+this.state.particleXY[i-1].midSpotX+'px, '+this.state.particleXY[i-1].midSpotY+'px) rotateY('+this.state.particleXY[i-1].ratateY+'deg)', opacity: 1 }
      ], {
        duration: this.state.particleXY[i-1].upDuration,
        easing: 'cubic-bezier(.17,.67,.36,1)'
      }).addEventListener('webkitAnimationEnd msAnimationEnd animationEnd', that.moveDownParticle(i, particle));
    }
  }

  moveDownParticle(i, particle) {
    let that = this;
    setTimeout(function() {
      particle.animate([
        { transform: 'translate('+that.state.particleXY[i-1].midSpotX+'px, '+that.state.particleXY[i-1].midSpotY+'px) rotateY(0)', opacity: 1 },
        { transform: 'translate('+that.state.particleXY[i-1].endSpotX+'px, '+that.state.particleXY[i-1].endSpotY+'px) rotateY('+that.state.particleXY[i-1].ratateY+'deg)', opacity: 0 }
      ], {
        duration: that.state.particleXY[i-1].downDuration
      });
      particle.style.transform = 'translate('+that.state.particleXY[i-1].endSpotX+'px, '+that.state.particleXY[i-1].endSpotY+'px) rotateY('+that.state.particleXY[i-1].ratateY+'deg)';
      particle.style.opacity = 0;
    }, this.state.particleXY[i-1].upDuration);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  render() {
    return (
      <div className="CheckCard">
        <div id="card-img"></div>
        <div id="highlight"></div>
        <h5>체크카드로 간편하게 출금</h5>
        <p>충전된 금액은 바로 사용이 가능합니다.<br />
           이체는 물론, 체크카드로 ATM에서 출금하거나 온라인/오프라인 결제를 통해 편리하게 사용이 가능합니다.
        </p>
        <div className="friends">
          <div className="black"></div>
          <div className="character left-hand"></div>
          <div className="character right-hand"></div>
          <div className="character muzi"></div>
          <div className="character con"></div>
          <div className="character apeach"></div>
          <div className="character lion"></div>
          <div className="card-back"></div>
        </div>

        <div id="particles">
          <div id="particle-1" className="particle-img"></div>
          <div id="particle-2" className="particle-img"></div>
          <div id="particle-3" className="particle-img"></div>
          <div id="particle-4" className="particle-img"></div>
          <div id="particle-5" className="particle-img"></div>
          <div id="particle-6" className="particle-img"></div>
          <div id="particle-7" className="particle-img"></div>
          <div id="particle-8" className="particle-img"></div>
          <div id="particle-9" className="particle-img"></div>
          <div id="particle-10" className="particle-img"></div>
          <div id="particle-11" className="particle-img"></div>
          <div id="particle-12" className="particle-img"></div>
          <div id="particle-13" className="particle-img"></div>

          <div id="particle-14" className="particle-img"></div>
          <div id="particle-15" className="particle-img"></div>
          <div id="particle-16" className="particle-img"></div>
          <div id="particle-17" className="particle-img"></div>
          <div id="particle-18" className="particle-img"></div>
          <div id="particle-19" className="particle-img"></div>
          <div id="particle-20" className="particle-img"></div>
          <div id="particle-21" className="particle-img"></div>
          <div id="particle-22" className="particle-img"></div>
          <div id="particle-23" className="particle-img"></div>
          <div id="particle-24" className="particle-img"></div>
          <div id="particle-25" className="particle-img"></div>
          <div id="particle-26" className="particle-img"></div>

          <div id="particle-27" className="particle-img"></div>
          <div id="particle-28" className="particle-img"></div>
          <div id="particle-29" className="particle-img"></div>
          <div id="particle-30" className="particle-img"></div>
          <div id="particle-31" className="particle-img"></div>
          <div id="particle-32" className="particle-img"></div>
        </div>
      </div>
    );
  }
}

export default CheckCard;

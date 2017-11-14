import React, { Component } from 'react';
import './css/Footer.css';

class Footer extends Component {
  componentDidMount() {
    window.fbAsyncInit = function() {
      window.FB.init({
        appId      : '1551656804901104',
        xfbml      : true,
        version    : 'v2.10'
      });
      window.FB.AppEvents.logPageView();
    };
    (function(d, s, id){
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) {return;}
       js = d.createElement(s); js.id = id;
       js.src = "//connect.facebook.net/en_US/sdk.js";
       fjs.parentNode.insertBefore(js, fjs);
     }(document, 'script', 'facebook-jssdk'));
  }

  facebookShare() {
    window.FB.ui({
      method: 'share',
      mobile_iframe: true,
      href: 'https://developers.facebook.com/docs/',
    }, function(response){});
  }

  platformCheck() {
    if (navigator.platform) {
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        // mobile 공유
        console.log("mobile");
      } else {
        console.log("pc");
        alert("카카오톡 공유하기는 모바일에서 가능합니다.");
      }
    }
  }

  render() {
    return (
      <div className="Footer">
        <div className="law-text">준법감시인 심의필 17-47(2017.07.17~2018.07.16)</div>
        <p>친구에게 알려주세요!</p>
        <ul className="share">
          <li><a onClick={this.platformCheck.bind(this)}><span className="kakao"></span></a></li>
          <li><a className="fb-xfbml-parse-ignore" href="javascript:window.open('https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.kakaobank.com%2Fapp%2Fproducts%2FemergencyLoan%2Fshare&amp;src=sdkpreparse', '_blank', 'width=600, height=400');"><span className="facebook"></span></a></li>

        </ul>
        <div className="app-store">
          <a className="google-btn" href="https://play.google.com/store/apps/details?id=com.kakaobank.channel"><span className="google"></span>Google Play</a>
          <a className="apple-btn" href="https://itunes.apple.com/kr/app/id1258016944?mt=8"><span className="apple"></span>App Store</a>
        </div>
      </div>
    );
  }
}

export default Footer;

import React, { Component } from 'react';
import './css/Question.css';

class Question extends Component {
  activeAccordion(index) {
    var acc = document.getElementsByClassName("accordion")[index];
    // 메뉴 버튼 down <-> up 변경
    acc.firstElementChild.classList.toggle("active");
    // 아코디언 메뉴
    var panel = acc.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  }

  render() {
    return (
      <div className="Question">
        <h5>자주하는 질문</h5>
        <dl>
          <dt><span>Q</span>비상금이 입금되는 건가요? 통장에 입금내역이 없는데, 이자를 바로 내야 하나요?</dt>
          <dd>비상금은 마이너스 통장 대출이므로, 통장에 신청하신 금액이 입금되는 것이 아니라, 언제든 사용하실 수 있도록 한도로 충전됩니다. 따라서, 사용하지 않으시면 이자가 부과되지 않습니다. 사용한 금액에 대해서는 신규하실 때 계약한 금리를 적용하여 매월 납부일에 통장에서 자동으로 이자를 납부합니다.</dd>
          <dt><span>Q</span>신용등급에 영향은 없나요?</dt>
          <dd>카카오뱅크는 제1금융권으로서 카카오뱅크 대출을 신규하는 것만으로는 신용등급 하락에 큰 영향이 없습니다. 다만, 현재의 신용등급과 부채현황에 따라 개인의 신용등급에 미치는 영향은 다를 수 있습니다. 제1금융권인 카카오뱅크를 통해 연체없이 거래를 유지하시면 신용등급 관리에 도움이 될 수 있습니다.</dd>
          <dt><span>Q</span>변동금리 상품인데, 금리가 어떻게 변경되나요?</dt>
          <dd className="last">비상금대출의 대출금리는 "금융채유통수익률(한국금융투자협회 고시금리) 1년물"이라는 기준금리에 연동되어 변경됩니다. 기준금리의 변동주기는 1년이므로, 최초 신규한 날에 적용된 금리가 만기까지 유지됩니다. 다만, 기한연장 하는 경우에는 기한연장일에 새로 산출된 대출금리가 적용됩니다.</dd>
        </dl>

        <button className="accordion" onClick={this.activeAccordion.bind(this, 0)}>
          상품안내<span className="menu-down"></span>
        </button>
        <div className="panel">
          <dl>
            <dt>가입대상</dt>
            <dd>
              직업, 소득에 관계없이 신용평가등급(CB)이 1~8등급인 고객
              <ul>
                <li>• 서울보증보험(주) 보험증권 발급이 가능한 고객</li>
                <li>• 만 19세 이상 내국인</li>
                <li>• 연체, 채무불이행 기록이 없는 고객</li>
              </ul>
            </dd>
            <dt>대출종류</dt>
            <dd>마이너스 통장 대출</dd>
            <dt>대출한도</dt>
            <dd>
              최소 50만원 ~ 최대 300만원
              <ul><li>• 50/100/200/300 으로 신용등급에 따라 적용</li></ul>
            </dd>
            <dt>대출기간</dt>
            <dd>1년(연장 가능)</dd>
            <dt>상환방법</dt>
            <dd>만기일시상환<br /><span>※ 대출 기간 중에는 대출 한도 내에서 수시로 상환 및 재사용이 가능하며, 기한연장을 하지 않은 경우, 대출기간 종료 시(만기일)에 대출잔액 및 상환시점 미납이자를 모두 상환합니다.</span></dd>
            <dt>고객부담 비용</dt>
            <dd>없음</dd>
            <dt>중도상환해약금</dt>
            <dd>면제</dd>
            <dt>신청 가능 시간</dt>
            <dd>365일 가능 (06시부터 23시까지)</dd>
          </dl>
        </div>


        <button className="accordion" onClick={this.activeAccordion.bind(this, 1)}>
          금리정보<span className="menu-down"></span>
        </button>
        <div className="panel">
          <dl>
            <dt>대출금리</dt>
            <dd>연 3.442% ~ 15.000% (2017.08.18 기준)</dd>
            <table>
              <tbody>
                <tr className="table-top">
                  <th className="table-left">종류</th>
                  <th>금리</th>
                </tr>
                <tr className="first">
                  <td>기준금리</td>
                  <td>연 <span className="rates">1.659%</span><br />(금융채1년)</td>
                </tr>
                <tr className="second">
                  <td>가산금리</td>
                  <td>연 <span className="rates">1.783% ~ 13.341%</span></td>
                </tr>
              </tbody>
            </table>
            <dd><span>
              ※ 대출금리 = 기준금리 + 가산금리 - 우대금리<br />
              ※ 가산금리는 신용등급별로 다르게 적용되며 대출 기간 중 변동 되지 않습니다.<br />
              ※ 금융채1년 연동금리는 1년을 주기로 변동되므로, 대출 기간 종료일까지 약정금리는 변동되지 않습니다. 단, 기한연장 시에는 해당 시점의 금융채 1년 연동금리를 적용합니다.
            </span></dd>
            <dt>연체금리</dt>
            <dd>본 상품은 대출 상품으로 매월 이자납입일 기준 미납금액이 발생하면, 다음과 같이 연체이자가 발생합니다.</dd>
            <table>
              <tbody>
                <tr className="table-top">
                  <th className="table-left">연체기간</th>
                  <th>금리</th>
                </tr>
                <tr className="second">
                  <td>1개월 이하</td>
                  <td>대출금리 + 연 <span className="rates">6%</span></td>
                </tr>
                <tr className="second">
                  <td>1개월 초과 ~ 3개월 이하</td>
                  <td>대출금리 + 연 <span className="rates">7%</span></td>
                </tr>
                <tr className="second">
                  <td>3개월 초과</td>
                  <td>대출금리 + 연 <span className="rates">8%</span></td>
                </tr>
              </tbody>
            </table>
            <dd><span>
              ※ 납입일에 이자를 미납하여 대출한도를 초과하게 된 경우, 그 다음 날부터 한도를 초과한 금액에 대해 연체이자가 발생합니다. 또한, 미납 상태에서 1개월 이상 해당 금액을 상환하지 않으면, 1개월 경과 시점에 대출잔액에 대하여 연체이자가 발생하게 됩니다. 자세한 사항은 약관 및 상품설명서에서 확인 가능합니다.<br />
              ※ 연체금리는 대출금리에 연체 가산금리를 더하여 적용하며, 위 도표와 같이 연체 기간별로 차등하여 계단방식으로 적용됩니다.<br />
              단, 연체금리의 최고율은 연 15%이며, 대출금리가 연 15%이상인 경우에는 대출금리 + 연 2%를 적용합니다.
            </span></dd>
          </dl>
        </div>


        <button className="accordion" onClick={this.activeAccordion.bind(this, 2)}>
          기타사항<span className="menu-down"></span>
        </button>
        <div className="panel">
          <dl>
            <dt>이자납입방법</dt>
            <dd>
              <ul>
                <li>• 대출 신규일자의 매월 해당일을 결산일(이자납입일자)로 합니다. 단, 대출 신규 이후 원하는 일자로 변경할 수 있습니다.</li>
                <li>• 직전 결산일 다음 날부터 이번 달의 결산일까지 매일의 대출사용금액에 대해 이자를 계산하여 지급합니다.</li>
              </ul>
            </dd>
            <dt>유의사항</dt>
            <dd>
              <ul>
                <li>• 대출 연체 시 신용정보관리대상 등록 등의 불이익을 받을 수 있습니다.</li>
                <li>• 대출 신청을 하시면 고객님의 신용정보 조회 이력이 신용정보회사에 제공됩니다.</li>
                <li>• 기한연장 시점에서 개인의 신용상태(연체정보)에 따라 기한연장이 거절될 수 있습니다. 이 경우, 대출잔액 및 미지급 이자를 전부 상환하셔야 합니다.</li>
                <li>• 대출 만기 경과 후 미상환 시, 대출잔액에 대해 연체기간별 연체금리가 적용되며, 연체로 인한 신용정보관리대상자 등록 등 불이익이 발생할 수 있습니다.</li>
              </ul>
            </dd>
            <dt>거절사유</dt>
            <dd>
              <ul>
                <li>• 금융기관 연체대출금 보유자, 신용도판단정보등록 고객 등 사유에 해당하는 경우 은행 내부 심사 기준에 의하여 대출신청이 불가능합니다.</li>
                <li>• 금융사기 등 신고 등록 계좌 보유 고객이나 대출한도 연결계좌에 입금 또는 지급정지 등록 등 거래 제한 사유에 해당하는 경우에는 신청이 불가능합니다.</li>
                <li></li>
              </ul>
            </dd>
            <dt>금리인하 요구권</dt>
            <dd>
              <ul>
                <li>• 이 상품은 서울보증보험과의 협약에 따라 신규 신청시의 보증기관 등급에 따른 대출금리를 만기시까지 적용하는 대출로 금리인하 요구대상에서 제외됩니다.</li>
              </ul>
            </dd>
            <dt>대출철회권</dt>
            <dd>
              <ul>
                <li>• 대출철회권이란, 대출계약에 대한 숙려기간동안 대출계약으로부터 탈퇴할 수 있는 권리를 말하며, 신용대출은 4천만원 이하, 담보대출은 2억원 이하인 경우에 신청할 수 있습니다. 단, 대외기관과 협약 등의 사유로 대출철회권 행사가 제한될 수 있습니다.</li>
                <li>• 대출철회를 위해서는 신규일로부터 14일(공휴일에 해당하는 경우, 다음 영업일까지) 이내에 신청하여야 하며, 대출원리금 및 은행이 부담한 비용을 상환함으로써 행사할 수 있습니다.</li>
                <li>• 대출철회권은 동일 금융기관 기준 1년에 2회, 전 금융기관 포함 1개월 내 1회에 한해 행사할 수 있습니다.</li>
                <li>• 대출철회가 완료되면, 외부신용평가기관 및 신용정보집중기관에 대출정보 삭제를 즉시 요청하며, 실제 반영 시까지 2~3일이 소요될 수 있습니다.</li>
              </ul>
            </dd>
            <p className="emphasis">※ 본 대출은 서울보증보험(주)와의 협약에 따라 보험증권을 담보로 한 대출로 대출철회 신청이 불가능합니다. 다만, 별도의 수수료 없이 대출 상환이 가능하오니, 대출 전액상환(완제) 신청을 부탁드립니다.</p>
            <p className="emphasis">※ 기타 자세한 사항은 상품설명서 또는 홈페이지를 반드시 참조하여 주시기 바랍니다.</p>
          </dl>
        </div>


        <button className="accordion" onClick={this.activeAccordion.bind(this, 3)}>
          상품설명서 및 이용약관<span className="menu-down"></span>
        </button>
        <div className="panel">
          <dl>
            <dt className="instruction">가계대출 상품설명서<a href="/">보기</a></dt>
            <dt>상품 이용 약관</dt>
            <ul>
              <li><a href="/">• 은행여신거래기본약관</a></li>
              <li><a href="/">• 대출거래 약정서관</a></li>
              <li><a href="/">• 개인신용보험 추가약정서(SGI)</a></li>
            </ul>
          </dl>
        </div>
      </div>
    );
  }
}

export default Question;

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Wrapper } from '../utils/ResultWrapper'
import {
  ISTJ,
  ISFJ,
  INFJ,
  INTJ,
  ISTP,
  ISFP,
  INFP,
  INTP,
  ESTP,
  ESFP,
  ENFP,
  ENTP,
  ESTJ,
  ESFJ,
  ENFJ,
  ENTJ
} from '../definitions/BriggsDef'

class Briggs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showISTJ: false,
      showISFJ: false,
      showINFJ: false,
      showINTJ: false,
      showISTP: false,
      showISFP: false,
      showINFP: false,
      showINTP: false,
      showESTP: false,
      showESFP: false,
      showENFP: false,
      showENTP: false,
      showESTJ: false,
      showESFJ: false,
      showENFJ: false,
      showENTJ: false
    }
    this.onISTJ_click = this.onISTJ_click.bind(this)
    this.onISFJ_click = this.onISFJ_click.bind(this)
    this.onINFJ_click = this.onINFJ_click.bind(this)
    this.onINTJ_click = this.onINTJ_click.bind(this)
    this.onISTP_click = this.onISTP_click.bind(this)
    this.onISFP_click = this.onISFP_click.bind(this)
    this.onINFP_click = this.onINFP_click.bind(this)
    this.onINTP_click = this.onINTP_click.bind(this)
    this.onESTP_click = this.onESTP_click.bind(this)
    this.onESFP_click = this.onESFP_click.bind(this)
    this.onENFP_click = this.onENFP_click.bind(this)
    this.onENTP_click = this.onENTP_click.bind(this)
    this.onESTJ_click = this.onESTJ_click.bind(this)
    this.onESFJ_click = this.onESFJ_click.bind(this)
    this.onENFJ_click = this.onENFJ_click.bind(this)
    this.onENTJ_click = this.onENTJ_click.bind(this)
  }

  renderISTJ() {
    return (
      <ISTJ
        // title={'Introvert | Sensing | Thinking | Judging'}
        // content={`You are a type ISTJ, aka The Inspector.
        //         You tend to be practical and logical above all else.
        //         You should consider a job in accounting or engineering.`}
        title={'内向型 | 感覚型 | 思考型 | 審議型'}
        content={`あなたはISTJタイプ、別名「監査官」です。
                あなたは現実的で論理的な傾向があります。
                以下のような特徴があります。
                ・責任感が強い
                ・実用的で計画的
                ・団結力がある
                ・忍耐強い
                ・伝統的な価値観を尊重
                ・詳細志向
                ・控えめなリーダーシップスタイル
                `}
        onBackClick={this.onISTJ_click}
      />
    )
  }

  renderISFJ() {
    return (
      <ISFJ
        // title={'Introvert | Sensing | Feeling | Judging'}
        // content={`You are a type ISFJ, aka The Protector.
        //           You tend to be sympathetic and organized above all else.
        //           You should consider a job in childcare or bookkeeping.`}
        title={'内向的 | 感覚型 | 感情型 | 判断的'}
        content={`あなたはISFJタイプ、またの名を「守護者」です。
          共感的な性格で整理整頓が好きです。
          以下のような特徴があります。
          ・共感的で思いやりがある
          ・責任感が強く、信頼感がある
          ・計画的
          ・現実的
          ・礼儀正しく、他人の感情に敏感
          ・変化に対する適応力があるが、安定を好む傾向
          `}
        onBackClick={this.onISFJ_click}
      />
    )
  }

  renderINFJ() {
    return (
      <INFJ
        // title={'Introvert | iNtuitive | Feeling | Judging'}
        // content={`You are a type INFJ, aka The Counselor.
        //         You tend to be sensitive and creative above all else.
        //         You should consider a job in education or the arts.`}
        title={'内向的 | 直感的 | 感情的 | 判断的'}
        content={`あなたはINFJタイプ、またの名を「カウンセラー」です。
          感受性豊かで創造的です。
          以下のような特徴があります。
          ・内向的で感受性豊か
          ・直感的で洞察力がある
          ・他人への思いやりが強い
          ・判断力が鋭く、原則に忠実
          ・創造的で人間関係において深い結びつきを重視する
          `}
        onBackClick={this.onINFJ_click}
      />
    )
  }

  renderINTJ() {
    return (
      <INTJ
        // title={'Introvert | iNtuitive | Thinking | Judging'}
        // content={`You are a type INTJ, aka The Mastermind.
        //               You tend to be decisive and insightful above all else.
        //               You should consider a job in architecture or engineering.`}
        title={'内向的 | 直感的 | 思考的 | 判断的'}
        content={`あなたはINTJタイプ、またの名を「建築家」です。
          何よりも決断力があり洞察力が鋭いです。
          以下のような特徴があります。
          ・思考的で論理的な洞察力が鋭い
          ・直感的で将来の計画や戦略を立てるのが得意
          ・冷静で感情をあまり表に出さない
          ・独立心が強く、自己主張がある
          ・目標を達成するために効率的な方法を探求する
          `}
        onBackClick={this.onINTJ_click}
      />
    )
  }

  renderISTP() {
    return (
      <ISTP
        // title={'Introvert | Sensing | Thinking | Perceiving'}
        // content={`You are a type ISTP, aka The Operator.
        //           You tend to be analytical and practical above all else.
        //           You should consider a job in computer technology or farming.`}
        title={'内向的 | 感覚的 | 思考的 | 対応的'}
        content={`あなたはISTPタイプ、またの名を「オペレーター」です。
          何よりも分析的で実用的です。
          以下のような特徴があります。
          ・分析的で実践的
          ・問題解決に優れ、手作業や技術に興味関心がある
          ・冷静で冷静な判断力がある
          ・自己主張が強く、自分の方法で物事を進める
          ・新しい経験を追求し、リスクを取ることがある
          `}

        onBackClick={this.onISTP_click}
      />
    )
  }

  renderISFP() {
    return (
      <ISFP
        // title={'Introvert | Sensing | Feeling | Perceiving'}
        // content={`You are a type ISFP, aka The Composer.
        //           You tend to be loyal and adaptable above all else.
        //           You should consider a job in teaching or nursing.`}
        title={'内向的 | 感覚的 | 感情的 | 対応的'}
        content={`あなたはISFPタイプ、またの名を「作曲家」です。
          何よりも忠実で適応力があります。
          以下のような特徴があります。
          ・忠実で感受性豊か
          ・芸術的で創造的な傾向がある
          ・現実的で、自然や美に敏感
          ・自己表現が豊かで、個人の価値観を大切にできる
          ・変化に適応しやすく、柔軟性がある
`}
        onBackClick={this.onISFP_click}
      />
    )
  }

  renderINFP() {
    return (
      <INFP
        // title={'Introvert | iNtuitive | Feeling | Perceiving'}
        // content={`You are a type INFP, aka The Healer.
        //           You tend to be empathetic and inquisitive above all else.
        //           You should consider a job in writing or graphic design.`}
        title={'内向的 | 直感的 | 感情的 | 対応的'}
        content={`あなたはINFPタイプ、またの名を「癒し役」です。
          何よりも共感力があり探究心が旺盛です。
          ・独自の価値観を大切にし、個人的な成長に興味関心がある
          ・感情豊かで共感力が高く、他人の感情に敏感
          ・創造的で芸術的な才能がある
          ・内向的で静かな環境を好む
          ・現実的な問題解決よりも、個人的な価値観や信念に重点を置く傾向がある
          `}

        onBackClick={this.onINFP_click}
      />
    )
  }

  renderINTP() {
    return (
      <INTP
        // title={'Introvert | iNtuitive | Thinking | Perceiving'}
        // content={`You are a type INTP, aka The Architect.
        //           You tend to be curious and analytical above all else.
        //           You should consider a job in architecture or construction.`}
        title={'内向的 | 直感的 | 思考的 | 対応的'}
        content={`あなたはINTPタイプ、またの名を「論理学者」です。
          何よりも好奇心旺盛で分析力が鋭いです。
          以下のような特徴があります。
          ・好奇心旺盛で論理的な思考が得意
          ・抽象的な問題解決に長けている
          ・どちらかというと内向的な人が多い
          ・知識を追求し、新しいアイデアを考えることを好む
          ・柔軟で自由な環境で働くことを好む
          `}
        onBackClick={this.onINTP_click}
      />
    )
  }

  renderESTP() {
    return (
      <ESTP
        // title={'Extravert | Sensing | Thinking | Perceiving'}
        // content={`You are a type ESTP, aka The Promoter.
        //           You tend to be energetic and realistic above all else.
        //           You should consider a job in sales or forestry.`}
        title={'外向的 | 感覚的 | 思考的 | 対応的'}
        content={`あなたはESTPタイプ、またの名を「冒険家」です。
          何よりもエネルギッシュで現実的です。
          以下のような特徴があります。
          ・冒険心があり、リスクを取ることにあまり抵抗を感じない
          ・現実的で具体的な問題解決が得意
          ・社交的で人とのコミュニケーションが上手で、社交的な場が得意
          ・手先が器用で、実用的なスキルを持つことが多い
          ・ストレス耐性が高く、変化に適応しやすい
          `}

        onBackClick={this.onESTP_click}
      />
    )
  }

  renderESFP() {
    return (
      <ESFP
        // title={'Extravert | Sensing | Feeling | Perceiving'}
        // content={`You are a type ESFP, aka The Performer.
        //           You tend to be caring and resourceful above all else.
        //           You should consider a job in hospitality or health care.`}
        title={'外向的 | 感覚的 | 感情的 | 対応的'}
        content={`あなたはESFPタイプ、またの名を「エンターテイナー」です。
          何よりも思いやりがあり、賢明です。
          以下のような特徴があります。
          ・社交的で外向的な性格
          ・現実的で実用的なアプローチを好む
          ・感情豊かで他人に思いやりを示す
          ・柔軟で適応力があり、新しい状況に対応しやすい
          ・エンターテイメントやアートに興味を持ち、自己表現を大切にする
          `}
        onBackClick={this.onESFP_click}
      />
    )
  }

  renderENFP() {
    return (
      <ENFP
        // title={'Extravert | iNtuitive | Feeling | Perceiving'}
        // content={`You are a type ENFP, aka The Champion.
        //           You tend to be imaginative and insightful above all else.
        //           You should consider a job in therapy or acting.`}
        title={'外向的 | 直感的 | 感情的 | 対応的'}
        content={`あなたはENFPタイプ、またの名を「広報運動家」です。
          何よりも想像力豊かで洞察力があります。
          ・想像力豊かでアイデアが豊富
          ・社交的で人とのコミュニケーションが得意
          ・感情に敏感で、他人の感情に共感できる
          ・新しい経験やアイデアを求め、ルーティン作業に飽きやすい
          ・変化や挑戦を楽しむ冒険心がある
          `}
        onBackClick={this.onENFP_click}
      />
    )
  }

  renderENTP() {
    return (
      <ENTP
        // title={'Extravert | iNtuitive | Thinking | Perceiving'}
        // content={`You are a type ENTP, aka The Inventor.
        //           You tend to be enthusiastic and theoretical above all else.
        //           You should consider a job in business or sports.`}
        title={'外向的 | 直感的 | 思考的 | 対応的'}
        content={`あなたはENTPタイプ、またの名を「発明家」です。
          何よりも熱狂的で理論的です。
          以下のような特徴があります。
          ・創造的でアイデアを次々に思いつきやすい
          ・論理的思考が得意で、問題解決能力が高い
          ・外向的で社交的、議論を楽しむことができる
          ・新しいアイデアやプロジェクトに興味を持ち、様々な分野に興味関心がある
          ・変化や挑戦を楽しむ冒険心がある
          `}
        onBackClick={this.onENTP_click}
      />
    )
  }

  renderESTJ() {
    return (
      <ESTJ
        // title={'Extravert | Sensing | Thinking | Judging'}
        // content={`You are a type ESTJ, aka The Supervisor.
        //           You tend to be logical and assertive above all else.
        //           You should consider a job in leadership or law.`}
        title={'外向的 | 感覚的 | 思考的 | 対応的'}
        content={`あなたはESTJタイプ、またの名を「監督者」です。
          何よりも論理的で断固とした性格です。
          以下のような特徴があります。
          ・論理的で組織的な性格
          ・責任感が強く、計画的に行動する
          ・社交的でコミュニケーション能力が高い
          ・決断力があり、リーダーシップの役割が得意
          ・規則や秩序を重要視し、信頼感がある
          `}
        onBackClick={this.onESTJ_click}
      />
    )
  }

  renderESFJ() {
    return (
      <ESFJ
        // title={'Extravert | Sensing | Feeling | Judging'}
        // content={`You are a type ESFJ, aka The Provider.
        //           You tend to be sociable and caring above all else.
        //           You should consider a job in childcare or healthcare.`}
        title={'外向的 | 感覚的 | 感情的 | 対応的'}
        content={`あなたはESFJタイプ、またの名を「領事官」です。
          何よりも社交的で思いやりがある性格です。
          以下のような特徴があります。
          ・社交的で人懐っこい
          ・他人への思いやりが強く、サポート役割を好む
          ・組織力があり、計画的に行動できる
          ・協力的でチームプレイヤーとして優れている
          ・伝統や価値観を重視し、安定感を求める傾向がある
          `}

        onBackClick={this.onESFJ_click}
      />
    )
  }

  renderENFJ() {
    return (
      <ENFJ
        // title={'Extravert | iNtuitive | Feeling | Judging'}
        // content={`You are a type ENFJ, aka The Teacher.
        //           You tend to be passionate and imaginative above all else.
        //           You should consider a job in teaching or the arts.`}
        title={'外向的 | 直感的 | 感情的 | 対応的'}
        content={`あなたはENFJタイプ、またの名を「教師」です。
          何よりも情熱的で想像力豊かな性格です。
          以下のような特徴があります。
          ・社交的で他人に対する思いやりが強い性格
          ・情熱的で人々を鼓舞し、リーダーシップの役割を好む
          ・感受性が高く、他人の感情に共感できる
          ・グループの調和を重視し、協力を仰げる
          ・教育や助言の分野で優れたスキルを持つ傾向がある
          `}

        onBackClick={this.onENFJ_click}
      />
    )
  }

  renderENTJ() {
    return (
      <ENTJ
        // title={'Extravert | iNtuitive | Thinking | Judging'}
        // content={`You are a type ENTJ, aka The Field Marshall.
        //           You tend to be organized and logical above all else.
        //           You should consider a job in law or engineering.`}
        title={'外向的 | 直感的 | 思考的 | 対応的'}
        content={`あなたはENTJタイプ、またの名を「指揮官」です。
          組織的で論理的な性格です。
          以下のような特徴があります。
          ・組織力が高く、計画的な行動を好む
          ・論理的思考が得意で、問題解決が得意
          ・リーダーシップに向いており、目標達成を重視する傾向がある
          ・決断力があり、意思を強く持っている
          ・効率性を重要視し、目標に向かって効果的に行動できる
          `}

        onBackClick={this.onENTJ_click}
      />
    )
  }

  render() {
    let showISTJ = this.state.showISTJ
    let showISFJ = this.state.showISFJ
    let showINFJ = this.state.showINFJ
    let showINTJ = this.state.showINTJ
    let showISTP = this.state.showISTP
    let showISFP = this.state.showISFP
    let showINFP = this.state.showINFP
    let showINTP = this.state.showINTP
    let showESTP = this.state.showESTP
    let showESFP = this.state.showESFP
    let showENFP = this.state.showENFP
    let showENTP = this.state.showENTP
    let showESTJ = this.state.showESTJ
    let showESFJ = this.state.showESFJ
    let showENFJ = this.state.showENFJ
    let showENTJ = this.state.showENTJ
    if (showISTJ) {
      return this.renderISTJ()
    } else if (showISFJ) {
      return this.renderISFJ()
    } else if (showINFJ) {
      return this.renderINFJ()
    } else if (showINTJ) {
      return this.renderINTJ()
    } else if (showISTP) {
      return this.renderISTP()
    } else if (showISFP) {
      return this.renderISFP()
    } else if (showINFP) {
      return this.renderINFP()
    } else if (showINTP) {
      return this.renderINTP()
    } else if (showESTP) {
      return this.renderESTP()
    } else if (showESFP) {
      return this.renderESFP()
    } else if (showENFP) {
      return this.renderENFP()
    } else if (showENTP) {
      return this.renderENTP()
    } else if (showESTJ) {
      return this.renderESTJ()
    } else if (showESFJ) {
      return this.renderESFJ()
    } else if (showENFJ) {
      return this.renderENFJ()
    } else if (showENTJ) {
      return this.renderENTJ()
    }
    return (
      <Wrapper>
        <h1 className="display-3 title">16タイプの性格診断結果</h1>
        <hr className="my-4" />
        <h2 className="display-6 resultTxt">{this.props.resultBriggs}</h2>
        <hr className="my-5" />
        <p className="lead">結果の詳細</p>
        <ul className="list-group briggs">
          <li className="list-group-item" onClick={this.onISTJ_click}>
            ISTJ
          </li>
          <li className="list-group-item" onClick={this.onISFJ_click}>
            ISFJ
          </li>
          <li className="list-group-item" onClick={this.onINFJ_click}>
            INFJ
          </li>
          <li className="list-group-item" onClick={this.onINTJ_click}>
            INTJ
          </li>
        </ul>
        <ul className="list-group briggs">
          <li className="list-group-item" onClick={this.onISTP_click}>
            ISTP
          </li>
          <li className="list-group-item" onClick={this.onISFP_click}>
            ISFP
          </li>
          <li className="list-group-item" onClick={this.onINFP_click}>
            INFP
          </li>
          <li className="list-group-item" onClick={this.onINTP_click}>
            INTP
          </li>
        </ul>
        <ul className="list-group briggs">
          <li className="list-group-item" onClick={this.onESTP_click}>
            ESTP
          </li>
          <li className="list-group-item" onClick={this.onESFP_click}>
            ESFP
          </li>
          <li className="list-group-item" onClick={this.onENFP_click}>
            ENFP
          </li>
          <li className="list-group-item" onClick={this.onENTP_click}>
            ENTP
          </li>
        </ul>
        <ul className="list-group briggs">
          <li className="list-group-item" onClick={this.onESTJ_click}>
            ESTJ
          </li>
          <li className="list-group-item" onClick={this.onESFJ_click}>
            ESFJ
          </li>
          <li className="list-group-item" onClick={this.onENFJ_click}>
            ENFJ
          </li>
          <li className="list-group-item" onClick={this.onENTJ_click}>
            ENTJ
          </li>
        </ul>
      </Wrapper>
    )
  }

  onISTJ_click() {
    let showISTJ = this.state.showISTJ
    this.setState({ showISTJ: !showISTJ })
  }

  onISFJ_click() {
    let showISFJ = this.state.showISFJ
    this.setState({ showISFJ: !showISFJ })
  }

  onINFJ_click() {
    let showINFJ = this.state.showINFJ
    this.setState({ showINFJ: !showINFJ })
  }

  onINTJ_click() {
    let showINTJ = this.state.showINTJ
    this.setState({ showINTJ: !showINTJ })
  }

  onISTP_click() {
    let showISTP = this.state.showISTP
    this.setState({ showISTP: !showISTP })
  }

  onISFP_click() {
    let showISFP = this.state.showISFP
    this.setState({ showISFP: !showISFP })
  }

  onINFP_click() {
    let showINFP = this.state.showINFP
    this.setState({ showINFP: !showINFP })
  }

  onINTP_click() {
    let showINTP = this.state.showINTP
    this.setState({ showINTP: !showINTP })
  }

  onESTP_click() {
    let showESTP = this.state.showESTP
    this.setState({ showESTP: !showESTP })
  }

  onESFP_click() {
    let showESFP = this.state.showESFP
    this.setState({ showESFP: !showESFP })
  }

  onENFP_click() {
    let showENFP = this.state.showENFP
    this.setState({ showENFP: !showENFP })
  }

  onENTP_click() {
    let showENTP = this.state.showENTP
    this.setState({ showENTP: !showENTP })
  }

  onESTJ_click() {
    let showESTJ = this.state.showESTJ
    this.setState({ showESTJ: !showESTJ })
  }

  onESFJ_click() {
    let showESFJ = this.state.showESFJ
    this.setState({ showESFJ: !showESFJ })
  }

  onENFJ_click() {
    let showENFJ = this.state.showENFJ
    this.setState({ showENFJ: !showENFJ })
  }

  onENTJ_click() {
    let showENTJ = this.state.showENTJ
    this.setState({ showENTJ: !showENTJ })
  }
}

Briggs.PropTypes = {
  resultBriggs: PropTypes.string.isRequired
}

export default Briggs

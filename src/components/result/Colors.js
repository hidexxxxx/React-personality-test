import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { BrownDef, GreenDef, BlueDef, RedDef } from '../definitions/ColorsDef'
import { Wrapper } from '../utils/ResultWrapper'
import { NextBtn } from '../utils/Buttons'

class Colors extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showBrownDef: false,
      showGreenDef: false,
      showBlueDef: false,
      showRedDef: false
    }
    this.onBrownDefClick = this.onBrownDefClick.bind(this)
    this.onGreenDefClick = this.onGreenDefClick.bind(this)
    this.onBlueDefClick = this.onBlueDefClick.bind(this)
    this.onRedDefClick = this.onRedDefClick.bind(this)
  }

  renderNextBtn() {
    return (
      <NextBtn onClick={this.props._onNextClick}>
        <span>次へ</span>
        <div className="icon">
          <i className="fa fa-chevron-right" />
        </div>
      </NextBtn>
    )
  }

  renderBrownDef() {
    return (
      <BrownDef
        // title={'Brown Type Definition'}
        // content={`You are a Builder. You enjoy leading, creating and working hard.
        //           You are a traditional person with respect for authority.
        //           Your strengths are your diligence, directness and practicality.
        //           Your weaknesses are your lack of tact, patience, and difficulty with abstractions.`}
        title={'ブラウンタイプの特徴'}
        content={`あなたは指導者タイプです。リーダーシップを楽しみ、創造的に働きます。
          伝統的な価値観を持ち、権威を尊重します。
          あなたの強みは勤勉さ、率直さ、実践的な考え方です。
          あなたの弱点は遠慮のなさ、忍耐力の不足、抽象的な概念の理解に苦労することが時々ある点です。`}

        onBackClick={this.onBrownDefClick}
      />
    )
  }

  renderGreenDef() {
    return (
      <GreenDef
        // title={'Green Type Definition'}
        // content={`You are a Planner. You enjoy dreaming, plotting and innovating.
        //           You tend to spend a lot of time thinking.
        //           Your strengths are your vision, objectiveness and attention to detail.
        //           Your weaknesses are your difficulty in putting yourself in the current moment and lack of practicality and speed.`}
        title={'グリーンタイプの特徴'}
        content={`あなたはプランナータイプです。夢を見たり、計画を立てたり、革新的なことを楽しむことが多いです。
          多くの時間を考えることに費やす傾向があります。
          あなたの強みはビジョン、客観性、細部への注意深さです。
          あなたの弱点は今に集中することの難しさ、実用性とスピードが少し不足していることが時々ある点です。`}

        onBackClick={this.onGreenDefClick}
      />
    )
  }

  renderBlueDef() {
    return (
      <BlueDef
        // title={'Blue Type Definition'}
        // content={`You are a Relater. You enjoy chatting, romance and spending time with others.
        //         You are an empathetic person who tends to put the needs of others above your own.
        //         Your strengths are your sympathy, openness and awareness of your own emotions.
        //         Your weaknesses are your subjectivity, pliability and manipulability.`}
        title={'ブルータイプの特徴'}
        content={`あなたはコミュニケーションタイプです。おしゃべりやロマンス、他人との時間を楽しむことが多いです。
          他人のニーズを自分よりも優先する共感力のある人です。
          あなたの強みは同情心、オープンさ、自分の感情に対する意識です。
          あなたの弱点は主観性や柔軟性、他に人に操作されやすい点が時々ある点です。`}

        onBackClick={this.onBlueDefClick}
      />
    )
  }

  renderRedDef() {
    return (
      <RedDef
        // title={'Red Type Definition'}
        // content={`You are an Adventurer. You enjoy action, excitement and drama.
        //           You easily accept change and are spontaneous.
        //           Your strengths are your tenacity, fearlessness and adaptability.
        //           Your weaknesses are your carelessness and lack of focus and diligence.`}
        title={'レッドタイプの特徴'}
        content={`あなたは冒険的なタイプです。アクションや興奮、ドラマを楽しむことが多いです。
          変化を受け入れやすく、思いつきで行動することがあります。
          あなたの強みは粘り強さ、恐れ知らずさ、適応力です。
          あなたの弱点は不注意さ、焦点の欠如、そして注意深さが不足していることが時々ある点です。`}

        onBackClick={this.onRedDefClick}
      />
    )
  }

  render() {
    let showBrownDef = this.state.showBrownDef
    let showGreenDef = this.state.showGreenDef
    let showBlueDef = this.state.showBlueDef
    let showRedDef = this.state.showRedDef
    if (showBrownDef) {
      return this.renderBrownDef()
    } else if (showGreenDef) {
      return this.renderGreenDef()
    } else if (showBlueDef) {
      return this.renderBlueDef()
    } else if (showRedDef) {
      return this.renderRedDef()
    }
    return (
      <Wrapper className="jumbotron">
        <h1 className="display-3 title">色診断の結果</h1>
        <hr className="my-4" />
        <h2 className="display-6 resultTxt">{this.props.resultColors}</h2>
        <hr className="my-5" />
        <p className="lead">結果の詳細</p>
        <ul className="list-group">
          <li className="list-group-item" onClick={this.onBrownDefClick}>
            Brown の結果はこちら
            <div className="icon">
              <i className="fa fa-arrow-right" />
            </div>
          </li>
          <li className="list-group-item" onClick={this.onGreenDefClick}>
            Green の結果はこちら
            <div className="icon">
              <i className="fa fa-arrow-right" />
            </div>
          </li>
          <li className="list-group-item" onClick={this.onBlueDefClick}>
            Blue の結果はこちら
            <div className="icon">
              <i className="fa fa-arrow-right" />
            </div>
          </li>
          <li className="list-group-item" onClick={this.onRedDefClick}>
            Red の結果はこちら
            <div className="icon">
              <i className="fa fa-arrow-right" />
            </div>
          </li>
        </ul>
        {this.renderNextBtn()}
      </Wrapper>
    )
  }

  onBrownDefClick() {
    let showBrownDef = this.state.showBrownDef
    this.setState({ showBrownDef: !showBrownDef })
  }

  onGreenDefClick() {
    let showGreenDef = this.state.showGreenDef
    this.setState({ showGreenDef: !showGreenDef })
  }

  onBlueDefClick() {
    let showBlueDef = this.state.showBlueDef
    this.setState({ showBlueDef: !showBlueDef })
  }

  onRedDefClick() {
    let showRedDef = this.state.showRedDef
    this.setState({ showRedDef: !showRedDef })
  }
}

Colors.PropTypes = {
  resultColors: PropTypes.string.isRequired,
  resultBrown: PropTypes.string.isRequired,
  resultGreen: PropTypes.string.isRequired,
  resultBlue: PropTypes.string.isRequired,
  resultRed: PropTypes.string.isRequired
}

export default Colors

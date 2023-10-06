import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Wrapper } from '../utils/ResultWrapper'
import { LetterA, LetterB, LetterC, LetterD } from '../definitions/LettersDef'
import { NextBtn } from '../utils/Buttons'

class Letters extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showLetterA: false,
      showLetterB: false,
      showLetterC: false,
      showLetterD: false
    }
    this.onLetterA_Click = this.onLetterA_Click.bind(this)
    this.onLetterB_Click = this.onLetterB_Click.bind(this)
    this.onLetterC_Click = this.onLetterC_Click.bind(this)
    this.onLetterD_Click = this.onLetterD_Click.bind(this)
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

  renderLetterA() {
    return (
      <LetterA
        // title={'Letter A Definition'}
        // content={`You are a type A personality. You like to be in control of everything.
        //         Your strengths are your tenacity, confidence and practicality.
        //         Your weaknesses are your lack of empathy, discipline and detail-awareness.`}
        title={'Aタイプの特徴'}
        content={`あなたはAタイプの性格です。何事もコントロールしたがる傾向があります。
          あなたの強みは粘り強さ、自信、実践的な考え方です。
          あなたの弱点は共感力の不足、自己規律の欠如、細部への注意不足などが時々ありそうです。`}
        onBackClick={this.onLetterA_Click}
      />
    )
  }

  renderLetterB() {
    return (
      <LetterB
        // title={'Letter B Definition'}
        // content={`You are a type B personality. You like to be around people.
        //         Your strengths are your empathy, enthusiasm and spontaneity.
        //         Your weaknesses are your lack of patience, attention and confidence.`}
        title={'Bタイプの特徴'}
        content={`あなたはBタイプの性格です。人と一緒にいることを好みます。
          あなたの強みは共感力、熱意、自発性です。
          あなたの弱点は忍耐力の不足、注意力の不足、自信の不足などが時々ありそうです。`}

        onBackClick={this.onLetterB_Click}
      />
    )
  }

  renderLetterC() {
    return (
      <LetterC
        // title={'Letter C Definition'}
        // content={`You are a type C personality. You like to think things through.
        //         Your strengths are your rationality, objectivity and originality.
        //         Your weaknesses are your lack of spontaneity, practicality and empathy.`}
        title={'Cタイプの特徴'}
        content={`あなたはCタイプの性格です。物事を熟考することを好みます。
          あなたの強みは論理的思考、客観性、独創性です。
          あなたの弱点は自発性の不足、実践性の不足、共感力の不足などが時々ありそうです。`}

        onBackClick={this.onLetterC_Click}
      />
    )
  }

  renderLetterD() {
    return (
      <LetterD
        // title={'Letter D Definition'}
        // content={`You are a type D personality. You like to feel safe and secure in life.
        //           Your strengths are your organization, compassion and patience.
        //           Your weaknesses are your lack of ambition, adaptability and assertiveness.`}
        title={'Dタイプの特徴'}
        content={`あなたはDタイプの性格です。日々の生活の中で安全と安定感を求める傾向があります。
          あなたの強みは組織力、思いやり、忍耐力です。
          あなたの弱点は野心の不足、適応力の不足、自己主張の不足などが時々ありそうです。`}
        onBackClick={this.onLetterD_Click}
      />
    )
  }

  render() {
    let showLetterA = this.state.showLetterA
    let showLetterB = this.state.showLetterB
    let showLetterC = this.state.showLetterC
    let showLetterD = this.state.showLetterD
    if (showLetterA) {
      return this.renderLetterA()
    } else if (showLetterB) {
      return this.renderLetterB()
    } else if (showLetterC) {
      return this.renderLetterC()
    } else if (showLetterD) {
      return this.renderLetterD()
    }
    return (
      <Wrapper>
        <h1 className="display-3 title">アルファベットタイプの結果</h1>
        <hr className="my-4" />
        <h2 className="display-6 resultTxt">{this.props.resultLetters}</h2>
        <hr className="my-5" />
        <p className="lead">結果の詳細</p>
        <ul className="list-group">
          <li className="list-group-item" onClick={this.onLetterA_Click}>
            Aタイプの結果はこちら
            <div className="icon">
              <i className="fa fa-arrow-right" />
            </div>
          </li>
          <li className="list-group-item" onClick={this.onLetterB_Click}>
            Bタイプの結果はこちら
            <div className="icon">
              <i className="fa fa-arrow-right" />
            </div>
          </li>
          <li className="list-group-item" onClick={this.onLetterC_Click}>
            Cタイプの結果はこちら
            <div className="icon">
              <i className="fa fa-arrow-right" />
            </div>
          </li>
          <li className="list-group-item" onClick={this.onLetterD_Click}>
            Dタイプの結果はこちら
            <div className="icon">
              <i className="fa fa-arrow-right" />
            </div>
          </li>
        </ul>
        {this.renderNextBtn()}
      </Wrapper>
    )
  }

  onLetterA_Click() {
    let showLetterA = this.state.showLetterA
    this.setState({ showLetterA: !showLetterA })
  }

  onLetterB_Click() {
    let showLetterB = this.state.showLetterB
    this.setState({ showLetterB: !showLetterB })
  }

  onLetterC_Click() {
    let showLetterC = this.state.showLetterC
    this.setState({ showLetterC: !showLetterC })
  }

  onLetterD_Click() {
    let showLetterD = this.state.showLetterD
    this.setState({ showLetterD: !showLetterD })
  }
}

Letters.PropTypes = {
  resultLetters: PropTypes.string.isRequired
}

export default Letters

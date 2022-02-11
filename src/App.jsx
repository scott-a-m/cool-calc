import React from 'react'
import "./App.css";
import { create, all } from 'mathjs'
const config = { }
const math = create(all, config)
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div id="calc-frame">
          <Buttons />
        </div>
        <p id="designer">
          Designed and programmed by:{" "}
          <a
            href="https://codepen.io/scott-a-m/pens/public"
            target="_blank"
            id="link"
          >
            Scott
          </a>
        </p>
      </div>
    );
  }
}

class Buttons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayEq: "",
      display: "0",
      currentNo: "",
      finalSum: 0,
    };
    this.handleNumeralClick = this.handleNumeralClick.bind(this);
    this.handleEquals = this.handleEquals.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleSubtract = this.handleSubtract.bind(this);
    this.handleMultiply = this.handleMultiply.bind(this);
    this.handleDivide = this.handleDivide.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleDecimal = this.handleDecimal.bind(this);
  }

  handleNumeralClick() {
    let regex = /^0$/;

    if (this.state.display === this.state.finalSum) {
      this.setState({
        displayEq: event.target.value,
        display: event.target.value,
        currentNo: event.target.value,
      });
    } else if (event.target.value === "0" && regex.test(this.state.currentNo)) {
      this.setState({
        displayEq: this.state.displayEq,
        display: "0",
      });
    } else if (regex.test(this.state.display)) {
      let replacement2 = this.state.display.replace(/0$/, event.target.value);

      this.setState({
        display: replacement2,
        currentNo: this.state.currentNo + event.target.value,
      });

      if (regex.test(this.state.currentNo)) {
        let replacement = this.state.displayEq.replace(
          /0$/,
          event.target.value
        );

        this.setState({
          displayEq: replacement,
        });
      } else {
        this.setState({
          displayEq: this.state.displayEq + event.target.value,
        });
      }
    } else if (regex.test(this.state.currentNo)) {
      let replacement = this.state.displayEq.replace(/0$/, event.target.value);
      let replacement2 = this.state.display.replace(/0$/, event.target.value);

      this.setState({
        displayEq: replacement,
        display: replacement2,
        currentNo: this.state.currentNo + event.target.value,
      });
    } else {
      this.setState({
        displayEq: this.state.displayEq + event.target.value,
        display: this.state.display + event.target.value,
        currentNo: this.state.currentNo + event.target.value,
      });
    }
  }

  handleAdd() {
    let regex = /(x|\+|÷)$/;
    let regexTwo = /(x|\+|÷|\-)\-$/;
    let regexThree = /\d+\-$/;
    let regexFour = /^\-$/;

    if (regexFour.test(this.state.displayEq)) {
      this.setState({
        displayEq: this.state.displayEq,
        display: this.state.display,
      });
    } else if (this.state.display === this.state.finalSum) {
      this.setState({
        displayEq: this.state.finalSum + event.target.value,
        display: "",
        currentNo: "",
      });
    } else if (regex.test(this.state.displayEq)) {
      let replacement = this.state.displayEq.replace(/(x|\+|÷)$/, "+");
      this.setState({
        displayEq: replacement,
        display: "",
      });
    } else if (regexTwo.test(this.state.displayEq)) {
      let replacement = this.state.displayEq.replace(
        /(x|\+|÷|\-)\-$/,
        event.target.value
      );
      this.setState({
        displayEq: replacement,
        display: "",
      });
    } else if (regexThree.test(this.state.displayEq)) {
      let replacement = this.state.displayEq.replace(/\-$/, event.target.value);
      this.setState({
        displayEq: replacement,
        display: "",
      });
    } else if (
      /\D\.$/.test(this.state.displayEq) ||
      /^\.$/.test(this.state.displayEq)
    ) {
      this.setState({
        displayEq: this.state.displayEq,
        display: "",
      });
    } else if (this.state.displayEq === "") {
      this.setState({
        displayEq: this.state.displayEq,
        display: "0",
      });
    } else {
      this.setState({
        displayEq: this.state.displayEq + event.target.value,
        display: "",
        currentNo: "",
      });
    }
  }

  handleSubtract() {
    let regex = /\d+\-\-$/;
    let regexTwo = /\D\-$/;

    let regexThree = /^\-$/;

    if (regexThree.test(this.state.displayEq)) {
      this.setState({
        displayEq: this.state.displayEq,
        display: this.state.display,
      });
    } else if (this.state.display === this.state.finalSum) {
      this.setState({
        displayEq: this.state.finalSum + event.target.value,
        display: "",
        currentNo: "",
      });
    } else if (regex.test(this.state.displayEq)) {
      this.setState({
        displayEq: this.state.displayEq,
        display: "",
      });
    } else if (regexTwo.test(this.state.displayEq)) {
      this.setState({
        displayEq: this.state.displayEq,
        display: "",
      });
    } else if (
      /\D\.$/.test(this.state.displayEq) ||
      /^\.$/.test(this.state.displayEq)
    ) {
      this.setState({
        displayEq: this.state.displayEq,
        display: "",
      });
    } else {
      this.setState({
        displayEq: this.state.displayEq + event.target.value,
        display: event.target.value,
        currentNo: "",
      });
    }
  }

  handleMultiply() {
    let regex = /(x|\+|÷)$/;
    let regexTwo = /(x|\+|÷|\-)\-$/;
    let regexThree = /\d+\-$/;

    let regexFour = /^\-$/;

    if (regexFour.test(this.state.displayEq)) {
      this.setState({
        displayEq: this.state.displayEq,
        display: this.state.display,
      });
    } else if (this.state.display === this.state.finalSum) {
      this.setState({
        displayEq: this.state.finalSum + event.target.value,
        display: "",
        currentNo: "",
      });
    } else if (regex.test(this.state.displayEq)) {
      let replacement = this.state.displayEq.replace(/(x|\+|÷)$/, "x");
      this.setState({
        displayEq: replacement,
        display: "",
      });
    } else if (regexTwo.test(this.state.displayEq)) {
      let replacement = this.state.displayEq.replace(
        /(x|\+|÷|\-)\-$/,
        event.target.value
      );
      this.setState({
        displayEq: replacement,
        display: "",
      });
    } else if (regexThree.test(this.state.displayEq)) {
      let replacement = this.state.displayEq.replace(/\-$/, event.target.value);
      this.setState({
        displayEq: replacement,
        display: "",
      });
    } else if (this.state.displayEq === "") {
      this.setState({
        displayEq: this.state.displayEq,
        display: "0",
      });
    } else if (
      /\D\.$/.test(this.state.displayEq) ||
      /^\.$/.test(this.state.displayEq)
    ) {
      this.setState({
        displayEq: this.state.displayEq,
        display: "",
      });
    } else {
      this.setState({
        displayEq: this.state.displayEq + event.target.value,
        currentNo: "",
        display: "",
      });
    }
  }

  handleDivide() {
    let regex = /(x|\+|÷)$/;
    let regexTwo = /(x|\+|÷|\-)\-$/;
    let regexThree = /\d+\-$/;
    let regexFour = /^\-$/;

    if (regexFour.test(this.state.displayEq)) {
      this.setState({
        displayEq: this.state.displayEq,
        display: this.state.display,
      });
    } else if (this.state.display === this.state.finalSum) {
      this.setState({
        displayEq: this.state.finalSum + event.target.value,
        display: "",
        currentNo: "",
      });
    } else if (regex.test(this.state.displayEq)) {
      let replacement = this.state.displayEq.replace(/(x|\+|÷)$/, "÷");
      this.setState({
        displayEq: replacement,
        display: "",
      });
    } else if (regexTwo.test(this.state.displayEq)) {
      let replacement = this.state.displayEq.replace(
        /(x|\+|÷|\-)\-$/,
        event.target.value
      );
      this.setState({
        displayEq: replacement,
        display: "",
      });
    } else if (regexThree.test(this.state.displayEq)) {
      let replacement = this.state.displayEq.replace(/\-$/, event.target.value);
      this.setState({
        displayEq: replacement,
        display: "",
      });
    } else if (this.state.displayEq === "") {
      this.setState({
        displayEq: this.state.displayEq,
        display: "0",
      });
    } else if (
      /\D\.$/.test(this.state.displayEq) ||
      /^\.$/.test(this.state.displayEq)
    ) {
      this.setState({
        displayEq: this.state.displayEq,
        display: "",
      });
    } else {
      this.setState({
        displayEq: this.state.displayEq + event.target.value,
        currentNo: "",
        display: "",
      });
    }
  }

  handleEquals() {
    let regex = /^\-$/;
    let regexTwo = /^$/;

    if (
      regex.test(this.state.displayEq) ||
      regexTwo.test(this.state.displayEq)
    ) {
      this.setState({
        displayEq: this.state.displayEq,
        display: this.state.display,
      });
    } else {
      const result = this.state.displayEq.replaceAll("x", "*");
      const finalResult = result.replaceAll("÷", "/");
      const sum = math.evaluate(finalResult);

      this.setState((state) => ({ ...state, finalSum: sum }));

      this.setState((state) => ({
        ...state,
        display: sum,
        displayEq: this.state.displayEq + "=",
      }));
    }
  }

  handleClear() {
    this.setState({
      displayEq: "",
      display: "0",
      currentNo: "",
      finalSum: 0,
    });
  }

  handleDecimal() {
    let regex = /\./;

    if (regex.test(this.state.currentNo)) {
      this.setState({
        displayEq: this.state.displayEq,
      });
    } else {
      this.setState({
        displayEq: this.state.displayEq + event.target.value,
        display: this.state.display + event.target.value,
        currentNo: this.state.currentNo + event.target.value,
      });
    }
  }

  render() {
    return (
      <div>
        <div className="invisible">
          <span id="displayEq">{this.state.displayEq}</span>|
        </div>
        <div className="invisible">
          <span id="display">{this.state.display}</span>|
        </div>
        <div>
          <button id="clear" onClick={this.handleClear}>
            AC
          </button>
          <button
            id="divide"
            value="÷"
            onClick={this.handleDivide}
            className="operator"
          >
            ÷
          </button>
        </div>
        <div>
          <button
            id="seven"
            value="7"
            onClick={this.handleNumeralClick}
            className="numeral"
          >
            7
          </button>
          <button
            id="eight"
            value="8"
            onClick={this.handleNumeralClick}
            className="numeral"
          >
            8
          </button>
          <button
            id="nine"
            value="9"
            onClick={this.handleNumeralClick}
            className="numeral"
          >
            9
          </button>
          <button
            id="multiply"
            value="x"
            onClick={this.handleMultiply}
            className="operator"
          >
            x
          </button>
        </div>
        <div>
          <button
            id="four"
            value="4"
            onClick={this.handleNumeralClick}
            className="numeral"
          >
            4
          </button>
          <button
            id="five"
            value="5"
            onClick={this.handleNumeralClick}
            className="numeral"
          >
            5
          </button>
          <button
            id="six"
            value="6"
            onClick={this.handleNumeralClick}
            className="numeral"
          >
            6
          </button>
          <button
            id="subtract"
            value="-"
            onClick={this.handleSubtract}
            className="operator"
          >
            -
          </button>
        </div>
        <div>
          <button
            id="one"
            value="1"
            onClick={this.handleNumeralClick}
            className="numeral"
          >
            1
          </button>
          <button
            id="two"
            value="2"
            onClick={this.handleNumeralClick}
            className="numeral"
          >
            2
          </button>
          <button
            id="three"
            value="3"
            onClick={this.handleNumeralClick}
            className="numeral"
          >
            3
          </button>
          <button
            id="add"
            value="+"
            onClick={this.handleAdd}
            className="operator"
          >
            +
          </button>
        </div>
        <div>
          <button id="zero" value="0" onClick={this.handleNumeralClick}>
            0
          </button>
          <button
            id="decimal"
            value="."
            onClick={this.handleDecimal}
            className="numeral"
          >
            .
          </button>
          <button id="equals" onClick={this.handleEquals} value="=">
            =
          </button>
        </div>
      </div>
    );
  }
}

export default App;

import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Nav } from "../common/navigation.jsx";
import MoneyCard from "../common/moneyCard.jsx";
import SummaryHeadLine from "../common/summaryHeadLine.jsx";
import OllyApi from "../../api/oliverAPI.js";
import Utils from "../../util/dates.js";
import TransactRow from "../common/transaction.jsx";

class View extends React.Component {
  state = {
    expense: 0,
    income: 0,
    savings: 0,
    data: 0,
    active: undefined
  };

  componentWillMount() {}

  componentDidMount() {
    this.loadMonthlyData();
  }

  filterDataByCategory(category) {
    let categorySummary = { sum: 0, transactions: null };

    categorySummary.transactions = this.state.data.filter(
      transaction =>
        transaction.category.toLowerCase() === category.toLowerCase()
    );

    categorySummary.transactions.forEach(
      transaction => (categorySummary.sum += transaction.amount)
    );
    categorySummary.sum = categorySummary.sum.toFixed(2);

    this.setState({ [category]: categorySummary });
  }

  loadMonthlyData () {
    let monthYear = {
      month: Utils.getCurrentMonth(),
      year: Utils.getCurrentYear()
    };

    OllyApi.getDataOfMonth(monthYear).then(transactions => {
      this.setState({ data: transactions.data });
      let categories = ["expense", "income", "savings"];
      categories.forEach(category => this.filterDataByCategory(category));
    });
  }

  insertTransaction() {
    let description = document.getElementById("transact-description").value;
    let category = document.getElementById("transact-category").value;
    let amount = document.getElementById("transact-amount").value;
    let newDate = new Date();

    let transactionData = {
      description: description,
      category: category,
      amount: amount,
      date: newDate.toLocaleDateString(),
      millSecTime: newDate.getTime(),
      month: newDate.getMonth() + 1,
      monthName: newDate.toLocaleString("en-us", { month: "long" }),
      dayOfYear: Utils.dayOfYear(newDate),
      dayOfMonth: newDate.getDate(),
      dayOfWeek: newDate.getDay(),
      year: newDate.getFullYear(),
      accountID: 1234
    };

    OllyApi.addTransaction(transactionData).then(data => console.log(data));
  }

  setActive = (event) => {
    event.preventDefault();
    let category = event.target.getAttribute("name");
    console.log(category);
    this.setState({active: category});
  }

  renderTransactions = () => {
    if(this.state.active !== undefined) {
      return (
        this.state[this.state.active].transactions.map ( e => (
          <TransactRow 
            description={e.description}
            amount={e.amount}
            date={Utils.getShortDate(e.date)}
            key={e._id}
          />
        ))
      );
    } else {
      return <div></div>;
    }
  }


  render() {
    return (
      <Container>
        <Row>
          <SummaryHeadLine monthYear={Utils.getCurrentMonthYear()} />
        </Row>

        <Row>
          <MoneyCard setActive={this.setActive} title="Expense" amount={"$" + this.state.expense.sum} />
          <MoneyCard setActive={this.setActive} title="Income" amount={"$" + this.state.income.sum} />
          <MoneyCard setActive={this.setActive} title="Savings" amount={"$" + this.state.savings.sum} />
        </Row>

        <Row className="display-transactions">
          <Container>
            
            {this.renderTransactions()}

            {/* <TransactRow
              description="Test description"
              amount="123"
              date="Feb-12"
            /> */}
          </Container>
        </Row>
      </Container>

      // <Row>

      //       <select id='transact-category' >
      //         <option>Income</option>
      //         <option>Expense</option>
      //         <option>Savings</option>
      //       </select>

      //       <input id='transact-description' type="text" placeholder="Description"/>
      //       <input id='transact-amount' type="number" placeholder="Amount"/>

      //       <button onClick={this.insertTransaction}>Submit</button>

      //     </Row>   
    );
  }
}

export default View;

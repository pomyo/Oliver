import React from "react";
import { Container, Row } from "reactstrap";
import { Nav } from "../common/navigation.jsx";
import MoneyCard from "../common/moneyCard.jsx";
import SummaryHeadLine from "../common/summaryHeadLine.jsx";
import OllyApi from '../../api/oliverAPI.js';
import Utils from '../../util/dates.js';

class View extends React.Component {
  state = {
    expense: 0,
    income: 0,
    savings: 0,
    currentMonth: Utils.getCurrentMonth(),
    currentYear: Utils.getCurrentYear(),
    data: 0
  };

  componentWillMount () {
  }

  componentDidMount () {
    this.loadMonthlyData();
  }

  filterDataByCategory (category) {
    let summary = { sum: 0, transactions: null };
    summary.transactions = (this.state.data.filter ( transaction => transaction.category.toLowerCase() === category.toLowerCase()));
    summary.transactions.forEach ( transaction => summary.sum += transaction.amount );
    summary.sum = summary.sum.toFixed(2);
    console.log(summary.transactions);
    this.setState({ [category] : summary});
  }

  loadMonthlyData () {
    let monthYear = {
      month: this.state.currentMonth,
      year: this.state.currentYear
    }

    OllyApi.getDataOfMonth(monthYear).then(transactions => {
      this.setState({data: transactions.data});
      let categories = ["expense", "income", "savings"];
      categories.forEach( category => this.filterDataByCategory (category));
    });
  }

  insertTransaction () {
    let description = document.getElementById('transact-description').value;
    let category = document.getElementById('transact-category').value;
    let amount = document.getElementById('transact-amount').value;
    let newDate = new Date();

    let transactionData = {
      description: description,
      category: category,
      amount: amount,
      date: newDate.toLocaleDateString(),
      millSecTime: newDate.getTime(),
      month: (newDate.getMonth() + 1),
      monthName: newDate.toLocaleString('en-us', { month: 'long' }),
      dayOfYear: Utils.dayOfYear(newDate),
      dayOfMonth: newDate.getDate(),
      dayOfWeek: newDate.getDay(),
      year: newDate.getFullYear(),
      accountID: 1234
    }

    OllyApi.addTransaction(transactionData).then(data => console.log(data));
  }

  render () {
    return (    
        <Container>
          <Row>
            <SummaryHeadLine monthYear={Utils.getCurrentMonthYear()}/>
          </Row>

          <Row>
            <MoneyCard title="Spending" amount={"$" + this.state.expense.sum}/>
            <MoneyCard title="Income" amount={"$" + this.state.income.sum}/>
            <MoneyCard title="Saved" amount={"$" + this.state.savings.sum}/>
          </Row> 

          {/* <Row>

            <select id='transact-category' >
              <option>Income</option>
              <option>Expense</option>
              <option>Savings</option>
            </select>

            <input id='transact-description' type="text" placeholder="Description"/>
            <input id='transact-amount' type="number" placeholder="Amount"/>

            <button onClick={this.insertTransaction}>Submit</button>

          </Row> */}
        </Container>
    );
  }
}

export default View;

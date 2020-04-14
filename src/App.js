import React, { Component } from "react";
import { Cards, Chart, CountryPicker } from "./components";
import Styles from "./App.module.css";
import { fetchData } from "./api";
import Covid from "./images/logo.png";
class App extends Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fdata = await fetchData();
    this.setState({ data: fdata });
  }
  handleCountryChange = async (country) => {
    const fdata = await fetchData(country);
    this.setState({ data: fdata, country: country });
  };
  render() {
    const { data, country } = this.state;
    return (
      <div className={Styles.container}>
        <img
          src={Covid}
          title="Covid-19"
          className={Styles.image}
          alt="Covid-19 Logo"
        />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
        <footer className={Styles.fot}>
          <small>Powered by Muhammad Hamza</small>
        </footer>
      </div>
    );
  }
}

export default App;

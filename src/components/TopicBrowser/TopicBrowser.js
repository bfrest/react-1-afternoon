import React, { Component } from "react";
import Sum from "../Topics/Sum";
import Palindrome from "../Topics/Palindrome";
import FilterString from "../Topics/FilterString";
import EvenAndOdd from "../Topics/EvenAndOdd";
import FilterObject from "../Topics/FilterObject";

class TopicBrowser extends Component {
  render() {
    return (
      <div>
        <EvenAndOdd />
        <FilterObject />
        <FilterString />
        <Palindrome />
        <Sum />
      </div>
    );
  }
}

export default TopicBrowser;

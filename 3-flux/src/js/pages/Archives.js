import React from "react";

import Article from "../components/Article";

export default class Archives extends React.Component {
  render() {
    const { query } = this.props.location;
    const { params } = this.props;
    const { article } = params;
    const { date, filter } = query;
    const Articles = [
      "Some title",
      "Some title",
      "Some title",
      "Some title",
      "Some title",
      "Some title"
    ].map((title,i) => <Article key={i} title={title}/> );
    console.log(Articles);
    return (
      <div>
        <h1>{article}</h1>
        date: {date}, filter: {filter}
        <div class="row">{Articles}</div>
      </div>
    );
  }
}

import React from "react";

import Article from "../components/Article";

export default class Featured extends React.Component {
  render() {
    const Articles = [
      "Some title",
      "Some title",
      "Some title",
      "Some title",
      "Some title",
      "Some title"
    ].map( (title, i) => <Article key={i} title={title}/> );

    const adText = [
      "Add spot 1",
      "Add spot 2",
      "Add spot 3",
      "Add spot 4",
      "Add spot 5",
    ];

    console.log(Articles);
    const randomAd = adText[Math.round( Math.random() * (adText.length - 1))];

    return (
      <div>
        <div class="row">
          <div class="col-sm-12">
            <div class="well text-center">
              {randomAd}
            </div>
          </div>
        </div>
        <div class="row">{Articles}</div>
      </div>

    );
  }
}

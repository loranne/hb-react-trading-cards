"use strict";

// this is the Homepage.render function
function Homepage() {
  return (
    <div>
      <p>Welcome to Balloonicorn's Trading Card game!</p>
      <br />
      <img src="/static/img/balloonicorn.jpg" />
      <br />
      <a href="/cards">Click here to view all trading cards!</a>
    </div>
  );
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));

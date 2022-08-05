import React, { Fragment } from 'react'

function App() {
  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col border border-primary">Column 1</div>
          <div className="col border border-secondary">Column 2</div>
          <div className="col border border-danger"> Column 3</div>
          <div className="col border border-success">Column 4</div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;

import React from "react";

const MainForm = (props) => {
  const { submitHandler, changeHandler, title, type, date, amount, unitPrice } = props;

  return (
    <div>
      <h4 className="mb-3 text-light bg-info w-75 mx-auto p-1">Insert Your Favorite Coins</h4>
      <form onSubmit={submitHandler} className="container w-75">
        <div className="form-row">
          <div className="form-group col-md-2">
            <input
              type="text"
              className="form-control"
              name="title"
              placeholder="title"
              onChange={changeHandler}
              value={title}
            />
          </div>
          <div className="form-group col-md-2">
            <input
              type="text"
              className="form-control"
              name="type"
              placeholder="type"
              onChange={changeHandler}
              value={type}
            />
          </div>
          <div className="form-group col-md-2">
            <input
              type="date"
              className="form-control"
              name="date"
              placeholder="date"
              onChange={changeHandler}
              value={date}
            />
          </div>
          <div className="form-group col-md-2">
            <input
              type="number"
              className="form-control"
              name="amount"
              placeholder="amount"
              onChange={changeHandler}
              value={amount}
            />
          </div>
          <div className="form-group col-md-2">
            <input
              type="number"
              className="form-control"
              name="unitPrice"
              placeholder="unit price"
              onChange={changeHandler}
              value={unitPrice}
            />
          </div>
          <div className="form-group col-md-2">
            <button className="btn btn-primary">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default MainForm;

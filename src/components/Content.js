import React from "react";

const Content = () => {
  return (
    <div className="content-con">
      <div className="content-top">
        <p>Orders & Collection</p>
        <span>Edit Details</span>
      </div>
      <div className="data-con">
        <div className="data">
          <label>Accession Id</label>
          <span>386749</span>
        </div>
        <div className="data">
          <label>Reference Id</label>
          <span>XJM23</span>
        </div>
        <div className="data">
          <label>Order Date</label>
          <span>23/02/2020</span>
        </div>
        <div className="data">
          <label>Collection Date</label>
          <span>01/03/2020</span>
        </div>
        <div className="data">
          <label>Requesting Physician</label>
          <span>Elijah Manning</span>
        </div>
      </div>
      <div className="lipid">Lipid Panel</div>
    </div>
  );
};

export default Content;

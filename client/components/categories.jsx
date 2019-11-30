import React from 'react';

export default class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: null
    };
  }

  render() {
    return (
      <div className="container-fluid categoriesContainer">
        <div className="row">
          <div className="col-3 d-flex justify-content-center">
            <span className="categoriesSections">
              Pre-built Desktops
            </span>
          </div>
          <div className="col-3 d-flex justify-content-center">
            <span className="categoriesSections">
              Computer Hardware
            </span>
          </div>
          <div className="col-3 d-flex justify-content-center">
            <span className="categoriesSections">
              Accessories
            </span>
          </div>
          <div className="col-3 d-flex justify-content-center">
            <span className="categoriesSections">
              Misc
            </span>
          </div>
        </div>
      </div>
    );
  }
}

import React from 'react'
import logo from '../logo.png';
import { withTranslation } from 'react-i18next';

// loading component for suspense fallback
const Loader = (props) => (
  <div className="App">
    <img src={logo} className="App-logo" alt="logo" />
    <div>{props.t("loading")}</div>
  </div>
);

export default withTranslation(Loader);

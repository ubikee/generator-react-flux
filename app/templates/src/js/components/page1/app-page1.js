import React from 'react';
import Constants from '../../constants/app-constants';
import Page from '../layout/app-page';
import styles from './app-shipments.css';

const Page1 = (props) => {

  let states = [
    Constants.SHIPMENT_STATE.SENT,
    Constants.SHIPMENT_STATE.RECEIVED
  ];

  return (
    <Page title="Monitor" icon="send" toggleDrawer={props.toggleDrawer}>
      Page1
    </Page>
  )
}

export default Page1;

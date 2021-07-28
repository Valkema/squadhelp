import React from 'react';
import { Link } from 'react-router-dom';
import CONSTANTS from '../../constants';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import TransactionTable from '../../components/TransactionTable/TransactionTable';
import styles from './TransactionPage.module.sass';

const data = [
  {
    id: 1,
    type: CONSTANTS.INCOME,
    sum: 350,
  },
  {
    id: 2,
    type: CONSTANTS.EXPENSE,
    sum: 350,
  },
  {
    id: 3,
    type: CONSTANTS.INCOME,
    sum: 400,
  },
  {
    id: 4,
    type: CONSTANTS.INCOME,
    sum: 550,
  },
  {
    id: 2,
    type: CONSTANTS.EXPENSE,
    sum: 600,
  },
];

const TransactionPage = (props) => {
  return (
    <>
      <Header />
      <div>
        {data ? <TransactionTable data={data} /> : <div>NO transactions</div>}
        <Link to="/dashboard">Back to Dashboard</Link>
      </div>
    </>
  );
};

TransactionPage.propTypes = {
  
};

export default TransactionPage;
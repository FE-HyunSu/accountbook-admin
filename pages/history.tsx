import React from 'react';
import HistoryList from '../components/historyList';
import Footer from '../components/layout/footer';
import Header from '../components/layout/header';

const History = () => {
  return (
    <>
      <Header />
      <main>
        <HistoryList />
      </main>
      <Footer />
    </>
  );
};

export default History;

import React from 'react';
import user from "../components/Json/user.json";
import Profile from '../components/profile/Profile';
import Statistics from './statistic/Statistic';
import statisticalData from './Json/statistical-data.json';
import FriendList from './friends/FriendList';
import friends from './Json/friends.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from './Json/transaction.json';



const App = () => (
    <>
        <Profile user={user}/>
        <Statistics title="Upload stats" stats={statisticalData} />
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} />

    </>
);

export default App;
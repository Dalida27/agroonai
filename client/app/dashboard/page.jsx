'use client';

import CardUser from "../components/card/cardUser";
import CardProducts from "../components/card/cardProducts";
import CardAI from "../components/card/cardAI";
import Chart from "../components/chart/chart";
import Transactions from "../components/transactions/transactions";
import { useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useRouter } from 'next/navigation';
import Loading from "../components/loading";

const DashboardPage = () => {
  const { user, loading } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [loading, user]);

  if (loading) {
    return <Loading />;
  }

  return user ? (
      <div className="w-full">
        <div className="flex w-[85%] mx-auto flex-col space-y-5">
          <div className="flex space-x-5 justify-between">
            <CardUser />
            <CardProducts />
            <CardAI />
          </div>
          <Chart />
          <Transactions />
        </div>
      </div>
  ) : null;
}

export default DashboardPage;

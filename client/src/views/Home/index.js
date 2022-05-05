import React, { useEffect, useState, useRef } from "react";
import { statisticBenefitPlanApi } from "../../api";
import Chart from "../../components/Chart";
import Frame from "../../components/Frame";

export const Home = () => {
  const [statisticBenefit, setStatisticBenefit] = useState();
  var planQuantity = [];
  var planName = [];
  const [chart, setChart] = useState();

  const loadStatisticBenefitPlan = async () => {
    const data = await statisticBenefitPlanApi();
    setStatisticBenefit(data.result);
  };

  const handleSplitStatistic = () => {
    if (statisticBenefit) {
      for (let iterator of statisticBenefit) {
        planName.push(iterator.Plan_Name);
        planQuantity.push(iterator.TONG);
      }
      setChart({ labels: planName, data: planQuantity });
    }
  };

  useEffect(() => {
    handleSplitStatistic();
  }, [statisticBenefit]);

  useEffect(() => {
    loadStatisticBenefitPlan();
  }, []);

  return (
    <Frame>
      <Chart statistic={chart} />
    </Frame>
  );
};
export default Home;

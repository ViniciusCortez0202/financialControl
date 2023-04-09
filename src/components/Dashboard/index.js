import React from 'react';
import { View } from 'react-native';
import { Dimensions } from "react-native";
import { PieChart } from 'react-native-chart-kit';
const screenWidth = Dimensions.get("window").width;

export default function Dashboard({data}) {
    const chartConfig = {
        backgroundGradientFrom: "#1E2923",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
      };

 return (
    <PieChart
    data={data}
    width={screenWidth}
    height={220}
    chartConfig={chartConfig}
    accessor={"population"}
    backgroundColor={"transparent"}
    paddingLeft={"0"}
    center={[10, 15]}
    avoidFalseZero
  />
  );
}
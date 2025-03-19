const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const batteriesBatches = [4, 5, 3, 4, 4, 6, 5, 6, 4, 7];

const totalBatteries = batteryBatches.reduce(
  (total, batch) => total + batch,
  0
);

export const getMemoryConsumptionLog = () => {
  const used = process.memoryUsage();
  const messages = [];
  for (let key in used) {
    messages.push(`${key}: ${Math.round((used[key] / 1024 / 1024) * 100) / 100} MB`);
  }
  return messages.join(', ');
};

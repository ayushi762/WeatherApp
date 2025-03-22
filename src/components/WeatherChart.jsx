import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const WeatherChart = ({ data }) => {
  const chartData = data.daily.time.map((date, index) => ({
    date,
    maxTemp: data.daily.temperature_2m_max[index],
    minTemp: data.daily.temperature_2m_min[index],
    precipitation: data.daily.precipitation_sum[index],
  }));
  return (
    <div className="chart-container">
      <ResponsiveContainer width="100%" minHeight={200} minWidth={400}>
        <LineChart data={chartData}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="maxTemp"
            stroke="#8884d8"
            name="Max Temp"
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="minTemp"
            stroke="#ff7300"
            name="Min Temp"
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="precipitation"
            stroke="green"
            name="Precipitation"
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WeatherChart;

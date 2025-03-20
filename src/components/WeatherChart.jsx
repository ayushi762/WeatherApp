import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const WeatherChart = ({ data }) => (
  <div className="chart-container">
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="temperature" stroke="#ff7300" />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default WeatherChart;

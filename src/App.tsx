import { useEffect, useMemo } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import autocolors from "chartjs-plugin-autocolors";
import type { ChartData, ChartOptions, LegendItem } from "chart.js";
import { useGetProductsQuery } from "services/api";
import Loading from "components/Loading/Loading";
import { useDispatch } from "react-redux";
import useAppSelector from "./customHooks/useAppSelector";
import { drawChart, setProducts } from "store/chartSlice";
import { Alert, Box } from "@mui/material";
import i18next from "i18next";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  autocolors
);

function App() {
  const dispatch = useDispatch();
  const selectedLang = useAppSelector((state) => state.chart.lang);
  const currentCategory = useAppSelector((state) => state.chart.currentCategory);
  const chartData = useAppSelector((state) => state.chart.chartData);
  const labels = useAppSelector((state) => state.chart.brands);

  const { data, error, isLoading, isFetching } = useGetProductsQuery(currentCategory);

  const lineChartData = useMemo<ChartData<"line">>(() => {
    const data = chartData.map((ele) => {
      return {
        label: ele.label,
        data: ele.data,
        pointRadius: 0,
      };
    });
    return {
      labels,
      datasets: data,
    };
  }, [chartData, data, currentCategory]);

  //   labels,
  //   datasets: [
  //     {
  //       label: "Dataset 1",
  //       data: [65, 59, 80, 81, 56, 55, 40],
  //       borderColor: "rgb(255, 99, 132)",
  //       backgroundColor: "rgba(255, 99, 132, 0.5)",
  //       pointRadius: 0,
  //     },
  //     {
  //       label: "Dataset 2",
  //       data: [43, 4, 53, 45, 232, 434, 45],
  //       borderColor: "rgb(53, 162, 235)",
  //       backgroundColor: "rgba(53, 162, 235, 0.5)",
  //       pointRadius: 0,
  //     },
  //   ],
  // };

  const options = useMemo<ChartOptions<"line">>(() => {
    const dir = i18next.dir();
    const gridPosition = dir === "ltr" ? "right" : "left";
    const legendRtl = dir !== "ltr";
    const cuur = dir === "ltr" ? "en-US" : "ar-EG";

    return {
      locale: "ar-EG",
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          border: { display: false, dash: [2, 4] },
          grid: { drawTicks: false, tickBorderDashOffset: 4, tickColor: "red", tickLength: 2 },
          position: gridPosition,
          ticks: {
            callback(value) {
              const formatter = new Intl.NumberFormat(cuur);
              return `${formatter.format(Number(value))} $`;
              // return `${value}$`;
            },
          },
        },
        x: {
          grid: { display: false, drawTicks: false, tickBorderDashOffset: 4, tickColor: "red" },
          ticks: { display: false },
        },
      },
      layout: {
        padding: 10,
      },
      plugins: {
        legend: {
          display: true,
          rtl: legendRtl,
          position: "bottom" as const,
          align: "start" as const,
          labels: {
            boxWidth: 0,
            padding: 40,
            font: function (context) {
              const width = context.chart.width;
              const size = Math.round(width / 55);
              return {
                // weight: "bold",
                size: size,
              };
            },
            generateLabels(chart) {
              const x = chart.data.datasets.map((ele, i) => {
                return {
                  text: ele.label as string,
                  fontColor: ele.backgroundColor,
                  fillStyle: ele.backgroundColor,
                  hidden: false,
                  datasetIndex: i,
                  lineCap: "",
                  lineDash: [10],
                  lineDashOffset: 10,
                  lineJoin: "",
                  lineWidth: 10,
                  strokeStyle: ele.backgroundColor,
                  pointStyle: "",
                  rotation: 0,
                };
              });
              return x as LegendItem[];
            },
          },
        },
        title: {
          display: true,
          text: "Upshifters  Chart",
        },
      },
    };
  }, [selectedLang]);

  useEffect(() => {
    if (data && currentCategory && !isLoading && !isFetching) {
      dispatch(setProducts(data?.products));
      dispatch(drawChart());
    }
  }, [data]);

  return (
    <Box
      sx={{
        position: "relative",
        height: "55vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Loading loading={isLoading || isFetching} />
      {error ? (
        <Alert severity="error">This is an error, please try again</Alert>
      ) : (
        <Line options={options} data={lineChartData} />
      )}
    </Box>
  );
}

export default App;

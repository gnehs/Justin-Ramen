<script>
import VueApexCharts from "vue3-apexcharts";
import data from '../assets/data.json'
export default {
  components: {
    apexchart: VueApexCharts,
  },
  data: function () {
    return {
      chartOptions: {
        chart: {
          type: 'area',
          id: "records-chart",
          background: '#0000',
          sparkline: {
            enabled: true,
          },
          animations: {
            enabled: false,
          },
          zoom: {
            enabled: false,
          },
          toolbar: {
            show: false,
          }
        },
        theme: {
          mode: window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'light',
          palette: 'palette3'
        },
        dataLabels: {
          enabled: true,
          offsetY: -17.5,
          style: {
            colors: ['var(--text-color)']
          },
        },
        xaxis: {
          categories: data.data.map(x => x.date),
        },
      },
      series: [
        {
          name: "累計點數",
          data: data.data.map(x => x.value).reduce((a, b) => a.concat(a[a.length - 1] + b), [0]).slice(1),
        },
      ],
    };
  },
}
</script>
<template>
  <apexchart
    width="100%"
    type="bar"
    :options="chartOptions"
    :series="series">
  </apexchart>
</template>
<script>
import VueApexCharts from "vue3-apexcharts";
import data from '../assets/data.json'
export default {
  components: {
    apexchart: VueApexCharts,
  },
  computed: {
    height() {
      if (window.matchMedia("(max-width: 768px)").matches) {
        return `${data.data.map(x => x.value).length * 2 * 24 + 100}px`
      }
      return 'auto'
    }
  },
  data: function () {
    return {
      chartOptions: {
        chart: {
          type: 'bar',
          id: "records-chart",
          background: '#0000',
          fontFamily: `'Roboto Condensed', 'Noto Sans TC', sans-serif`,
          fontWeight: 400,
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
        plotOptions: {
          bar: {
            horizontal: window.matchMedia("(max-width: 768px)").matches
          }
        },
        theme: {
          mode: window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'light',
          palette: 'palette2'
        },
        dataLabels: {
          enabled: true,
          offsetY: 0,
          style: {
            fontWeight: 400,
            colors: ['#fff'],
          },
        },
        xaxis: {
          categories: data.data.map(x => x.date),
        },
      },
      series: [
        {
          name: "當日點數",
          data: data.data.map(x => x.value)
        },
        {
          name: "累計點數",
          data: data.data.map(x => x.value).reduce((a, b) => [...a, a[a.length - 1] + b], [0]).slice(1),
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
    :height="height"
    :options="chartOptions"
    :series="series">
  </apexchart>
</template>
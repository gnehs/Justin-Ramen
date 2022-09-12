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
          id: "records-chart",
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
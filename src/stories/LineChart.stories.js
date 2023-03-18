<template>
  <div>
    <line-chart :datasets="datasets"></line-chart>
  </div>
</template>

<script>
import LineChart from './LineChart';

export default {
  name: 'LineChartStory',

  components: {
    LineChart,
  },

  data() {
    return {
      datasets: [
        {
          label: 'Dataset 1',
          data: [40, 35, 45, 50, 55, 60, 65, 70, 75, 80],
          borderColor: 'red',
        },
        {
          label: 'Dataset 2',
          data: [20, 25, 30, 35, 40, 45, 50, 55, 60, 65],
          borderColor: 'blue',
        },
      ],
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    };
  },
};
</script>

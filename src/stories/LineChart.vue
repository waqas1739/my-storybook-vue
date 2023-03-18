<template>
    <div>
      <canvas ref="canvas"></canvas>
    </div>
  </template>
  
  <script>
  import Chart from 'chart.js/auto';
  
  export default {
    name: 'LineChart',
  
    props: {
      datasets: {
        type: Array,
        required: true,
        default: () => [],
      },
      options: {
        type: Object,
        required: false,
        default: () => {},
      },
    },
  
    data() {
      return {
        chart: null,
        timer: null,
      };
    },
  
    mounted() {
      this.createChart();
      this.timer = setInterval(this.updateData, 3000);
    },
  
    beforeUnmount() {
      clearInterval(this.timer);
    },
  
    methods: {
      createChart() {
        const canvas = this.$refs.canvas;
        this.chart = new Chart(canvas, {
          type: 'line',
          data: {
            datasets: this.datasets,
          },
          options: this.options,
        });
      },
  
      updateData() {
        this.datasets.forEach((dataset) => {
          dataset.data.push(Math.floor(Math.random() * 100));
          dataset.data.shift();
        });
        this.chart.update();
      },
    },
  };
  </script>
  
  <style>
  canvas {
    max-width: 100%;
    height: auto;
  }
  </style>
  
<template>
  <div class="tariffs">
    <label class="tariffs__title">Tariffs</label>
      <chart-selection @selecteChart="changeChart" class="tariffs__selection" />
      <charts :chartType="selectedChart" :data="data" class="tariffs__charts" />
  </div>
</template>

<script>
import ChartSelection from "./ChartSelection.vue";
import Charts from './Charts.vue';
import { getAllPrices } from "../data/prices.js";
export default {
  name: 'Tariffs',
  data() {
    return {
      changeColor: false,
      selectedChart: 'lines',
      data: getAllPrices
    }
  },
  components: {
    ChartSelection,
    Charts
  },
  methods: {
    changeChart(chartSelected) {
     this.selectedChart = chartSelected;
    }
  }
}
</script>

<style lang="scss" scoped>
  .tariffs {
    display: flex;
    flex-direction: column;
    &__title {
      text-align: center;
      width: 100%;
      font-size: 30px;
      margin-top: 0px;
      margin-bottom: 10px;
      color: #e6007d;
    }
    &__selection {
      order: 2;
      @media(min-width:768px){
        order: 1;
      }
    }
    &__charts {
      order: 1;
      @media(min-width:768px){
        order: 2;
      }
    }
  }
</style>

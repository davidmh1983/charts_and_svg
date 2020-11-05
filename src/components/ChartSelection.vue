<template>
  <div class="chartType">
    <label class="chartType__title"> Select a chart type </label>
    <div class="chartType__selectors">
      <icon-svg 
        class="chartType__selectors__item"
        v-for="chart in charts"
        :key="chart"
        width="50" 
        height="50" 
        :icon="chart" 
        :color="setColor(chart)" 
        @select="select(chart)" />
      </div>
  </div>
</template>

<script>
import IconSvg from "./IconSvg.vue";
export default {
  name: 'ChartSelection',
  data() {
    return {
      chartSelected: 'lines',
      charts: ['lines', 'bars', 'surface']
    }
  },
  components: {
    IconSvg
  },
  methods: {
    setColor(chartType) {
      return chartType === this.chartSelected ? "#e6007d" : "black";
    },
    select(chartType) {
      this.chartSelected = chartType;
      this.$emit('selecteChart', chartType);
    }
  }
}
</script>

<style lang="scss" scoped>
  .chartType {
    position: sticky;
    bottom: 0;
    &__title {
      color: black;
      margin: 5px 0px;
      display: block;
      font-size: 20px;
      font-weight: bold;
      text-align: center;
      @media(max-width:769px) {
        display: none;
      }
    }
    &__selectors {
      display: flex;
      justify-content: space-between;
      @media(min-width:426px) {
        justify-content: center;
        &__item {
          margin: 0 10px;
        }
      }
    }
  }
</style>

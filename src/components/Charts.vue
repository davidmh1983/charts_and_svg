<template>
  <div class="charts">
    <Bars v-if="chartType === 'bars'" :labels="labels" :dataSets="dataSets"/>
    <Lines v-if="chartType === 'lines'" :labels="labels" :dataSets="dataSets"/>
    <Surface v-if="chartType === 'surface'" :labels="labels" :dataSets="dataSets"/>
  </div>
</template>

<script>
import Bars from "./chartTypes/Bars.vue";
import Lines from "./chartTypes/Lines.vue";
import Surface from "./chartTypes/Surface.vue";
export default {
  name: "Charts",
  props: {
    chartType: String,
    data: Array
  },
  components: {
   Bars,
   Lines,
   Surface
  },
  computed: {
    dataSets() {
      return this.data.map( (item, i) => {
        return {
          label: item.name,
          data: item.values,
          borderColor: `rgb(${this.color[i]})`,
          pointBackgroundColor: `rgb(${this.color[i]})`,
          lineTension: 0,
          backgroundColor: this.chartType === 'lines' ? 'transparent' : `rgba(${this.color[i]},0.5)`,
          borderWidth: this.chartType === 'lines' ? 2 : this.chartType === 'surface' ? 1 : 0 ,
          pointRadius: this.chartType === 'lines' ? 1 : 0,
          steppedLine: this.chartType === 'lines' ? false : 'before' 
        };
      })
    }
  },
  data() {
    return {
      labels: Array.apply(null, {length: 24}).map(Number.call, Number),
      color: ['30,144,255', '34,139,34', '255,69,0']
    };
  }
};
</script>

<style lang="scss" scoped>
.charts {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-bottom: 20px;
  @media(min-width:768px) {
    margin-top: 40px;
    margin-bottom: 0;
  }
}
</style>
<script>
import { Bar } from "vue-chartjs";
export default {
  name:'bars',
  extends: Bar,
  props: {
    labels: Array,
    dataSets: Array
  },
  mounted() {
    this.renderChart(
      {
        labels: this.labels,
        datasets: this.dataSets
      },
      { responsive: true, maintainAspectRatio: false }
    );
  }
};
</script>

<script>
import { Line } from "vue-chartjs";

export default {
  name: 'Surface',
  extends: Line,
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
      {
        responsive: true,
        maintainAspectRatio: false,
      }
    );
  }
};
</script>
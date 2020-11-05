<template>
  <div :class="{'button-type' : isButton}" :style="iconStyle" @click="$emit('select')">
    <svg
      width="100%"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 373 373"
    >
      <g :fill="color">
        <component :is="icon"></component>
      </g>
    </svg>
    <label v-if="hasText" :style="colorText" class="infoText"> {{ icon }} </label>
  </div>
</template>

<script>
import icons from "./icons";

export default {
  name: "IconSvg",
  components: {
    ...icons
  },
  props: {
    icon: {
      type: String
    },
    color: {
      type: String,
      default: "currentColor"
    },
    isButton: {
      type: Boolean,
      default: true
    },
    width: {
      type: [Number, String],
      default: 18
    },
    height: {
      type: [Number, String],
      default: 18
    },
    hasText: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    iconStyle() {
      const { width, height, color } = this;
      return {
        borderColor: `${color}`,
        width: `${width}px`,
        height: `${height}px`
      };
    },
    colorText() {
      return { 
        color: `${this.color}`
      } 
    }
  }
};
</script>
<style scoped>
.button-type {
  padding: 5px;
  border-radius: 5px;
  border: 3px solid black;
}
.infoText {
  width: 100%;
  text-align: center;
  display: block;
}
</style>
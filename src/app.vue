<template>
  <div>
    {{ count }}
    <button z-on:click="add">click</button>
    <button z-on:click="handleClick">{{ show ? "hide" : "show" }}</button>
    <Sfc z-if="show" z-bind:baz="count"></Sfc>

    <!--  -->
  </div>
</template>

<script>
import Sfc from "./components/sfc.vue";
export default {
  components: {
    Sfc,
  },
  data() {
    return {
      count: 1,
      show: true,
    };
  },
  methods: {
    add() {
      this.count++;
    },
    handleClick() {
      this.show = !this.show;
    },
  },
};
</script>

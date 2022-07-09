<template>
  <div>
    <h1>Hello, ZVM</h1>
    <div>
      <h2>{{ count }}</h2>
    </div>
    <button z-on:click="add">click</button>
    <button z-on:click="handleClick">show</button>
    <Sfc z-if="show" z-on:sfcClick="add" z-bind:baz="count"></Sfc>
    <div>
      试一试？输入一键创建项目：
      <code style="font-weight: bold; color: red"
        >npx zvm-cli create myproject
      </code>
    </div>
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
    add(count) {
      count >= 0 ? (this.count += count) : this.count++;
    },
    handleClick() {
      this.show = !this.show;
    },
  },
};
</script>

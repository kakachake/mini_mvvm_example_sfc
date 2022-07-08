<template>
  <div class="sfc">
    <h1>这是组件内部</h1>
    <p>{{ foo }}</p>
    <button z-on:click="inc">{{ count }}</button>
    <div>父组件传递的props:{{ baz }}</div>
    <Sfc></Sfc>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: {
    baz: {
      type: Number,
      default: 5,
    },
  },
  created() {
    console.log("created");
  },
  mounted() {
    console.log("mounted");
  },
  data() {
    return {
      foo: "foobar",
      count: 0,
    };
  },
  methods: {
    inc() {
      console.log(111);
      this.count++;
    },
  },
};
</script>

<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1 class="head">This is an about page</h1>
    <button @click="local()">Local</button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      colorB: false,
    };
  },
  methods: {
    // local() {
    //   this.colorB = !this.colorB;
    //   console.log(this.colorB);
    //   window.localStorage.setItem("color", this.colorB);
    // },
  },
};
</script>

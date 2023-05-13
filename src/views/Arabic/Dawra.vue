<template>
  <nav-bar />
  <dawra-c />
</template>

<script>
import DawraC from "@/components/Arabic/Dawra/DawraC.vue";
import NavBar from "@/components/Arabic/Navbar/NavBar.vue";
export default {
  name: "DawraV",
  components: {
    DawraC,
    NavBar,
  },
};
</script>

<style lang="scss" scoped></style>

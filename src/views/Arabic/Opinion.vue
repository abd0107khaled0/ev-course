<template>
  <nav-bar />
  <opinion-c />
  <contact />
  <Footer />
  <footer-2 />
</template>

<script>
import NavBar from "@/components/Arabic/Navbar/NavBar.vue";
import OpinionC from "@/components/Opinon/OpinionC.vue";
import Contact from "@/components/Arabic/Footer/Contact.vue";
import Footer from "@/components/Arabic/Footer/Footer.vue";
import Footer2 from "@/components/Arabic/Footer/Footer2.vue";
export default {
  components: { NavBar, OpinionC, Contact, Footer2, Footer },
  name: "OpenionV",
};
</script>

<style lang="scss" scoped></style>

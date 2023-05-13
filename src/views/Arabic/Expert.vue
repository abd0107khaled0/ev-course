<template>
  <nav-bar />
  <ExpertC1 />
  <Contact />
  <Footer />
  <footer-2 />
</template>

<script>
import NavBar from "@/components/Arabic/Navbar/NavBar.vue";
import Contact from "@/components/Arabic/Footer/Contact.vue";
import Footer from "@/components/Arabic/Footer/Footer.vue";
import Footer2 from "@/components/Arabic/Footer/Footer2.vue";
import ExpertC1 from "@/components/Arabic/Expert/Expert.vue";
export default {
  components: { NavBar, Contact, Footer2, Footer, ExpertC1 },
  name: "ExpertV",
};
</script>

<style></style>

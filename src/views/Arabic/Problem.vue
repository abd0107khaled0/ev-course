<template>
  <nav-bar />
  <Contact />
  <Footer />
  <footer-2 />
</template>

<script>
import NavBar from "@/components/Arabic/Navbar/NavBar.vue";
import Contact from "@/components/Arabic/Footer/Contact.vue";
import Footer from "@/components/Arabic/Footer/Footer.vue";
import Footer2 from "@/components/Arabic/Footer/Footer2.vue";
export default {
  components: { NavBar, Contact, Footer2, Footer },
  name: "ProblemV",
};
</script>

<style></style>

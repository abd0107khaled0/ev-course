<template>
  <nav-bar />
  <join-partc-1 />
  <Contact />
  <Footer />
  <footer-2 />
</template>

<script>
import NavBar from "@/components/Arabic/Navbar/NavBar.vue";
import Contact from "@/components/Arabic/Footer/Contact.vue";
import Footer from "@/components/Arabic/Footer/Footer.vue";
import Footer2 from "@/components/Arabic/Footer/Footer2.vue";
import JoinPartc1 from "@/components/Arabic/JoinPart/JoinPartc1.vue";
export default {
  components: { NavBar, Contact, Footer2, Footer, JoinPartc1 },
  name: "JoinPartV",
};
</script>

<style lang="scss" scoped></style>

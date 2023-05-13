<template>
  <div>
    <nav-bar />
    <AlhadthC1 />
    <Footer />
    <footer-2 />
    <contact />
  </div>
</template>

<script>
import NavBar from "@/components/Arabic/Navbar/NavBar.vue";
import Contact from "@/components/Arabic/Footer/Contact.vue";
import Footer from "@/components/Arabic/Footer/Footer.vue";
import Footer2 from "@/components/Arabic/Footer/Footer2.vue";
import AlhadthC1 from "@/components/Arabic/Ahdath/Alhadthc1.vue";
export default {
  name: "HadthV",
  components: { NavBar, Contact, Footer, Footer2, AlhadthC1 },
};
</script>

<style lang="scss" scoped></style>

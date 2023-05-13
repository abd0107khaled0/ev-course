<template>
  <nav-bar />
  <partnersc-1 />
  <partnersc-2 />
  <contact />
  <Footer />
  <footer-2 />
</template>

<script>
import Contact from "@/components/Arabic/Footer/Contact.vue";
import Footer from "@/components/Arabic/Footer/Footer.vue";
import Footer2 from "@/components/Arabic/Footer/Footer2.vue";
import Partnersc1 from "@/components/Arabic/Partners/Partnersc1.vue";
import Partnersc2 from "@/components/Arabic/Partners/Partnersc2.vue";
import NavBar from "@/components/Arabic/Navbar/NavBar.vue";
export default {
  components: { Contact, Footer, Footer2, Partnersc1, Partnersc2, NavBar },
  name: "PartnersV",
};
</script>

<style></style>

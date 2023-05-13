<template>
  <div>
    <nav-bar />
    <!-- <Dawatatc1 /> -->
    <Dawatatc2 />
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
// import Dawatatc1 from "@/components/Arabic/Dawarat/Dawatatc1.vue";
import Dawatatc2 from "@/components/Arabic/Dawarat/Dawaratc2.vue";
export default {
  name: "DawaratV",
  components: { NavBar, Contact, Footer, Footer2, Dawatatc2 },
};
</script>

<style lang="scss" scoped></style>

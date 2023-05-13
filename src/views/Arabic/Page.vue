<template>
  <nav-bar />
  <pagec-1 />
  <pagec-2 />
  <pagec-3 />
  <pagec-4 />
  <pagec-5 />
  <pagec-6 />
  <contact />
  <Footer />
  <footer-2 />
</template>

<script>
import Contact from "@/components/Arabic/Footer/Contact.vue";
import Footer2 from "@/components/Arabic/Footer/Footer2.vue";
import Footer from "@/components/Arabic/Footer/Footer.vue";
import Pagec1 from "@/components/Arabic/Page/Pagec1.vue";
import NavBar from "@/components/Arabic/Navbar/NavBar.vue";
import Pagec2 from "@/components/Arabic/Page/Pagec2.vue";
import Pagec3 from "@/components/Arabic/Page/pagec3.vue";
import Pagec4 from "@/components/Arabic/Page/Pagec4.vue";
import Pagec5 from "@/components/Arabic/Page/Pagec5.vue";
import Pagec6 from "@/components/Arabic/Page/Pagec6.vue";
export default {
  components: {
    Contact,
    Footer2,
    Footer,
    Pagec1,
    NavBar,
    Pagec2,
    Pagec3,
    Pagec4,
    Pagec5,
    Pagec6,
  },
  name: "PageV",
};
</script>

<style></style>

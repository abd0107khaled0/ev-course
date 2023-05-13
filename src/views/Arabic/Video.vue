<template>
  <nav-bar />
  <videoc-1 />
  <videoc-2 />
  <contact />
  <Footer />
</template>

<script>
import Videoc1 from "@/components/Arabic/Video/Videoc1.vue";
import Footer from "@/components/Arabic/Footer/Footer.vue";
import Contact from "@/components/Arabic/Footer/Contact.vue";
import NavBar from "@/components/Arabic/Navbar/NavBar.vue";
import Videoc2 from "@/components/Arabic/Video/Videoc2.vue";
export default {
  components: { Videoc1, Footer, Contact, NavBar, Videoc2 },
  name: "VideoV",
};
</script>

<style lang="scss" scoped></style>

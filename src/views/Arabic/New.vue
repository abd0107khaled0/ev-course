<template>
  <nav-2-bar />
  <newc-1 />
  <newc-2 />
  <newc-3 />
  <contact />
  <footer-we />
</template>

<script>
import Contact from "@/components/Arabic/Footer/Contact.vue";
import FooterWe from "@/components/Arabic/Footer/FooterWe.vue";
import Newc1 from "@/components/Arabic/News/Newc1.vue";
import Nav2Bar from "@/components/Arabic/Navbar/Nav2Bar.vue";
import Newc2 from "@/components/Arabic/News/Newc2.vue";
import Newc3 from "@/components/Arabic/News/Newc3.vue";
export default {
  components: { Contact, FooterWe, Newc1, Nav2Bar, Newc2, Newc3 },
  name: "NewV",
};
</script>

<style></style>

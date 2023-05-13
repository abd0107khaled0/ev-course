<template>
  <nav-2-bar />
  <contact-usc-1 />
  <contact-usc-2 />
  <contact />
  <footer-we />
</template>

<script>
import Contact from "@/components/Arabic/Footer/Contact.vue";
import Nav2Bar from "@/components/Arabic/Navbar/Nav2Bar.vue";
import FooterWe from "@/components/Arabic/Footer/FooterWe.vue";
import ContactUsc1 from "@/components/Arabic/ContactUs/ContactUsc1.vue";
import ContactUsc2 from "@/components/Arabic/ContactUs/ContactUsc2.vue";
export default {
  components: {
    Contact,
    Nav2Bar,
    FooterWe,
    ContactUsc1,
    ContactUsc2,
  },
  name: "WeeV",
};
</script>

<style lang="scss" scoped></style>

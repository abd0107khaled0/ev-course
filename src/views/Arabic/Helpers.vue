<template>
  <nav-2-bar />
  <helpersc-1 />
  <helpersc-2 />
  <contact />
  <footer-we />
</template>

<script>
import Contact from "@/components/Arabic/Footer/Contact.vue";
import Nav2Bar from "@/components/Arabic/Navbar/Nav2Bar.vue";
import FooterWe from "@/components/Arabic/Footer/FooterWe.vue";
import Helpersc1 from "@/components/Arabic/Helpers/Helpersc1.vue";
import Helpersc2 from "@/components/Arabic/Helpers/Helpersc2.vue";
export default {
  components: {
    Contact,
    Nav2Bar,
    FooterWe,
    Helpersc1,
    Helpersc2,
  },
  name: "HelpersV",
};
</script>

<style lang="scss" scoped></style>

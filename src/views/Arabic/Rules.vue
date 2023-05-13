<template>
  <nav-2-bar />
  <rulesc-1 />
  <rulesc-2 />
  <contact />
  <footer-we />
</template>

<script>
import Contact from "@/components/Arabic/Footer/Contact.vue";
import Nav2Bar from "@/components/Arabic/Navbar/Nav2Bar.vue";
import FooterWe from "@/components/Arabic/Footer/FooterWe.vue";
import Rulesc1 from "@/components/Arabic/Rules/Rulesc1.vue";
import Rulesc2 from "@/components/Arabic/Rules/Rulesc2.vue";
export default {
  components: {
    Contact,
    Nav2Bar,
    FooterWe,
    Rulesc1,
    Rulesc2,
  },
  name: "RulesV",
};
</script>

<style lang="scss" scoped></style>

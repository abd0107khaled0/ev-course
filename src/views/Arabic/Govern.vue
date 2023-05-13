<template>
  <nav-2-bar />
  <governc-1 />
  <governc-2 />
  <contact />
  <footer-we />
</template>

<script>
import Contact from "@/components/Arabic/Footer/Contact.vue";
import Nav2Bar from "@/components/Arabic/Navbar/Nav2Bar.vue";
import FooterWe from "@/components/Arabic/Footer/FooterWe.vue";
import Governc1 from "@/components/Arabic/Govern/Governc1.vue";
import Governc2 from "@/components/Arabic/Govern/Governc2.vue";
export default {
  components: {
    Contact,
    Nav2Bar,
    FooterWe,
    Governc1,
    Governc2,
  },
  name: "GovernV",
};
</script>

<style lang="scss" scoped></style>

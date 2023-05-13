<template>
  <nav-2-bar />
  <teamc-1 />
  <teamc-2 />
  <contact />
  <footer-we />
</template>

<script>
import Contact from "@/components/Arabic/Footer/Contact.vue";
import FooterWe from "@/components/Arabic/Footer/FooterWe.vue";
import Nav2Bar from "@/components/Arabic/Navbar/Nav2Bar.vue";
import Teamc1 from "@/components/Arabic/Team/Teamc1.vue";
import Teamc2 from "@/components/Arabic/Team/Teamc2.vue";
export default {
  components: { Contact, FooterWe, Nav2Bar, Teamc1, Teamc2 },
  name: "TeamV",
};
</script>

<style></style>

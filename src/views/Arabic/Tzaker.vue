<template>
  <div>
    <nav-bar />
    <tz-1 />
    <tz-2 />
    <tz-3 />
    <tzc-4 />
    <tzc-5 />
    <tzc-6 />
    <tzc-7 />
    <footer-1 />
    <footer-2 />
    <contact />
  </div>
</template>

<script>
import NavBar from "@/components/Arabic/Navbar/NavBar.vue";
import Tz1 from "@/components/Arabic/Tzaker/Tz1.vue";
import Tz2 from "@/components/Arabic/Tzaker/Tz2.vue";
import Contact from "@/components/Arabic/Footer/Contact.vue";
import Footer1 from "@/components/Arabic/Footer/Footer.vue";
import Footer2 from "@/components/Arabic/Footer/Footer2.vue";
import Tz3 from "@/components/Arabic/Tzaker/Tz3.vue";
import Tzc4 from "@/components/Arabic/Tzaker/Tzc4.vue";
import Tzc5 from "@/components/Arabic/Tzaker/Tzc5.vue";
import Tzc6 from "@/components/Arabic/Tzaker/Tzc6.vue";
import Tzc7 from "@/components/Arabic/Tzaker/Tzc7.vue";
export default {
  name: "TzakerV",
  components: {
    NavBar,
    Tz1,
    Tz2,
    Contact,
    Footer1,
    Footer2,
    Tz3,
    Tzc4,
    Tzc5,
    Tzc6,
    Tzc7,
  },
};
</script>

<style lang="scss" scoped></style>

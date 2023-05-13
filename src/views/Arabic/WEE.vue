<template>
  <nav-2-bar />
  <weec-1 />
  <weec-2 />
  <weec-3 />
  <weec-4 />
  <contact />
  <footer-we />
</template>

<script>
import Weec1 from "@/components/Arabic/WEE/Weec1.vue";
import Contact from "@/components/Arabic/Footer/Contact.vue";
import Nav2Bar from "@/components/Arabic/Navbar/Nav2Bar.vue";
import Weec2 from "@/components/Arabic/WEE/Weec2.vue";
import Weec3 from "@/components/Arabic/WEE/Weec3.vue";
import Weec4 from "@/components/Arabic/WEE/Weec4.vue";
import FooterWe from "@/components/Arabic/Footer/FooterWe.vue";
export default {
  components: {
    Weec1,
    Contact,
    Nav2Bar,
    Weec2,
    Weec3,
    Weec4,
    FooterWe,
  },
  name: "WeeV",
};
</script>

<style lang="scss" scoped></style>

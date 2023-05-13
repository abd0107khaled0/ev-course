<template>
  <nav-bar />
  <userc-1 />
  <userc-2 />
  <userc-3 />
  <contact />
  <Footer />
  <footer-2 />
</template>

<script>
import Contact from "@/components/Arabic/Footer/Contact.vue";
import Footer from "@/components/Arabic/Footer/Footer.vue";
import Footer2 from "@/components/Arabic/Footer/Footer2.vue";
import NavBar from "@/components/Arabic/Navbar/NavBar.vue";
import Userc1 from "@/components/Arabic/UserPage/Userc1.vue";
import Userc2 from "@/components/Arabic/UserPage/Userc2.vue";
import Userc3 from "@/components/Arabic/UserPage/Userc3.vue";
export default {
  components: { Contact, Footer, Footer2, NavBar, Userc1, Userc2, Userc3 },
  name: "UserPageV",
  mounted() {
    let user = JSON.parse(localStorage.getItem("userInfo"));
    if (!user) {
      this.$router.push("Home");
    }
  },
};
</script>

<style></style>

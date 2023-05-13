<template>
  <div class="home">
    <nav-bar />
    <home-c-1 />
    <home-c-2 />
    <home-c-3 />
    <home-c-4 />
    <home-c-5 />
    <home-c-6 />
    <Footer />
    <footer-2 />
    <contact />
  </div>
</template>

<script>
import NavBar from "@/components/Arabic/Navbar/NavBar.vue";
import HomeC1 from "@/components/Arabic/Home/HomeC1.vue";
import HomeC2 from "@/components/Arabic/Home/HomeC2.vue";
import HomeC3 from "@/components/Arabic/Home/HomeC3.vue";
import HomeC4 from "@/components/Arabic/Home/HomeC4.vue";
import HomeC5 from "@/components/Arabic/Home/HomeC5.vue";
import Footer from "@/components/Arabic/Footer/Footer.vue";
import HomeC6 from "@/components/Arabic/Home/HomeC6.vue";
import Footer2 from "@/components/Arabic/Footer/Footer2.vue";
import Contact from "@/components/Arabic/Footer/Contact.vue";
export default {
  name: "HomeV",
  mounted() {
    let user = JSON.parse(localStorage.getItem("userInfo"));
    if (user) {
      this.$router.push("Page");
    } else {
      this.$router.push("/");
    }
  },
  components: {
    NavBar,
    HomeC1,
    HomeC2,
    HomeC3,
    HomeC4,
    HomeC5,
    Footer,
    HomeC6,
    Footer2,
    Contact,
  },
};
</script>

<style></style>

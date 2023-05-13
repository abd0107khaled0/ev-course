<template>
  <nav-bar />
  <expirec-1 />
  <expirec-2 />
  <Footer />
  <footer-2 />
  <contact />
</template>

<script>
import Contact from "@/components/Arabic/Footer/Contact.vue";
import Footer from "@/components/Arabic/Footer/Footer.vue";
import Footer2 from "@/components/Arabic/Footer/Footer2.vue";
import Expirec1 from "@/components/Arabic/Expire/Expirec1.vue";
import Expirec2 from "@/components/Arabic/Expire/Expirec2.vue";
import NavBar from "@/components/Arabic/Navbar/NavBar.vue";
export default {
  components: { Contact, Footer, Footer2, Expirec1, Expirec2, NavBar },
  name: "AlExpire",
  methods: {
    //     greet(event) {
    //       // `event` is the native DOM event
    //       if (event) {
    //         event.target.style.color = "red";
    //         console.log(event.target.elementChild);
    //       }
    //     },
  },
};
</script>

<style></style>

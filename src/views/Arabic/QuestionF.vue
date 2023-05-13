<template>
  <nav-2-bar />
  <question-sc-1 msg="الاسئله الفنيه" />
  <question-sc-2 question_type="Aldawarat" />
  <contact />
  <footer-we />
</template>

<script>
import Contact from "@/components/Arabic/Footer/Contact.vue";
import FooterWe from "@/components/Arabic/Footer/FooterWe.vue";
import Nav2Bar from "@/components/Arabic/Navbar/Nav2Bar.vue";
import QuestionSc1 from "@/components/Arabic/QuestionS/QuestionSc1.vue";
import QuestionSc2 from "@/components/Arabic/QuestionS/QuestionSc2.vue";
export default {
  components: { Contact, FooterWe, Nav2Bar, QuestionSc1, QuestionSc2 },
  name: "QuestionFV",
};
</script>

<style></style>

<template>
  <div class="home-c">
    <div class="container">
      <div class="home_body">
        <h1 class="h1">
          تعلم من اهم الخبراء<br />
          فى كل المجالات
        </h1>
        <p class="p">
          لا تفوت فرصة حضور اهم الاحداث والحصول على الدورات <br />
          باقل الاسعار
        </p>
        <button class="button">
          <router-link to="/Dawarat"> ابدأ الان </router-link>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeC1",
};
</script>

<style lang="scss" scoped>
.home-c {
  margin: 50px 0;
  padding: 60px 0 100px 0;
  background: var(--background-color);
  .home_body {
    text-align: center;
    padding: 70px 0;
  }
}
</style>

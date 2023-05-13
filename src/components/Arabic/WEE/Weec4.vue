<template>
  <div class="weec4">
    <div class="container">
      <h1 class="h1 text-center">خدماتنا</h1>
      <div class="Wee_body">
        <router-link to="/Tzaker" class="links" @click="scrollT()">
          <div class="img">
            <i class="fa-solid fa-ticket"></i>
          </div>
          <h3 class="h1">عروض التذاكر</h3>
        </router-link>
        <router-link to="/Alhadth" class="links" @click="scrollT()">
          <div class="img">
            <i class="fa-solid fa-microphone"></i>
          </div>
          <h3 class="h1">احداث</h3>
        </router-link>
        <router-link to="/Dawarat" class="links" @click="scrollT()">
          <div class="img">
            <i class="fa-brands fa-youtube"></i>
          </div>
          <h3 class="h1">دورات تدريبة</h3>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WeeC4",
};
</script>

<style lang="scss" scoped>
.weec4 {
  padding: 90px 0px 0px;
  .Wee_body {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(287px, 1fr));
    gap: 50px;
    padding: 50px 0;
    direction: rtl;
    .links {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
      cursor: pointer;
      .img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        border: 3px solid var(--button-back);
        display: flex;
        align-items: center;
        justify-content: center;
        i {
          font-size: 70px;
          padding: 8px;
          background: var(--background-color);
          color: var(--button-back);
          border-radius: 50%;
          width: 130px;
          height: 130px;
          text-align: center;
          line-height: 1.7;
          transition: all 0.3s ease-in-out;
        }
        &:hover {
          i {
            background: #fff;
          }
        }
      }
      h3 {
        font-size: calc(20px + 0.6vw);
      }
    }
  }
}
</style>

<template>
  <div class="home-c">
    <div class="container">
      <div class="home_body">
        <h1>احجز تذكرتك لحضور <br />اهم الاحداث</h1>
        <p>خصومات تصل <span>%80</span></p>
        <button>
          <router-link to="/Dawarat"> ابدأ الان </router-link>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TzC1",
};
</script>

<style lang="scss" scoped>
.home-c {
  padding: 90px 0;
  background: var(--background-color);
  .home_body {
    text-align: center;
    padding: 70px 0;
    h1 {
      font-size: calc(24px + 1.6vw);
      line-height: 1.5;
      font-weight: bold;
    }
    p {
      color: var(--p-color);
      font-weight: normal;
      font-size: calc(10px + 0.7vw);
      span {
        font-size: 24px;
        color: var(--button-back);
        font-weight: bold;
      }
    }
    button {
      background: var(--button-back);
      border-radius: 21px;
      border: 1px solid var(--button-back);
      box-shadow: 0px 0px 4px 1px var(--button-back);
      a {
        font-size: 24px;
        color: #fff;
        padding: 0 30px;
        transition: all 0.3s ease-in-out;
        font-weight: bold;
      }
      &:hover {
        background: transparent;
        border: 1px solid var(--button-back);
        a {
          color: var(--button-back);
        }
      }
    }
  }
}
</style>

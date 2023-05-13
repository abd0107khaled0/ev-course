<template>
  <div class="home-c2">
    <div class="overlay"></div>
    <div class="container">
      <div class="home_body">
        <h1>Techne Summit</h1>
        <p>40% Off Now</p>
        <button>
          <router-link to="/Dawarat"> احجز الان </router-link>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TzC2",
};
</script>

<style lang="scss" scoped>
.home-c2 {
  background-image: url("@/assets/img/slider_1670241079.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  position: relative;
  .overlay {
    position: absolute;
    background: rgb(84 77 246 / 45%);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .home_body {
    position: relative;
    text-align: center;
    padding: 140px 0;
    h1 {
      font-size: calc(24px + 1.6vw);
      line-height: 1.7;
      font-weight: bold;
    }
    p {
      color: #fff;
      font-weight: bold;
      text-transform: uppercase;
      font-size: 24px;
    }
    button {
      background: var(--button-back);
      border-radius: 21px;
      border: none;
      transition: all 0.3s ease-in-out;
      border: 1px solid #fff;
      a {
        font-size: 24px;
        color: #fff;
        padding: 0 25px;
      }
      &:hover {
        border: 1px solid #fff;
        background: transparent;
      }
    }
  }
}
</style>

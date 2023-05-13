<template>
  <div class="error">
    <div class="container">
      <img src="@/assets/img/error.jpg" alt="" />
      <div class="butt">
        <button class="btn btn-danger">
          <router-link to="/"> Back To Home </router-link>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ErrorPage",
};
</script>

<style lang="scss" scoped>
.error {
  img {
    margin: 100px 0 30px 0;
  }
  .butt {
    margin: 0 auto;
    width: fit-content;
    button {
      a {
        color: #fff;
      }
    }
  }
}
</style>

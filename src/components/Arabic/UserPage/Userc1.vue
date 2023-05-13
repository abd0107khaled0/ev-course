<template>
  <div class="user_page">
    <div class="container">
      <div class="user_body">
        <div class="user_1"></div>
        <div class="user_2">
          <div class="user_img">
            <img src="https://placehold.co/200x200" alt="" />
            <span class="p">{{ slice_name }}</span>
          </div>
          <div class="user_inform">
            <h1>{{ name }}</h1>
            <span class="p">{{ email }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserC1",
  data() {
    return {
      name: "",
      email: "",
      slice_name: "",
    };
  },
  mounted() {
    let user = JSON.parse(window.localStorage.getItem("userInfo"));
    if (user) {
      this.name = user.first_name;
      this.email = user.email;
      this.slice_name = "@" + user.username;
    } else {
      this.$router.push("/");
      console.log("de");
    }
  },
};
</script>

<style lang="scss" scoped>
.user_page {
  margin: 120px 0 50px;
  .user_body {
    border: 1px solid #4d4d4d;
    // border: 1px solid var(--button-back);
    border-radius: 7px;
    .user_1 {
      padding: 150px;
      background: #4d4d4d;
      border-radius: 5px 5px 0 0;
    }
    .user_2 {
      margin: 0 0 -40px;
      display: flex;
      align-items: center;
      justify-content: right;
      flex-direction: row-reverse;
      gap: 25px;
      padding: 0 6%;
      transform: translateY(-40px);
      .p {
        font-size: 12px;
      }
      .user_img {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        transform: translateY(-50px);
        position: relative;
        img {
          width: 150px;
          height: 150px;
          border-radius: 50%;
          box-shadow: 0px 0px 9px -3px #00ffca;
        }
        &::before {
          content: "";
          top: 4px;
          right: 25px;
          position: absolute;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #16ff00;
          z-index: 0;
        }
      }
      .user_inform {
        margin-top: 28px;
        h1 {
          font-size: calc(15px + 0.3vw);
          margin-bottom: 5px;
        }
        span {
          display: block;
        }
      }
    }
  }
}
</style>

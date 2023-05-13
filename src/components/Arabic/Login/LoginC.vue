<template>
  <div class="login">
    <div class="container">
      <div class="login_body">
        <div class="login_fead">
          <h1 class="h1">تسجيل الدخول</h1>
          <p class="p">يمكنك الدخول من خلال</p>
          <div class="social_button">
            <button>
              <img src="@/assets/img/google.png" alt="google" />
              <span class="span">الدخول بحساب جوجل</span>
            </button>
            <button>
              <img src="@/assets/img/facebbok.png" alt="facebbok" />
              <span class="span">الدخول بحساب الفيسبوك</span>
            </button>
          </div>
        </div>
        <p class="ao">او</p>
        <div class="email_body">
          <div class="email">
            <i class="fa-regular fa-envelope"></i>
            <input
              type="email"
              v-model="state.email"
              placeholder="البريد الالكترونى او اسم المستخدم"
            />
          </div>
          <span class="error-feedback" v-if="v$.email.$error">
            {{ v$.email.$errors[0].$message }}
          </span>
          <div class="pass">
            <i class="fa-solid fa-unlock-keyhole"></i>
            <input
              type="password"
              v-model="state.pass"
              placeholder="كلمة المرور"
              id="password"
            />
            <i class="fa-solid fa-eye" @click="password()"></i>
          </div>
          <span class="error-feedback" v-if="v$.pass.$error">
            {{ v$.pass.$errors[0].$message }}
          </span>
          <span class="error-feedback" v-if="passCon">
            check Your Password
          </span>
          <div class="rember">
            <div class="check">
              <input type="checkbox" name="check" />
              <span>تذكرنى</span>
            </div>
            <p>هل نسيب كلمت المرور ؟</p>
          </div>
          <div class="log">
            <button class="button" @click="loginUser()">تسجيل الدخول</button>
            <p>
              ليس لديك حساب ؟
              <router-link to="/SignOut">انشء حساب جديد</router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapActions } from "vuex";
import useValidate from "@vuelidate/core";
import { email, required } from "@vuelidate/validators";
import { reactive, computed } from "vue";
export default {
  name: "LoginC",
  data() {
    return {
      typePassword: false,
      passCon: false,
    };
  },
  setup() {
    const state = reactive({
      pass: "",
      email: "",
    });
    const rules = computed(() => {
      return {
        email: { required, email },
        pass: { required },
      };
    });
    const v$ = useValidate(rules, state);
    return {
      state,
      v$,
    };
  },
  mounted() {},
  methods: {
    ...mapActions(["redirectTo"]),
    password() {
      let password = document.getElementById("password");
      this.typePassword
        ? password.setAttribute("type", "password")
        : password.setAttribute("type", "text");
      this.typePassword = !this.typePassword;
    },
    async loginUser() {
      this.v$.$validate();
      try {
        if (!this.v$.$error) {
          let user = await axios.get(
            `http://localhost:3000/users?email=${this.state.email}&password=${this.state.pass}`
          );
          if (user.status == 200 && user.data.length > 0) {
            window.localStorage.setItem(
              "userInfo",
              JSON.stringify(user.data[0])
            );
            this.passCon = false;
            this.redirectTo({ val: "Page" });
          } else {
            this.passCon = true;
          }
        }
      } catch {
        console.log("error");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  margin: 100px 0;
  text-align: center;
  .login_body {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 80px 0;
    box-shadow: 0px 0px 25px -5px var(--button-back);
    min-width: 450px;
    max-width: 600px;
    margin: 10px auto;
    border-radius: 10px;
    .login_fead {
      .social_button {
        display: flex;
        justify-content: center;
        gap: 20px;
        align-items: center;
        margin: 20px 0;
        button {
          display: flex;
          flex-direction: row-reverse;
          align-items: center;
          gap: 15px;
          border: none;
          padding: 12px;
          border-radius: 10px;
          img {
            width: 34px;
          }
          span {
            font-size: 18px;
            font-weight: normal;
            line-height: 1.7;
          }
        }
      }
    }
    .ao {
      font-size: 30px;
      position: relative;
      color: #4f4f4f61;
      &::after {
        position: absolute;
        content: "";
        width: 55px;
        height: 2px;
        background: #4f4f4f61;
        left: -61px;
        bottom: 18px;
      }
      &::before {
        position: absolute;
        content: "";
        width: 55px;
        height: 2px;
        background: #4f4f4f61;
        right: -61px;
        bottom: 18px;
      }
    }
    .email_body {
      direction: rtl;
      display: flex;
      flex-direction: column;
      gap: 22px;
      align-items: center;
      .error-feedback {
        color: red;
      }
      .email,
      .pass {
        display: flex;
        align-items: center;
        gap: 7px;
        background: color(srgb 0.94 0.94 0.94);
        width: 100%;
        padding: 12px;
        border-radius: 8px;
        input {
          border: none;
          outline: none;
          background: transparent;
          color: var(--button-back);
        }
      }
      .rember {
        display: flex;
        gap: 70px;
        color: color(srgb 0.53 0.5 0.6);
        input {
          margin-inline-end: 5px;
        }
      }
      .log {
        button {
          font-size: 20px;
          padding: 4px 25px;
          color: #fff;
          box-shadow: 0 0;
          font-weight: normal;
          transition: all 0.3s ease-in-out;
          border-radius: 2px;
          margin: -15px 0 0 0;
          &:hover {
            background: var(--button-back);
          }
        }
        p {
          margin: 20px 0 0 0;
          font-size: 18px;
          a {
            color: var(--button-back);
          }
        }
      }
    }
  }
}
</style>

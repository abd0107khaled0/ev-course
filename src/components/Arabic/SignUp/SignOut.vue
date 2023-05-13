<template>
  <div class="login">
    <div class="container">
      <div class="login_body">
        <div class="login_fead">
          <h1 class="h1">انشء حساب جديد</h1>
          <p class="p">يمكنك الاستمرار من خلال</p>
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
          <div class="name1">
            <i class="fa-regular fa-user"></i>
            <input
              required="required"
              type="text"
              placeholder="الاسم الاول"
              v-model="state.first_name"
            />
          </div>
          <span class="error-feedback" v-if="v$.first_name.$error">
            {{ v$.first_name.$errors[0].$message }}
          </span>
          <div class="name2">
            <i class="fa-regular fa-user"></i>
            <input
              required="required"
              type="text"
              placeholder="الاسم الاخير"
              v-model="state.last_name"
            />
          </div>
          <span class="error-feedback" v-if="v$.last_name.$error">
            {{ v$.last_name.$errors[0].$message }}
          </span>
          <div class="email">
            <i class="fa-solid fa-user"></i>
            <input
              required="required"
              type="text"
              v-model="state.username"
              placeholder="اسم المستخدم"
            />
          </div>
          <span class="error-feedback" v-if="v$.username.$error">
            {{ v$.username.$errors[0].$message }}
          </span>
          <div class="email">
            <i class="fa-regular fa-envelope"></i>
            <input
              required="required"
              type="email"
              v-model="state.email"
              placeholder="البريد الالكترونى"
            />
          </div>
          <span class="error-feedback" v-if="v$.email.$error">
            {{ v$.email.$errors[0].$message }}
          </span>
          <span class="error-feedback" v-if="emailE"> {{ emailE }}</span>
          <div class="phone name2">
            <i class="fa fa-phone"></i>
            <input type="text" placeholder="رقم الهاتف" v-model="state.phone" />
          </div>
          <span class="error-feedback" v-if="v$.phone.$error">
            {{ v$.phone.$errors[0].$message }}
          </span>
          <div class="dob name2">
            <input type="date" v-model="state.dob" />
          </div>
          <span class="error-feedback" v-if="v$.dob.$error">
            {{ v$.dob.$errors[0].$message }}
          </span>
          <div class="gender">
            <span class="nots">النوع</span>
            <div class="genM">
              <input type="radio" value="ذكر" v-model="state.gender" /><label
                >ذكر</label
              >
            </div>
            <div class="genF">
              <input type="radio" value="انثى" v-model="state.gender" /><label
                >انثى</label
              >
            </div>
          </div>
          <span class="error-feedback" v-if="v$.gender.$error">
            {{ v$.gender.$errors[0].$message }}
          </span>
          <div class="pass">
            <i class="fa-solid fa-unlock-keyhole"></i>
            <input
              required="required"
              type="password"
              v-model="state.password"
              placeholder="كلمة المرور"
              id="password"
            />
            <i class="fa-solid fa-eye" @click="password()"></i>
          </div>
          <span class="error-feedback" v-if="v$.password.$error">
            {{ v$.password.$errors[0].$message }}
          </span>
          <div class="pass">
            <i class="fa-solid fa-unlock-keyhole"></i>
            <input
              required="required"
              type="password"
              v-model="state.password_confirmation"
              placeholder="كلمة المرور"
              id="password2"
            />
            <i class="fa-solid fa-eye" @click="password2()"></i>
          </div>
          <span class="error-feedback" v-if="passE">
            {{ passE }}
          </span>
          <span class="error-feedback" v-if="v$.password_confirmation.$error">
            {{ v$.password_confirmation.$errors[0].$message }}
          </span>
          <div class="rember">
            <div class="check">
              <input type="checkbox" name="check" />
              <span class="nots">تذكرنى</span>
            </div>
            <p class="nots">هل نسيب كلمت المرور ؟</p>
          </div>
          <div class="log">
            <button class="button" @click="loginUser()">انشاء</button>
            <p class="nots">
              لديك حساب ؟
              <router-link to="/Login">تسجيل الدخول</router-link>
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
import { email, required, minLength } from "@vuelidate/validators";
import { reactive, computed } from "vue";
// import { GoogleSignInButton } from "vue3-google-signin";
export default {
  name: "SignOut",
  data() {
    return {
      typePassword: false,
      emailE: "",
      passE: "",
    };
  },
  setup() {
    // const Vue3GoogleOauth = inject("Vue3GoogleOauth");
    const state = reactive({
      email: "",
      password: "",
      password_confirmation: "",
      first_name: "",
      last_name: "",
      username: "",
      dob: "",
      gender: "",
      phone: "",
    });
    const rules = computed(() => {
      return {
        email: { required, email },
        password: { required },
        password_confirmation: { required },
        first_name: { required },
        last_name: { required },
        username: { required },
        dob: { required },
        gender: { required },
        phone: { required, minLength: minLength(11) },
      };
    });
    const v$ = useValidate(rules, state);
    return {
      state,
      v$,
      // Vue3GoogleOauth,
    };
  },
  mounted() {
    // this.loginUser();
  },
  methods: {
    ...mapActions(["redirectTo"]),
    async handleSignIn() {
      try {
        const googleUser = await this.$gAuth.signIn();
        console.log(googleUser.getId());
        console.log(googleUser.getBasicProfile());
        console.log(googleUser.getAuthResponse());
        if (!googleUser) {
          return null;
        }
      } catch (error) {
        console.log(error);
        console.log("error");
      }
    },
    password() {
      let password = document.getElementById("password");
      this.typePassword
        ? password.setAttribute("type", "password")
        : password.setAttribute("type", "text");
      this.typePassword = !this.typePassword;
    },
    password2() {
      let password = document.getElementById("password2");
      this.typePassword
        ? password.setAttribute("type", "password")
        : password.setAttribute("type", "text");
      this.typePassword = !this.typePassword;
    },
    async loginUser() {
      this.v$.$validate();
      try {
        if (!this.v$.$error) {
          let cheEmail = await axios.get(
            `http://localhost:3000/users?email=${this.state.email}`
          );
          if (
            this.state.password == this.state.password_confirmation &&
            cheEmail.data.length == 0
          ) {
            this.emailE = "";
            this.passE = "";
            let user = await axios.post("http://localhost:3000/users", {
              email: this.state.email,
              phone: this.state.phone,
              password: this.state.password,
              password_confirmation: this.state.password_confirmation,
              first_name: this.state.first_name,
              last_name: this.state.last_name,
              username: this.state.username,
              gender: this.state.gender,
              dob: this.state.dob,
            });
            let user_inform = await axios.post(
              `http://localhost:3000/users_inform`,
              {
                user_id: user.data.id,
                important: [],
              }
            );
            console.log(user_inform);
            console.log(user.data.id);
            console.log("hello");
            if (user.status == 201 && user_inform.status == 201) {
              this.redirectTo({ val: "Success" });
            }
          } else {
            if (cheEmail.data.length > 0) {
              this.emailE = "email is exists ";
            } else if (
              this.state.password != this.state.password_confirmation
            ) {
              this.emailE = "";
              this.passE = "should password are identical";
            }
          }
        } else {
          console.log(this.v$.$error);
        }
      } catch (error) {
        console.log(error);
        console.log("error vklwr");
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
      .email,
      .pass,
      .name1,
      .name2 {
        justify-content: space-between;
        display: flex;
        align-items: center;
        gap: 7px;
        background: color(srgb 0.94 0.94 0.94);
        width: 100%;
        padding: 12px;
        border-radius: 8px;
        cursor: pointer;
        input {
          cursor: pointer;
          border: none;
          outline: none;
          background: transparent;
          color: var(--button-back);
          // font-size: 18px;
          ::placeholder {
            font-weight: bold;
          }
        }
      }
      span:not(.nots),
      p:not(.nots) {
        color: red !important;
        font-weight: bold;
      }
      .phone {
        i {
          transform: rotate(245deg);
        }
      }
      .gender {
        display: flex;
        background: #f0f0f0;
        align-items: center;
        width: 100%;
        padding: 8px;
        border-radius: 8px;
        justify-content: space-between;
        font-size: 18px;
        span {
          color: var(--button-back);
        }
        .genM,
        .genF {
          input {
            cursor: pointer;
          }
          label {
            margin: 0 6px;
          }
        }
      }
      .rember {
        display: flex;
        gap: 70px;
        color: color(srgb 0.53 0.5 0.6);
        input {
          margin-inline-end: 5px;
        }
        p {
          cursor: pointer;
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

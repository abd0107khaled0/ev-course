<template>
  <div class="export">
    <div class="container">
      <div class="_body">
        <form action="#">
          <div class="name">
            <div class="label">
              <label for="first-name">الاسم الاول</label>
              <i class="fa fa-star"></i>
            </div>
            <input type="text" v-model="state.first_name" />
            <span class="error-feedback" v-if="v$.first_name.$error">
              {{ v$.first_name.$errors[0].$message }}
            </span>
          </div>
          <div class="name">
            <div class="label">
              <label for="last-name">الاسم الاخير</label>
              <i class="fa fa-star"></i>
            </div>
            <input type="text" v-model="state.last_name" />
            <span class="error-feedback" v-if="v$.last_name.$error">
              {{ v$.last_name.$errors[0].$message }}
            </span>
          </div>
          <div class="name">
            <div class="label">
              <label for="email">البريد الالكترونى</label>
              <i class="fa fa-star"></i>
            </div>
            <input type="email" v-model="state.email" />
            <span class="error-feedback" v-if="v$.email.$error">
              {{ v$.email.$errors[0].$message }}
            </span>
          </div>
          <div class="name">
            <div class="label">
              <label for="phone">رقم الهاتف</label>
              <i class="fa fa-star"></i>
            </div>
            <input type="text" v-model="state.phone" />
            <span class="error-feedback" v-if="v$.phone.$error">
              {{ v$.phone.$errors[0].$message }}
            </span>
          </div>
          <div class="name">
            <div class="label">
              <label for="linkedin">صفحة Linkedin الشخصيه</label>
              <i class="fa fa-star"></i>
            </div>
            <input type="text" v-model="state.Linked_in" />
            <span class="error-feedback" v-if="v$.Linked_in.$error">
              {{ v$.Linked_in.$errors[0].$message }}
            </span>
          </div>
          <div class="name">
            <div class="label">
              <label for="facebook">صفحة Facebook الشخصيه</label>
            </div>
            <input type="text" v-model="state.facebook" />
            <span class="error-feedback" v-if="v$.facebook.$error">
              {{ v$.facebook.$errors[0].$message }}
            </span>
          </div>
          <div class="name">
            <div class="label">
              <label for="type">نوع المحتوى الذى سوفه تقدمه ؟</label>
              <i class="fa fa-star"></i>
            </div>
            <input type="text" v-model="state.type" />
            <span class="error-feedback" v-if="v$.type.$error">
              {{ v$.type.$errors[0].$message }}
            </span>
          </div>
          <div class="name">
            <div class="label">
              <label for="file">ارفع عينه من المحتوى</label>
              <i class="fa fa-star"></i>
            </div>
            <input type="file" name="" id="" accept=".mp4" />
          </div>
          <div class="name">
            <div class="label">
              <label for="file">ارفع CV</label>
              <i class="fa fa-star"></i>
            </div>
            <input type="file" name="" id="" accept=".doc,.pdf,.docx" />
          </div>
          <input type="submit" value="ارسال" @click="Data()" class="button" />
        </form>
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
  name: "ExpertC1",
  setup() {
    const state = reactive({
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      Linked_in: "",
      facebook: "",
      type: "",
      file: "",
      fileCv: "",
    });
    const rules = computed(() => {
      return {
        first_name: { required },
        last_name: { required },
        email: { required, email },
        phone: { required },
        Linked_in: { required },
        facebook: { required },
        type: { required },
        file: { required },
        fileCv: { required },
      };
    });
    const v$ = useValidate(rules, state);
    return {
      state,
      v$,
    };
  },
  methods: {
    ...mapActions(["redirectTo"]),
    async Data() {
      this.v$.$validate();
      try {
        if (!this.v$.$error) {
          let user = await axios.post("http://localhost:3000/users", {
            email: this.state.email,
            password: this.state.password,
            password_confirmation: this.state.password_confirmation,
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            username: this.state.username,
          });
          if (user.status == 201) {
            console.log(user.data);
          } else {
            console.log("this is error");
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
.export {
  padding: 150px 0 90px;
  .container {
    padding: 0;
  }
  form {
    text-align: center;
    box-shadow: 0px 0px 25px -5px var(--button-back);
    border-radius: 10px;
    padding: 50px 3%;
    min-width: 450px;
    max-width: 600px;
    margin: 10px auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    & > div {
      width: 100%;
      margin: 15px 0;
      text-align: right;
      .label {
        direction: rtl;
        display: flex;
        align-items: center;
        gap: 8px;
        i {
          font-size: 7px;
          color: var(--button-back);
        }
      }
      input[type="file"] {
        direction: rtl;
        color: var(--button-back);
        margin-top: 10px;
        &::file-selector-button {
          border: none;
          cursor: pointer;
          padding: 0.2em 0.4em;
          border-radius: 0.2em;
          background-color: var(--background-color);
          transition: 1s;
        }
      }
      input:not([type="file"]) {
        width: 100%;
        border-radius: 10px;
        padding: 11px;
        direction: rtl;
        border: none;
        outline: none;
        background: var(--background-color);
        color: var(--button-back);
      }
    }
    input[type="submit"] {
      font-size: 20px;
      padding: 4px 25px;
      color: #fff;
      box-shadow: 0 0;
      font-weight: normal;
      transition: all 0.3s ease-in-out;
      border-radius: 2px;
      margin-bottom: -5px;
      &:hover {
        background: var(--button-back);
      }
    }
  }
}
</style>

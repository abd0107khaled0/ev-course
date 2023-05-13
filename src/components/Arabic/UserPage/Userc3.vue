<template>
  <div class="usec3">
    <div class="container">
      <div class="user_bod">
        <h1 class="h1">بيانات الحساب</h1>
        <div class="box_user">
          <div class="box">
            <h6 class="p">كلمة المرور</h6>
            <p class="p">*************</p>
            <button
              type="button"
              class="btn btn-primary button"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdropo"
            >
              تغير كلمة المرور
            </button>
          </div>

          <!-- Modal -->
          <div
            class="modal fade"
            id="staticBackdropo"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabindex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
            style="padding: 0 !important"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="staticBackdropLabel">
                    قائمة التعديلات
                  </h1>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <i class="fa-solid fa-xmark"></i>
                  </button>
                </div>
                <div class="modal-body">
                  <input
                    type="text"
                    class="form-control"
                    v-model="password_old"
                  />
                  <input
                    type="text"
                    class="form-control"
                    v-model="password_new"
                  />
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    اغلاق
                  </button>
                  <button type="button" class="btn btn-primary">تعديل</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="box_user">
          <div class="box">
            <h6 class="p">رقم الهاتف المحمول</h6>
            <p class="p">+2{{ wordPhone }}</p>
            <button
              type="button"
              class="btn btn-primary button"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdropt"
            >
              تعديل رقم المحمول
            </button>
          </div>

          <!-- Modal -->
          <div
            class="modal fade"
            id="staticBackdropt"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabindex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
            style="padding: 0 !important"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="staticBackdropLabel">
                    قائمة التعديلات
                  </h1>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <i class="fa-solid fa-xmark"></i>
                  </button>
                </div>
                <div class="modal-body">
                  <input type="text" class="form-control" v-model="phone_old" />
                  <input type="text" class="form-control" v-model="phone_new" />
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    اغلاق
                  </button>
                  <button type="button" class="btn btn-primary">تعديل</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "UserC3",
  data() {
    return {
      password_old: "",
      password_new: "",
      phone_new: "",
      phone_old: "",
    };
  },
  mounted() {
    let user = JSON.parse(localStorage.getItem("userInfo"));
    this.userInfo({ email: user.email });
  },
  computed: {
    ...mapState(["wordPass", "wordPhone"]),
  },
  methods: {
    ...mapMutations(["userInfo"]),
  },
};
</script>

<style lang="scss" scoped>
.usec3 {
  margin: 50px 0;
  .modal {
    padding: 0 !important;
    margin: 151px auto;
  }
  .user_bod {
    border: 1px solid var(--button-back);
    text-align: right;
    padding: 50px 20px;
    h1 {
      margin-bottom: 20px;
      font-size: calc(24px + 0.9vw);
    }
    .box_user {
      .box {
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        justify-content: right;
        gap: 100px;
      }
      .button {
        color: #fff;
        font-size: 18px;
        padding: 10px 30px;
        border-radius: 5px;
        box-shadow: none;
        font-weight: bold;
        &:hover {
          color: var(--button-back);
          background: #fff;
        }
      }
    }
  }
}
@media (max-width: 768px) {
  .usec3 {
    h1 {
      text-align: center !important;
    }
    .box {
      flex-direction: column !important;
      gap: 20px !important;
      margin: 20px 0;
    }
  }
}
</style>

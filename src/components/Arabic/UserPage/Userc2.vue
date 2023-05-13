<template>
  <div class="userc2">
    <div class="container">
      <ul class="list_body">
        <li @click="showAH('acount')" class="bil acount active">الحساب</li>
        <li @click="showAH('importQ')" class="bil importQ">الاهتمامات</li>
        <li @click="showAH('store')" class="bil store">سجل الشراء</li>
        <li @click="showAH('inform')" class="bil inform">معلومات الدفع</li>
      </ul>
      <div class="user_body">
        <!-- acount  -->
        <div class="box acount" v-if="acount">
          <h4 class="h1">البيانات الشخصيه</h4>
          <ul>
            <li>
              <h6>الاسم الاول</h6>
              <span class="p"> {{ first_name }}</span>
            </li>
            <li>
              <h6>الاسم الاخير</h6>
              <span class="p"> {{ last_name }}</span>
            </li>
            <li>
              <h6>اسم المستخدم</h6>
              <span class="p"> {{ username }}</span>
            </li>
            <li>
              <h6>البريد الالكترونى</h6>
              <span class="p"> {{ email }}</span>
            </li>
            <li>
              <h6>النوع</h6>
              <div class="spans">
                <span class="p m">ذكر</span>
                <span class="p f">انثى</span>
              </div>
            </li>
            <li>
              <h6>تاريخ الميلاد</h6>
              <div class="span">
                <span class="p">{{ dob[0] }}</span>
                <span class="p">{{ dob[1] }}</span>
                <span class="p">{{ dob[2] }}</span>
              </div>
            </li>
          </ul>

          <!-- Button trigger modal -->
          <button
            type="button"
            class="btn btn-primary button"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            تعديل
          </button>

          <!-- Modal -->
          <div
            class="modal fade"
            id="staticBackdrop"
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
                  <input type="text" class="form-control" v-model="name" />
                  <input type="text" class="form-control" v-model="password" />
                  <input type="text" class="form-control" v-model="usernamew" />
                  <input type="text" class="form-control" v-model="genderd" />
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
        <!-- important  -->
        <div class="box import" v-if="importQ">
          <h4 class="h1">ماهى اهتماماتك ؟</h4>
          <p class="p">اختر اهتماماتك</p>
          <span class="span1"> يمكنك ان تختار اكتر من نوع *</span>
          <div class="selected">
            <div
              class="child_select"
              v-for="important in importantP"
              :key="important.id"
            >
              <span @click="iclose">{{ important }}</span>
              <i class="fa-solid fa-xmark" @click="iclose"></i>
            </div>
          </div>
          <div class="imprtant">
            <ul class="myImportant">
              <li v-for="myImportant in myImportant" :key="myImportant.id">
                <span>{{ myImportant }}</span>
                <i class="fa-solid fa-plus" @click="iPlus"></i>
              </li>
            </ul>
          </div>
        </div>
        <!-- store  -->
        <div class="box store" v-if="store">
          <h4 class="h1">مشترياتك</h4>
          <div class="puyed">
            <div class="pay">
              <img src="https://placeholder.co/300/300" alt="" />
              <div class="inform">
                <h6 class="h1">التسويق الالكترونى</h6>
                <ul>
                  <li>
                    <p class="p">20مقطع</p>
                  </li>
                  <li>
                    <span>اخمد هالد</span>
                  </li>
                  <li>
                    <p class="p">اخر نشاط فى 7 مارس</p>
                  </li>
                </ul>
              </div>
            </div>
            <div class="pay">
              <img src="https://placeholder.co/300/300" alt="" />
              <div class="inform">
                <h6 class="h1">التسويق الالكترونى</h6>
                <ul>
                  <li>
                    <p class="p">20مقطع</p>
                  </li>
                  <li>
                    <span>اخمد هالد</span>
                  </li>
                  <li>
                    <p class="p">اخر نشاط فى 7 مارس</p>
                  </li>
                </ul>
              </div>
            </div>
            <div class="pay">
              <img src="https://placeholder.co/300/300" alt="" />
              <div class="inform">
                <h6 class="h1">التسويق الالكترونى</h6>
                <ul>
                  <li>
                    <p class="p">20مقطع</p>
                  </li>
                  <li>
                    <span>اخمد هالد</span>
                  </li>
                  <li>
                    <p class="p">اخر نشاط فى 7 مارس</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <!-- inform  -->
        <div class="box inform" v-if="inform">
          <h4 class="h1">معلومات الدفع</h4>
          <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion accordion-flush" id="accordionFlushExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingOne">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    <img src="@/assets/img/v.png" alt="" />
                    <span>فودافون كاش</span>
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    Placeholder content for this accordion, which is intended to
                    demonstrate the <code>.accordion-flush</code> class. This is
                    the first item's accordion body.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingTwo">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    <img src="@/assets/img/f.png" alt="" />
                    <span>فورى</span>
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingTwo"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    Placeholder content for this accordion, which is intended to
                    demonstrate the <code>.accordion-flush</code> class. This is
                    the second item's accordion body. Let's imagine this being
                    filled with some actual content.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingThree">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    <img src="@/assets/img/c.jpg" alt="" />
                    <span>بطائقة الائتمان</span>
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingThree"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    Placeholder content for this accordion, which is intended to
                    demonstrate the <code>.accordion-flush</code> class. This is
                    the third item's accordion body. Nothing more exciting
                    happening here in terms of content, but just filling up the
                    space to make it look, at least at first glance, a bit more
                    representative of how this would look in a real-world
                    application.
                  </div>
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
import { mapActions } from "vuex";
import axios from "axios";
export default {
  name: "UserC2",
  data() {
    return {
      acount: true,
      importQ: false,
      store: false,
      inform: false,
      first_name: "",
      last_name: "",
      username: "",
      email: "",
      dob: "",
      importantP: [],
      myImportant: [],
      id: "",
    };
  },
  async mounted() {
    let user = JSON.parse(localStorage.getItem("userInfo"));
    if (!user) {
      this.redirectTo({ name: "Home" });
    } else {
      this.id = user.id;
      this.first_name = user.first_name;
      this.last_name = user.last_name;
      this.username = user.username;
      this.email = user.email;
      this.dob = user.dob.split("-");
      try {
        let user_inform = await axios.get(
          `http://localhost:3000/users_inform?user_id=${user.id}`
        );
        let myImportant = await axios.get(`http://localhost:3000/myImportant`);
        if (user_inform.status == 200 && myImportant.status == 200) {
          this.importantP = user_inform.data[0].important;
          this.myImportant = myImportant.data;
        } else {
          this.importantP = [];
          this.myImportant = [];
        }
      } catch (error) {
        console.log(error);
      }
    }
    this.type(user.gender);
  },
  methods: {
    ...mapActions(["redirectTo"]),
    type(e) {
      if (this.acount) {
        if (e == "ذكر") {
          document.querySelector(".userc2 .spans .m").classList.add("type");
        } else {
          document.querySelector(".userc2 .spans .f").classList.add("type");
        }
      }
    },
    async iclose(eo) {
      let d = eo.target.parentElement.childNodes[0].textContent;
      let index = this.importantP.indexOf(d);
      this.importantP.splice(index, 1);
      // for (let i = 0; i < this.importantP.length; i++) {
      //   if (d == [this.importantP[i]]) {
      //     this.importantP.splice(i, 1);
      //     break;
      //   }
      // }
      try {
        let patchs = await axios.patch(
          `http://localhost:3000/users_inform/${this.id}`,
          {
            important: this.importantP,
          }
        );
        if (patchs.status == 200) {
          console.log("r");
        }
      } catch (error) {
        console.log(error);
      }
    },
    async iPlus(eo) {
      let d = eo.target.parentElement.childNodes[0].textContent;
      // let index = this.importantP.indexOf(d);
      // this.importantP.splice(index, 1);
      if (!this.importantP.includes(d)) {
        this.importantP.push(d);
        try {
          let plus = await axios.patch(
            `http://localhost:3000/users_inform/${this.id}`,
            {
              important: this.importantP,
            }
          );
          if (plus.status == 200) {
            console.log("r");
          }
        } catch (error) {
          console.log(error);
        }
      }
      console.log(d);
      console.log(eo);
      console.log(this.importantP);
    },
    showAH(e) {
      this.acount = false;
      this.importQ = false;
      this.store = false;
      this.inform = false;
      this[e] = true;
      let allB = document.querySelectorAll(".userc2 .list_body li");
      let active = document.querySelector(`.userc2 .${e}`);
      allB.forEach((e) => {
        e.classList.remove("active");
      });
      console.log(active);
      active.classList.add("active");
    },
  },
};
</script>

<style lang="scss" scoped>
.userc2 {
  .active {
    color: var(--button-back);
  }
  .list_body {
    display: flex;
    align-items: center;
    margin-bottom: 35px;
    justify-content: right;
    flex-direction: row-reverse;
    gap: 35px;
    font-size: 24px;
    li {
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      font-weight: bold;
      &:hover {
        color: var(--button-back);
      }
    }
  }
  .user_body {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    border: 1px solid var(--button-back);
    padding: 35px 0 50px;
    height: 660px;
    overflow-y: scroll;
    .acount,
    .store,
    .import,
    .inform {
      width: 100%;
      height: 100%;
      text-align: right;
      padding: 20px;
      h4 {
        font-size: calc(24px + 0.9vw);
      }
    }
    .acount {
      ul {
        li {
          margin: 25px 0;
          display: flex;
          justify-content: right;
          align-items: center;
          gap: 100px;
          font-size: 24px;
          flex-direction: row-reverse;
          cursor: pointer;
          span {
            transition: all 0.3s ease-in-out;
          }
          h6 {
            font-size: 24px;
            font-weight: bold;
          }
          .spans {
            display: flex;
            gap: 5px;
            margin: 0 70px 0 0;
            span {
              background: transparent;
              color: #000;
              padding: 2px 80px;
              border-radius: 4px;
              border: 1px solid var(--button-back);
              &.type {
                background: var(--button-back);
                color: #fff;
              }
            }
          }
          .span {
            display: flex;
            gap: 5px;
            margin: 0 11px 0 0;
            span {
              background: #4d4d4d;
              color: #fff;
              padding: 2px 46px;
              border-radius: 4px;
            }
          }
          &:hover {
            span:not(:nth-child(1), :nth-child(2), :last-child) {
              color: var(--button-back);
            }
          }
        }
      }
      button {
        color: #fff;
        font-size: 18px;
        padding: 10px 30px;
        border-radius: 5px;
        box-shadow: none;
        font-weight: bold;
        &:hover {
          color: #fff;
          background: var(--button-back);
        }
      }
      .modal {
        .btn-close {
          i {
            font-size: 30px;
            font-weight: bold;
            color: #000000;
            top: 16px;
            position: absolute;
            right: 38px;
          }
          &:hover {
            color: #000 !important;
            background: transparent !important;
          }
        }
        .modal-body {
          input {
            margin-bottom: 20px;
          }
        }
      }
    }
    .import {
      .span1 {
        color: var(--button-back);
        font-size: 18px;
      }
      .selected {
        display: flex;
        justify-content: right;
        gap: 40px;
        flex-wrap: wrap;
        align-items: center;
        margin: 25px 0;
        .child_select {
          position: relative;
          cursor: pointer;
          span {
            background: #4d4d4d;
            color: #fff;
            padding: 8px 40px;
            border-radius: 4px;
          }
          i {
            position: absolute;
            color: red;
            left: 4px;
            top: 1px;
            padding: 5px;
            display: none;
            transition: all 0.3s ease-in-out;
          }
          &:hover {
            i {
              display: block;
            }
          }
        }
      }
      .imprtant {
        width: 700px;
        margin: 80px auto;
        height: 200px;
        overflow-y: overlay;
        .myImportant {
          width: 100%;
          display: flex;
          justify-content: right;
          gap: 40px;
          flex-wrap: wrap;
          align-items: center;
          margin: 3px 0 0 0;
          li {
            cursor: pointer;
            position: relative;
            span {
              background: #eee;
              color: var(--button-back);
              padding: 8px 40px;
              border-radius: 4px;
            }
            i {
              position: absolute;
              color: #16ff00;
              left: 4px;
              top: 1px;
              padding: 5px;
              display: none;
              transition: all 0.3s ease-in-out;
            }
            &:hover {
              i {
                display: block;
              }
            }
          }
        }
      }
    }
    // store
    .store {
      .puyed {
        display: flex;
        justify-content: right;
        gap: 40px;
        flex-direction: column;
        .pay {
          display: flex;
          flex-direction: row-reverse;
          gap: 30px;
          align-items: center;
          background: #eee;
          border-radius: 10px;
          img {
            width: 200px;
            height: 200px;
            border-top-right-radius: 10px;
            border-bottom-right-radius: 10px;
          }
          .inform {
            h6 {
              font-size: calc(18px + 0.5vw);
            }
            ul {
              li {
                cursor: pointer;
                p,
                span {
                  font-size: 18px;
                  color: black;
                  opacity: 0.6;
                  transition: all 0.3s ease-in-out;
                  &:hover {
                    opacity: 1;
                  }
                }
              }
            }
          }
        }
      }
    }
    //inform
    .inform {
      .accordion-flush {
        margin-block: 15px;
        direction: rtl;
        button {
          display: flex;
          flex-direction: row;
          gap: 20px;
          img {
            width: 80px;
            height: 50px;
            object-fit: cover;
          }
        }
        .accordion-button::after {
          margin-inline: auto 0px !important;
        }
        button {
          font-size: 24px;
        }
      }
    }
  }
}
@media (max-width: 768px) {
  .userc2 {
    .spans,
    .span {
      flex-direction: column;
    }
    .spans {
      span {
        padding: 1px 51px !important;
      }
    }
  }
}
@media (max-width: 992px) {
  .user_body {
  }
  .import {
    .imprtant {
      width: 481px !important;
    }
  }
}
@media (max-width: 768px) {
  .user_body {
    .import {
      text-align: center !important;
    }
    .selected {
      justify-content: center !important;
    }
    .myImportant {
      justify-content: center !important;
    }
  }
}
@media (max-width: 555px) {
  .user_body {
  }
  .import {
    .imprtant {
      width: 420px !important;
    }
  }
}
</style>

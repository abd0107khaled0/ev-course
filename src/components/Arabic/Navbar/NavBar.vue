<template>
  <nav>
    <div class="container">
      <div class="nav_body">
        <div class="nav_inform1">
          <ul>
            <li>{{ this.NameProject }}</li>
            <li @click="scrollT()" class="nolog" v-if="home">
              <router-link to="/" class="router_link">الرئيسيه</router-link>
            </li>
            <li @click="scrollT()" class="lo" v-if="page">
              <router-link to="/Page" class="router_link">الرئيسيه</router-link>
            </li>
            <li class="dropdown-toggle" @click="scrollT()">
              <router-link to="/Dawarat" class="router_link"
                >الدورات</router-link
              >
              <div class="slides">
                <ul>
                  <li>الفئات</li>
                  <li>
                    <router-link :to="{ name: 'Dawarat' }">
                      ادارة الاعمال<i class="fa-solid fa-chevron-left"></i>
                    </router-link>
                    <div class="card_box">
                      <div class="card_box_body">
                        <img src="@/assets/img/dataS1.jpg" alt="" />
                        <div class="card_box_slide">
                          <h5>ادارة الاعمال</h5>
                          <span>احمد محمود</span>
                        </div>
                      </div>
                      <div class="card_box_body">
                        <img src="@/assets/img/dataS2.jpg" alt="" />
                        <div class="card_box_slide">
                          <h5>ادارة الاعمال</h5>
                          <span>احمد محمود</span>
                        </div>
                      </div>
                      <div class="card_box_body">
                        <img
                          src="@/assets/img/bram-naus-n8Qb1ZAkK88-unsplash.jpg"
                          alt=""
                        />
                        <div class="card_box_slide">
                          <h5>ادارة الاعمال</h5>
                          <span>احمد محمود</span>
                        </div>
                      </div>
                      <button class="card_button">
                        <router-link :to="{ name: 'Dawarat' }"
                          >اعرض المزيد</router-link
                        >
                      </button>
                    </div>
                  </li>
                  <li>
                    <router-link :to="{ name: 'Dawarat' }">
                      اللغات<i class="fa-solid fa-chevron-left"></i>
                    </router-link>
                    <div class="card_box">
                      <div class="card_box_body">
                        <img src="@/assets/img/dataS1.jpg" alt="" />
                        <div class="card_box_slide">
                          <h5>ادارة الاعمال</h5>
                          <span>احمد محمود</span>
                        </div>
                      </div>
                      <div class="card_box_body">
                        <img src="@/assets/img/dataS2.jpg" alt="" />
                        <div class="card_box_slide">
                          <h5>ادارة الاعمال</h5>
                          <span>احمد محمود</span>
                        </div>
                      </div>
                      <div class="card_box_body">
                        <img
                          src="@/assets/img/bram-naus-n8Qb1ZAkK88-unsplash.jpg"
                          alt=""
                        />
                        <div class="card_box_slide">
                          <h5>ادارة الاعمال</h5>
                          <span>احمد محمود</span>
                        </div>
                      </div>
                      <button class="card_button">
                        <router-link :to="{ name: 'Dawarat' }"
                          >اعرض المزيد</router-link
                        >
                      </button>
                    </div>
                  </li>
                  <li>
                    <router-link :to="{ name: 'Dawarat' }">
                      ريادة الاعمال<i class="fa-solid fa-chevron-left"></i
                    ></router-link>
                    <div class="card_box">
                      <div class="card_box_body">
                        <img src="@/assets/img/dataS1.jpg" alt="" />
                        <div class="card_box_slide">
                          <h5>ادارة الاعمال</h5>
                          <span>احمد محمود</span>
                        </div>
                      </div>
                      <div class="card_box_body">
                        <img src="@/assets/img/dataS2.jpg" alt="" />
                        <div class="card_box_slide">
                          <h5>ادارة الاعمال</h5>
                          <span>احمد محمود</span>
                        </div>
                      </div>
                      <div class="card_box_body">
                        <img
                          src="@/assets/img/bram-naus-n8Qb1ZAkK88-unsplash.jpg"
                          alt=""
                        />
                        <div class="card_box_slide">
                          <h5>ادارة الاعمال</h5>
                          <span>احمد محمود</span>
                        </div>
                      </div>
                      <button class="card_button">
                        <router-link :to="{ name: 'Dawarat' }"
                          >اعرض المزيد</router-link
                        >
                      </button>
                    </div>
                  </li>
                  <li>
                    <router-link :to="{ name: 'Dawarat' }">
                      العلوم والتكنلوجيا<i class="fa-solid fa-chevron-left"></i
                    ></router-link>
                    <div class="card_box">
                      <div class="card_box_body">
                        <img src="@/assets/img/dataS1.jpg" alt="" />
                        <div class="card_box_slide">
                          <h5>ادارة الاعمال</h5>
                          <span>احمد محمود</span>
                        </div>
                      </div>
                      <div class="card_box_body">
                        <img src="@/assets/img/dataS2.jpg" alt="" />
                        <div class="card_box_slide">
                          <h5>ادارة الاعمال</h5>
                          <span>احمد محمود</span>
                        </div>
                      </div>
                      <div class="card_box_body">
                        <img
                          src="@/assets/img/bram-naus-n8Qb1ZAkK88-unsplash.jpg"
                          alt=""
                        />
                        <div class="card_box_slide">
                          <h5>ادارة الاعمال</h5>
                          <span>احمد محمود</span>
                        </div>
                      </div>
                      <button class="card_button">
                        <router-link :to="{ name: 'Dawarat' }"
                          >اعرض المزيد</router-link
                        >
                      </button>
                    </div>
                  </li>
                  <li>
                    <router-link :to="{ name: 'Dawarat' }">
                      الفنون والعماره<i class="fa-solid fa-chevron-left"></i
                    ></router-link>
                    <div class="card_box">
                      <div class="card_box_body">
                        <img src="@/assets/img/dataS1.jpg" alt="" />
                        <div class="card_box_slide">
                          <h5>ادارة الاعمال</h5>
                          <span>احمد محمود</span>
                        </div>
                      </div>
                      <div class="card_box_body">
                        <img src="@/assets/img/dataS2.jpg" alt="" />
                        <div class="card_box_slide">
                          <h5>ادارة الاعمال</h5>
                          <span>احمد محمود</span>
                        </div>
                      </div>
                      <div class="card_box_body">
                        <img
                          src="@/assets/img/bram-naus-n8Qb1ZAkK88-unsplash.jpg"
                          alt=""
                        />
                        <div class="card_box_slide">
                          <h5>ادارة الاعمال</h5>
                          <span>احمد محمود</span>
                        </div>
                      </div>
                      <button class="card_button">
                        <router-link :to="{ name: 'Dawarat' }"
                          >اعرض المزيد</router-link
                        >
                      </button>
                    </div>
                  </li>
                  <li>
                    <router-link :to="{ name: 'Dawarat' }">
                      التربيه والعلاقات<i class="fa-solid fa-chevron-left"></i
                    ></router-link>
                    <div class="card_box">
                      <div class="card_box_body">
                        <img src="@/assets/img/dataS1.jpg" alt="" />
                        <div class="card_box_slide">
                          <h5>ادارة الاعمال</h5>
                          <span>احمد محمود</span>
                        </div>
                      </div>
                      <div class="card_box_body">
                        <img src="@/assets/img/dataS2.jpg" alt="" />
                        <div class="card_box_slide">
                          <h5>ادارة الاعمال</h5>
                          <span>احمد محمود</span>
                        </div>
                      </div>
                      <div class="card_box_body">
                        <img
                          src="@/assets/img/bram-naus-n8Qb1ZAkK88-unsplash.jpg"
                          alt=""
                        />
                        <div class="card_box_slide">
                          <h5>ادارة الاعمال</h5>
                          <span>احمد محمود</span>
                        </div>
                      </div>
                      <button class="card_button">
                        <router-link :to="{ name: 'Dawarat' }"
                          >اعرض المزيد</router-link
                        >
                      </button>
                    </div>
                  </li>
                  <li>
                    <router-link :to="{ name: 'Dawarat' }">
                      ريادة الاعمال<i class="fa-solid fa-chevron-left"></i
                    ></router-link>
                    <div class="card_box">
                      <div class="card_box_body">
                        <img src="@/assets/img/dataS1.jpg" alt="" />
                        <div class="card_box_slide">
                          <h5>ادارة الاعمال</h5>
                          <span>احمد محمود</span>
                        </div>
                      </div>
                      <div class="card_box_body">
                        <img src="@/assets/img/dataS2.jpg" alt="" />
                        <div class="card_box_slide">
                          <h5>ادارة الاعمال</h5>
                          <span>احمد محمود</span>
                        </div>
                      </div>
                      <div class="card_box_body">
                        <img
                          src="@/assets/img/bram-naus-n8Qb1ZAkK88-unsplash.jpg"
                          alt=""
                        />
                        <div class="card_box_slide">
                          <h5>ادارة الاعمال</h5>
                          <span>احمد محمود</span>
                        </div>
                      </div>
                      <button class="card_button">
                        <router-link :to="{ name: 'Dawarat' }"
                          >اعرض المزيد</router-link
                        >
                      </button>
                    </div>
                  </li>
                </ul>
                <button>
                  <router-link :to="{ name: 'Dawarat' }">
                    تصفح الدورات
                  </router-link>
                </button>
              </div>
            </li>
            <li class="dropdown-toggle" @click="scrollT()">
              <router-link to="/Alhadth" class="router_link"
                >الاحداث</router-link
              >
              <div class="slides">
                <ul>
                  <li>الفئات</li>
                  <li>
                    <router-link :to="{ name: 'Alhadth' }"
                      >ادارة الاعمال<i class="fa-solid fa-chevron-left"></i
                    ></router-link>
                  </li>
                  <li>
                    <router-link :to="{ name: 'Alhadth' }"
                      >اللغات<i class="fa-solid fa-chevron-left"></i
                    ></router-link>
                  </li>
                  <li>
                    <router-link :to="{ name: 'Alhadth' }"
                      >ريادة الاعمال<i class="fa-solid fa-chevron-left"></i
                    ></router-link>
                  </li>
                  <li>
                    <router-link :to="{ name: 'Alhadth' }">
                      العلوم والتكنلوجيا<i class="fa-solid fa-chevron-left"></i
                    ></router-link>
                  </li>
                  <li>
                    <router-link :to="{ name: 'Alhadth' }">
                      الفنون والعماره<i class="fa-solid fa-chevron-left"></i>
                    </router-link>
                  </li>
                  <li>
                    <router-link :to="{ name: 'Alhadth' }">
                      التربيه والعلاقات<i class="fa-solid fa-chevron-left"></i
                    ></router-link>
                  </li>
                  <li>
                    <router-link :to="{ name: 'Alhadth' }"
                      >ريادة الاعمال<i class="fa-solid fa-chevron-left"></i
                    ></router-link>
                  </li>
                </ul>
                <button>
                  <router-link :to="{ name: 'Alhadth' }">
                    تصفح الاحداث
                  </router-link>
                </button>
              </div>
            </li>
            <li @click="scrollT()">
              <router-link to="/Tzaker" class="router_link"
                >التذاكر</router-link
              >
            </li>
          </ul>
          <div class="icon" @click="showNav()">
            <i class="fa-solid fa-align-justify"></i>
          </div>
        </div>
        <div class="nav_inform2">
          <ul>
            <li>
              <input type="text" placeholder=" بحث " />
              <i class="fa-solid fa-magnifying-glass"></i>
            </li>
            <li class="child2">
              <i class="fa-solid fa-circle-half-stroke"></i>
            </li>
            <li class="login">
              <button>
                <router-link to="/login">تسجيل الدخول</router-link>
              </button>
            </li>
            <li class="login">
              <button class="last_child">
                <router-link to="/SignUp">انشاء حساب</router-link>
              </button>
            </li>
            <li class="logout bell">
              <i class="fa-regular fa-bell"></i>
              <div class="bell_box" v-if="hide">
                <p>لا توجد اشعارات جديده</p>
                <span class="p">سنقوم باخبارك بمجرد استلام اشعار جديد</span>
              </div>
              <div class="bell_box" v-if="show">
                <ul>
                  <li></li>
                </ul>
              </div>
            </li>
            <li class="logout user">
              <i class="fa-regular fa-user"></i>
              <div class="useinfo">
                <div class="info" @click="directTo()">
                  <i class="fa-regular fa-user"></i>
                  <div class="details">
                    <h4>{{ name }}</h4>
                    <p class="p">{{ email }}</p>
                  </div>
                </div>
                <ul class="ulo">
                  <li v-for="detail in details" :key="detail.id">
                    <i :class="detail.class"></i>
                    <router-link :to="{ name: detail.path }">{{
                      detail.name
                    }}</router-link>
                  </li>
                </ul>
                <ul class="ult">
                  <li>
                    <router-link to="/">سجل الشراء</router-link>
                  </li>
                  <li>
                    <router-link to="/Expert">التسجيل كخبير</router-link>
                  </li>
                  <li @click="logout()">
                    <a>تسجيل الخروج</a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="nav_body_small">
      <div class="overlay"></div>
      <div class="nav2">
        <div class="container">
          <div class="nav_inform2">
            <ul>
              <li>
                <!-- <i class="fa-solid fa-circle-half-stroke"></i> -->
              </li>
              <li class="login">
                <button>
                  <router-link to="/login">تسجيل الدخول</router-link>
                </button>
              </li>
              <li class="login">
                <button class="last_child">
                  <router-link to="/SignUp">انشاء حساب</router-link>
                </button>
              </li>
              <li class="logout bell">
                <i class="fa-regular fa-bell"></i>
                <div class="bell_box" v-if="hide">
                  <p>لا توجد اشعارات جديده</p>
                  <span class="p">سنقوم باخبارك بمجرد استلام اشعار جديد</span>
                </div>
                <div class="bell_box" v-if="show">
                  <ul>
                    <li></li>
                  </ul>
                </div>
              </li>
              <li class="logout user">
                <i class="fa-regular fa-user"></i>
                <div class="useinfo">
                  <div class="info" @click="directTo()">
                    <i class="fa-regular fa-user"></i>
                    <div class="details">
                      <h4>{{ name }}</h4>
                      <p class="p">{{ email }}</p>
                    </div>
                  </div>
                  <ul class="ulo">
                    <li v-for="detail in details" :key="detail.id">
                      <i :class="detail.class"></i>
                      <router-link :to="{ name: detail.path }">{{
                        detail.name
                      }}</router-link>
                    </li>
                  </ul>
                  <ul class="ult">
                    <li>
                      <router-link to="/">سجل الشراء</router-link>
                    </li>
                    <li>
                      <router-link to="/Expert">التسجيل كخبير</router-link>
                    </li>
                    <li @click="logout()">
                      <a>تسجيل الخروج</a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div class="nav_inform1">
            <ul>
              <li>
                <input type="text" placeholder=" بحث " />
                <i class="fa-solid fa-magnifying-glass"></i>
              </li>
              <li>EV&COURSES</li>
              <li class="nolog" v-if="home">
                <router-link to="/" @click="HideNav()">الرئيسيه</router-link>
              </li>
              <li class="log" v-if="page">
                <router-link to="/page" @click="HideNav()"
                  >الرئيسيه</router-link
                >
              </li>
              <li class="dropdown-toggle">
                <router-link :to="{ name: 'Dawarat' }" @click="HideNav()"
                  >الدورات</router-link
                >
                <div class="slides">
                  <ul>
                    <li>الفئات</li>
                    <li @click="HideNav()">
                      <router-link :to="{ name: 'Dawarat' }">
                        ادارة الاعمال<i class="fa-solid fa-chevron-left"></i>
                      </router-link>
                    </li>
                    <li @click="HideNav()">
                      <router-link :to="{ name: 'Dawarat' }"
                        >اللغات<i class="fa-solid fa-chevron-left"></i
                      ></router-link>
                    </li>
                    <li @click="HideNav()">
                      <router-link :to="{ name: 'Dawarat' }">
                        ريادة الاعمال<i class="fa-solid fa-chevron-left"></i>
                      </router-link>
                    </li>
                    <li @click="HideNav()">
                      <router-link :to="{ name: 'Dawarat' }">
                        العلوم والتكنلوجيا<i
                          class="fa-solid fa-chevron-left"
                        ></i>
                      </router-link>
                    </li>
                    <li @click="HideNav()">
                      <router-link :to="{ name: 'Dawarat' }">
                        الفنون والعماره<i class="fa-solid fa-chevron-left"></i>
                      </router-link>
                    </li>
                    <li @click="HideNav()">
                      <router-link :to="{ name: 'Dawarat' }">
                        التربيه والعلاقات<i
                          class="fa-solid fa-chevron-left"
                        ></i>
                      </router-link>
                    </li>
                    <li @click="HideNav()">
                      <router-link :to="{ name: 'Dawarat' }">
                        ريادة الاعمال<i class="fa-solid fa-chevron-left"></i>
                      </router-link>
                    </li>
                  </ul>
                  <button @click="HideNav()">
                    <router-link :to="{ name: 'Dawarat' }">
                      تصفح الدورات
                    </router-link>
                  </button>
                </div>
              </li>
              <li class="dropdown-toggle">
                <router-link :to="{ name: 'Alhadth' }" @click="HideNav()"
                  >الاحداث</router-link
                >
                <div class="slides">
                  <ul>
                    <li>الفئات</li>
                    <li @click="HideNav()">
                      <router-link :to="{ name: 'Alhadth' }">
                        ادارة الاعمال<i class="fa-solid fa-chevron-left"></i>
                      </router-link>
                    </li>
                    <li @click="HideNav()">
                      <router-link :to="{ name: 'Alhadth' }"
                        >اللغات<i class="fa-solid fa-chevron-left"></i
                      ></router-link>
                    </li>
                    <li @click="HideNav()">
                      <router-link :to="{ name: 'Alhadth' }">
                        ريادة الاعمال<i class="fa-solid fa-chevron-left"></i
                      ></router-link>
                    </li>
                    <li @click="HideNav()">
                      <router-link :to="{ name: 'Alhadth' }">
                        العلوم والتكنلوجيا<i
                          class="fa-solid fa-chevron-left"
                        ></i
                      ></router-link>
                    </li>
                    <li @click="HideNav()">
                      <router-link :to="{ name: 'Alhadth' }">
                        الفنون والعماره<i class="fa-solid fa-chevron-left"></i
                      ></router-link>
                    </li>
                    <li @click="HideNav()">
                      <router-link :to="{ name: 'Alhadth' }">
                        التربيه والعلاقات<i class="fa-solid fa-chevron-left"></i
                      ></router-link>
                    </li>
                    <li @click="HideNav()">
                      <router-link :to="{ name: 'Alhadth' }">
                        ريادة الاعمال<i class="fa-solid fa-chevron-left"></i
                      ></router-link>
                    </li>
                  </ul>
                  <button>
                    <router-link :to="{ name: 'Alhadth' }">
                      تصفح الاحداث
                    </router-link>
                  </button>
                </div>
              </li>
              <li>
                <router-link :to="{ name: 'Tzaker' }">التذاكر</router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="close" @click="HideNav()">
          <i class="fa-solid fa-xmark"></i>
        </div>
      </div>
    </div>
  </nav>
  <router-view />
  <!-- <router-view /> -->
  <!-- <nav>
    <router-link :to="{ name: 'Dawarat' }">Home</router-link> |
    <router-link
      :to="{
        name: 'about',
        params: { paramId: Math.floor(Math.random() * 10) },
      }"
      >About</router-link
    >
  </nav>
  <router-view /> -->
</template>

<script>
import { mapActions } from "vuex";
// import A from "../Andam/A.vue";
export default {
  // components: { A },
  name: "NavC",
  data() {
    return {
      hide: true,
      show: false,
      page: false,
      home: false,
      name: "",
      email: "",
      details: [
        {
          name: "المحفوظات",
          path: "Home", //saved
          class: "fa-regular fa-bookmark",
        },
        {
          name: "الرسائل",
          path: "Home", //messages
          class: "fa-regular fa-message",
        },
      ],
    };
  },
  mounted() {
    let userInfo = JSON.parse(localStorage.getItem("userInfo"));
    let login = document.querySelectorAll("nav .login");
    let logout = document.querySelectorAll("nav .logout");
    if (userInfo) {
      this.page = true;
      this.home = false;
      this.name = userInfo.username;
      this.email = userInfo.email;
      login.forEach((e) => {
        e.style.display = "none";
      });
      logout.forEach((e) => {
        e.style.display = "block";
      });
    } else {
      this.page = false;
      this.home = true;
      login.forEach((e) => {
        e.style.display = "block";
      });
      logout.forEach((e) => {
        e.style.display = "none";
      });
    }
  },
  methods: {
    ...mapActions(["redirectTo"]),
    directTo() {
      this.$router.push("UserPage");
    },
    logout() {
      localStorage.removeItem("userInfo");
      this.redirectTo({ val: "Home" });
    },
    showNav() {
      let ShowNav = document.querySelector("nav .nav_body_small .overlay");
      let ShowSlide = document.querySelector("nav .nav_body_small .nav2");
      ShowNav.style.transform = "scale(1)";
      ShowSlide.style.display = "block";
      console.log("yes");
    },
    HideNav() {
      let ShowNav = document.querySelector("nav .nav_body_small .overlay");
      let ShowSlide = document.querySelector("nav .nav_body_small .nav2");
      ShowNav.style.transform = "scale(0)";
      ShowSlide.style.display = "none";
    },
  },
};
</script>

<style lang="scss" scoped>
nav {
  z-index: 10;
  box-shadow: 0 0 8px -2px var(--button-back);
  position: fixed;
  top: 0;
  width: 100%;
  direction: rtl;
  padding: 12px 0;
  background: #fff;
  .nav_body_small {
    .overlay {
      transition: all 0.3s ease-in-out;
      transform: scale(0);
      width: 100%;
      position: absolute;
      height: 220vh;
      background: #000000bd;
      top: 0;
      left: 0;
    }
    .nav2 {
      position: absolute;
      top: 0;
      right: 0;
      height: 220vh;
      background: #fff;
      z-index: 2;
      transition: all 3s ease-in-out;
      display: none;
      .container {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        align-items: end;
        padding: 40px;
        .nav_inform1 {
          width: 100%;
          display: flex;
          justify-content: start;
          height: 100%;
          margin: 20px 0;
          ul {
            flex-direction: column;
            align-items: start;
            gap: 15px;
            li:first-of-type {
              input {
                border: none;
                outline: none;
                caret-color: var(--button-back);
                color: var(--button-back);
                width: 214px;
                border-block-end: 1px solid #828181;
              }
              i {
                font-size: 18px;
              }
            }
            li.dropdown-toggle {
              .slides {
                top: -12px;
                right: 62px;
                z-index: 1;
              }
            }
          }
        }
        .nav_inform2 {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: start;
          ul {
            li:first-of-type {
              i {
                border: none;
              }
            }
            flex-direction: row-reverse;
          }
        }
      }
      .close {
        position: absolute;
        top: 0px;
        left: -25px;
        background: #fff;
        width: 25px;
        i {
          transform: translateX(-7px);
          font-weight: bold;
          color: red;
          cursor: pointer;
        }
      }
      .useinfo,
      .bell_box {
        right: 0;
        z-index: 2;
      }
    }
  }
  .nav_body {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .nav_inform1 {
    .icon {
      display: none;
      i {
        cursor: pointer;
      }
    }
    ul {
      display: flex;
      align-items: center;
      gap: 8px;
      li {
        font-size: 20px;
        font-weight: bold;
        a {
          padding: 6px;
          transition: all 0.3s ease-in-out;
          &.router-link-active {
            color: var(--button-back);
          }
        }
        &:hover {
          a {
            color: var(--button-back);
          }
        }
      }
      li.dropdown-toggle {
        position: relative;
        div.slides {
          position: absolute;
          transition: all 0.3s ease-in-out;
          display: none;
          flex-direction: column;
          background: #fff;
          width: 222px;
          border-radius: 4px;
          box-shadow: 0px 0px 4px 1px var(--button-back);
          ul {
            gap: 5px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            padding: 15px 0;
            li:first-of-type {
              color: #9b9b9b;
              pointer-events: none;
            }
            li {
              padding: 0 15px;
              cursor: pointer;
              width: 100%;
              transition: all 0.3s ease-in-out;
              position: relative;
              a {
                color: #000;
                transition: all 0.3s ease-in-out;
                font-size: 18px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: 100%;
                i {
                  font-size: 14px;
                  // transition: all 0.3s ease-in-out;
                }
                &:hover {
                  color: var(--button-back);
                  i {
                    animation: myFirst 0.2s linear infinite alternate;
                    font-size: 16px;
                  }
                }
              }
              //---------------------------------------------------------------------------------------------------------
              div.card_box {
                display: none !important;
                transition: all 0.3s ease-in-out;
                position: absolute;
                left: -230px;
                background: #fff;
                border-radius: 5px;
                top: 10px;
                box-shadow: 0px 0px 4px 1px var(--button-back);
                padding: 15px;
                z-index: 1;
                display: flex;
                flex-direction: column;
                gap: 30px;
                .card_box_body {
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  gap: 15px;
                  img {
                    width: 130px;
                    border-radius: 4px;
                    transition: all 0.3s ease-in-out;
                  }
                  .card_box_slide {
                    h5 {
                      color: var(--p-color);
                      font-weight: bold;
                    }
                    span {
                      color: var(--small-text);
                      font-size: 15px;
                    }
                  }
                  &:hover {
                    img {
                      transform: scale(1.1);
                    }
                  }
                }
                .card_button {
                  text-align: center;
                  background: var(--button-back);
                  border-radius: 20px;
                  a {
                    color: #fff;
                    display: block;
                  }
                }
              }
              &:hover {
                color: var(--button-back);
                background: var(--small-text);
                div.card_box {
                  display: flex !important;
                }
              }
            }
          }
          button {
            margin: 15px 0;
            background: transparent;
            border: none;

            a {
              padding: 8px;
              border: 2px solid var(--button-back);
              border-radius: 20px;
              font-weight: bold;
              color: #fff;
              background: var(--button-back);
            }
          }
        }
        &:hover {
          div.slides {
            animation: Slides 0.3s forwards alternate;
            display: flex;
          }
        }
      }
    }
  }
  .nav_inform2 {
    ul {
      display: flex;
      align-items: center;
      gap: 12px;
      li:first-of-type {
        input {
          border: none;
          outline: none;
          border-block-end: 1px solid #828181;
          width: 100px;
          caret-color: #828181;
          color: var(--button-back);
        }
        i {
          border-inline-end: 2px solid #828181;
          padding: 3px;
        }
      }
      li.child2 {
        display: none;
      }
      li {
        cursor: pointer;
        i {
          font-size: 18px;
        }
        button {
          border: navajowhite;
          background: transparent;
          font-weight: bold;
          font-size: 18px;
          a {
            padding: 2px 10px;
          }
        }
        button.last_child {
          border: 2px solid var(--button-back);
          border-radius: 20px;
          a {
            color: var(--button-back);
            font-weight: normal;
          }
        }
      }
      li.bell,
      li.user {
        position: relative;
        i {
          transition: all 0.3s ease-in-out;
          background: #eee;
          width: 35px;
          height: 35px;
          border-radius: 50%;
          text-align: center;
          line-height: 1.7;
          &:is(:hover, :active) {
            color: var(--button-back);
          }
        }
      }
      li.bell {
        transition: all 0.3s ease-in-out;
        .bell_box {
          position: absolute;
          min-width: 300px;
          background: #fff;
          left: 5px;
          top: 25px;
          border: 1px solid #000;
          box-shadow: 0px 0px 4px 1px #000;
          display: none;
          align-items: center;
          flex-direction: column;
          justify-content: center;
          border-radius: 4px;
          padding: 15px;
          transition: all 0.3s ease-in-out;
          p {
            font-size: 24px;
          }
          span {
            font-size: 18px;
          }
        }
        &:is(:hover, :active) {
          .bell_box {
            display: flex;
          }
        }
      }
      li.user {
        .useinfo {
          display: none;
          flex-direction: column;
          gap: 10px;
          position: absolute;
          min-width: 250px;
          background: #fff;
          top: 26px;
          left: 5px;
          padding: 15px;
          border-radius: 4px;
          transition: all 0.3s ease-in-out;
          border: 1px solid #000;
          box-shadow: 0px 0px 4px 1px #000;
          .info {
            display: flex;
            border-bottom: 1px solid #000;
            padding-bottom: 10px;
            align-items: center;
            gap: 8px;
            i {
              background: #eee;
              width: 35px;
              height: 35px;
              border-radius: 50%;
              text-align: center;
              line-height: 1.7;
            }
            .details {
              p,
              h4 {
                font-size: 16px;
              }
              h4 {
                font-weight: bold;
              }
              p {
                margin: 0;
                font-size: 14px;
              }
            }
          }
          ul.ulo {
            display: flex;
            flex-direction: column;
            align-items: start;
            padding: 10px 0;
            li {
              i {
                margin-left: 8px;
                font-size: 15px;
                background: transparent;
              }
              a {
                font-weight: bold;
              }
            }
          }
          ul.ult {
            display: flex;
            flex-direction: column;
            align-items: start;
            font-weight: bold;
            li {
              width: 100%;
              border-top: 1px solid;
              padding-top: 10px;
              a {
                padding-right: 10px;
              }
            }
          }
        }
        &:is(:hover, :active) {
          .useinfo {
            display: flex;
          }
        }
      }
    }
  }
}

// media---------;

@media (max-width: 992px) {
  nav {
    .nav_body {
      flex-direction: column-reverse;
      gap: 20px;
    }
  }
}

@media (min-width: 769px) {
  nav {
    .nav_body_small {
      display: none;
    }
  }
}
@media (max-width: 992px) {
  nav {
    .nav_body {
      flex-direction: row;
      gap: 20px;
      .nav_inform1 {
        ul {
          display: none;
        }
        .icon {
          display: block;
          i {
            font-size: 20px;
          }
        }
      }
    }
  }
}

// animation------------;
@keyframes myFirst {
  0% {
    transform: translateX(0px);
  }
  100% {
    transform: translateX(5px);
  }
}
@keyframes Slides {
  0% {
    display: none;
  }
  100% {
    display: flex;
    transform: translateX(8px);
  }
}
</style>

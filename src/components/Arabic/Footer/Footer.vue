<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="box col-lg-3 col-md-4 col-sm-6 col-xs-12 text-center">
          <h2>مواقع التواصل</h2>
          <div class="social">
            <a href="#">
              <i class="fa-brands fa-linkedin"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-square-twitter"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-square-facebook"></i>
            </a>
            <br />
            <a href="#">
              <i class="fa-brands fa-square-instagram"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-youtube"></i>
            </a>
          </div>
        </div>
        <div class="box col-lg-3 col-md-4 col-sm-6 col-xs-12 text-center">
          <h2>انضم الينا</h2>
          <div class="joinus">
            <span>
              <router-link to="/Expert" @click="scrollT()">
                انضم الى الخبراء
              </router-link>
            </span>
            <span>
              <router-link to="/JoinPart" @click="scrollT()">
                انضم الى الشركاء
              </router-link>
            </span>
          </div>
        </div>
        <div class="box col-lg-3 col-md-4 col-sm-6 col-xs-12 text-center">
          <h2>اكتشف المزيد</h2>
          <div class="show">
            <ul>
              <li>
                <router-link @click="scrollT()" to="/Dawarat"
                  >الدورات</router-link
                >
              </li>
              <li>
                <router-link @click="scrollT()" to="/Alhadth"
                  >الاحداث</router-link
                >
              </li>
              <li>
                <router-link @click="scrollT()" to="/Tzaker"
                  >التذاكر</router-link
                >
              </li>
              <li>
                <router-link @click="scrollT()" to="/AlExpire"
                  >الخبراء</router-link
                >
              </li>
              <li>
                <router-link @click="scrollT()" to="/Partners"
                  >الشركاء</router-link
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="box col-lg-3 col-md-4 col-sm-6 col-xs-12 text-center">
          <h2>{{ this.NameProject }}</h2>
          <div class="logo">
            <ul>
              <li>
                <router-link to="/Wee" target="_blank" @click="scrollT()"
                  >من نحن
                </router-link>
              </li>
              <li>
                <router-link to="/New" target="_blank" @click="scrollT()"
                  >اخبارنا</router-link
                >
              </li>
              <li>
                <router-link to="/Team" target="_blank" @click="scrollT()"
                  >الفريق</router-link
                >
              </li>
              <li>
                <router-link to="/ContactUs" target="_blank" @click="scrollT()"
                  >اتصل بنا</router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterC",
};
</script>

<style lang="scss" scoped>
footer {
  background: var(--background-color);
  margin-block-start: 90px;
  padding: 30px 0;
  .box {
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: 20px;
    padding: 20px;
    &:first-child {
      cursor: pointer;
    }
    h2 {
      font-size: 34px;
    }
  }
  .box:first-of-type {
    .social {
      text-align: end;
      a {
        font-size: 34px;
        margin: 11px;
        transition: all 0.3s ease-in-out;
        &:hover {
          color: var(--button-back);
        }
      }
    }
  }
  .box:nth-of-type(2) {
    .joinus {
      cursor: pointer;
      display: flex;
      flex-direction: column;
      align-items: end;
      gap: 11px;
    }
    span {
      font-size: 24px;
      transition: all 0.3s ease-in-out;
      a {
        &.router-link-active {
          color: var(--button-back);
        }
      }
      &:hover {
        color: var(--button-back);
      }
    }
  }
  .box:nth-of-type(3) {
    .show {
      ul {
        display: flex;
        flex-direction: column;
        gap: 5px;
        font-size: 24px;
        align-items: end;
        li {
          transition: all 0.3s ease-in-out;
          &:hover {
            color: var(--button-back);
          }
        }
      }
    }
  }
  .box:last-of-type {
    .logo {
      ul {
        display: flex;
        flex-direction: column;
        gap: 5px;
        font-size: 24px;
        align-items: end;
        li {
          transition: all 0.3s ease-in-out;
          &:hover {
            color: var(--button-back);
          }
        }
      }
    }
  }
}

@media (max-width: 575px) {
  footer {
    .row {
      flex-direction: column-reverse;
      .box {
        align-items: center;
      }
    }
  }
}
</style>

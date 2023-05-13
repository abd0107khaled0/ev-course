<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="box col-lg-4 col-md-4 col-sm-6 col-xs-12 text-center">
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
        <div class="box col-lg-4 col-md-4 col-sm-6 col-xs-12 text-center">
          <h2>لينكات سريعه</h2>
          <div class="joinus">
            <span>
              <router-link @click="scrollT()" to="Govern">
                سياسة الخصوصيه
              </router-link>
            </span>
            <span>
              <router-link @click="scrollT()" to="Rules">
                شروط الاستخدام
              </router-link>
            </span>
            <span>
              <router-link @click="scrollT()" to="Helpers">
                مركز المساعده
              </router-link>
            </span>
          </div>
        </div>
        <div class="box col-lg-4 col-md-4 col-sm-6 col-xs-12 text-center">
          <h2>{{ this.NameProject }}</h2>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterWe",
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
    align-items: center;
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
      gap: 5px;
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

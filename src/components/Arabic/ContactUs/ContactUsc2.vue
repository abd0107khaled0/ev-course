<template>
  <div class="contactUs">
    <div class="container">
      <div class="contact_body">
        <div class="box">
          <i class="fa-regular fa-envelope"></i>
          <h3 class="h1">abdokhalef29@gmail.com</h3>
          <p class="p">الرد سيكون خلال 6 ساعات في الايام المزدحمة</p>
        </div>
        <div class="box">
          <i class="fa-brands fa-square-facebook"></i>
          <h3 class="h1">Abdelrahman Khaled</h3>
          <p class="p">الرد سيكون خلال 24 ساعة في الايام المزدحمة</p>
        </div>
        <div class="box">
          <i class="fa-brands fa-whatsapp"></i>
          <h3 class="h1">+201098778859</h3>
          <p class="p">الرد سيكون خلال ساعة في الايام المزدحمة</p>
        </div>
        <div class="box">
          <i class="fa-brands fa-linkedin"></i>
          <h3 class="h1">Abdelrahman Khaled</h3>
          <p class="p">الرد سيكون خلال ساعة في الايام المزدحمة</p>
        </div>
        <div class="box">
          <i class="fa-brands fa-square-twitter"></i>
          <h3 class="h1">Abdelrahman Khaled</h3>
          <p class="p">الرد سيكون خلال ساعة في الايام المزدحمة</p>
        </div>
        <div class="box">
          <i class="fa-brands fa-instagram"></i>
          <h3 class="h1">Abdelrahman Khaled</h3>
          <p class="p">الرد سيكون خلال ساعة في الايام المزدحمة</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactUsC2",
};
</script>

<style lang="scss" scoped>
.contactUs {
  .contact_body {
    position: relative;
    top: -130px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(313px, 1fr));
    gap: 20px;
    text-align: center;
    .box {
      margin: 30px 0;
      cursor: pointer;
      transition: all 3s ease-in-out;
      border-radius: 10px;
      background: linear-gradient(var(--background-color), transparent);
      i {
        font-size: 150px;
      }
      h3 {
        font-size: calc(18px + 0.1vw);
      }
      p {
        font-size: calc(10px + 0.3vw);
      }
      &:hover {
        animation: trans 0.1s 0.3s ease-in-out forwards;
      }
    }
  }
}
@keyframes trans {
  0% {
    background: linear-gradient(var(--background-color), transparent);
  }
  100% {
    background: var(--background-color);
  }
}
</style>

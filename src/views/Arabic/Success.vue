<template>
  <div class="Success">
    <div class="container">
      <div class="body">
        <div class="icon">
          <i class="fa-solid fa-check"></i>
        </div>
        <span class="p text-center">
          تم انشاء حسابك بنجاح<br />
          يرجي التحقق من رابط التفعيل عبر بريدك الالكتروني الذى ادخلته
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SuccessV",
};
</script>

<style lang="scss" scoped>
.body {
  margin: 150px auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  width: 500px;
  align-items: center;
  .icon {
    width: 130px;
    height: 130px;
    background: #ddd;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    i {
      font-size: 70px;
      color: #71c371;
    }
  }
  a {
    font-size: 24px;
    color: var(--button-back);
    text-decoration: underline;
    margin-top: -10px;
    font-weight: bold;
    transition: all 0.3s ease-in-out;
    &:hover {
      color: #000;
    }
  }
}
</style>

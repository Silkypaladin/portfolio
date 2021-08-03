<template>
  <footer class="footer items-center" id="footer">
    <h1 class="section-title">{{ $t("footer.contact") }}</h1>
    <form
      class="contact-form"
      action="https://formsubmit.co/contact@bednarskiszymon.me"
      method="POST"
    >
      <input
        type="email"
        name="email"
        class="input-field email-address"
        placeholder="Your email"
      />
      <textarea
        class="input-field message"
        name="message"
        rows="3"
        placeholder="Your message"
      ></textarea>
      <button type="submit" class="submit-btn">Send!</button>
    </form>
    <p>{{ $t("footer.email") }}</p>
    <p>contact@bednarskiszymon.me</p>
    <div class="bottom-section">
      <div class="grid section-content">
        Szymon Bednarski &copy; 2021
        <div class="socials">
          <a href="https://github.com/Silkypaladin" target="_blank">
            <img src="../assets/gh.svg" />
          </a>
          <a href="mailto:contact@bednarskiszymon.me"
            ><img src="../assets/email.svg" />
          </a>
          <a href="https://www.linkedin.com/in/szymon-bednarski-4351aa1a3" target="_blank">
            <img src="../assets/linked.svg" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@use '../styles/variables';
@use '../styles/mixins';
@use '../styles/colors';

.footer {
  width: 100%;
  position: relative;
  flex-direction: column;
  font-size: 1.2rem;
  background-color: colors.$paragraph-color;
  color: #fff;
  padding-top: 2rem;

  .section-title {
    color: #fff;
  }

  .contact-form {
    width: 100%;
    max-width: 550px;
    padding: 0 variables.$margin-size;
    .input-field {
      width: 100%;
      border-radius: 12px;
      margin: 8px 0;
      outline: none;
      padding-left: 12px;
      font-size: 1.2rem;
    }
    .email-address {
      height: 42px;
    }
    .message {
      height: 120px;
      resize: none;
      padding-top: 12px;
    }
    .submit-btn {
      outline: none;
      width: 100%;
      background-color: colors.$primary-color;
      height: 42px;
      border-radius: 12px;
      font-size: 1.2rem;
      color: #fff;
      margin: 8px 0;
    }
  }
  p {
    margin: 8px 0;
  }
  .bottom-section {
    width: 100%;
    background-color: #141313;
    padding: variables.$section-padding 2rem;
    margin-top: variables.$section-padding;
    .socials {
      img {
        padding: 0 1rem;
        height: 32px;
      }
    }
    .section-content {
      align-items: center;
    }
  }
}
@media screen and (min-width: 769px) {
  .section-content {
    @include mixins.grid-generate-columns(2);
  }
  .socials {
    justify-self: end;
  }
}
@media screen and(max-width: 768px) {
  .section-content {
    justify-items: center;
    .socials {
      margin-top: 1rem;
    }
  }
}
</style>

<template>
  <section class="ban" id="home">
    <nav class="nav-menu grid">
      <div class="nav-container">
        <div class="nav-logo">
          <a href="#">Szymon Bednarski</a>
        </div>
        <div class="nav-links" v-bind:class="{ open: menuOpen }">
          <ul class="nav-list">
            <li class="nav-item">
              <a href="#home" v-on:click="showMenu()">{{ $t("menu.home") }}</a>
            </li>
            <li class="nav-item">
              <a href="#skills" v-on:click="showMenu()">{{
                $t("menu.skills")
              }}</a>
            </li>
            <li class="nav-item">
              <a href="#projects" v-on:click="showMenu()">{{
                $t("menu.projects")
              }}</a>
            </li>
            <li class="nav-item">
              <a href="#about-me" v-on:click="showMenu()">{{
                $t("menu.aboutMe")
              }}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="locales" v-bind:class="{ open: menuOpen }">
        <span class="locale" @click="switchLocale('pl')">pl</span> |
        <span class="locale" @click="switchLocale('en')">en</span>
      </div>

      <div class="burger" v-on:click="showMenu()">
        <div class="line" v-bind:class="{ open: menuOpen }"></div>
      </div>
    </nav>
    <img src="../assets/test.png" class="shapes" />
    <div class="hero-container">
        <!-- <div class="socials">
          <img src="../assets/gh.svg" />
          <img src="../assets/email.svg" />
          <img src="../assets/linked.svg" />
        </div> -->
      <div class="hero grid">
        <div class="hero-heading" v-animation>
          <div class="title">
            {{$t('home.title')}} <span>Szymon Bednarski</span><br />{{$t('home.job')}}
          </div>
          <div class="know-me">
            {{$t('home.know-me')}}
            <img src="../assets/arrow.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data: () => ({
    menuOpen: false,
  }),
  methods: {
    showMenu() {
      this.menuOpen = !this.menuOpen;
    },
    switchLocale(locale) {
      if (this.$i18n.locale !== locale) this.$i18n.locale = locale;
    },
  }, //Gdzie dać te sociale???
};
</script>
<style scoped lang="scss">
@use '../styles/variables';
@use '../styles/mixins';
@use '../styles/colors';

.ban {
  background-color: colors.$primary-color;
  height: 92vh;

  @keyframes bounce {
    50% {
      transform: translateY(-6px);
    }
  }
  .hero-container {
    position: relative;
    z-index: 1;
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .socials {
      display: flex;
      width: 64px;
      margin-right: 4rem;

      img {
        height: 64px;
        margin: 8px;
      }
    }
    .hero {
      align-items: center;
      .hero-heading {
        color: #fff;
        .title {
          font-weight: bold;
          font-size: 56px;
        }
        span {
          color: #03d388;
        }
      }
    }
    .know-me {
      color: #fff;
      margin-top: 3rem;
      font-size: 1.4rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: fit-content;
      img {
        width: 36px;
        padding-top: 12px;
        animation: bounce 1600ms infinite cubic-bezier(0.445, 0.05, 0.55, 0.95);
      }
    }
  }
  .locales {
    color: #fff;

    .locale {
      cursor: pointer;
      font-family: variables.$font-family-heading;
    }
  }

  .nav-menu {
    position: relative;
    z-index: 2;
    padding: 1.5rem 0;
    .nav-container {
      display: flex;
      align-items: center;
    }
    .nav-logo a {
      font-family: variables.$font-family-heading;
      text-decoration: none;
      color: #fff;
      font-size: 1.8rem;
      font-weight: 600;
    }

    .burger {
      cursor: pointer;

      .line {
        width: 30px;
        height: 3px;
        background: white;
        margin: 5px;
        transition: all 0.5s ease;
      }

      .line::before,
      .line::after {
        content: "";
        position: absolute;
        width: 30px;
        height: 3px;
        background: white;
        transition: all 0.5s ease;
      }

      .line::before {
        @include mixins.transform(translateY(-7px));
      }

      .line::after {
        @include mixins.transform(translateY(7px));
      }
    }

    height: variables.$nav-size;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .nav-links {
      ul {
        list-style-type: none;
      }

      li {
        a {
          font-family: variables.$font-family-heading;
          color: #fff;
          text-decoration: none;
          font-size: 1.8rem;
        }
      }
    }
  }
  @media screen and (max-width: 1020px) {
    .burger {
      display: block;
      position: absolute;
      right: 1.5rem;

      .line.open {
        background: transparent;
      }

      .line.open::before {
        @include mixins.transform(rotate(45deg));
      }

      .line.open::after {
        @include mixins.transform(rotate(-45deg));
      }
    }

    .locales {
      position: absolute;
      left: 1.5rem;
      width: 100px;
      opacity: 0;
      transition: all 0.5s ease;
      pointer-events: none;
      font-size: 1.2rem;
    }

    .locales.open {
      opacity: 1;
      transition-delay: 0.5s;
      pointer-events: auto;
    }

    .nav-links {
      position: fixed;
      top: 0;
      right: 0;
      height: 100%;
      width: 100%;
      padding: 2rem 0;
      background: colors.$secondary-color;
      @include mixins.circle-animation(50px, 90%, -30%);
      transition: all 0.8s ease-in-out;

      .nav-list {
        height: 100%;
        display: grid;
        align-items: center;
        justify-content: center;
        grid-template-rows: repeat(4, 1fr);
      }

      .nav-item {
        margin: 0;
        text-align: center;
      }
    }

    .nav-links.open {
      @include mixins.circle-animation(1500px, 90%, -10%);
    }

    .nav-logo {
      display: none;
    }
  }

  @media screen and (min-width: 1020px) {
    .burger {
      display: none;
    }

    .nav-list {
      display: flex;
      padding-top: 0;

      .nav-item {
        margin-left: 3rem;
        margin-bottom: 0;
      }
    }

    .locales {
      margin-left: 3rem;
      margin-bottom: 0;
      font-size: 1.8rem;
    }
  }

  // .hero {
  //   grid-template-columns: 8% auto;
  // }
}

@media screen and (min-width: 1200px) {
  .shapes {
    position: absolute;
    right: 0;
    top: 0;
    height: 90%;
    z-index: 0;
  }

  .hero-container {
    width: 100%;
  }
}

@media screen and (max-width: 1200px) {
  .shapes {
    display: none;
  }

  .hero-container {
    width: 100%;
  }

  .hero-heading {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

@media screen and (max-width: 768px) {
  .socials {
    display: none !important;
  }

  .hero {
    display: flex;
    text-align: center;

    .hero-heading {
      .title {
        font-size: 40px !important;
      }
    }
  }
}

.before-enter {
        opacity: 0;
        transition: all 1s ease-in;
        transform: translateX(-50px);
    }

  .enter {
        opacity: 1;
        transform: translateX(0px);
    }
</style>

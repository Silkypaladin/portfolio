<template>

  <header class="header">
    <nav class="nav-menu grid">

        <div class="nav-logo">
            <a href="#">Szymon Bednarski</a>
        </div>

        <div class="nav-links" v-bind:class="{open: menuOpen}">
          <ul class="nav-list">
              <li class="nav-item"><a href="#home" v-on:click="showMenu()">{{$t('menu.home')}}</a></li>
              <li class="nav-item"><a href="#skills" v-on:click="showMenu()">{{$t('menu.skills')}}</a></li>
              <li class="nav-item"><a href="#projects" v-on:click="showMenu()">{{$t('menu.projects')}}</a></li>
              <li class="nav-item"><a href="#about-me" v-on:click="showMenu()">{{$t('menu.aboutMe')}}</a></li>
          </ul>
        </div>

        <div class="locales" v-bind:class="{open: menuOpen}">
            <span class="locale" @click="switchLocale('pl')">PL</span> |
            <span class="locale" @click="switchLocale('en')">EN</span> 
          </div>

        <div class="burger" v-on:click="showMenu()">
          <div class="line" v-bind:class="{open: menuOpen}"></div>
          <!-- <div class="line"></div>
          <div class="line"></div> -->
        </div>
    </nav>
</header>
</template>

<script>
export default {
  name: 'NavBar',
  data: () => ({
    menuOpen: false,
  }),
  methods: {
    showMenu() {
      this.menuOpen = !this.menuOpen;
    }, 
    switchLocale(locale) {
      if (this.$i18n.locale !== locale)
        this.$i18n.locale = locale;
    }
  }
}
</script>
<style scoped lang="scss">
  .header {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    background-color: var(--base-color);
    
    .locales {
      color: var(--font-color-primary);

      .locale {
        cursor: pointer;
      }
    }

    .nav-menu {
      .nav-logo a {
      text-decoration: none;
      color: var(--font-color-primary);
      font-size: 1.3rem;
      font-weight: 600;
      }

      .burger {
        cursor: pointer;
 
        .line {
        width: 30px;
        height: 3px;
        background: white;
        margin: 5px;
        transition: all .5s ease;
        }

        .line::before, .line::after {
          content: "";
          position: absolute;
          width: 30px;
          height: 3px;
          background: white;
          transition:all .5s ease;
        }

        .line::before {
        transform: translateY(-7px);
        }

        .line::after {
        transform: translateY(7px);
        }

      }

      height: var(--nav-size);
      display: flex;
      justify-content: space-between;
      align-items: center;

    .nav-links { 
      ul {
        list-style-type: none;
      }

      li { 
          a {
          color: var(--font-color-primary);
          text-decoration: none;
          font-size: 1.1rem;   
        }
      }
    }
  }
  @media screen and (max-width: 769px) {
    .burger {
      display: block;
      position: absolute;
      right: 1.5rem;
      top: calc(--nav-size / 2);

      .line.open {
        background: transparent;
      }

      .line.open::before {
        transform: rotate(45deg);
      }

      .line.open::after {
        transform: rotate(-45deg) ;
      }
    }

    .locales {
        position: absolute;
        left: 1.5rem;
        top: calc(--nav-size / 2);
        width: 100px;
        opacity: 0;
        transition: all .5s ease;
        pointer-events: none;
      }

    .locales.open {
      opacity: 1;
      transition-delay: .5s;
      pointer-events: auto;
    }

    .nav-links {
        position: fixed;
        top: 0;
        right: 0;
        height: 100%;
        width: 100%;
        padding: 2rem 0;
        background-color: var(--base-color);
        clip-path: circle(50px at 90% -10%);
        -webkit-clip-path: circle(50px at 90% -10%);
        transition: all 1.2s ease-in-out;

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
      clip-path: circle(1500px at 90% -10%);
      -webkit-clip-path: circle(1500px at 90% -10%);
    }

  }

  @media screen and (min-width: 769px) {
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
        position: absolute;
        right: 1.5rem;
        top: calc(--nav-size / 2);
        width: 100px;
        display:none;
        //Trzeba ogarnąć gdzie to spozycjonowac
      }
  }
}
</style>

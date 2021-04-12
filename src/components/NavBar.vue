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
              <li class="locales" v-bind:class="{open: menuOpen}">
            <span class="locale" @click="switchLocale('pl')">PL</span> |
            <span class="locale" @click="switchLocale('en')">EN</span> 
        </li>
          </ul>
        </div>

        <div class="burger" v-on:click="showMenu()">
          <div class="line" v-bind:class="{open: menuOpen}"></div>
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
  @use '../styles/pages/menu';
</style>

<template>
  <div id="app">
    <NavBar/>
    <Home/>
    <AboutMe/>
    <Skills/>
    <Projects/>
    <Footer/>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Home from './components/Home.vue'
import Skills from './components/Skills.vue'
import Projects from './components/Projects.vue'
import Footer from './components/Footer.vue'
import AboutMe from './components/AboutMe.vue'
export default {
  name: 'App',
  components: {
    NavBar,
    Home,
    Skills,
    Projects,
    Footer,
    AboutMe
  }
}
</script>

<style lang="scss">
@use './styles/style.scss';


.before-enter {
        opacity: 0;
        transition: all 1s ease-in;
    }

  .enter {
        opacity: 1;
    }

@media screen and (min-width: 1440px) {
    .grid {
        margin-left: auto;
        margin-right: auto;
    }
}

</style>

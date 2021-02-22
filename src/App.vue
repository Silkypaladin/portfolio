<template>
  <div id="app">
    <NavBar/>
    <div id="background"></div>
    <Home/>
    <Skills/>
    <Projects/>
    <AboutMe/>
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
@import url('https://fonts.googleapis.com/css?family=Montserrat');
:root {
  --nav-size: 8vh;
  --base-color: #77A6F7;
  --background-secondary: #f6f6f8ff;
  --font-color-primary: #fff;
  --margin-size: 1rem;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Montserrat, Helvetica, Arial, sans-serif;
}

html {
    scroll-behavior: smooth;
}

body {
    margin: var(--nav-size) 0 0 0;
    font-size: 1rem;
}

.grid {
    max-width: 1440px;
    display: grid;
    grid-template-columns: 100%;
    grid-column-gap: 2rem;
    width:calc(100% - 2rem); 
    margin-left: var(--margin-size);
    margin-right: var(--margin-size);
}

.items-center {
    display: flex;
    align-items: center;
    justify-content: center;
}

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

#background {
  width: 100%;
  height: 72vh;
  position: absolute;
  top: 0;
  background: url('./assets/background.png');
  background-size: cover;
  z-index: -1;
}
</style>

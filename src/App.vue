<template>
  <div id="app">
    <NavBar/>
    <div id="background"></div>
    <Home/>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Home from './components/Home.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    Home
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Montserrat');
:root {
  --nav-size: 8vh;
  --base-color: #77A6F7;
  --font-color-primary: #fff;
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
    margin-left: 1rem;
    margin-right: 1rem;
}

.items-center {
    display: flex;
    align-items: center;
    justify-content: center;
}

@media screen and (min-width: 1440px) {
    .grid {
        margin-left: auto;
        margin-right: auto;
    }
}

#background {
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  background: url('./assets/background.png');
  background-size: cover;
  z-index: -1;
}
</style>

<template>
  <div id="app">
    <NavBar/>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Montserrat');
:root {
  --nav-size: 8vh;
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
    font-family: var(--font);
}

.grid {
    max-width: 1280px;
    display: grid;
    grid-template-columns: 100%;
    grid-column-gap: 2rem;
    width:calc(100% - 2rem); 
    margin-left: 1rem;
    margin-right: 1rem;
}

@media screen and (min-width: 1280px) {
    .grid {
        margin-left: auto;
        margin-right: auto;
    }
}
</style>

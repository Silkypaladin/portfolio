<template>
  <section class="projects" id="projects">
      <img src="../assets/triangleB.svg" class="triangle">
    <Project
      imgName="portfolio.png"
      :projectName="$t('portfolio.title')"
      :projectDescription="$t('portfolio.description')"
      githubUrl="https://github.com/Silkypaladin/portfolio"
      :live="true"
      liveUrl="https://bednarskiszymon.me"
      :projectSubname="$t('portfolio.subname')"
    />

     <Project imgName="quizly.png" 
        :projectName="$t('quizly.title')" 
        :projectDescription="$t('quizly.description')"
        githubUrl="https://gitlab.com/Silkypaladin/webprojekt"
        :projectSubname="$t('quizly.subname')"
        :live="false"/>

    <Project imgName="learningbox.png" 
        :projectName="$t('Learningbox.title')" 
        :projectDescription="$t('Learningbox.description')"
        githubUrl="https://gitlab.com/Silkypaladin/webowka"
        liveUrl="https://www.learningbox.bednarskiszymon.me"
        :projectSubname="$t('Learningbox.subname')"
        :live="true"/>

    <Project imgName="cityeco.png" :projectName="$t('cityEco.title')" 
        :projectDescription="$t('cityEco.description')"
        liveUrl="http://cityecoview.com"
        :projectSubname="$t('cityEco.subname')"
        :live="true"/>

     <Project imgName="ai.png" 
        :projectName="$t('AI.title')" 
        :projectDescription="$t('AI.description')"
        githubUrl="https://github.com/Silkypaladin/AI"
        :projectSubname="$t('AI.subname')"
        :live="false"/>
  </section>
</template>

<script>
import Project from "./Project.vue";
export default {
  components: {
    Project,
  },
};
</script>

<style lang="scss" scoped>
@use '../styles/variables';
@use '../styles/mixins';
@use '../styles/colors';

    .projects {
        position: relative;

        .triangle {
            position: absolute;
            top: 0;
            left: 0;
        }
    }

    @media (max-width: 1200px) {
        .triangle {
            display: none;
        }
    }
</style>

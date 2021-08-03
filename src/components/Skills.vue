<template>
  <section class="skills-section" id="skills">
    <div class="grid skills">
      <h1 class="section-title">{{ $t("skills.title") }}</h1>
      <img src="../assets/triangle.svg" alt="" class="triangle">
      <div class="card-container-bg">
        <div class="skill-group">
          <div class="skill-card">
            <img src="../assets/figma.svg" alt="" />
          </div>
        </div>
        <div class="skill-group">
          <div class="skill-card">
            <img src="../assets/angular.svg" alt="" />
          </div>
          <div class="skill-card">
            <img src="../assets/vue.svg" alt="" />
          </div>
        </div>
        <div class="skill-group">
          <div class="skill-card">
            <img src="../assets/ts.svg" alt="" />
          </div>
          <div class="skill-card">
            <img src="../assets/js.svg" alt="" />
          </div>
          <div class="skill-card">
            <img src="../assets/python.svg" alt="" />
          </div>
        </div>
        <div class="skill-group">
          <div class="skill-card">
            <img src="../assets/html.svg" alt="" />
          </div>
          <div class="skill-card">
            <img src="../assets/css.svg" alt="" />
          </div>
        </div>
        <div class="skill-group">
          <div class="skill-card">
            <img src="../assets/git.svg" alt="" />
          </div>
        </div>
      </div>
      <div class="card-container-sm">
        <div class="skill-group">
          <div class="skill-card">
            <img src="../assets/vue.svg" alt="" />
          </div>
          <div class="skill-card">
            <img src="../assets/figma.svg" alt="" />
          </div>
          <div class="skill-card">
            <img src="../assets/ts.svg" alt="" />
          </div>
          <div class="skill-card">
            <img src="../assets/js.svg" alt="" />
          </div>
          <div class="skill-card">
            <img src="../assets/python.svg" alt="" />
          </div>
        </div>
        <div class="skill-group">
          <div class="skill-card">
            <img src="../assets/angular.svg" alt="" />
          </div>
          <div class="skill-card">
            <img src="../assets/html.svg" alt="" />
          </div>
          <div class="skill-card">
            <img src="../assets/css.svg" alt="" />
          </div>
          <div class="skill-card">
            <img src="../assets/git.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => {
    return {
      skills: ["Angular", "Vue.js", "Python", "JavaScript", "SQL", "Git"],
      tools: ["Jira", "Postman", "Adobe XD"],
    };
  },
};
</script>

<style scoped lang="scss">
@use '../styles/variables';
@use '../styles/mixins';
@use '../styles/colors';

.skills-section {
  background-color: colors.$background-secondary;
  position: relative;
  .skills {
    .skill-group {
      .skill-card {
        border-radius: 16px;
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 24px 12px;
      }
    }
  }

  .triangle {
      position: absolute;
      bottom: 0;
      right: 0;
  }
}

@media (max-width: 960px) {
  .card-container-bg {
    display: none;
  }

  .card-container-sm {
    display: flex;
    justify-content: center;
  }
}

@media (min-width: 960px) {
  .card-container-sm {
    display: none;
  }

  .card-container-bg {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

@media screen and (max-width: 769px) {
  .skills {
    text-align: center;
  }
}

@media screen and (max-width: 320px) {
  .skill-card {
    width: 120px;
    height: 120px;

    img {
      max-width: 70px;
    }
  }
}

@media screen and (min-width: 321px) {
  .skill-card {
    width: 150px;
    height: 150px;
  }
}
</style>

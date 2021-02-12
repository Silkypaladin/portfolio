<template>
    <div class="grid project">
        <div v-if="!iconOnRight" class="project-icon items-center" v-animation>
            <img :src="require(`@/assets/${imgName}`)" alt="">
        </div>
        <div class="items-center project-info" v-animation>
            <div class="project-description items-center">
                <span class="project-name">{{projectName}}</span>
                <p class="project-details">Angular2+, Vue.js, Javascript, Python, HTML, CSS, Git</p>
            </div>
            <div class="links items-center">
                <img class="link" src="../assets/github.svg" alt="">
                <img class="link" src="../assets/globe.svg" alt="">
            </div>
        </div>
        <div v-if="iconOnRight" class="project-icon items-center icon-over-text" v-animation>
            <img :src="require(`@/assets/${imgName}`)" alt="">
        </div>
    </div>
</template>

<script>
export default {
    props: {
        imgName: String,
        projectName: String,
        iconOnRight: Boolean,
        githubUrl: String,
        liveUrl: String
    }
}
</script>

<style lang="scss" scoped>
    .project {
        margin-bottom: 3rem;
        .project-icon img {
            max-height: 300px;
            margin-bottom: .5rem;
        }

        .project-info {
            flex-direction: column;
            .project-description {
                margin-bottom: 1rem;
                flex-direction: column;
                text-align: center;
                .project-name {
                        padding-bottom: 8px;
                        font-size: 1.8rem;
                        font-weight: bold;
                }
                .project-details {
                    font-weight: bolder;
                }
            }
            .links {
                //width: 80%;
                .link {
                    text-decoration: none;
                    color: black;
                    margin: 0 1rem;
                    height: 28px;
                    width: 28px;
                }
            }

        }
    }
    @media screen and (max-width: 769px) {
        .icon-over-text {
            grid-row-start: 1;
            grid-row-end: 2;
        }
    }

    @media screen and (min-width: 769px) {
          .project {
              grid-template-columns: repeat(2, 1fr);
          }
      }
</style>
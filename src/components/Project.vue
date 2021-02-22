<template>
    <div class="grid project">
        <div v-if="!iconOnRight" class="project-icon items-center" v-animation>
            <img :src="require(`@/assets/${imgName}`)" alt="">
        </div>
        <div class="items-center project-info" v-animation>
            <div class="project-description items-center">
                <span class="project-name">{{projectName}}</span>
                <p class="project-details">{{projectDescription}}</p>
            </div>
            <div class="links items-center">
                <a v-if="!hideCode" :href="githubUrl" target="_blank"><img class="link" src="../assets/github.svg" alt=""></a>
                <a :href="liveUrl" target="_blank"><img v-bind:class="{link: live, inactive: !live}" src="../assets/globe.svg" alt=""></a>
            </div>
        </div>
        <div v-if="iconOnRight" class="project-icon items-center icon-above-text" v-animation>
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
        liveUrl: String,
        projectDescription: String,
        live: Boolean,
        hideCode: Boolean
    }
}
</script>

<style lang="scss" scoped>
    .project {
        margin-bottom: 3rem;
        .project-icon img {
            max-height: 300px;
        }

        .project-info {
            flex-direction: column;
            .project-description {
                margin-bottom: 1rem;
                flex-direction: column;
                text-align: center;
                .project-name {
                        padding-bottom: 8px;
                        font-size: 1.6rem;
                        font-weight: bold;
                }
                .project-details {
                    font-weight: bolder;
                    max-width: 450px;
                }
            }
            .links {
                .link {
                    margin: 0 1rem;
                    height: 28px;
                    width: 28px;
                    transition: all .2s;
                    cursor: pointer;
                }

                .link:hover {
                    filter: invert(58%) sepia(87%) saturate(778%) hue-rotate(190deg) brightness(100%) contrast(95%);
                }

                .inactive {
                    margin: 0 1rem;
                    height: 28px;
                    width: 28px;
                }
            }

        }
    }
    @media screen and (max-width: 769px) {
        .icon-above-text {
            grid-row-start: 1;
            grid-row-end: 2;
        }

        .project-icon img {
            margin-bottom: .6rem;
        }
    }

    @media screen and (min-width: 769px) {
          .project {
              grid-template-columns: repeat(2, 1fr);
          }
      }
</style>
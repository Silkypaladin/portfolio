<template>
    <div class="grid project">
        <div v-if="!iconOnRight" class="project-icon items-center" v-bind:style="{background: background}">
            <img :src="require(`@/assets/${imgName}`)" alt="">
        </div>
        <div class="project-description items-center">
            <h3 class="title">{{projectName}}</h3>
            <span class="project-info">{{projectDescription}}</span>
            <div class="links">
                <a v-if="!hideCode" :href="githubUrl" target="_blank"><img class="link" src="../assets/github.svg" alt=""></a>
                <a :href="liveUrl" target="_blank"><img v-bind:class="{link: live, inactive: !live}" src="../assets/globe.svg" alt=""></a>
            </div>
        </div>
        <div v-if="iconOnRight" class="project-icon items-center icon-above-text" v-bind:style="{background: background}">
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
        hideCode: Boolean,
        background: String,
    }
}
</script>

<style lang="scss" scoped>
    @use '../styles/variables';
    @use '../styles/mixins';
    @use '../styles/colors';

    .project {
        margin-bottom: 3rem;
        background-color: #fff;
        max-width: 850px;
        border-radius: 16px;
        overflow: hidden;
        grid-column-gap: 0;

        .project-icon img {
            max-width: 250px;
        }

        .project-description {
            flex-direction: column;

            .title {
                margin-top: variables.$margin-size;
                font-size: 1.4rem;
            }
            .project-info {
                @include mixins.section-subtitle(colors.$paragraph-color, variables.$section-paragraph-size);
                font-weight: 500;
                width: 85%;
                // text-align: justify; 
                // text-justify: inter-word;
            }
        }

        .links {
            margin: variables.$margin-size 0;
                .link {
                    margin: 0 1rem;
                    height: 28px;
                    width: 28px;
                    transition: all .2s;
                    cursor: pointer;
                }
                .link:hover {
                    filter: invert(46%) sepia(39%) saturate(5914%) hue-rotate(321deg) brightness(99%) contrast(97%);
                }
                .inactive {
                    margin: 0 1rem;
                    height: 28px;
                    width: 28px;
                }
            }
    }
    @media screen and (max-width: 769px) {
        .project {
            grid-template-columns: 1;
            min-height: 500px;

            .project-icon {
                height: 250px;

                img {
                    max-width: 200px;
                }
            }
        }
        .icon-above-text {
            grid-row-start: 1;
            grid-row-end: 2;
        }
    }

    @media screen and (min-width: 769px) {
          .project {
             @include mixins.grid-generate-columns(2);
              height: 430px;
          }
      }
</style>
<template>
    <div class="grid project" v-animation>
       <div class="project-description">
           <div class="project-subname">{{projectSubname}}</div>
           <h1 class="project-name">{{projectName}}</h1>
           <div class="project-description">
               {{projectDescription}}
           </div>
           <a v-if="githubUrl" :href="githubUrl" class="repo-link" target="_blank">{{$t('projects.code')}}</a>
       </div>

       <div class="project-image">   
           <a v-if="live" :href="liveUrl" class="live-link" target="_blank">
               <img :src="require(`@/assets/${imgName}`)">
           </a>

           <img v-if="!live" :src="require(`@/assets/${imgName}`)">
       </div>
    </div>
</template>

<script>
export default {
    props: {
        imgName: String,
        projectName: String,
        githubUrl: String,
        liveUrl: String,
        projectDescription: String,
        live: Boolean,
        projectSubname: String
    }
}
</script>

<style lang="scss" scoped>
    @use '../styles/variables';
    @use '../styles/mixins';
    @use '../styles/colors';

    .project {
        margin-bottom: 2rem;
        .project-subname {
            color: colors.$primary-color;
            font-weight: bold;
            letter-spacing: 1.5px;
            margin-bottom: 4px;
        }

        .project-name {
            margin-bottom: 1.5rem;
        }

        .project-image {
            
            img {
                border: 1px solid #F5F5F5;
                width: 100%;
                max-width: 800px;
                height: auto;
                border-radius: 16px;
            }
        }

        .repo-link {
            margin-top: 12px;
            text-decoration: none;
            font-weight: bold;
            color: colors.$primary-color;
        }
    }

@media (min-width: 960px) {
    .project {
        grid-template-columns: repeat(2, 1fr);

        .project-image {
            display: flex;
            justify-content: flex-end;
        }

        .project-description {
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
    }
}

@media (max-width: 960px) {
    .project {
        text-align: center;

        .project-description {
            margin-bottom: 1rem;
        }
    }
}
</style>
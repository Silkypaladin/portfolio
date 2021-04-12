<template>
    <section class="projects items-center" id="projects">
        <h1 class="section-title">{{$t('projects.title')}}</h1>
        <div class="grid my-projects">
            <Project imgName="portfolio-icon.svg" 
        :projectName="$t('portfolio.title')" 
        :projectDescription="$t('portfolio.description')"
        githubUrl="https://github.com/Silkypaladin/portfolio"
        :live="true"
        liveUrl="https://bednarskiszymon.me"
        background="linear-gradient(to right, #4e54c8, #8f94fb)"
        :iconOnRight="false"/>

        <Project imgName="ai.svg" 
        :projectName="$t('AI.title')" 
        :projectDescription="$t('AI.description')"
        githubUrl="https://github.com/Silkypaladin/AI"
        background="linear-gradient(to right, #83a4d4, #b6fbff)"
        :iconOnRight="false"
        :live="false"/>

        <Project imgName="learningbox.svg" 
        :projectName="$t('Learningbox.title')" 
        :projectDescription="$t('Learningbox.description')"
        githubUrl="https://gitlab.com/Silkypaladin/webowka"
        background="linear-gradient(103deg, rgba(22,65,137,1) 0%, rgba(24,201,192,1) 46%)"
        :iconOnRight="false"
        :live="false"/>

        <Project imgName="salesman-icon.svg" :projectName="$t('salesman.title')" 
        :projectDescription="$t('salesman.description')"
        githubUrl="https://github.com/Silkypaladin/skryptowe20/tree/L6"
        background="linear-gradient(to right, #56ab2f, #a8e063)"
        :iconOnRight="false"
        :live="false"/>

        <Project imgName="car-icon.svg" :projectName="$t('riskyRacer.title')" 
        :projectDescription="$t('riskyRacer.description')"
        githubUrl="https://github.com/Silkypaladin/RiskyRacer"
        background="linear-gradient(to right, #ff4b1f, #ff9068)"
        :iconOnRight="false"
        :live="false"/>
        </div>

        <h1 class="section-title">{{$t('projects.titleContribute')}}</h1>

        <Project imgName="CityEco.png" :projectName="$t('cityEco.title')" 
        :projectDescription="$t('cityEco.description')"
        liveUrl="http://cityecoview.com"
        background="linear-gradient(to right, #7f7fd5, #86a8e7, #91eae4)"
        :iconOnRight="false"
        :hideCode="true"
        :live="true"/>    
    </section>
</template>

<script>
import Project from './Project.vue'
export default {
    components: {
        Project
    }
}
</script>

<style lang="scss" scoped>
    @use '../styles/variables';
    @use '../styles/mixins';
    @use '../styles/colors';

    .projects {
        flex-direction: column;
        padding: variables.$section-padding 0;
    }

     @media screen and (min-width: 769px) {
        .my-projects {
            @include mixins.grid-generate-columns(2);
        }
    }
</style>
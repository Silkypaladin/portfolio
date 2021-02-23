<template>
    <section class="projects" id="projects">
        <div class="header items-center">
            <span class="projects-header">{{$t('projects.title')}}</span>
        </div>
        <Project imgName="VuePage.png" 
        :projectName="$t('portfolio.title')" 
        :projectDescription="$t('portfolio.description')"
        githubUrl=""
        :live="true"
        liveUrl="https://bednarskiszymon.me"
        :iconOnRight="false"/>

        <Project imgName="salesmanApi.png" :projectName="$t('salesmanApi.title')" 
        :projectDescription="$t('salesmanApi.description')"
        githubUrl="https://github.com/Silkypaladin/skryptowe20/tree/L5"
        :iconOnRight="true"
        :live="false"/>
        
        <Project imgName="SalesMan.png" :projectName="$t('salesman.title')" 
        :projectDescription="$t('salesman.description')"
        githubUrl="https://github.com/Silkypaladin/skryptowe20/tree/L6"
        :iconOnRight="false"
        :live="false"/>

        <Project imgName="pythonApi.png" :projectName="$t('pythonApi.title')" 
        :projectDescription="$t('pythonApi.description')"
        githubUrl="https://github.com/Silkypaladin/FlaskAPI"
        :iconOnRight="true"
        :live="false"/>

        <Project imgName="android.png" :projectName="$t('riskyRacer.title')" 
        :projectDescription="$t('riskyRacer.description')"
        githubUrl="https://github.com/Silkypaladin/FlaskAPI"
        :iconOnRight="false"
        :live="false"/>

        <div class="header items-center">
            <span class="projects-header">{{$t('projects.titleContribute')}}</span>
        </div>

        <Project imgName="CityEco.png" :projectName="$t('cityEco.title')" 
        :projectDescription="$t('cityEco.description')"
        liveUrl="http://cityecoview.com"
        :iconOnRight="true"
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
    .projects {
        .header {
            margin-left: var(--margin-size);
            margin-right: var(--margin-size);

            .projects-header {
            text-align: center;
            margin-bottom: 1.5rem;
            width: fit-content;
            font-weight: bolder;
            font-size: 1.8rem;
            border-bottom: 5px solid var(--base-color);
            }
        }
        
        margin-top: 3rem;
        margin-bottom: 3rem;
        .left-column {
            .title {
                padding-bottom: 8px;
                font-size: 1.8rem;
                font-weight: bold;
            }
        }
    }
</style>
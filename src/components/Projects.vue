<template>
    <section class="projects" id="projects">
        <div class="header items-center">
            <span class="projects-header">My projects</span>
        </div>
        <Project imgName="AngularPage.png" projectName="Test" 
        projectDescription="short test Project description"
        v-bind:iconOnRight="false"/>
        <Project imgName="AngularPage.png" projectName="Test" 
        projectDescription="short test Project description"
        v-bind:iconOnRight="true"/>
        
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
        .projects-header {
            text-align: center;
            margin-bottom: 1.5rem;
            width: fit-content;
            font-weight: bolder;
            font-size: 2rem;
            border-bottom: 5px solid var(--base-color);
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
<template>
    <section class="projects" id="projects">
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
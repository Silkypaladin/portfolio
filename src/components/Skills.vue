<template>
    <section class="skills-section" id="skills">
        <h1 class="section-title">{{$t('skills.title')}}</h1>
        <div class="grid skills">
            <div class="skills-list">
                <img class="icon" src="../assets/code-icon.svg" alt="">
                <div class="skills-section items-center">
                    <h4 class="header">{{$t('skills.languages')}}</h4>
                    <ul class="list">
                        <li v-for="skill in skills" :key="skill">
                            {{skill}}
                        </li>
                    </ul>
                </div>
            </div>

            <div class="skills-list">
                <img class="icon" src="../assets/tools-icon.svg" alt="">
                <div class="skills-section items-center">
                    <h4 class="header">{{$t('skills.tools')}}</h4>
                    <ul class="list">
                        <li v-for="tool in tools" :key="tool">
                            {{tool}}
                        </li>
                    </ul>
                </div>
            </div>
            
        </div>
    </section>
</template>

<script>
export default {
    data: () => {
        return {
            skills: ['Angular', 'Vue.js', 'Python', 'JavaScript', 'SQL', 'Git'],
            tools: ['Jira', 'Postman', 'Adobe XD']
        }
    }
}
</script>

<style scoped lang="scss">
    @use '../styles/variables';
    @use '../styles/mixins';
    @use '../styles/colors';

    .skills-section {
        flex-direction: column;
        width: 100%;
        padding: variables.$section-padding 0;
        .skills {
            .skills-list {
                display: flex;
                flex-direction: column;
                align-items: center;

                .icon {
                    height: 150px;
                    width: 150px;
                }
                .header {
                    @include mixins.section-subtitle(#000, variables.$section-paragraph-size + .1rem);
                }
                .list {
                    list-style-type: none;
                    text-align: center;

                    li {
                        font-weight: 500;
                        @include mixins.section-subtitle(colors.$paragraph-color, variables.$section-paragraph-size);
                    }
                }
            }
        }
    }
    @media screen and (min-width: 769px) {
        .skills {
            grid-template-columns: repeat(2, 1fr);
        }
    }
</style>
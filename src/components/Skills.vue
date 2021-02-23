<template>
    <section class="skills-section" id="skills">
        <div class="grid skills" v-animation>
            <div class="items-center skills-list">
                <div class="list-section items-center">
                    <span>{{$t('skills.mostly')}}</span>
                    <p>{{$t('skills.mostlySkills')}}</p>
                </div>
                <div class="list-section items-center">
                    <span>{{$t('skills.other')}}</span>
                    <p>{{$t('skills.otherSkills')}}</p>
                </div>

                
            </div>
            <div class="skills-icon items-center">
                <img src="../assets/skills.png" alt="">
            </div>
        </div>
    </section>
</template>

<script>
export default {
    
}
</script>

<style scoped lang="scss">
    .skills-section {
        width: 100%;
        background-color: var(--background-secondary);

        .skills {
            padding-top: 3rem;

            .skills-list {
                flex-direction: column;
                
                .list-section {
                    flex-direction: column;
                    margin: 2rem 0;
                    text-align: center;
                    span {
                        padding-bottom: 8px;
                        font-size: 1.8rem;
                        font-weight: bold;
                    }
                    p {
                        font-weight: bolder;
                    }
                }
            }
        }
    }
    @media screen and (max-width: 769px) {
        .skills {
            .skills-icon {
                img {
                    max-height: 300px;
                    max-width: 300px;
                }
            }
        }
    }

    @media screen and (min-width: 769px) {
        .skills {
            grid-template-columns: repeat(2, 1fr);

            .skills-icon {
                img {
                    max-height: 500px;
                    max-width: 500px;
                }
            }
        }
    }
</style>
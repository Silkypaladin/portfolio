<template>
    <section class="about-me-section" id="about-me">
        <div class="grid about-me">
            <div  class="me-icon items-center" v-animation>
                <img src="../assets/me.png" alt="">
            </div>

            <div class="me-description items-center">
                <span>{{$t('about.title')}}</span>
                <p>{{$t('about.description')}}</p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    
}
</script>

<style scoped lang="scss">
    .about-me-section {
        width: 100%;
        background-color: var(--background-secondary);

        .about-me {
            padding-top: 3rem;
            padding-bottom: 3rem;
            .me-icon img {
                max-width: 300px;
                margin-bottom: 8px;
            }

            .me-description {
                flex-direction: column;
                text-align: center;
                span {
                    padding-bottom: 8px;
                    font-size: 1.8rem;
                    font-weight: bold;
                }
                p {
                    font-weight: bolder;
                    max-width: 450px;
                }
            }
        }
    }

    @media screen and (min-width: 769px) {
        .about-me {
            grid-template-columns: repeat(2, 1fr);

        }
    }
</style>
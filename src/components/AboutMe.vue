<template>
    <section class="about-me-section" id="about-me">
        <div class="grid about-me" v-animation>
            <div class="me-description items-center">
                <h1 class="section-title">{{$t('about.title')}}</h1>
                <img src="../assets/titleBg.svg" alt="" class="title-img">
                <div>
                    <h1 class="about-title">{{$t('about.subtitle')}}</h1>
                    <p>{{$t('about.description')}}</p>
                </div>
            </div>
            <div  class="me-icon items-center">
                <img src="../assets/me.png" alt="">
            </div>

        </div>
    </section>
</template>

<script>
export default {
    
}
</script>

<style scoped lang="scss">
    @use '../styles/variables';
    @use '../styles/mixins';
    @use '../styles/colors';
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');

    .about-me-section {
        width: 100%;
        position: relative;
        background-color: colors.$background-secondary;
        .about-me {
            justify-items: center;
            .me-icon img {
                width: 100%;
                max-width: 500px;
                height: auto;
                border-radius: 16px;
                margin-top: 1rem;
            }

            .me-description { 
                align-self: center;  
                width: 80%;
                flex-direction: column;
                font-weight: 500;

                .about-title {
                    margin-bottom: 16px;
                }
            }
        }
    }

    @media screen and (min-width: 769px) {
        .about-me {
            @include mixins.grid-generate-columns(2);

            .me-description {
                align-items: flex-start;
            }
        }
    }

    @media screen and (max-width: 769px) {
        .about-me {
            text-align: center;
        }
    }
</style>
<template>
    <section class="about-me-section" id="about-me">
        <h1 class="section-title">{{$t('about.title')}}</h1>
        <div class="grid about-me">
            <div  class="me-icon items-center">
                <img src="../assets/me.svg" alt="">
            </div>

            <div class="me-description items-center">
                <p>{{$t('about.description')}}</p>
                <div class="socials items-center">
                    <a href="https://github.com/Silkypaladin" target="_blank"><img src="../assets/github.svg" alt=""></a>
                    <a href="https://www.linkedin.com/in/szymon-bednarski-4351aa1a3" target="_blank"><img src="../assets/linkedin.svg" alt=""></a>
                    <a href="mailto:contact@bednarskiszymon.me"><img src="../assets/mail.svg" alt=""></a>
                </div>
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
        padding: variables.$section-padding 0;
        .about-me {
            .me-icon img {
                max-width: 600px;
                margin-bottom: 8px;
            }

            .me-description {
                @include mixins.section-subtitle(#000, variables.$section-paragraph-size);
                flex-direction: column;
                font-weight: 500;
                text-align: justify; 
                text-justify: inter-word;

                .socials {
                    img {
                        height: 36px;
                        width: 36px;
                        margin: 0 1rem;
                        margin-top: 1rem;
                    }
                }
            }
        }
    }

    @media screen and (min-width: 769px) {
        .about-me {
            @include mixins.grid-generate-columns(2);
        }
    }
</style>
<template>
    <section class="grid banner" id="home" v-animation>
         <div class="banner-img items-center">
            <img src="../assets/main.png" alt="">
        </div>

        <div>
            <span class="header items-center">
            Szymon Bednarski
            <div class="line"></div>
            </span>
            <h2 class="header-subtitle items-center">
                Not your average software developer
            </h2>
            <div class="socials items-center">
                <img src="../assets/github.svg" alt="">
                <img src="../assets/linkedin.svg" alt="">
                <img src="../assets/mail.svg" alt="">
            </div>
        </div>

    </section>
</template>
<script>
export default {
    
}
</script>
<style scoped lang="scss">

    .banner {
        margin-bottom: 3rem;
        padding-top: calc(var(--nav-size) + .5rem);
        align-items: center;
        .banner-img {
            img {
                max-width: 100%;
            }
        }

        .header {
            margin-top: 4rem;
            margin-bottom: 8px;
            text-align: center;
            text-transform: uppercase;
            font-size: 3rem;
            font-weight: bold;
            flex-direction: column;
            .line {
                height: 5px;
                background: var(--base-color);
                width: 450px;
            }
        }

        .header-subtitle {
            text-align: center;
        }
        
        .socials {
            img {
                height: 36px;
                width: 36px;
                margin: 0 1rem;
                margin-top: 1rem;
            }
        }
    }
    @media screen and (max-width: 769px) {
            .banner {
                .banner-img {
                    img {
                        max-width: 100%;
                  }
            }
            .header {
                .line {
                    width: 300px; 
                }
            }
        }
    }
    @media screen and (min-width: 769px) {
        .banner {
            grid-template-columns: repeat(2, 1fr);
        }
    }
</style>
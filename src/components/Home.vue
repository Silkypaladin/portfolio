<template>
    <section class="ban" id="home">
        <div id="background">
            <img id="with" src="../assets/bgWithPerson.svg">
        </div>
        <div class="grid banner">
            <h4 class="header">
            Szymon Bednarski
            </h4>
            <span class="header-subtitle">
                {{$t('home.title')}}
            </span>
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

    .ban {
        min-height: calc(80vh - #{variables.$nav-size});

        #background {
            width: 100%;
            height: 100vh;
            position: absolute;
            top: 0;
            z-index: -1;
            overflow-y: hidden;

        }
        
        .banner {
            padding-top: variables.$nav-size + 1vh;
            margin-top: 10%;

            .header {
                margin-bottom: 8px;
                @include mixins.section-title(#fff, 2.5rem);                
            }

            .header-subtitle {
                @include mixins.section-subtitle(#fff, 1.4rem);
            }
        }
}

 @media screen and (max-width: 1440px) {
     #background {
        img {
            width: 1440px;
        }
    }
 }

  @media screen and (max-height: 567px) {
     #background {
        img {
            width: 930px;
        }
    }
 }


</style>
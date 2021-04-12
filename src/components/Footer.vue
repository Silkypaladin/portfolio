<template>
    <footer class="footer items-center" id="footer">
        <p class="email">{{$t('footer.contact')}}: contact@bednarskiszymon.me</p>
        <span class="footer-info">Szymon Bednarski &copy; 2021</span>
    </footer>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    @use '../styles/variables';
    @use '../styles/mixins';
    @use '../styles/colors';

    .footer {
        width: 100%;
        position: relative;
        flex-direction: column;
        font-size: 1.2rem;
        padding: 1rem 0;


        .footer-info {
            font-weight: 500;
            color: colors.$paragraph-color;
        }

        .email {
            color: colors.$paragraph-color;
            margin-bottom: 1rem;
            font-size: .8rem;
            font-weight: 500;
        }
    }
</style>
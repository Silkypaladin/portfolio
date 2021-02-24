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
    .footer {
        width: 100%;
        background-color: var(--base-color);
        padding: 1rem 0;
        flex-direction: column;

        .footer-info {
            font-weight: bolder;
            color: var(--font-color-primary);
        }

        .email {
            color: var(--font-color-primary);
            margin-bottom: 1rem;
            font-size: .8rem;
            font-weight: bolder;
        }
    }
</style>
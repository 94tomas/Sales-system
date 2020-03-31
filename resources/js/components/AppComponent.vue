<template>
    <!-- Content Wrapper. Contains page content -->
    <div class="wrapper">
        
        <c-navigation :username="userdata"></c-navigation>

        <c-sidebar :user_data="userdata" :user_role="userrole"></c-sidebar>

        <!-- Content Wrapper. Contains page content -->
        <div class="content-wrapper">
            <transition name="slide-fade" mode="out-in" :duration="300">
                <router-view :user_role="userrole"></router-view>
            </transition>
        </div>
        <!-- /.content-wrapper -->

        <c-footer></c-footer>

    </div>
    <!-- /.content-wrapper -->
</template>
<script>
export default {
    name: 'App',
    data() {
        return {
            token: document.querySelector('meta[name="csrf-token"]').getAttribute('content')
        } 
    },
    methods: {
        logout() {
            document.getElementById('logout-form').submit();
        }
    },
    props: ['userdata', 'userrole']
}
</script>
<style lang="scss">
    /* Enter and leave animations can use different */
    /* durations and timing functions.              */
    .slide-fade-enter-active {
        transition: all .3s ease;
    }
    .slide-fade-leave-active {
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to
        /* .slide-fade-leave-active below version 2.1.8 */ {
        transform: translateX(10px);
        opacity: 0;
    }
</style>
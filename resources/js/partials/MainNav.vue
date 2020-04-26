<template>
    <div>
        <!-- Navbar -->
        <nav class="main-header navbar navbar-expand navbar-white navbar-light">
            <!-- Left navbar links -->
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" data-widget="pushmenu" href="#"><i class="fas fa-bars"></i></a>
                </li>
            </ul>

            <!-- Right navbar links -->
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        <i class="fas fa-calendar-week"></i>
                        {{ timestamp }}
                    </a>
                </li>

                <li class="nav-item dropdown user user-menu">
                    <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                        <img src="/img/user2-160x160.jpg" class="user-image" alt="User Image">
                        <span class="hidden-xs">{{ username.name }}</span>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-right">
                        <!-- User image -->
                        <li class="user-header">
                            <img src="/img/user2-160x160.jpg" class="img-circle" alt="User Image">

                            <p>
                                {{ username.name }} - <span v-if="userrole == 'admin'">Administrador</span><span v-else>Vendedor</span>
                            </p>
                        </li>
                        <!-- Menu Footer-->
                        <li class="user-footer">
                            <div class="text-right">
                                <a href="javascript:;" class="btn btn-default btn-flat" @click.prevent="logout">
                                    Cerrar sesión
                                </a>
                                <form id="logout-form" action="/logout" method="POST" style="display: none;">
                                    <input type="hidden" name="_token" :value="token">
                                </form>
                            </div>
                        </li>    
                    </ul>
                </li>
            </ul>
        </nav>
        <!-- /.navbar -->
    </div>
</template>
<script>
export default {
    name: 'Navigation',
    data() {
        return {
            token: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
            timestamp: ''
        } 
    },
    created() {
        setInterval(this.getNow, 1000);
    },
    methods: {
        logout() {
            document.getElementById('logout-form').submit();
        },
        getNow: function() {
            const today = new Date();
            const date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
            const time = today.getHours() + ":" + today.getMinutes();
            const dateTime = date +' | '+ time;
            this.timestamp = dateTime;
        }
    },
    props: ['username', 'userrole']
}
</script>
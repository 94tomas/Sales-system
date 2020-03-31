<template>
    <div>
        <!-- Content Header (Page header) -->
        <section class="content-header">
            <b-container>
            <h3><i class="fas fa-tachometer-alt"></i> Tablero</h3>
            </b-container>
        </section>

        <!-- Main content -->
        <section class="content">
            <!-- Container box -->
            <b-container>
                <b-row align-h="center" class="c-row">
                    <b-col md="4" sm="6">
                        <router-link :to="{name: 'invoices'}">
                            <div class="info-box bg-info align-items-center">
                                <span class="info-box-icon"><i class="fas fa-newspaper"></i></span>
                    
                                <div class="info-box-content">
                                    <span class="info-box-text">Facturas</span>
                                </div>
                                <!-- /.info-box-content -->
                            </div>
                        </router-link>
                    </b-col>
                    <!-- /.col -->
                    <b-col md="4" sm="6">
                        <router-link :to="{name: 'products'}">
                            <div class="info-box bg-success align-items-center">
                                <span class="info-box-icon"><i class="fas fa-barcode"></i></span>
                    
                                <div class="info-box-content">
                                    <span class="info-box-text">Productos</span>
                                </div>
                                <!-- /.info-box-content -->
                            </div>
                        </router-link>
                    </b-col>
                    <!-- /.col -->
                    <b-col md="4" sm="6">
                        <router-link :to="{name: 'clients'}">
                            <div class="info-box bg-lightblue align-items-center">
                                <span class="info-box-icon"><i class="fas fa-users"></i></span>
                    
                                <div class="info-box-content">
                                    <span class="info-box-text">Clientes</span>
                                </div>
                                <!-- /.info-box-content -->
                            </div>
                        </router-link>
                    </b-col>
                    <!-- /.col -->
                    <!---------------------------- ADMIN ----------------------->
                    <b-col md="4" sm="6" v-if="user_role == 'admin'">
                        <a href="#">
                            <div class="info-box bg-secondary align-items-center">
                                <span class="info-box-icon"><i class="fas fa-chart-bar"></i></span>
                    
                                <div class="info-box-content">
                                    <span class="info-box-text">Reportes</span>
                                </div>
                                <!-- /.info-box-content -->
                            </div>
                        </a>
                    </b-col>
                    <!-- /.col -->
                    <b-col md="4" sm="6" v-if="user_role == 'admin'">
                        <a href="#">
                            <div class="info-box bg-warning align-items-center">
                                <span class="info-box-icon"><i class="fas fa-user-tie"></i></span>
                    
                                <div class="info-box-content">
                                    <span class="info-box-text">Gerente</span>
                                </div>
                                <!-- /.info-box-content -->
                            </div>
                        </a>
                    </b-col>
                    <!-- /.col -->
                    <!---------------------------- END ADMIN ----------------------->
                    <b-col md="4" sm="6">
                        <router-link :to="{name: 'account'}">
                            <div class="info-box bg-teal align-items-center">
                                <span class="info-box-icon"><i class="fas fa-cogs"></i></span>
                    
                                <div class="info-box-content">
                                    <span class="info-box-text">Mi cuenta</span>
                                </div>
                                <!-- /.info-box-content -->
                            </div>
                        </router-link>
                    </b-col>
                    <!-- /.col -->
                    <b-col md="4" sm="6">
                        <a href="javascript:;" @click.prevent="logout">
                            <div class="info-box bg-danger align-items-center">
                                <span class="info-box-icon"><i class="fas fa-power-off"></i></span>
                    
                                <div class="info-box-content">
                                    <span class="info-box-text">Salir</span>
                                </div>
                                <!-- /.info-box-content -->
                            </div>
                        </a>
                        <form id="logout-form" action="/logout" method="POST" style="display: none;">
                            <input type="hidden" name="_token" :value="token">
                        </form>
                    </b-col>
                    <!-- /.col -->
                </b-row>
            </b-container>
        </section>
        <!-- /.content -->
    </div>
</template>
<script>
export default {
    name: 'dashboard',
    props: ['user_role'],
    data() {
        return {
            token: document.querySelector('meta[name="csrf-token"]').getAttribute('content')
        } 
    },
    methods: {
        logout: function() {
            document.getElementById('logout-form').submit();
        }
    }
}
</script>
<style lang="scss">
    .c-row {
        a {
            text-decoration: none;
            display: inline-block;
            width: 100%;
            margin-bottom: 30px;
            .info-box {
                margin-bottom: 0px;
            }
            &:hover {
                transform: scale(1.01);
                box-shadow: 0 0 12px -5px #343a40;
            }
        }
    }
</style>

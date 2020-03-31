<template>
    <div>
        <!-- Main Sidebar Container -->
        <aside class="main-sidebar sidebar-dark-success elevation-4">
            <!-- Brand Logo -->
            <router-link class="brand-link" :to="{name: 'dashboard'}">
                <img src="/img/AdminLTELogo.png"
                    alt="AdminLTE Logo"
                    class="brand-image img-circle elevation-3"
                    style="opacity: .8">
                <span class="brand-text font-weight-light">AdminLTE 3</span>
            </router-link>

            <!-- Sidebar -->
            <div class="sidebar">
                <!-- Sidebar user (optional) -->
                <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div class="image">
                        <img src="/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image">
                    </div>
                    <div class="info">
                    <a href="#" class="d-block">{{ user_data.name }}</a>
                    </div>
                </div>

                <!-- Sidebar Menu -->
                <nav class="mt-2">
                    <ul class="nav nav-pills nav-sidebar flex-column nav-flat" data-widget="treeview" role="menu" data-accordion="false">
                    <!-- Add icons to the links using the .nav-icon class
                        with font-awesome or any other icon font library -->
                    
                        <li class="nav-item">
                            <router-link class="nav-link" :to="{name: 'dashboard'}">
                                <i class="nav-icon fas fa-tachometer-alt"></i>
                                <p>Tablero</p>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" :to="{name: 'invoices'}">
                                <i class="nav-icon fas fa-newspaper"></i>
                                <p>Facturas</p>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" :to="{name: 'products'}">
                                <i class="nav-icon fas fa-barcode"></i>
                                <p>Productos</p>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" :to="{name: 'clients'}">
                                <i class="nav-icon fas fa-users"></i>
                                <p>Clientes</p>
                            </router-link>
                        </li>
                        <!-- {{-- link admin --}}
                        @if (Auth::user()->hasRole('admin')) -->
                        <li class="nav-item has-treeview" v-if="user_role == 'admin'">
                            <a href="#" class="nav-link">
                                <i class="nav-icon fas fa-chart-bar"></i>
                                <p>
                                    Reportes
                                    <i class="right fas fa-angle-left"></i>
                                </p>
                            </a>
                            <ul class="nav nav-treeview">
                                <li class="nav-item">
                                    <a href="#" class="nav-link">
                                        <i class="nav-icon far fa-dot-circle"></i>
                                        <p>Facturas anteriores</p>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link">
                                        <i class="nav-icon far fa-dot-circle"></i>
                                        <p>Reporte para contabilidad</p>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item has-treeview" v-if="user_role == 'admin'">
                            <a href="#" class="nav-link">
                                <i class="nav-icon fas fa-user-tie"></i>
                                <p>
                                    Gerente
                                    <i class="right fas fa-angle-left"></i>
                                </p>
                            </a>
                            <ul class="nav nav-treeview">
                                <li class="nav-item">
                                    <a href="#" class="nav-link">
                                        <i class="nav-icon far fa-dot-circle"></i>
                                        <p>Códigos factorización</p>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link">
                                        <i class="nav-icon far fa-dot-circle"></i>
                                        <p>Información</p>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <!-- @endif -->
                        <li class="nav-item">
                            <router-link class="nav-link" :to="{name: 'account'}">
                                <i class="nav-icon fas fa-cogs"></i>
                                <p>Mi cuenta</p>
                            </router-link>
                        </li>
                    </ul>
                </nav>
                <!-- /.sidebar-menu -->
            </div>
            <!-- /.sidebar -->
        </aside>
    </div>
</template>
<script>
export default {
    name: 'MainSidebar',
    props: ['user_data', 'user_role'],
    data() {
        return {
            
        }
    }
}
</script>
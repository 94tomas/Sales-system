@extends('layouts.main-app')

@section('content')
<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
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
            <b-row>
                <b-col md="4" sm="6">
                    <a href="#">
                        <div class="info-box bg-info align-items-center">
                            <span class="info-box-icon"><i class="fas fa-shopping-cart"></i></span>
                
                            <div class="info-box-content">
                                <span class="info-box-text">Ventas</span>
                            </div>
                            <!-- /.info-box-content -->
                        </div>
                    </a>
                </b-col>
                <!-- /.col -->
                <b-col md="4" sm="6">
                    <a href="#">
                        <div class="info-box bg-success align-items-center">
                            <span class="info-box-icon"><i class="fas fa-barcode"></i></span>
                
                            <div class="info-box-content">
                                <span class="info-box-text">Productos</span>
                            </div>
                            <!-- /.info-box-content -->
                        </div>
                    </a>
                </b-col>
                <!-- /.col -->
                <b-col md="4" sm="6">
                    <a href="#">
                        <div class="info-box bg-lightblue align-items-center">
                            <span class="info-box-icon"><i class="fas fa-users"></i></span>
                
                            <div class="info-box-content">
                                <span class="info-box-text">Clientes</span>
                            </div>
                            <!-- /.info-box-content -->
                        </div>
                    </a>
                </b-col>
                <!-- /.col -->
                <b-col md="4" sm="6">
                    <a href="#">
                        <div class="info-box bg-teal align-items-center">
                            <span class="info-box-icon"><i class="fas fa-users-cog"></i></span>
                
                            <div class="info-box-content">
                                <span class="info-box-text">Proveedores</span>
                            </div>
                            <!-- /.info-box-content -->
                        </div>
                    </a>
                </b-col>
                <!-- /.col -->
                <b-col md="4" sm="6">
                    <a href="#">
                        <div class="info-box bg-secondary align-items-center">
                            <span class="info-box-icon"><i class="fas fa-chart-bar"></i></span>
                
                            <div class="info-box-content">
                                <span class="info-box-text">Reporte de ventas</span>
                            </div>
                            <!-- /.info-box-content -->
                        </div>
                    </a>
                </b-col>
                <!-- /.col -->
                <b-col md="4" sm="6">
                    <a href="{{ route('logout') }}" 
                        onclick="event.preventDefault();
                        document.getElementById('logout-form').submit();">
                        <div class="info-box bg-danger align-items-center">
                            <span class="info-box-icon"><i class="fas fa-power-off"></i></span>
                
                            <div class="info-box-content">
                                <span class="info-box-text">Salir</span>
                            </div>
                            <!-- /.info-box-content -->
                        </div>
                    </a>
                    <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                        @csrf
                    </form>
                </b-col>
                <!-- /.col -->
            </b-row>
        </b-container>
    </section>
    <!-- /.content -->
</div>
<!-- /.content-wrapper -->



<!-- Control Sidebar -->
<aside class="control-sidebar control-sidebar-dark">
    <!-- Control sidebar content goes here -->
</aside>
<!-- /.control-sidebar -->

@endsection

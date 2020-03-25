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
        {{-- Show Menu --}}
        {{-- <li class="nav-item">
            <a class="nav-link" data-widget="control-sidebar" data-slide="true" href="#">
                <i class="fas fa-th-large"></i>
            </a>
        </li> --}}
        <li class="nav-item">
            <a class="nav-link" href="#">
                <i class="fas fa-calendar-week"></i>
                @php
                $days = array("Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sábado");
                $months = array("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
                
                echo $days[date('w')].", ".$months[date('n')-1]." ".date('d').", ".date('Y') ;
                @endphp
            </a>
        </li>
        {{-- User Dropdown Menu --}}
        <li class="nav-item dropdown user user-menu">
            <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                <img src="dist/img/user2-160x160.jpg" class="user-image" alt="User Image">
                <span class="hidden-xs">{{ Auth::user()->name }}</span>
            </a>
            <ul class="dropdown-menu dropdown-menu-right">
                <!-- User image -->
                <li class="user-header">
                    <img src="dist/img/user2-160x160.jpg" class="img-circle" alt="User Image">

                    <p>
                    {{ Auth::user()->name }} - {{ Auth::user()->roles[0]->description }}
                    </p>
                </li>
                <!-- Menu Footer-->
                <li class="user-footer d-flex">
                    <div class="col-6">
                        {{-- <a href="#" class="btn btn-default btn-flat">Profile</a> --}}
                    </div>
                    <div class="col-6 text-right">
                        <a href="{{ route('logout') }}" class="btn btn-default btn-flat"
                            onclick="event.preventDefault();
                            document.getElementById('logout-form').submit();">
                            {{ __('Logout') }}
                        </a>
                        <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                            @csrf
                        </form>
                    </div>
                </li>    
            </ul>
        </li>
    </ul>
</nav>
<!-- /.navbar -->
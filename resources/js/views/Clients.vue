<template>
    <div>
        <b-alert
            variant="success"
            class="c-alert"
            dismissible
            fade
            :show="5"
            v-if="$route.params.status"
            >
            <strong>{{$route.params.msg}}</strong>
        </b-alert>
        <!-- Content Header (Page header) -->
        <section class="content-header">
            <b-container>
                <b-row align-v="center">
                    <b-col>
                        <h3><i class="fas fa-users"></i> Clientes</h3>
                    </b-col>
                    <b-col class="text-right">
                        <router-link :to="{name: 'addClient'}" 
                            tag="button"
                            class="btn btn-success btn-lg">
                            <i class="fas fa-plus"></i> 
                            Añadir
                        </router-link>
                    </b-col>
                </b-row>
            </b-container>
        </section>

        <!-- Main content -->
        <section class="content">
            <b-container fluid>
                <!-- User Interface controls -->
                <b-row class="mb-3">
                    <b-col class="my-1">
                        <b-form-group class="mb-0">
                            <b-input-group size="sm">
                                <b-form-input
                                    type="search"
                                    id="filterInput"
                                    placeholder="Buscar cliente"
                                    v-model="clientSearch"
                                    @keyup="filter"
                                    >
                                </b-form-input>
                            </b-input-group>
                        </b-form-group>
                    </b-col>
                </b-row>

                <!-- Main table element -->
                <b-table-simple
                    small
                    hover
                    bordered
                    head-variant="dark"
                    no-border-collapse
                    responsive="md"
                    >
                    <b-thead head-variant="dark">
                        <b-tr>
                            <b-th>Nº</b-th>
                            <b-th>Nombre</b-th>
                            <b-th>NIT / CI</b-th>
                            <b-th></b-th>
                        </b-tr>
                    </b-thead>
                    <b-tbody id="items_panel">
                        <b-tr class="items_colums"
                            v-for="(item, index) in items" :key="index">
                            <b-td>
                                {{index+1}}
                            </b-td>
                            <b-td>
                                {{item.name}}
                            </b-td>
                            <b-td>
                                {{item.nit_ci}}
                            </b-td>
                            <b-td class="text-right">
                                <router-link :to="{name: 'editClient', params: {client_id: item.id}}"
                                    title="Editar"
                                    class="text-success py-0 px-1">
                                    <i class="fas fa-edit"></i>
                                </router-link>
                            </b-td>
                        </b-tr>
                    </b-tbody>
                </b-table-simple>
                <div v-if="statusload">
                    <div class="text-center text-danger my-2">
                        <b-spinner class="align-middle"></b-spinner>
                        <strong>Cargando...</strong>
                    </div>
                </div>

                <!-- Pagination -->
               <!--  <div class="pb-4">
                    <b-pagination
                    v-model="currentPage"
                    :total-rows="totalRows"
                    :per-page="perPage"
                    align="center"
                    size="sm"
                    class="my-0"
                    ></b-pagination>
                </div> -->
            </b-container>
        </section>
        <!-- /.content -->
    </div>
</template>
<script>
export default {
    name: 'clients',
    data() {
        return {
            items: {},
            statusload: false,
            clientSearch: '',
        }
    },
    computed: {
        /* sortOptions() {
            // Create an options list from our fields
            return this.fields
            .filter(f => f.sortable)
            .map(f => {
                return { text: f.label, value: f.key }
            })
        } */
    },
    mounted() {
        this.getClients();
    },
    methods: {
        getClients() {
            this.statusload = true;
            axios.get('/api/dbclients').then(response => {
                this.items = response.data;
                // console.log(response.data);
                this.statusload = false;
            }).catch(error => {
                alert('error');
            });
        },
        filter(event) {
            this.statusload = true;
            this.items = {};
            axios.get('/api/dbclients/'+this.clientSearch).then(response => {
                this.items = response.data;
                this.statusload = false;
            }).catch(error => {
                alert('error');
            });
        }
    }
}
</script>
<style lang="scss">
    .c-flex {
        >div {
            display: flex;
            align-items: center;
        }
    }
    .modal-backdrop {
        background-color: rgba(0, 0, 0, 0.5);
    }
</style>
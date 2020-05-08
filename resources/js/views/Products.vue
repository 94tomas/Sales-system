<template>
    <div>
        <!-- Notification -->
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
                        <h3 class="mb-0"><i class="fas fa-barcode"></i> Productos</h3>
                    </b-col>
                    <b-col class="text-right">
                        <router-link :to="{name: 'addProduct'}" 
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
                <b-row class="mb-3" align-v="center">
                    <b-col class="my-1">
                        <b-form-group class="mb-0">
                            <b-input-group size="sm">
                                <b-form-input
                                    type="text"
                                    id="filterInput"
                                    placeholder="Buscar producto"
                                    v-model="prodSearch"
                                    @keyup="filter"
                                    >
                                </b-form-input>
                                <!-- <b-input-group-append>
                                    <b-button :disabled="!filter" @click="filter = ''">Borrar</b-button>
                                </b-input-group-append> -->
                            </b-input-group>
                        </b-form-group>
                    </b-col>

                    <!-- <b-col lg="4" class="my-1">
                        <b-form-group class="mb-0 c-flex">
                            <span class="mr-2">Mostrar</span>
                            <b-form-select
                                id="perPageSelect"
                                size="sm"
                            ></b-form-select>
                            <span class="ml-2">Entradas</span>
                        </b-form-group>
                    </b-col> -->
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
                            <b-th>Producto</b-th>
                            <b-th>Precio</b-th>
                            <b-th>Stock</b-th>
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
                                {{item.sale_price | numFormat('0.00') }}
                            </b-td>
                            <b-td>
                                {{item.stock}}
                            </b-td>
                            <b-td class="text-right">
                                <a href="javascript:;" class="text-dark py-0 px-1" 
                                    @click="info(item, $event.target)"
                                    title="Ver">
                                    <i class="fas fa-eye"></i>
                                </a>
                                <router-link :to="{name: 'editProduct', params: {pd_id: item.id}}"
                                    title="Editar"
                                    class="text-success py-0 px-1">
                                    <i class="fas fa-edit"></i>
                                </router-link>
                                <a href="javascript:;" class="text-danger py-0 px-1"
                                    @click="delProd(item.id)"
                                    title="Eliminar">
                                    <i class="fas fa-trash-alt"></i>
                                </a>
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
                <!-- <div class="pb-4">
                    <b-pagination
                    v-model="currentPage"
                    :total-rows="totalRows"
                    :per-page="perPage"
                    align="center"
                    size="sm"
                    class="my-0"
                    ></b-pagination>
                </div> -->

                <!-- Info modal -->
                <b-modal :id="infoModal.id" :title="infoModal.title" hide-footer @hide="resetInfoModal">
                    <div v-html="infoModal.content"></div>
                    <hr>
                    <div class="text-right">
                        <b-button @click="$bvModal.hide(infoModal.id)">Cerrar</b-button>
                    </div>
                </b-modal>
            </b-container>
        </section>
        <!-- /.content -->
    </div>
</template>
<script>
    export default {
        name: 'product',
        data() {
            return {
                items: {},
                infoModal: {
                    id: 'info-modal',
                    title: '',
                    content: ''
                },
                statusload: false,
                prodSearch: ''
            }
        },
        computed: {
        },
        mounted() {
            this.getProducts();
        },
        methods: {
            info(item, button) {
                this.infoModal.title = `Producto: ${item.name}`;
                // this.infoModal.content = JSON.stringify(item, null, 2)
                this.infoModal.content = `<table class="table table-bordered table-sm">
                                        <tr><td><strong>Nombre:</strong></td><td>${item.name}</td></tr>
                                        <tr><td><strong>Descripción:</strong></td><td>${item.description}</td></tr>
                                        <tr><td><strong>Precio:</strong></td><td>${item.sale_price} Bs.</td></tr>
                                        <tr><td><strong>Stock:</strong></td><td>${item.stock}</td></tr></table>`;
                this.$root.$emit('bv::show::modal', this.infoModal.id, button);
            },
            resetInfoModal() {
                this.infoModal.title = ''
                this.infoModal.content = ''
            },
            getProducts() {
                this.statusload = true;
                axios.get('/api/dbproducts').then(response => {
                    this.items = response.data;
                    // console.log(response.data);
                    this.statusload = false;
                }).catch(error => {
                    alert('error');
                });
            },
            delProd(id) {
                if(confirm("¿Está seguro de eliminar este producto?")){
                    axios.delete('/api/dbproducts/'+id).then(response => {
                        // console.log(response);
                        this.$router.go(0)
                    }).catch(error => {
                        alert('error');
                    });
                }
            },
            filter(event) {
                this.statusload = true;
                this.items = {};
                axios.get('/api/dbproducts/'+this.prodSearch).then(response => {
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
</style>
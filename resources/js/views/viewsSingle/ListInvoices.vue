<template>
    <div>
        <!-- Main content -->
        <section class="container">
            <div class="card">
                <div class="card-header py-2 px-3">
                    <h3 class="card-title mb-0">Facturas</h3>

                    <div class="card-tools">
                        <button type="button" class="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="minimizar">
                            <i class="fas fa-minus"></i>
                        </button>
                    </div>
                </div>
                <!-- card-body -->
                <div class="card-body py-2 px-3" style="display: block;">
                    
                        <!-- User Interface controls -->
                        <b-row class="mb-3">
                            <!-- Filter Number -->
                            <b-col class="my-1">
                                <b-form-group class="mb-0">
                                    <b-input-group size="sm">
                                        <b-form-input
                                            type="search"
                                            id="searchNumber"
                                            placeholder="Buscar número de factura"
                                            v-model="searchNumber"
                                            @keyup="filter"
                                            >
                                            <!--  v-model="clientSearch"
                                            @keyup="filter" -->
                                        </b-form-input>
                                    </b-input-group>
                                </b-form-group>
                            </b-col>
                            <!-- Filter client -->
                            <b-col class="my-1">
                                <b-form-group class="mb-0">
                                    <b-input-group size="sm">
                                        <b-form-input
                                            type="search"
                                            id="searchClient"
                                            placeholder="Buscar Nombre del cliente"
                                            v-model="searchClient"
                                            @keyup="filter"
                                            >
                                            <!--  v-model="clientSearch"
                                            @keyup="filter" -->
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
                                    <b-th>Fecha</b-th>
                                    <b-th>Número</b-th>
                                    <b-th>Cliente</b-th>
                                    <b-th>Total</b-th>
                                    <b-th>Estado</b-th>
                                    <b-th></b-th>
                                </b-tr>
                            </b-thead>
                            <b-tbody id="items_panel">
                                <b-tr class="items_colums"
                                    v-for="(item, index) in items.data" :key="index">
                                    <b-td>
                                        {{ item.date_sale }}
                                    </b-td>
                                    <b-td>
                                        {{ item.number }}
                                    </b-td>
                                    <b-td>
                                        {{ item.clients[0].name }}
                                    </b-td>
                                    <b-td>
                                        {{ item.total_price - item.discount | numFormat('0.00') }}
                                    </b-td>
                                    <b-td>
                                        <span class="text-success py-0 px-1" v-if="item.status">
                                            <i class="fas fa-toggle-on"></i>
                                        </span>
                                        <span class="text-danger py-0 px-1" v-else>
                                            <i class="fas fa-toggle-off"></i>
                                        </span>
                                    </b-td>
                                    <b-td class="text-right">
                                        <!-- <router-link :to="{name: 'editClient', params: {client_id: item.id}}"
                                            title="Editar"
                                            class="text-success py-0 px-1">
                                            <i class="fas fa-edit"></i>
                                        </router-link> -->
                                        <a href="javascript:;"
                                            @click="seeInvoice(item, $event.target, false)"
                                            title="Ver"
                                            class="text-dark py-0 px-1">
                                            <i class="fas fa-eye"></i>
                                        </a>
                                        <a href="javascript:;"
                                            @click="seeInvoice(item, $event.target, true)"
                                            title="Imprimir"
                                            class="text-dark py-0 px-1">
                                            <i class="fas fa-print"></i>
                                        </a>
                                        <a href="javascript:;"
                                            title="Editar"
                                            class="text-success py-0 px-1"
                                            v-if="item.status">
                                            <i class="fas fa-edit"></i>
                                        </a>
                                        <a href="javascript:;"
                                            title="Anular"
                                            class="text-danger py-0 px-1"
                                            v-if="item.status">
                                            <i class="fas fa-ban"></i>
                                        </a>
                                    </b-td>
                                </b-tr>
                            </b-tbody>
                        </b-table-simple>

                        <div v-if="load">
                            <div class="text-center text-danger my-2">
                                <b-spinner class="align-middle"></b-spinner>
                                <strong>Cargando...</strong>
                            </div>
                        </div>

                        <!-- Pagination -->
                        <pagination :data="items"
                            @pagination-change-page="getInvoices"
                            size="small"
                            align="center"
                            :limit="1"
                            class="c-pagination">
                            <span slot="prev-nav"><i class="fa fa-arrow-circle-left" aria-hidden="true"></i> Anterior</span>
                            <span slot="next-nav">Siguiente <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></span>
                        </pagination>
                    
                </div>
                <!-- /.card-body -->
            </div>
        </section>
        <!-- /.Main content -->
        <!-- Modal Invoice -->
        <b-modal :id="infoModal.id" :title="infoModal.title" hide-footer size="xl">
            <!-- Inactive components will be cached! -->

            <invoice :invoice_id="infoModal.invoiceId" :invoice_print="infoModal.print"></invoice>

            <!-- <hr>
            <div class="text-right">
                <b-button @click="$bvModal.hide(infoModal.id)">Cerrar</b-button>
            </div> -->
        </b-modal>
    </div>
</template>
<script>
export default {
    name: 'ListInvoices',
    data() {
        return {
            items: {},
            load: false,
            searchNumber: '',
            searchClient: '',
            infoModal: {
                id: 'invoice-modal',
                title: '',
                invoiceId: '',
                print: false
            },
        }
    },
    mounted() {
        this.getInvoices();
    },
    methods: {
        getInvoices(page, number, client) {
            // console.log(text);
            this.load = true;
            this.items = {};
            if (typeof page === 'undefined') {
                page = 1;
            }
            if (typeof number === 'undefined') {
                number = this.searchNumber;
            }
            if (typeof client === 'undefined') {
                client = this.searchClient;
            }
            axios.get('/api/dbinvoices?page=' + page + '&number=' + number + '&client=' + client).then(response => {
                // console.log(response.data);
                this.items = response.data;
                this.load = false;
            }).catch(error => {
                alert(error);
            });
        },
        filter(event) {
            this.getInvoices(1, this.searchNumber, this.searchClient);
        },
        /* Modal preview invoice */
        seeInvoice(item, button, print) {
            this.infoModal.title = `Cliente: ${item.clients[0].name}`;
            this.infoModal.invoiceId = item.id;
            this.infoModal.print = print;
            this.$root.$emit('bv::show::modal', this.infoModal.id, button);
        },
    }
}
</script>
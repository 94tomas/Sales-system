<template>
    <div>
        <!-- Content Header (Page header) -->
        <section class="content-header">
            <b-container>
                <b-row align-v="center">
                    <b-col>
                        <h3 class="mb-0"><i class="fas fa-barcode"></i> Productos</h3>
                    </b-col>
                    <b-col class="text-right">
                        <b-button variant="success" size="lg">
                            <i class="fas fa-plus"></i> 
                            Añadir
                        </b-button>
                    </b-col>
                </b-row>
            </b-container>
        </section>

        <!-- Main content -->
        <section class="content">
            <b-container fluid>
                <!-- User Interface controls -->
                <b-row class="mb-3">
                    <b-col lg="8" class="my-1">
                        <b-form-group class="mb-0">
                            <b-input-group size="sm">
                                <b-form-input
                                    v-model="filter"
                                    type="search"
                                    id="filterInput"
                                    placeholder="Buscar producto"
                                    >
                                </b-form-input>
                                <b-input-group-append>
                                    <b-button :disabled="!filter" @click="filter = ''">Borrar</b-button>
                                </b-input-group-append>
                            </b-input-group>
                        </b-form-group>
                    </b-col>

                    <b-col lg="4" class="my-1">
                        <b-form-group class="mb-0 c-flex">
                            <span class="mr-2">Mostrar</span>
                            <b-form-select
                                v-model="perPage"
                                id="perPageSelect"
                                size="sm"
                                :options="pageOptions"
                            ></b-form-select>
                            <span class="ml-2">Entradas</span>
                        </b-form-group>
                    </b-col>
                </b-row>

                <!-- Main table element -->
                <b-table
                    show-empty
                    small
                    hover
                    bordered
                    head-variant="dark"
                    no-border-collapse
                    responsive="md"
                    :items="items"
                    :fields="fields"
                    :current-page="currentPage"
                    :per-page="perPage"
                    :filter="filter"
                    :filterIncludedFields="filterOn"
                    :sort-by.sync="sortBy"
                    :sort-desc.sync="sortDesc"
                    :sort-direction="sortDirection"
                    @filtered="onFiltered"
                    :busy="false"
                    >
                    <template v-slot:table-busy>
                        <div class="text-center text-danger my-2">
                            <b-spinner class="align-middle"></b-spinner>
                            <strong>Loading...</strong>
                        </div>
                    </template>

                    <template v-slot:cell(id)="row">
                        {{ row.index + 1 }}
                    </template>

                    <template v-slot:cell(actions)="row">
                        <a href="javascript:;" class="text-dark py-0 px-1" 
                            @click="info(row.item, row.index, $event.target)"
                            title="Ver">
                            <i class="fas fa-eye"></i>
                        </a>
                        <a href="javascript:;" class="text-success py-0 px-1"
                            title="Editar">
                            <i class="fas fa-edit"></i>
                        </a>
                        <a href="javascript:;" class="text-danger py-0 px-1"
                            title="Eliminar">
                            <i class="fas fa-trash-alt"></i>
                        </a>
                    </template>
                </b-table>

                <!-- Pagination -->
                <div class="pb-4">
                    <b-pagination
                    v-model="currentPage"
                    :total-rows="totalRows"
                    :per-page="perPage"
                    align="center"
                    size="sm"
                    class="my-0"
                    ></b-pagination>
                </div>

                <!-- Info modal -->
                <b-modal :id="infoModal.id" :title="infoModal.title" hide-footer @hide="resetInfoModal">
                    <pre>{{ infoModal.content }}</pre>

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
                items: [
                    { product: 'Dickerson Macdonald', price: 40, stock: 200 },
                    { product: 'Larsen Shaw', price: 21, stock: 200 },
                    { product: 'Mini Navarro', price: 9,  stock: 200 },
                    { product: 'Geneva Wilson', price: 89, stock: 200 },
                    { product: 'Jami Carney', price: 38, stock: 200 },
                    { product: 'Essie Dunlap', price: 27, stock: 200 },
                    { product: 'Thor Macdonald', price: 40, stock: 200 },
                    { product: 'Larsen Shaw', price: 87, stock: 200 },
                    { product: 'Mitzi Navarro', price: 26, stock: 200 },
                    { product: 'Genevieve Wilson', price: 22, stock: 200 },
                    { product: 'John Carney', price: 38, stock: 200 },
                    { product: 'Dick Dunlap', price: 29, stock: 200 },
                    { product: 'Dickerson Macdonald', price: 40, stock: 200 },
                    { product: 'Larsen Shaw', price: 21, stock: 200 },
                    { product: 'Mini Navarro', price: 9,  stock: 200 },
                    { product: 'Geneva Wilson', price: 89, stock: 200 },
                    { product: 'Jami Carney', price: 38, stock: 200 },
                    { product: 'Essie Dunlap', price: 27, stock: 200 },
                    { product: 'Thor Macdonald', price: 40, stock: 200 },
                    { product: 'Larsen Shaw', price: 87, stock: 200 },
                    { product: 'Mitzi Navarro', price: 26, stock: 200 },
                    { product: 'Genevieve Wilson', price: 22, stock: 200 },
                    { product: 'John Carney', price: 38, stock: 200 },
                    { product: 'Dick Dunlap', price: 29, stock: 200 },
                    { product: 'Dickerson Macdonald', price: 40, stock: 200 },
                    { product: 'Larsen Shaw', price: 21, stock: 200 },
                    { product: 'Mini Navarro', price: 9,  stock: 200 },
                    { product: 'Geneva Wilson', price: 89, stock: 200 },
                    { product: 'Jami Carney', price: 38, stock: 200 },
                    { product: 'Essie Dunlap', price: 27, stock: 200 },
                    { product: 'Thor Macdonald', price: 40, stock: 200 },
                    { product: 'Larsen Shaw', price: 87, stock: 200 },
                    { product: 'Mitzi Navarro', price: 26, stock: 200 },
                    { product: 'Genevieve Wilson', price: 22, stock: 200 },
                    { product: 'John Carney', price: 38, stock: 200 },
                    { product: 'Dick Dunlap', price: 29, stock: 200 },
                    { product: 'Dickerson Macdonald', price: 40, stock: 200 },
                    { product: 'Larsen Shaw', price: 21, stock: 200 },
                    { product: 'Mini Navarro', price: 9,  stock: 200 },
                    { product: 'Geneva Wilson', price: 89, stock: 200 },
                    { product: 'Jami Carney', price: 38, stock: 200 },
                    { product: 'Essie Dunlap', price: 27, stock: 200 },
                    { product: 'Thor Macdonald', price: 40, stock: 200 },
                    { product: 'Larsen Shaw', price: 87, stock: 200 },
                    { product: 'Mitzi Navarro', price: 26, stock: 200 },
                    { product: 'Genevieve Wilson', price: 22, stock: 200 },
                    { product: 'John Carney', price: 38, stock: 200 },
                    { product: 'Dick Dunlap', price: 29, stock: 200 },
                    { product: 'Mitzi Navarro', price: 26, stock: 200 },
                    { product: 'Genevieve Wilson', price: 22, stock: 200 },
                    { product: 'John Carney', price: 38, stock: 200 },
                    { product: 'Dick Dunlap', price: 29, stock: 200 },
                    { product: 'Dickerson Macdonald', price: 40, stock: 200 },
                    { product: 'Larsen Shaw', price: 21, stock: 200 },
                    { product: 'Mini Navarro', price: 9,  stock: 200 },
                    { product: 'Geneva Wilson', price: 89, stock: 200 },
                    { product: 'Jami Carney', price: 38, stock: 200 },
                    { product: 'Essie Dunlap', price: 27, stock: 200 },
                    { product: 'Thor Macdonald', price: 40, stock: 200 },
                    { product: 'Larsen Shaw', price: 87, stock: 200 },
                    { product: 'Mitzi Navarro', price: 26, stock: 200 },
                    { product: 'Genevieve Wilson', price: 22, stock: 200 },
                    { product: 'John Carney', price: 38, stock: 200 },
                    { product: 'Dick Dunlap', price: 29, stock: 200 },
                    { product: 'Dickerson Macdonald', price: 40, stock: 200 },
                    { product: 'Larsen Shaw', price: 21, stock: 200 },
                    { product: 'Mini Navarro', price: 9,  stock: 200 },
                    { product: 'Geneva Wilson', price: 89, stock: 200 },
                    { product: 'Jami Carney', price: 38, stock: 200 },
                    { product: 'Essie Dunlap', price: 27, stock: 200 },
                    { product: 'Thor Macdonald', price: 40, stock: 200 },
                    { product: 'Larsen Shaw', price: 87, stock: 200 },
                    { product: 'Mitzi Navarro', price: 26, stock: 200 },
                    { product: 'Genevieve Wilson', price: 22, stock: 200 },
                    { product: 'John Carney', price: 38, stock: 200 },
                    { product: 'Dick Dunlap', price: 29, stock: 200 },
                    { product: 'Dickerson Macdonald', price: 40, stock: 200 },
                    { product: 'Larsen Shaw', price: 21, stock: 200 },
                    { product: 'Mini Navarro', price: 9,  stock: 200 },
                    { product: 'Geneva Wilson', price: 89, stock: 200 },
                    { product: 'Jami Carney', price: 38, stock: 200 },
                    { product: 'Essie Dunlap', price: 27, stock: 200 },
                    { product: 'Thor Macdonald', price: 40, stock: 200 },
                    { product: 'Larsen Shaw', price: 87, stock: 200 },
                    { product: 'Mitzi Navarro', price: 26, stock: 200 },
                    { product: 'Genevieve Wilson', price: 22, stock: 200 },
                    { product: 'John Carney', price: 38, stock: 200 },
                    { product: 'Dick Dunlap', price: 29, stock: 200 }
                ],
                fields: [
                    { key: 'id', label: 'N°' },
                    { key: 'product', label: 'Producto', sortable: true, sortDirection: 'desc' },
                    { key: 'price', label: 'Precio', sortable: true, class: 'text-center' },
                    { key: 'stock', label: 'Stock', sortable: true, class: 'text-center' },
                    { key: 'actions', label: '', class: 'text-right' }
                ],
                totalRows: 1,
                currentPage: 1,
                perPage: 10,
                pageOptions: [10, 25, 50, 100],
                sortBy: '',
                sortDesc: false,
                sortDirection: 'asc',
                filter: null,
                filterOn: [],
                infoModal: {
                    id: 'info-modal',
                    title: '',
                    content: ''
                }
            }
        },
        computed: {
            sortOptions() {
                // Create an options list from our fields
                return this.fields
                .filter(f => f.sortable)
                .map(f => {
                    return { text: f.label, value: f.key }
                })
            }
        },
        mounted() {
            // Set the initial number of items
            this.totalRows = this.items.length
        },
        methods: {
            info(item, index, button) {
                this.infoModal.title = `Row index: ${index}`
                this.infoModal.content = JSON.stringify(item, null, 2)
                this.$root.$emit('bv::show::modal', this.infoModal.id, button)
            },
            resetInfoModal() {
                this.infoModal.title = ''
                this.infoModal.content = ''
            },
            onFiltered(filteredItems) {
                // Trigger pagination to update the number of buttons/pages due to filtering
                this.totalRows = filteredItems.length
                this.currentPage = 1
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
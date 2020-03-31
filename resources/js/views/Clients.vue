<template>
    <div>
        <!-- Content Header (Page header) -->
        <section class="content-header">
            <b-container>
                <b-row align-v="center">
                    <b-col>
                        <h3><i class="fas fa-users"></i> Clientes</h3>
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
                                    placeholder="Buscar cliente"
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

                    <template v-slot:cell(actions)="">
                        <a href="javascript:;" class="text-success py-0 px-1"
                            title="Editar">
                            <i class="fas fa-edit"></i>
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
            items: [
                { name: 'Dickerson Macdonald', ci_nit: 40 },
                { name: 'Larsen Shaw', ci_nit: 21 },
                { name: 'Mini Navarro', ci_nit: 9, },
                { name: 'Geneva Wilson', ci_nit: 89 },
                { name: 'Jami Carney', ci_nit: 38 },
                { name: 'Essie Dunlap', ci_nit: 27 },
                { name: 'Thor Macdonald', ci_nit: 40 },
                { name: 'Larsen Shaw', ci_nit: 87 },
                { name: 'Mitzi Navarro', ci_nit: 26 },
                { name: 'Genevieve Wilson', ci_nit: 22 },
                { name: 'John Carney', ci_nit: 38 },
                { name: 'Dick Dunlap', ci_nit: 29 }
            ],
            fields: [
                { key: 'id', label: 'N°' },
                { key: 'name', label: 'Nombre/s', sortable: true, sortDirection: 'desc' },
                { key: 'ci_nit', label: 'CI / NIT', sortable: true, class: 'text-center' },
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
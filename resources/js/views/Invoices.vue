<template>
    <div>
        <!-- Content Header (Page header) -->
        <section class="content-header">
            <b-container>
            <h3><i class="fas fa-newspaper"></i> Facturas</h3>
            </b-container>
        </section>

        <!-- Main content -->
        <section class="container">
            <div class="card">
                <div class="card-header py-2 px-3">
                    <h3 class="card-title mb-0">Datos de Factura</h3>

                    <div class="card-tools">
                        <button type="button" class="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="minimizar">
                            <i class="fas fa-minus"></i>
                        </button>
                    </div>
                </div>
                <div class="card-body py-2 px-3" style="display: block;">
                    <b-form-group>
                        Número: <span class="text-info">000012</span>
                    </b-form-group>
                    <b-form-group>
                        Fecha: <span class="text-info">28/03/2020</span>
                    </b-form-group>
                    <b-form-group
                        id="input-group-1"
                        label="NIT / CI"
                        label-for="ci_nit_client"
                        >
                        <b-form-input
                            id="ci_nit_client"
                            type="number"
                            required
                            placeholder="NIT/CI de cliente"
                        ></b-form-input>
                    </b-form-group>
                    <b-form-group
                        id="input-group-2"
                        label="Clientes"
                        label-for="name_client"
                        >
                        <b-form-input
                            id="name_client"
                            type="text"
                            required
                            placeholder="Nombre de cliente"
                        ></b-form-input>
                    </b-form-group>
                    <b-form-group
                        id="input-group-3"
                        label="Productos adquiridos"
                        label-for="products"
                        >
                        <div class="border border-success rounded">
                            <b-button variant="success" block @click="addProduct">
                                <strong>AÑADIR PRODUCTO</strong>
                            </b-button>
                            <b-table-simple hover small caption-top responsive class="c-table">
                                <b-thead>
                                    <b-tr>
                                        <b-th scope="col">Producto</b-th>
                                        <b-th scope="col" class="text-center">Cantidad</b-th>
                                        <b-th scope="col" class="text-center">p.u.</b-th>
                                        <b-th scope="col" class="text-right">Total[Bs.]</b-th>
                                        <b-th scope="col"></b-th>
                                    </b-tr>
                                </b-thead>
                                <b-tbody id="items_panel">
                                    <b-tr :id="'items_'+index" :index="index" class="items_colums"
                                        v-for="(item, index) in items" :key="index">
                                        <b-td>
                                            <input :id="'item_name_'+index" type="text" placeholder="Producto" required style="width: 100%">
                                        </b-td>
                                        <b-td class="text-center">
                                            <input :id="'item_quantity_'+index" type="number" value="1" required style="width: 50%">
                                        </b-td>
                                        <b-td class="text-center">
                                            <span :id="'item_pu_'+index">0</span>
                                        </b-td>
                                        <b-td class="text-right">
                                            <span :id="'item_cost_'+index">0</span>
                                        </b-td>
                                        <b-td class="text-right">
                                            <a href="javascript:void(0)" @click="removeProduct(index)" class="text-danger">
                                                <i class="fas fa-times"></i>
                                            </a>
                                        </b-td>
                                    </b-tr>
                                </b-tbody>
                                <b-tfoot>
                                    <b-tr>
                                        <b-th variant="info" colspan="3" class="text-center text-primary">TOTAL: </b-th>
                                        <b-th variant="info" class="text-right text-success"><span id="total_cost">0.00</span></b-th>
                                        <b-th variant="info"></b-th>
                                    </b-tr>
                                </b-tfoot>
                            </b-table-simple>
                            <!-- /.info-box-content -->
                        </div>
                    </b-form-group>
                    <b-form-group
                        id="input-group-2"
                        label="Descuento"
                        label-for="discount"
                        >
                        <b-form-input
                            id="discount"
                            type="number"
                            required
                            placeholder="Descuento en Bs."
                        ></b-form-input>
                    </b-form-group>
                </div>
                <!-- /.card-body -->
            </div>
        </section>
        <!-- /.content -->
    </div>
</template>
<script>
export default {
    name: 'invoice',
    data() {
        return {
            items: [],
            i: 0
        }
    },
    methods: {
        addProduct() {
            this.items.push(this.i);
            this.i ++;
        },
        removeProduct(index) {
            this.items.splice(index, 1);
        }
    }
}
</script>
<style lang="scss">
    .c-table {
        input {
            font-size: 12px;
        }
    }
</style>
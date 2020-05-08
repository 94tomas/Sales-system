<template>
    <div @click="customBody()">
        <b-alert
            :variant="notification.status"
            class="c-alert"
            dismissible
            fade
            :show="5"
            v-if="notification.show"
            >
            <strong>{{notification.msg}}</strong>
        </b-alert>
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
                    <b-form @submit.prevent="formInvoice">
                        <b-form-group>
                            Número: <span class="text-info"> {{ formsales.numInvoice }} </span>
                        </b-form-group>
                        <b-form-group>
                            <!-- new Date().toJSON().slice(0,10).replace(/-/g,'/') -->
                            Fecha: <span class="text-info"> {{ formsales.date }} </span>
                        </b-form-group>
                        <b-form-group
                            id="input-group-1"
                            label="NIT / CI"
                            label-for="ci_nit_client"
                            >
                            <b-form-input
                                id="ci_nit_client"
                                type="number"
                                placeholder="NIT/CI de cliente"
                                v-model="formsales.nit_ci"
                                @blur="getName()"
                            ></b-form-input>
                            
                            <div v-if="errors && errors['from.nit_ci']" class="text-danger">{{ errors['from.nit_ci'][0] }}</div>

                            <div v-if="formsales.ifNewClient" class="text-danger">Cliente no registrado, por favor agrege el nombre del cliente</div>
                        </b-form-group>
                        <b-form-group
                            id="input-group-2"
                            label="Cliente"
                            label-for="name_client"
                            >
                            <b-form-input
                                id="name_client"
                                type="text"
                                placeholder="Nombre de cliente"
                                v-model="formsales.name"
                                :disabled="formsales.ifNewClient ? false : true"
                            ></b-form-input>

                            <div v-if="errors && errors['from.name']" class="text-danger">{{ errors['from.name'][0] }}</div>
                            
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
                                <b-table-simple hover small caption-top class="c-table">
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
                                                <!-- list="my_list_prod" -->
                                                <!--  @blur="blurInput()" -->
                                                <b-form-input :id="'item_name_'+index"
                                                    ref="c_prod"
                                                    size="sm"
                                                    placeholder="Producto"
                                                    required
                                                    list="my_list_prod"
                                                    v-model="item.name"
                                                    @keyup="searchProduct($event.target.value, 'item_name_'+index, index)"
                                                    :disabled="item.disabled">
                                                </b-form-input>
                                            </b-td>
                                            <b-td class="text-center">
                                                <b-form-input :id="'item_quantity_'+index"
                                                        type="number"
                                                        min="1"
                                                        :max="item.stock"
                                                        :value="item.quantity"
                                                        @change="changeQuantity($event, index)"
                                                        required
                                                        size="sm"
                                                        style="width:50%"
                                                        class="mx-auto">
                                                </b-form-input>
                                            </b-td>
                                            <b-td class="text-center">
                                                <span :id="'item_pu_'+index">
                                                    {{ item.sale }}
                                                </span>
                                            </b-td>
                                            <b-td class="text-right">
                                                <span :id="'item_cost_'+index">
                                                    {{ item.sale * item.quantity }}
                                                </span>
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
                                            <b-th variant="info" colspan="3" class="text-center text-primary">
                                                TOTAL:
                                            </b-th>
                                            <b-th variant="info" class="text-right text-success">
                                                <span id="total_cost">
                                                    {{ formsales.total }}
                                                </span>
                                            </b-th>
                                            <b-th variant="info"></b-th>
                                        </b-tr>
                                    </b-tfoot>
                                </b-table-simple>
                                <!-- if products for invoice -->
                                <div v-if="ifProducts" class="text-danger">Debe agregarse al menos un producto para la factura</div>
                                <!-- <datalist id="my_list_prod">
                                    <option v-for="product in products" :key="product.id">{{ product.name }}</option>
                                </datalist> -->
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
                                v-model="formsales.discount"
                                placeholder="Descuento en Bs."
                            ></b-form-input>
                        </b-form-group>
                        <hr>
                        <b-button type="submit" variant="success" size="lg">
                            Terminar compra
                        </b-button>
                    </b-form>
                </div>
                <!-- /.card-body -->
            </div>
        </section>
        <!-- /.content -->

        <!-- list -->
        <ul id="my_list_prod" class="list-float" :style="styleList" v-if="ifVisibility">
            <li v-for="product in products" 
                :key="product.id" 
                @click="chooseProd(products.i, product.id, product.name, product.stock, product.sale_price)">
                {{ product.name }}
            </li>
        </ul>

        <!-- Show invoices list and action of invoices -->
        <list-invoices v-if="refresh"></list-invoices>
    </div>
</template>
<script>
export default {
    name: 'invoice',
    data() {
        return {
            formsales: {
                numInvoice: '000001221',
                // date: new Date().toJSON().slice(0,10),
                date: this.dateNow(),
                name: '',
                nit_ci: '',
                ifNewClient: false,
                // product: '',
                discount: '',
                total: 0,
            },
            items: [],
            products: [],
            ifVisibility: false,
            styleList: {
                top: '',
                left: '',
                width: '',
                // display: 'none'
            },
            ifProducts: false,
            errors: {},
            notification: {
                status: '',
                show: false,
                msg: ''
            },
            refresh: true
        }
    },
    methods: {
        dateNow() {
            var today = new Date();
            var dd = today.getDate();

            var mm = today.getMonth()+1; 
            var yyyy = today.getFullYear();
            if(dd<10) {
                dd='0'+dd;
            } 
            if(mm<10) {
                mm='0'+mm;
            } 
            return yyyy+'-'+mm+'-'+dd;
        },
        getName() {
            this.formsales.ifNewClient = false;
            if(this.formsales.nit_ci != '') {
                axios.get('/api/dbclient_invoice/'+this.formsales.nit_ci).then(response => {
                    // console.log(response.data);
                    this.formsales.name = response.data[0].name;
                }).catch(error => {
                    this.formsales.ifNewClient = true;
                    this.formsales.name = '';
                });
            }
            else {
                this.formsales.name = '';
            }
        },
        /* Add product on invoice */
        addProduct() {
            this.items.push({id: '', name: '', sale: 0, stock: 0, disabled: false, quantity: 1});
            this.totalPrice();
            this.ifProducts = false;
            // this.items[this.i] = {id: '', name: '', sale: ''};
            // this.i ++;
        },
        /* Remove product on invoice */
        removeProduct(index) {
            this.items.splice(index, 1);
            this.totalPrice();
        },
        /* Search product for invoice */
        searchProduct(prod, id_prod, i) {
            // position top
            let height = document.getElementById(id_prod).clientHeight;
            let topPos  = document.getElementById(id_prod).getBoundingClientRect().top + window.scrollY + height + 2 + "px";
            // position left
            let leftPos = document.getElementById(id_prod).getBoundingClientRect().left + window.scrollX + 2 + "px";
            // Save style list
            this.styleList.top = topPos;
            this.styleList.left = leftPos;
            this.styleList.width = document.getElementById(id_prod).offsetWidth - 4 + "px";
            
            // console.log(this.styleList);
            if (prod != '') {
                // this.styleList.display = 'block';
                this.ifVisibility = true;
                axios.get('/api/dbproduct_invoice/'+prod).then(response => {
                    // console.log(response.data);
                    // $('#my_list_prod').show();
                    this.products = response.data;
                    this.products.i = i;
                    // console.log(this.products);
                }).catch(error => {
                    alert('error');
                });
            } else {
                // this.styleList.display = 'none';
                // this.ifVisibility = false;
                this.customBody();
            }
            this.products = [];
        },
        /* User choose product */
        chooseProd (j, id, name, stock, sale) {
            this.items[j].id = id;
            this.items[j].name = name;
            this.items[j].sale = sale;
            this.items[j].stock = stock;
            this.items[j].disabled = true;
            this.totalPrice();
        },
        /* user change quantity of product */
        changeQuantity (quantity, i) {
            if (quantity == this.items[i].stock) {
                // notification
                this.notification.status = 'warning';
                this.notification.show = true;
                this.notification.msg = 'Stock máximo alcanzado del producto: ' + this.items[i].name;
            }
            else {    
                // notification
                this.notification.status = '';
                this.notification.show = false;
                this.notification.msg = '';
            }
            this.items[i].quantity = quantity;
            this.totalPrice(); 
        },
        /* Calculate total */
        totalPrice() {
            this.formsales.total = 0;
            this.items.forEach(element => {
                this.formsales.total += element.quantity * element.sale;
            });
        },
        /* Click on body for hide list product */
        customBody () {
            this.ifVisibility = false;

            if (this.$refs["c_prod"]) {
                this.$refs["c_prod"].forEach(element => {
                    // console.log(element.$el.disabled);
                    if (!element.$el.disabled) {
                        element.$el.value = '';
                    }
                });
            }
        },
        formInvoice () {
            this.errors = {};
            if (Object.keys(this.items).length == 0) {
                this.ifProducts = true;
            } else {
                this.ifProducts = false;
                // [this.formsales, this.items]
                axios.post('/api/dbinvoices', {from: this.formsales, products: this.items}).then(response => {
                    // console.log(response.status);
                    if (response.status === 200) {
                        this.formsales = {
                            numInvoice: '000001221',
                            date: new Date().toJSON().slice(0,10),
                            name: '',
                            nit_ci: '',
                            ifNewClient: false,
                            discount: '',
                            total: 0,
                        };
                        this.items = [];
                        // notification
                        this.notification.status = 'success';
                        this.notification.show = true;
                        this.notification.msg = 'Venta realizada con éxito';
                    }
                }).catch(error => {
                    if (error.response.status === 422) {
                        this.errors = error.response.data.errors || {};
                        // notification
                        this.notification.status = 'danger';
                        this.notification.show = true;
                        this.notification.msg = 'Verificar los datos';
                    }
                });
            }
            // notification
            this.notification.status = '';
            this.notification.show = false;
            this.notification.msg = '';
            // Refresh invoices list
            this.forceRerender();
        },
        /* Refresh invoices list */
        forceRerender() {
            // Remove my-component from the DOM
            this.refresh = false;
            
            this.$nextTick(() => {
                // Add the component back in
                this.refresh = true;
            });
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
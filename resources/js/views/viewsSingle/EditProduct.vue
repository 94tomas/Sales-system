<template>
    <div>
        <!-- Content Header (Page header) -->
        <section class="content-header">
            <b-container>
                <b-row align-v="center">
                    <b-col>
                        <router-link :to="{name: 'products'}" class="text-danger">
                            <i class="fas fa-chevron-left"></i>
                            Volver
                        </router-link>
                    </b-col>
                </b-row>
            </b-container>
        </section>
        
        <!-- Main content -->
        <section class="container">
            <div class="card pb-2">
                <div class="card-header py-2 px-3">
                    <h3 class="card-title mb-0">Editar producto</h3>

                    <div class="card-tools">
                        <button type="button" class="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="minimizar">
                            <i class="fas fa-minus"></i>
                        </button>
                    </div>
                </div>
                <div class="card-body py-2 px-3" style="display: block;">
                    <b-form @submit.prevent="upProduct">
                        <b-form-group
                            id="input-group-1"
                            label="Nombre (*)"
                            label-for="p_name"
                            >
                            <b-form-input
                                id="p_name"
                                type="text"
                                placeholder="Nombre de producto"
                                v-model="product.name"
                            ></b-form-input>
                            <div v-if="errors && errors.name" class="text-danger">{{ errors.name[0] }}</div>
                        </b-form-group>
                        <b-form-group
                            id="input-group-2"
                            label="Precio (*)"
                            label-for="p_price"
                            >
                            <b-form-input
                                id="p_price"
                                type="number"
                                placeholder="Precio del producto"
                                v-model="product.sale_price"
                                step="0.01"
                            ></b-form-input>
                            <div v-if="errors && errors.sale_price" class="text-danger">{{ errors.sale_price[0] }}</div>
                        </b-form-group>
                        <b-form-group
                            id="input-group-3"
                            label="Descripción"
                            label-for="p_description"
                            >
                            <b-form-textarea
                                id="p_description"
                                placeholder="Descripción del producto"
                                v-model="product.description"
                            ></b-form-textarea>
                        </b-form-group>
                        <b-form-group
                            id="input-group-4"
                            label="Stock"
                            label-for="p_stock"
                            >
                            <b-form-input
                                id="p_stock"
                                type="number"
                                placeholder="Stock del producto"
                                v-model="product.stock"
                            ></b-form-input>
                        </b-form-group>
                        <hr>
                        <b-button type="submit" variant="success">
                            Guardar
                        </b-button>
                        <router-link :to="{name: 'products'}" class="btn btn-danger ml-2" tag="button">
                            Cancelar
                        </router-link>
                    </b-form>
                </div>
                <!-- /.card-body -->
            </div>
        </section>
        <!-- /.content -->
    </div>
</template>
<script>
export default {
    data() {
        return {
            product: {},
            errors: {},
            success: false
        }
    },
    mounted() {
        this.getProduct();
    },
    methods: {
        getProduct() {
            axios.get('/api/dbproducts/'+this.$route.params.pd_id+'/edit').then(response => {
                // console.log(response.data);
                this.product = response.data;
            }).catch(error => {
                alert('error');
            });
        },
        upProduct() {
            this.errors = {};
            this.success = false;
            axios.put('/api/dbproducts/'+this.$route.params.pd_id, this.product).then(response => {
                // console.log(response);
                this.product = {},
                this.success = true;
                this.$router.push({ name: 'products', params: {status: this.success, msg: 'Producto actualizado con éxito'} });
            }).catch(error => {
                if (error.response.status === 422) {
                    this.errors = error.response.data.errors || {};
                }
            });
        }
    }
}
</script>
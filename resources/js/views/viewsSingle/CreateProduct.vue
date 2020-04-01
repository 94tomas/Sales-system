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
                    <h3 class="card-title mb-0">Datos del producto</h3>

                    <div class="card-tools">
                        <button type="button" class="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="minimizar">
                            <i class="fas fa-minus"></i>
                        </button>
                    </div>
                </div>
                <div class="card-body py-2 px-3" style="display: block;">
                    <b-form @submit.prevent="formProduct">
                        <b-form-group
                            id="input-group-1"
                            label="Nombre (*)"
                            label-for="p_name"
                            >
                            <b-form-input
                                id="p_name"
                                type="text"
                                placeholder="Nombre de producto"
                                v-model="fProduct.name"
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
                                v-model="fProduct.price"
                                step="0.01"
                            ></b-form-input>
                            <div v-if="errors && errors.price" class="text-danger">{{ errors.price[0] }}</div>
                        </b-form-group>
                        <b-form-group
                            id="input-group-3"
                            label="Descripción"
                            label-for="p_description"
                            >
                            <b-form-textarea
                                id="p_description"
                                placeholder="Descripción del producto"
                                v-model="fProduct.description"
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
                                v-model="fProduct.stock"
                            ></b-form-input>
                        </b-form-group>
                        <hr>
                        <b-button type="submit" variant="success" size="lg">
                            Guardar
                        </b-button>
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
            fProduct: {
                name: '',
                price: '',
                description: '',
                stock: ''
            },
            errors: {},
            success: false,
            loaded: true
        }
    },
    methods: {
        formProduct() {
            if (this.loaded) {
                this.loaded = false;
                this.success = false;
                this.errors = {};
                axios.post('/api/dbproducts', this.fProduct).then(response => {
                    this.fProduct = {};
                    this.loaded = true;
                    this.success = true;
                    this.$router.push({ name: 'products', params: {status: this.success, msg: 'Producto agregado con éxito'} });
                }).catch(error => {
                    this.loaded = true;
                    if (error.response.status === 422) {
                        this.errors = error.response.data.errors || {};
                    }
                });
            }
        }
    }
}
</script>
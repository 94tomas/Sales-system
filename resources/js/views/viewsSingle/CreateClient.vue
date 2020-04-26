<template>
    <div>
        <!-- Content Header (Page header) -->
        <section class="content-header">
            <b-container>
                <b-row align-v="center">
                    <b-col>
                        <router-link :to="{name: 'clients'}" class="text-danger">
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
                    <h3 class="card-title mb-0">Datos del cliente</h3>

                    <div class="card-tools">
                        <button type="button" class="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="minimizar">
                            <i class="fas fa-minus"></i>
                        </button>
                    </div>
                </div>
                <div class="card-body py-2 px-3" style="display: block;">
                    <b-form @submit.prevent="formClient">
                        <b-form-group
                            id="input-group-1"
                            label="Nombre (*)"
                            label-for="c_name"
                            >
                            <b-form-input
                                id="c_name"
                                type="text"
                                placeholder="Nombre del cliente"
                                v-model="fClient.name"
                            ></b-form-input>
                            <div v-if="errors && errors.name" class="text-danger">{{ errors.name[0] }}</div>
                        </b-form-group>
                        <b-form-group
                            id="input-group-2"
                            label="Ci / Nit (*)"
                            label-for="c_cinit"
                            >
                            <b-form-input
                                id="c_cinit"
                                type="text"
                                placeholder="CI o NIT del cliente"
                                v-model="fClient.nit_ci"
                                step="0.01"
                            ></b-form-input>
                            <div v-if="errors && errors.nit_ci" class="text-danger">{{ errors.nit_ci[0] }}</div>
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
            fClient: {
                name: '',
                nit_ci: ''
            },
            errors: {},
            success: false,
            loaded: true
        }
    },
    methods: {
        formClient() {
            if (this.loaded) {
                this.loaded = false;
                this.success = false;
                this.errors = {};
                axios.post('/api/dbclients', this.fClient).then(response => {
                    this.fClient = {};
                    this.loaded = true;
                    this.success = true;
                    this.$router.push({ name: 'clients', params: {status: this.success, msg: 'Cliente agregado con éxito'} });
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
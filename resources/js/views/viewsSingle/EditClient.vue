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
                    <h3 class="card-title mb-0">Editar cliente</h3>

                    <div class="card-tools">
                        <button type="button" class="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="minimizar">
                            <i class="fas fa-minus"></i>
                        </button>
                    </div>
                </div>
                <div class="card-body py-2 px-3" style="display: block;">
                    <b-form @submit.prevent="upClient">
                        <b-form-group
                            id="input-group-1"
                            label="Nombre (*)"
                            label-for="c_name"
                            >
                            <b-form-input
                                id="c_name"
                                type="text"
                                placeholder="Nombre del cliente"
                                v-model="client.name"
                            ></b-form-input>
                            <div v-if="errors && errors.name" class="text-danger">{{ errors.name[0] }}</div>
                        </b-form-group>
                        <b-form-group
                            id="input-group-2"
                            label="Ci / Nit (*)"
                            label-for="c_nitci"
                            >
                            <b-form-input
                                id="c_nitci"
                                type="text"
                                v-model="client.nit_ci"
                                step="0.01"
                                disabled=""
                            ></b-form-input>
                        </b-form-group>
                        <hr>
                        <b-button type="submit" variant="success">
                            Guardar
                        </b-button>
                        <router-link :to="{name: 'clients'}" class="btn btn-danger ml-2" tag="button">
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
            client: {},
            errors: {},
            success: false
        }
    },
    mounted() {
        this.getClient();
    },
    methods: {
        getClient() {
            axios.get('/api/dbclients/'+this.$route.params.client_id+'/edit').then(response => {
                // console.log(response.data);
                this.client = response.data;
            }).catch(error => {
                alert('error');
            });
        },
        upClient() {
            this.errors = {};
            this.success = false;
            axios.put('/api/dbclients/'+this.$route.params.client_id, this.client).then(response => {
                // console.log(response);
                this.client = {},
                this.success = true;
                this.$router.push({ name: 'clients', params: {status: this.success, msg: 'Cliente actualizado con éxito'} });
            }).catch(error => {
                if (error.response.status === 422) {
                    this.errors = error.response.data.errors || {};
                }
            });
        }
    }
}
</script>
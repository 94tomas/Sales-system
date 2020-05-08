<template>
    <div>
        <div id="invoice">
            <div v-if="condition">
                <div class="d-flex justify-content-between mb-4">
                    <div class="text-center">
                        <img src="/img/logo.png" style="width: 100%; max-width: 130px;">
                        <p class="mb-0" style="font-size: 13px; line-height: 13px;">Nombre de la empresa o comercio</p>
                        <p class="mb-0" style="font-size: 13px; line-height: 13px;"><strong>Casa Matriz</strong></p>
                        <p class="mb-0" style="font-size: 13px; line-height: 13px;">Calle Dolores N° 21</p>
                        <p class="mb-0" style="font-size: 13px; line-height: 13px;">Zona/Barrio Villa Olores</p>
                        <p class="mb-0" style="font-size: 13px; line-height: 13px;">Telfs: 4260456 - 4565154</p>
                        <p class="mb-0" style="font-size: 13px; line-height: 13px;">Potosí - Bolivia</p>
                    </div>
                    
                    <div>
                        <div class="p-3 border border-secondary rounded mb-3">
                            <p class="mb-0"><strong>NIT: </strong>111222333 </p>
                            <p class="mb-0"><strong>AUTORIZACION N°: </strong>11111111111111111111 </p>
                            <p class="mb-0"><strong>FACTURA: </strong> <span class="text-danger">N°. {{ datas.number }} </span></p>
                        </div>
                        <p class="text-danger text-center mb-0" style="letter-spacing: 2px;"><strong>ORIGINAL</strong></p>
                        <p class="text-center">Actividad económica: Venta de varios productos</p>
                    </div>
                </div>

                <h3 class="text-center"><strong>FACTURA</strong></h3>

                <div class="mb-2 border p-2 rounded-top" style="border-color: #d6e9f9 !important;">
                    <div class="row align-items-end">
                        <div class="col-7">
                            Potosí, {{ datas.date_sale }} <br>
                            <strong>Señor(es): </strong>{{ datas.clients[0].name }}
                        </div>
                        <div class="col-5">
                            <strong>NIT/CI: </strong>{{ datas.clients[0].nit_ci }}
                        </div>
                    </div>
                </div>

                <div>
                    <table class="table table-sm table-bordered">
                        <thead>
                            <tr class="table-info">
                                <th>CANTIDAD</th>
                                <th>CONCEPTO</th>
                                <th>P. UNITARIO</th>
                                <th>SUB. TOTAL</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) in datas.sale_details" :key="index">
                                <!-- {{ item }} -->
                                <td>
                                    {{ item.pivot.quantity }}
                                </td>
                                <td>
                                    {{ item.name }}
                                </td>
                                <td>
                                    {{ item.sale_price | numFormat('0.00') }}
                                </td>
                                <td>
                                    {{ item.pivot.quantity * item.sale_price | numFormat('0.00') }}
                                </td>
                            </tr>
                            <tr>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr v-if="datas.discount">
                                <td colspan="3" class="text-right">Descuento:</td>
                                <td>{{ datas.discount | numFormat('0.00') }}</td>
                            </tr>
                            <tr>
                                <td colspan="3" class="text-right">Total Bs.:</td>
                                <td>{{ datas.total_price - datas.discount | numFormat('0.00') }}</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>

                <div class="row mb-3">
                    <div class="col-7">
                        <div>
                            <strong>Son: </strong>{{ totalInWords }}/100 Bolivianos
                            <br>
                            <strong>Fecha límite de emisión: </strong>30/08/2020
                            <br>
                            <strong>Código de control: </strong> FD-B5-6D-1A-A5
                        </div>
                    </div>

                    <div class="col-5">
                        <div class="text-right">
                            <qrcode 
                                :value="'nit' + '|' + datas.number + '|' + 'N°autorizacion' + '|' + datas.date_saleqr + '|' + datas.total_price + '|' + (datas.total_price - datas.discount) + '|' + 'codigoControl' + '|' + datas.clients[0].nit_ci + '|0|0|0|' + datas.discount" 
                                :options="{ width: 120, color: { dark: '#343a40' } }"
                                tag="img"
                                class="border">
                            </qrcode>
                        </div>
                    </div>
                </div>

                <div class="text-center p-2 border mx-4" style="background-color: #f5f5f5; font-size: 13px;">
                    "ESTA FACTURA CONTRIBUYE AL DESARROLLO DEL PAIS. EL USO ILICITO DE ESTA SERA SANCIONADO DE ACUERDO A LEY"
                    <br>
                    Ley No. 453: "El proveedor deberá dar cumplimiento a las condiciones ofertadas"
                </div>
            </div>

            <div v-else>
                <div class="text-center text-danger my-2">
                    <b-spinner class="align-middle"></b-spinner>
                </div>
            </div>
        </div>

        <div class="modal-footer mt-3 pb-0 px-0">
            <b-button @click="$bvModal.hide('invoice-modal')">Cerrar</b-button>
            <b-button 
                @click="print" 
                ref="btnPrint"
                variant="success">
                Imprimir
            </b-button>
        </div>
        <!-- {{invoice_print}} -->
        <!-- factura {{invoice_id}} -->
    </div>
</template>
<script>
export default {
    name: 'Invoice',
    data() {
        return {
            condition: false,
            datas: {
                clients: [
                    {
                        name: '',
                        nit_ci: ''
                    }
                ],
                date_sale: '',
                date_saleqr: '',
                discount: 0,
                number: '',
                sale_details: [
                    {
                        description: '',
                        name: '',
                        pivot: {
                            quantity: 0
                        },
                        sale_price: 0,
                        stock: 0
                    }
                ],
                status: 0,
                total_price: 0
            },
            totalInWords: ''
        }
    },
    props: ['invoice_id', 'invoice_print'],
    mounted: function() {
        this.getItems(this.invoice_id);
        // this.invoicePrint(this.invoice_print);
    },
    methods: {
        print() {
            // pass the element id here
            this.$htmlToPaper('invoice');
        },
        getItems(id) {
            // console.log(id);
            axios.get('/api/dbinvoices/' + id).then(response => {
                
                this.datas = response.data[0];
                response.data[0].date_saleqr = response.data[0].date_sale;
                response.data[0].date_sale = this.saleDetails(response.data[0].date_sale);
                
                // convert price total in words
                this.inWords(response.data[0].total_price - response.data[0].discount);
                // console.log(this.datas);
            }).catch (error => {
                alert('error');
            });

            // this.condition = true;
        },
        saleDetails(date) {
            let arrayDate = date.split('-');
            let months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
            const newDate = arrayDate[2] + ' de ' + months[parseInt(arrayDate[1]) - 1] + ' de ' + arrayDate[0];
            
            return newDate;
        },
        inWords(number) {
            // numeral
            let numeral = require('numeral');
            let cnumber = numeral(number).format('0.00');
            let numString = cnumber.toString();
            let numArray = numString.split('.');

            let num = parseInt(numArray[0]);
            
            // written number
            let writtenNumber = require('written-number');

            writtenNumber.defaults.lang = 'es';
            this.totalInWords =  writtenNumber(num).toUpperCase();
            this.totalInWords += ' ' + numArray[1];

            // Show invoice generate
            this.condition = true;
        },
        invoicePrint(ifPrint) {
            // console.log(ifPrint);
            if (ifPrint) {
                // this.$refs.btnPrint.click();
                this.$htmlToPaper('invoice');
            }
        }
    }, 
    updated: function(){
        this.invoicePrint(this.invoice_print);
    }
}
</script>
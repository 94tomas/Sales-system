(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["about"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Clients.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Clients.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'clients',
  data: function data() {
    return {
      items: {},
      statusload: false,
      clientSearch: ''
    };
  },
  computed: {
    /* sortOptions() {
        // Create an options list from our fields
        return this.fields
        .filter(f => f.sortable)
        .map(f => {
            return { text: f.label, value: f.key }
        })
    } */
  },
  mounted: function mounted() {
    this.getClients();
  },
  methods: {
    getClients: function getClients() {
      var _this = this;

      this.statusload = true;
      axios.get('/api/dbclients').then(function (response) {
        _this.items = response.data; // console.log(response.data);

        _this.statusload = false;
      })["catch"](function (error) {
        alert('error');
      });
    },
    filter: function filter(event) {
      var _this2 = this;

      this.statusload = true;
      this.items = {};
      axios.get('/api/dbclients/' + this.clientSearch).then(function (response) {
        _this2.items = response.data;
        _this2.statusload = false;
      })["catch"](function (error) {
        alert('error');
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Dashboard.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'dashboard',
  props: ['user_role'],
  data: function data() {
    return {
      token: document.querySelector('meta[name="csrf-token"]').getAttribute('content')
    };
  },
  methods: {
    logout: function logout() {
      document.getElementById('logout-form').submit();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Invoices.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Invoices.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'invoice',
  data: function data() {
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
        total: 0
      },
      items: [],
      products: [],
      ifVisibility: false,
      styleList: {
        top: '',
        left: '',
        width: '' // display: 'none'

      },
      ifProducts: false,
      errors: {},
      notification: {
        status: '',
        show: false,
        msg: ''
      },
      refresh: true
    };
  },
  methods: {
    dateNow: function dateNow() {
      var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth() + 1;
      var yyyy = today.getFullYear();

      if (dd < 10) {
        dd = '0' + dd;
      }

      if (mm < 10) {
        mm = '0' + mm;
      }

      return yyyy + '-' + mm + '-' + dd;
    },
    getName: function getName() {
      var _this = this;

      this.formsales.ifNewClient = false;

      if (this.formsales.nit_ci != '') {
        axios.get('/api/dbclient_invoice/' + this.formsales.nit_ci).then(function (response) {
          // console.log(response.data);
          _this.formsales.name = response.data[0].name;
        })["catch"](function (error) {
          _this.formsales.ifNewClient = true;
          _this.formsales.name = '';
        });
      } else {
        this.formsales.name = '';
      }
    },

    /* Add product on invoice */
    addProduct: function addProduct() {
      this.items.push({
        id: '',
        name: '',
        sale: 0,
        stock: 0,
        disabled: false,
        quantity: 1
      });
      this.totalPrice();
      this.ifProducts = false; // this.items[this.i] = {id: '', name: '', sale: ''};
      // this.i ++;
    },

    /* Remove product on invoice */
    removeProduct: function removeProduct(index) {
      this.items.splice(index, 1);
      this.totalPrice();
    },

    /* Search product for invoice */
    searchProduct: function searchProduct(prod, id_prod, i) {
      var _this2 = this;

      // position top
      var height = document.getElementById(id_prod).clientHeight;
      var topPos = document.getElementById(id_prod).getBoundingClientRect().top + window.scrollY + height + 2 + "px"; // position left

      var leftPos = document.getElementById(id_prod).getBoundingClientRect().left + window.scrollX + 2 + "px"; // Save style list

      this.styleList.top = topPos;
      this.styleList.left = leftPos;
      this.styleList.width = document.getElementById(id_prod).offsetWidth - 4 + "px"; // console.log(this.styleList);

      if (prod != '') {
        // this.styleList.display = 'block';
        this.ifVisibility = true;
        axios.get('/api/dbproduct_invoice/' + prod).then(function (response) {
          // console.log(response.data);
          // $('#my_list_prod').show();
          _this2.products = response.data;
          _this2.products.i = i; // console.log(this.products);
        })["catch"](function (error) {
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
    chooseProd: function chooseProd(j, id, name, stock, sale) {
      this.items[j].id = id;
      this.items[j].name = name;
      this.items[j].sale = sale;
      this.items[j].stock = stock;
      this.items[j].disabled = true;
      this.totalPrice();
    },

    /* user change quantity of product */
    changeQuantity: function changeQuantity(quantity, i) {
      if (quantity == this.items[i].stock) {
        // notification
        this.notification.status = 'warning';
        this.notification.show = true;
        this.notification.msg = 'Stock máximo alcanzado del producto: ' + this.items[i].name;
      } else {
        // notification
        this.notification.status = '';
        this.notification.show = false;
        this.notification.msg = '';
      }

      this.items[i].quantity = quantity;
      this.totalPrice();
    },

    /* Calculate total */
    totalPrice: function totalPrice() {
      var _this3 = this;

      this.formsales.total = 0;
      this.items.forEach(function (element) {
        _this3.formsales.total += element.quantity * element.sale;
      });
    },

    /* Click on body for hide list product */
    customBody: function customBody() {
      this.ifVisibility = false;

      if (this.$refs["c_prod"]) {
        this.$refs["c_prod"].forEach(function (element) {
          // console.log(element.$el.disabled);
          if (!element.$el.disabled) {
            element.$el.value = '';
          }
        });
      }
    },
    formInvoice: function formInvoice() {
      var _this4 = this;

      this.errors = {};

      if (Object.keys(this.items).length == 0) {
        this.ifProducts = true;
      } else {
        this.ifProducts = false; // [this.formsales, this.items]

        axios.post('/api/dbinvoices', {
          from: this.formsales,
          products: this.items
        }).then(function (response) {
          // console.log(response.status);
          if (response.status === 200) {
            _this4.formsales = {
              numInvoice: '000001221',
              date: new Date().toJSON().slice(0, 10),
              name: '',
              nit_ci: '',
              ifNewClient: false,
              discount: '',
              total: 0
            };
            _this4.items = []; // notification

            _this4.notification.status = 'success';
            _this4.notification.show = true;
            _this4.notification.msg = 'Venta realizada con éxito';
          }
        })["catch"](function (error) {
          if (error.response.status === 422) {
            _this4.errors = error.response.data.errors || {}; // notification

            _this4.notification.status = 'danger';
            _this4.notification.show = true;
            _this4.notification.msg = 'Verificar los datos';
          }
        });
      } // notification


      this.notification.status = '';
      this.notification.show = false;
      this.notification.msg = ''; // Refresh invoices list

      this.forceRerender();
    },

    /* Refresh invoices list */
    forceRerender: function forceRerender() {
      var _this5 = this;

      // Remove my-component from the DOM
      this.refresh = false;
      this.$nextTick(function () {
        // Add the component back in
        _this5.refresh = true;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/MyAccount.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/MyAccount.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'account'
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Products.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Products.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'product',
  data: function data() {
    return {
      items: {},
      infoModal: {
        id: 'info-modal',
        title: '',
        content: ''
      },
      statusload: false,
      prodSearch: ''
    };
  },
  computed: {},
  mounted: function mounted() {
    this.getProducts();
  },
  methods: {
    info: function info(item, button) {
      this.infoModal.title = "Producto: ".concat(item.name); // this.infoModal.content = JSON.stringify(item, null, 2)

      this.infoModal.content = "<table class=\"table table-bordered table-sm\">\n                                    <tr><td><strong>Nombre:</strong></td><td>".concat(item.name, "</td></tr>\n                                    <tr><td><strong>Descripci\xF3n:</strong></td><td>").concat(item.description, "</td></tr>\n                                    <tr><td><strong>Precio:</strong></td><td>").concat(item.sale_price, " Bs.</td></tr>\n                                    <tr><td><strong>Stock:</strong></td><td>").concat(item.stock, "</td></tr></table>");
      this.$root.$emit('bv::show::modal', this.infoModal.id, button);
    },
    resetInfoModal: function resetInfoModal() {
      this.infoModal.title = '';
      this.infoModal.content = '';
    },
    getProducts: function getProducts() {
      var _this = this;

      this.statusload = true;
      axios.get('/api/dbproducts').then(function (response) {
        _this.items = response.data; // console.log(response.data);

        _this.statusload = false;
      })["catch"](function (error) {
        alert('error');
      });
    },
    delProd: function delProd(id) {
      var _this2 = this;

      if (confirm("¿Está seguro de eliminar este producto?")) {
        axios["delete"]('/api/dbproducts/' + id).then(function (response) {
          // console.log(response);
          _this2.$router.go(0);
        })["catch"](function (error) {
          alert('error');
        });
      }
    },
    filter: function filter(event) {
      var _this3 = this;

      this.statusload = true;
      this.items = {};
      axios.get('/api/dbproducts/' + this.prodSearch).then(function (response) {
        _this3.items = response.data;
        _this3.statusload = false;
      })["catch"](function (error) {
        alert('error');
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/viewsSingle/CreateClient.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/viewsSingle/CreateClient.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      fClient: {
        name: '',
        nit_ci: ''
      },
      errors: {},
      success: false,
      loaded: true
    };
  },
  methods: {
    formClient: function formClient() {
      var _this = this;

      if (this.loaded) {
        this.loaded = false;
        this.success = false;
        this.errors = {};
        axios.post('/api/dbclients', this.fClient).then(function (response) {
          _this.fClient = {};
          _this.loaded = true;
          _this.success = true;

          _this.$router.push({
            name: 'clients',
            params: {
              status: _this.success,
              msg: 'Cliente agregado con éxito'
            }
          });
        })["catch"](function (error) {
          _this.loaded = true;

          if (error.response.status === 422) {
            _this.errors = error.response.data.errors || {};
          }
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/viewsSingle/CreateProduct.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/viewsSingle/CreateProduct.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
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
    };
  },
  methods: {
    formProduct: function formProduct() {
      var _this = this;

      if (this.loaded) {
        this.loaded = false;
        this.success = false;
        this.errors = {};
        axios.post('/api/dbproducts', this.fProduct).then(function (response) {
          _this.fProduct = {};
          _this.loaded = true;
          _this.success = true;

          _this.$router.push({
            name: 'products',
            params: {
              status: _this.success,
              msg: 'Producto agregado con éxito'
            }
          });
        })["catch"](function (error) {
          _this.loaded = true;

          if (error.response.status === 422) {
            _this.errors = error.response.data.errors || {};
          }
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/viewsSingle/EditClient.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/viewsSingle/EditClient.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      client: {},
      errors: {},
      success: false
    };
  },
  mounted: function mounted() {
    this.getClient();
  },
  methods: {
    getClient: function getClient() {
      var _this = this;

      axios.get('/api/dbclients/' + this.$route.params.client_id + '/edit').then(function (response) {
        // console.log(response.data);
        _this.client = response.data;
      })["catch"](function (error) {
        alert('error');
      });
    },
    upClient: function upClient() {
      var _this2 = this;

      this.errors = {};
      this.success = false;
      axios.put('/api/dbclients/' + this.$route.params.client_id, this.client).then(function (response) {
        // console.log(response);
        _this2.client = {}, _this2.success = true;

        _this2.$router.push({
          name: 'clients',
          params: {
            status: _this2.success,
            msg: 'Cliente actualizado con éxito'
          }
        });
      })["catch"](function (error) {
        if (error.response.status === 422) {
          _this2.errors = error.response.data.errors || {};
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/viewsSingle/EditProduct.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/viewsSingle/EditProduct.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      product: {},
      errors: {},
      success: false
    };
  },
  mounted: function mounted() {
    this.getProduct();
  },
  methods: {
    getProduct: function getProduct() {
      var _this = this;

      axios.get('/api/dbproducts/' + this.$route.params.pd_id + '/edit').then(function (response) {
        // console.log(response.data);
        _this.product = response.data;
      })["catch"](function (error) {
        alert('error');
      });
    },
    upProduct: function upProduct() {
      var _this2 = this;

      this.errors = {};
      this.success = false;
      axios.put('/api/dbproducts/' + this.$route.params.pd_id, this.product).then(function (response) {
        // console.log(response);
        _this2.product = {}, _this2.success = true;

        _this2.$router.push({
          name: 'products',
          params: {
            status: _this2.success,
            msg: 'Producto actualizado con éxito'
          }
        });
      })["catch"](function (error) {
        if (error.response.status === 422) {
          _this2.errors = error.response.data.errors || {};
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Clients.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Clients.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".c-flex > div {\n  display: flex;\n  align-items: center;\n}\n.modal-backdrop {\n  background-color: rgba(0, 0, 0, 0.5);\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Dashboard.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".c-row a {\n  text-decoration: none;\n  display: inline-block;\n  width: 100%;\n  margin-bottom: 30px;\n}\n.c-row a .info-box {\n  margin-bottom: 0px;\n}\n.c-row a:hover {\n  transform: scale(1.01);\n  box-shadow: 0 0 12px -5px #343a40;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Invoices.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Invoices.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".c-table input {\n  font-size: 12px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Products.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Products.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".c-flex > div {\n  display: flex;\n  align-items: center;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Clients.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Clients.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./Clients.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Clients.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard.vue?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Dashboard.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Invoices.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Invoices.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./Invoices.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Invoices.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Products.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Products.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./Products.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Products.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Clients.vue?vue&type=template&id=11d2d639&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Clients.vue?vue&type=template&id=11d2d639& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm.$route.params.status
        ? _c(
            "b-alert",
            {
              staticClass: "c-alert",
              attrs: { variant: "success", dismissible: "", fade: "", show: 5 }
            },
            [_c("strong", [_vm._v(_vm._s(_vm.$route.params.msg))])]
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "section",
        { staticClass: "content-header" },
        [
          _c(
            "b-container",
            [
              _c(
                "b-row",
                { attrs: { "align-v": "center" } },
                [
                  _c("b-col", [
                    _c("h3", [
                      _c("i", { staticClass: "fas fa-users" }),
                      _vm._v(" Clientes")
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { staticClass: "text-right" },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "btn btn-success btn-lg",
                          attrs: { to: { name: "addClient" }, tag: "button" }
                        },
                        [
                          _c("i", { staticClass: "fas fa-plus" }),
                          _vm._v(
                            " \n                        Añadir\n                    "
                          )
                        ]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "section",
        { staticClass: "content" },
        [
          _c(
            "b-container",
            { attrs: { fluid: "" } },
            [
              _c(
                "b-row",
                { staticClass: "mb-3" },
                [
                  _c(
                    "b-col",
                    { staticClass: "my-1" },
                    [
                      _c(
                        "b-form-group",
                        { staticClass: "mb-0" },
                        [
                          _c(
                            "b-input-group",
                            { attrs: { size: "sm" } },
                            [
                              _c("b-form-input", {
                                attrs: {
                                  type: "search",
                                  id: "filterInput",
                                  placeholder: "Buscar cliente"
                                },
                                on: { keyup: _vm.filter },
                                model: {
                                  value: _vm.clientSearch,
                                  callback: function($$v) {
                                    _vm.clientSearch = $$v
                                  },
                                  expression: "clientSearch"
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-table-simple",
                {
                  attrs: {
                    small: "",
                    hover: "",
                    bordered: "",
                    "head-variant": "dark",
                    "no-border-collapse": "",
                    responsive: "md"
                  }
                },
                [
                  _c(
                    "b-thead",
                    { attrs: { "head-variant": "dark" } },
                    [
                      _c(
                        "b-tr",
                        [
                          _c("b-th", [_vm._v("Nº")]),
                          _vm._v(" "),
                          _c("b-th", [_vm._v("Nombre")]),
                          _vm._v(" "),
                          _c("b-th", [_vm._v("NIT / CI")]),
                          _vm._v(" "),
                          _c("b-th")
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-tbody",
                    { attrs: { id: "items_panel" } },
                    _vm._l(_vm.items, function(item, index) {
                      return _c(
                        "b-tr",
                        { key: index, staticClass: "items_colums" },
                        [
                          _c("b-td", [
                            _vm._v(
                              "\n                            " +
                                _vm._s(index + 1) +
                                "\n                        "
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-td", [
                            _vm._v(
                              "\n                            " +
                                _vm._s(item.name) +
                                "\n                        "
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-td", [
                            _vm._v(
                              "\n                            " +
                                _vm._s(item.nit_ci) +
                                "\n                        "
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "b-td",
                            { staticClass: "text-right" },
                            [
                              _c(
                                "router-link",
                                {
                                  staticClass: "text-success py-0 px-1",
                                  attrs: {
                                    to: {
                                      name: "editClient",
                                      params: { client_id: item.id }
                                    },
                                    title: "Editar"
                                  }
                                },
                                [_c("i", { staticClass: "fas fa-edit" })]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    }),
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _vm.statusload
                ? _c("div", [
                    _c(
                      "div",
                      { staticClass: "text-center text-danger my-2" },
                      [
                        _c("b-spinner", { staticClass: "align-middle" }),
                        _vm._v(" "),
                        _c("strong", [_vm._v("Cargando...")])
                      ],
                      1
                    )
                  ])
                : _vm._e()
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard.vue?vue&type=template&id=1f79daf6&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Dashboard.vue?vue&type=template&id=1f79daf6& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "section",
      { staticClass: "content-header" },
      [
        _c("b-container", [
          _c("h3", [
            _c("i", { staticClass: "fas fa-tachometer-alt" }),
            _vm._v(" Tablero")
          ])
        ])
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "section",
      { staticClass: "content" },
      [
        _c(
          "b-container",
          [
            _c(
              "b-row",
              { staticClass: "c-row", attrs: { "align-h": "center" } },
              [
                _c(
                  "b-col",
                  { attrs: { md: "4", sm: "6" } },
                  [
                    _c("router-link", { attrs: { to: { name: "invoices" } } }, [
                      _c(
                        "div",
                        { staticClass: "info-box bg-info align-items-center" },
                        [
                          _c("span", { staticClass: "info-box-icon" }, [
                            _c("i", { staticClass: "fas fa-newspaper" })
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "info-box-content" }, [
                            _c("span", { staticClass: "info-box-text" }, [
                              _vm._v("Facturas")
                            ])
                          ])
                        ]
                      )
                    ])
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "b-col",
                  { attrs: { md: "4", sm: "6" } },
                  [
                    _c("router-link", { attrs: { to: { name: "products" } } }, [
                      _c(
                        "div",
                        {
                          staticClass: "info-box bg-success align-items-center"
                        },
                        [
                          _c("span", { staticClass: "info-box-icon" }, [
                            _c("i", { staticClass: "fas fa-barcode" })
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "info-box-content" }, [
                            _c("span", { staticClass: "info-box-text" }, [
                              _vm._v("Productos")
                            ])
                          ])
                        ]
                      )
                    ])
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "b-col",
                  { attrs: { md: "4", sm: "6" } },
                  [
                    _c("router-link", { attrs: { to: { name: "clients" } } }, [
                      _c(
                        "div",
                        {
                          staticClass:
                            "info-box bg-lightblue align-items-center"
                        },
                        [
                          _c("span", { staticClass: "info-box-icon" }, [
                            _c("i", { staticClass: "fas fa-users" })
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "info-box-content" }, [
                            _c("span", { staticClass: "info-box-text" }, [
                              _vm._v("Clientes")
                            ])
                          ])
                        ]
                      )
                    ])
                  ],
                  1
                ),
                _vm._v(" "),
                _vm.user_role == "admin"
                  ? _c("b-col", { attrs: { md: "4", sm: "6" } }, [
                      _c("a", { attrs: { href: "#" } }, [
                        _c(
                          "div",
                          {
                            staticClass:
                              "info-box bg-secondary align-items-center"
                          },
                          [
                            _c("span", { staticClass: "info-box-icon" }, [
                              _c("i", { staticClass: "fas fa-chart-bar" })
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "info-box-content" }, [
                              _c("span", { staticClass: "info-box-text" }, [
                                _vm._v("Reportes")
                              ])
                            ])
                          ]
                        )
                      ])
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.user_role == "admin"
                  ? _c("b-col", { attrs: { md: "4", sm: "6" } }, [
                      _c("a", { attrs: { href: "#" } }, [
                        _c(
                          "div",
                          {
                            staticClass:
                              "info-box bg-warning align-items-center"
                          },
                          [
                            _c("span", { staticClass: "info-box-icon" }, [
                              _c("i", { staticClass: "fas fa-user-tie" })
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "info-box-content" }, [
                              _c("span", { staticClass: "info-box-text" }, [
                                _vm._v("Gerente")
                              ])
                            ])
                          ]
                        )
                      ])
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _c(
                  "b-col",
                  { attrs: { md: "4", sm: "6" } },
                  [
                    _c("router-link", { attrs: { to: { name: "account" } } }, [
                      _c(
                        "div",
                        { staticClass: "info-box bg-teal align-items-center" },
                        [
                          _c("span", { staticClass: "info-box-icon" }, [
                            _c("i", { staticClass: "fas fa-cogs" })
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "info-box-content" }, [
                            _c("span", { staticClass: "info-box-text" }, [
                              _vm._v("Mi cuenta")
                            ])
                          ])
                        ]
                      )
                    ])
                  ],
                  1
                ),
                _vm._v(" "),
                _c("b-col", { attrs: { md: "4", sm: "6" } }, [
                  _c(
                    "a",
                    {
                      attrs: { href: "javascript:;" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.logout($event)
                        }
                      }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "info-box bg-danger align-items-center"
                        },
                        [
                          _c("span", { staticClass: "info-box-icon" }, [
                            _c("i", { staticClass: "fas fa-power-off" })
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "info-box-content" }, [
                            _c("span", { staticClass: "info-box-text" }, [
                              _vm._v("Salir")
                            ])
                          ])
                        ]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "form",
                    {
                      staticStyle: { display: "none" },
                      attrs: {
                        id: "logout-form",
                        action: "/logout",
                        method: "POST"
                      }
                    },
                    [
                      _c("input", {
                        attrs: { type: "hidden", name: "_token" },
                        domProps: { value: _vm.token }
                      })
                    ]
                  )
                ])
              ],
              1
            )
          ],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Invoices.vue?vue&type=template&id=13fa4405&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Invoices.vue?vue&type=template&id=13fa4405& ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      on: {
        click: function($event) {
          return _vm.customBody()
        }
      }
    },
    [
      _vm.notification.show
        ? _c(
            "b-alert",
            {
              staticClass: "c-alert",
              attrs: {
                variant: _vm.notification.status,
                dismissible: "",
                fade: "",
                show: 5
              }
            },
            [_c("strong", [_vm._v(_vm._s(_vm.notification.msg))])]
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "section",
        { staticClass: "content-header" },
        [
          _c("b-container", [
            _c("h3", [
              _c("i", { staticClass: "fas fa-newspaper" }),
              _vm._v(" Facturas")
            ])
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c("section", { staticClass: "container" }, [
        _c("div", { staticClass: "card" }, [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "card-body py-2 px-3",
              staticStyle: { display: "block" }
            },
            [
              _c(
                "b-form",
                {
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.formInvoice($event)
                    }
                  }
                },
                [
                  _c("b-form-group", [
                    _vm._v("\n                        Número: "),
                    _c("span", { staticClass: "text-info" }, [
                      _vm._v(" " + _vm._s(_vm.formsales.numInvoice) + " ")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("b-form-group", [
                    _vm._v("\n                        Fecha: "),
                    _c("span", { staticClass: "text-info" }, [
                      _vm._v(" " + _vm._s(_vm.formsales.date) + " ")
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "b-form-group",
                    {
                      attrs: {
                        id: "input-group-1",
                        label: "NIT / CI",
                        "label-for": "ci_nit_client"
                      }
                    },
                    [
                      _c("b-form-input", {
                        attrs: {
                          id: "ci_nit_client",
                          type: "number",
                          placeholder: "NIT/CI de cliente"
                        },
                        on: {
                          blur: function($event) {
                            return _vm.getName()
                          }
                        },
                        model: {
                          value: _vm.formsales.nit_ci,
                          callback: function($$v) {
                            _vm.$set(_vm.formsales, "nit_ci", $$v)
                          },
                          expression: "formsales.nit_ci"
                        }
                      }),
                      _vm._v(" "),
                      _vm.errors && _vm.errors["from.nit_ci"]
                        ? _c("div", { staticClass: "text-danger" }, [
                            _vm._v(_vm._s(_vm.errors["from.nit_ci"][0]))
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.formsales.ifNewClient
                        ? _c("div", { staticClass: "text-danger" }, [
                            _vm._v(
                              "Cliente no registrado, por favor agrege el nombre del cliente"
                            )
                          ])
                        : _vm._e()
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-group",
                    {
                      attrs: {
                        id: "input-group-2",
                        label: "Cliente",
                        "label-for": "name_client"
                      }
                    },
                    [
                      _c("b-form-input", {
                        attrs: {
                          id: "name_client",
                          type: "text",
                          placeholder: "Nombre de cliente",
                          disabled: _vm.formsales.ifNewClient ? false : true
                        },
                        model: {
                          value: _vm.formsales.name,
                          callback: function($$v) {
                            _vm.$set(_vm.formsales, "name", $$v)
                          },
                          expression: "formsales.name"
                        }
                      }),
                      _vm._v(" "),
                      _vm.errors && _vm.errors["from.name"]
                        ? _c("div", { staticClass: "text-danger" }, [
                            _vm._v(_vm._s(_vm.errors["from.name"][0]))
                          ])
                        : _vm._e()
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-group",
                    {
                      attrs: {
                        id: "input-group-3",
                        label: "Productos adquiridos",
                        "label-for": "products"
                      }
                    },
                    [
                      _c(
                        "div",
                        { staticClass: "border border-success rounded" },
                        [
                          _c(
                            "b-button",
                            {
                              attrs: { variant: "success", block: "" },
                              on: { click: _vm.addProduct }
                            },
                            [_c("strong", [_vm._v("AÑADIR PRODUCTO")])]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-table-simple",
                            {
                              staticClass: "c-table",
                              attrs: { hover: "", small: "", "caption-top": "" }
                            },
                            [
                              _c(
                                "b-thead",
                                [
                                  _c(
                                    "b-tr",
                                    [
                                      _c("b-th", { attrs: { scope: "col" } }, [
                                        _vm._v("Producto")
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "b-th",
                                        {
                                          staticClass: "text-center",
                                          attrs: { scope: "col" }
                                        },
                                        [_vm._v("Cantidad")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-th",
                                        {
                                          staticClass: "text-center",
                                          attrs: { scope: "col" }
                                        },
                                        [_vm._v("p.u.")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-th",
                                        {
                                          staticClass: "text-right",
                                          attrs: { scope: "col" }
                                        },
                                        [_vm._v("Total[Bs.]")]
                                      ),
                                      _vm._v(" "),
                                      _c("b-th", { attrs: { scope: "col" } })
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "b-tbody",
                                { attrs: { id: "items_panel" } },
                                _vm._l(_vm.items, function(item, index) {
                                  return _c(
                                    "b-tr",
                                    {
                                      key: index,
                                      staticClass: "items_colums",
                                      attrs: {
                                        id: "items_" + index,
                                        index: index
                                      }
                                    },
                                    [
                                      _c(
                                        "b-td",
                                        [
                                          _c("b-form-input", {
                                            ref: "c_prod",
                                            refInFor: true,
                                            attrs: {
                                              id: "item_name_" + index,
                                              size: "sm",
                                              placeholder: "Producto",
                                              required: "",
                                              list: "my_list_prod",
                                              disabled: item.disabled
                                            },
                                            on: {
                                              keyup: function($event) {
                                                return _vm.searchProduct(
                                                  $event.target.value,
                                                  "item_name_" + index,
                                                  index
                                                )
                                              }
                                            },
                                            model: {
                                              value: item.name,
                                              callback: function($$v) {
                                                _vm.$set(item, "name", $$v)
                                              },
                                              expression: "item.name"
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-td",
                                        { staticClass: "text-center" },
                                        [
                                          _c("b-form-input", {
                                            staticClass: "mx-auto",
                                            staticStyle: { width: "50%" },
                                            attrs: {
                                              id: "item_quantity_" + index,
                                              type: "number",
                                              min: "1",
                                              max: item.stock,
                                              value: item.quantity,
                                              required: "",
                                              size: "sm"
                                            },
                                            on: {
                                              change: function($event) {
                                                return _vm.changeQuantity(
                                                  $event,
                                                  index
                                                )
                                              }
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-td",
                                        { staticClass: "text-center" },
                                        [
                                          _c(
                                            "span",
                                            {
                                              attrs: { id: "item_pu_" + index }
                                            },
                                            [
                                              _vm._v(
                                                "\n                                                " +
                                                  _vm._s(item.sale) +
                                                  "\n                                            "
                                              )
                                            ]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-td",
                                        { staticClass: "text-right" },
                                        [
                                          _c(
                                            "span",
                                            {
                                              attrs: {
                                                id: "item_cost_" + index
                                              }
                                            },
                                            [
                                              _vm._v(
                                                "\n                                                " +
                                                  _vm._s(
                                                    item.sale * item.quantity
                                                  ) +
                                                  "\n                                            "
                                              )
                                            ]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-td",
                                        { staticClass: "text-right" },
                                        [
                                          _c(
                                            "a",
                                            {
                                              staticClass: "text-danger",
                                              attrs: {
                                                href: "javascript:void(0)"
                                              },
                                              on: {
                                                click: function($event) {
                                                  return _vm.removeProduct(
                                                    index
                                                  )
                                                }
                                              }
                                            },
                                            [
                                              _c("i", {
                                                staticClass: "fas fa-times"
                                              })
                                            ]
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  )
                                }),
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "b-tfoot",
                                [
                                  _c(
                                    "b-tr",
                                    [
                                      _c(
                                        "b-th",
                                        {
                                          staticClass:
                                            "text-center text-primary",
                                          attrs: {
                                            variant: "info",
                                            colspan: "3"
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n                                            TOTAL:\n                                        "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-th",
                                        {
                                          staticClass:
                                            "text-right text-success",
                                          attrs: { variant: "info" }
                                        },
                                        [
                                          _c(
                                            "span",
                                            { attrs: { id: "total_cost" } },
                                            [
                                              _vm._v(
                                                "\n                                                " +
                                                  _vm._s(_vm.formsales.total) +
                                                  "\n                                            "
                                              )
                                            ]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("b-th", { attrs: { variant: "info" } })
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _vm.ifProducts
                            ? _c("div", { staticClass: "text-danger" }, [
                                _vm._v(
                                  "Debe agregarse al menos un producto para la factura"
                                )
                              ])
                            : _vm._e()
                        ],
                        1
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-form-group",
                    {
                      attrs: {
                        id: "input-group-2",
                        label: "Descuento",
                        "label-for": "discount"
                      }
                    },
                    [
                      _c("b-form-input", {
                        attrs: {
                          id: "discount",
                          type: "number",
                          placeholder: "Descuento en Bs."
                        },
                        model: {
                          value: _vm.formsales.discount,
                          callback: function($$v) {
                            _vm.$set(_vm.formsales, "discount", $$v)
                          },
                          expression: "formsales.discount"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("hr"),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      attrs: { type: "submit", variant: "success", size: "lg" }
                    },
                    [
                      _vm._v(
                        "\n                        Terminar compra\n                    "
                      )
                    ]
                  )
                ],
                1
              )
            ],
            1
          )
        ])
      ]),
      _vm._v(" "),
      _vm.ifVisibility
        ? _c(
            "ul",
            {
              staticClass: "list-float",
              style: _vm.styleList,
              attrs: { id: "my_list_prod" }
            },
            _vm._l(_vm.products, function(product) {
              return _c(
                "li",
                {
                  key: product.id,
                  on: {
                    click: function($event) {
                      return _vm.chooseProd(
                        _vm.products.i,
                        product.id,
                        product.name,
                        product.stock,
                        product.sale_price
                      )
                    }
                  }
                },
                [_vm._v("\n            " + _vm._s(product.name) + "\n        ")]
              )
            }),
            0
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.refresh ? _c("list-invoices") : _vm._e()
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header py-2 px-3" }, [
      _c("h3", { staticClass: "card-title mb-0" }, [
        _vm._v("Datos de Factura")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card-tools" }, [
        _c(
          "button",
          {
            staticClass: "btn btn-tool",
            attrs: {
              type: "button",
              "data-card-widget": "collapse",
              "data-toggle": "tooltip",
              title: "minimizar"
            }
          },
          [_c("i", { staticClass: "fas fa-minus" })]
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/MyAccount.vue?vue&type=template&id=3c8a575c&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/MyAccount.vue?vue&type=template&id=3c8a575c& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "section",
      { staticClass: "content-header" },
      [
        _c("b-container", [
          _c("h3", [
            _c("i", { staticClass: "fas fa-cogs" }),
            _vm._v(" Mi cuenta")
          ])
        ])
      ],
      1
    ),
    _vm._v(" "),
    _c("section", { staticClass: "content" }, [
      _vm._v("\n        my account\n    ")
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Products.vue?vue&type=template&id=eec6f8fa&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Products.vue?vue&type=template&id=eec6f8fa& ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm.$route.params.status
        ? _c(
            "b-alert",
            {
              staticClass: "c-alert",
              attrs: { variant: "success", dismissible: "", fade: "", show: 5 }
            },
            [_c("strong", [_vm._v(_vm._s(_vm.$route.params.msg))])]
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "section",
        { staticClass: "content-header" },
        [
          _c(
            "b-container",
            [
              _c(
                "b-row",
                { attrs: { "align-v": "center" } },
                [
                  _c("b-col", [
                    _c("h3", { staticClass: "mb-0" }, [
                      _c("i", { staticClass: "fas fa-barcode" }),
                      _vm._v(" Productos")
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { staticClass: "text-right" },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "btn btn-success btn-lg",
                          attrs: { to: { name: "addProduct" }, tag: "button" }
                        },
                        [
                          _c("i", { staticClass: "fas fa-plus" }),
                          _vm._v(
                            " \n                        Añadir\n                    "
                          )
                        ]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "section",
        { staticClass: "content" },
        [
          _c(
            "b-container",
            { attrs: { fluid: "" } },
            [
              _c(
                "b-row",
                { staticClass: "mb-3", attrs: { "align-v": "center" } },
                [
                  _c(
                    "b-col",
                    { staticClass: "my-1" },
                    [
                      _c(
                        "b-form-group",
                        { staticClass: "mb-0" },
                        [
                          _c(
                            "b-input-group",
                            { attrs: { size: "sm" } },
                            [
                              _c("b-form-input", {
                                attrs: {
                                  type: "text",
                                  id: "filterInput",
                                  placeholder: "Buscar producto"
                                },
                                on: { keyup: _vm.filter },
                                model: {
                                  value: _vm.prodSearch,
                                  callback: function($$v) {
                                    _vm.prodSearch = $$v
                                  },
                                  expression: "prodSearch"
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-table-simple",
                {
                  attrs: {
                    small: "",
                    hover: "",
                    bordered: "",
                    "head-variant": "dark",
                    "no-border-collapse": "",
                    responsive: "md"
                  }
                },
                [
                  _c(
                    "b-thead",
                    { attrs: { "head-variant": "dark" } },
                    [
                      _c(
                        "b-tr",
                        [
                          _c("b-th", [_vm._v("Nº")]),
                          _vm._v(" "),
                          _c("b-th", [_vm._v("Producto")]),
                          _vm._v(" "),
                          _c("b-th", [_vm._v("Precio")]),
                          _vm._v(" "),
                          _c("b-th", [_vm._v("Stock")]),
                          _vm._v(" "),
                          _c("b-th")
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-tbody",
                    { attrs: { id: "items_panel" } },
                    _vm._l(_vm.items, function(item, index) {
                      return _c(
                        "b-tr",
                        { key: index, staticClass: "items_colums" },
                        [
                          _c("b-td", [
                            _vm._v(
                              "\n                            " +
                                _vm._s(index + 1) +
                                "\n                        "
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-td", [
                            _vm._v(
                              "\n                            " +
                                _vm._s(item.name) +
                                "\n                        "
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-td", [
                            _vm._v(
                              "\n                            " +
                                _vm._s(
                                  _vm._f("numFormat")(item.sale_price, "0.00")
                                ) +
                                "\n                        "
                            )
                          ]),
                          _vm._v(" "),
                          _c("b-td", [
                            _vm._v(
                              "\n                            " +
                                _vm._s(item.stock) +
                                "\n                        "
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "b-td",
                            { staticClass: "text-right" },
                            [
                              _c(
                                "a",
                                {
                                  staticClass: "text-dark py-0 px-1",
                                  attrs: { href: "javascript:;", title: "Ver" },
                                  on: {
                                    click: function($event) {
                                      return _vm.info(item, $event.target)
                                    }
                                  }
                                },
                                [_c("i", { staticClass: "fas fa-eye" })]
                              ),
                              _vm._v(" "),
                              _c(
                                "router-link",
                                {
                                  staticClass: "text-success py-0 px-1",
                                  attrs: {
                                    to: {
                                      name: "editProduct",
                                      params: { pd_id: item.id }
                                    },
                                    title: "Editar"
                                  }
                                },
                                [_c("i", { staticClass: "fas fa-edit" })]
                              ),
                              _vm._v(" "),
                              _c(
                                "a",
                                {
                                  staticClass: "text-danger py-0 px-1",
                                  attrs: {
                                    href: "javascript:;",
                                    title: "Eliminar"
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.delProd(item.id)
                                    }
                                  }
                                },
                                [_c("i", { staticClass: "fas fa-trash-alt" })]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    }),
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _vm.statusload
                ? _c("div", [
                    _c(
                      "div",
                      { staticClass: "text-center text-danger my-2" },
                      [
                        _c("b-spinner", { staticClass: "align-middle" }),
                        _vm._v(" "),
                        _c("strong", [_vm._v("Cargando...")])
                      ],
                      1
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c(
                "b-modal",
                {
                  attrs: {
                    id: _vm.infoModal.id,
                    title: _vm.infoModal.title,
                    "hide-footer": ""
                  },
                  on: { hide: _vm.resetInfoModal }
                },
                [
                  _c("div", {
                    domProps: { innerHTML: _vm._s(_vm.infoModal.content) }
                  }),
                  _vm._v(" "),
                  _c("hr"),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "text-right" },
                    [
                      _c(
                        "b-button",
                        {
                          on: {
                            click: function($event) {
                              return _vm.$bvModal.hide(_vm.infoModal.id)
                            }
                          }
                        },
                        [_vm._v("Cerrar")]
                      )
                    ],
                    1
                  )
                ]
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/viewsSingle/CreateClient.vue?vue&type=template&id=d791f1c2&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/viewsSingle/CreateClient.vue?vue&type=template&id=d791f1c2& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "section",
      { staticClass: "content-header" },
      [
        _c(
          "b-container",
          [
            _c(
              "b-row",
              { attrs: { "align-v": "center" } },
              [
                _c(
                  "b-col",
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "text-danger",
                        attrs: { to: { name: "clients" } }
                      },
                      [
                        _c("i", { staticClass: "fas fa-chevron-left" }),
                        _vm._v(
                          "\n                        Volver\n                    "
                        )
                      ]
                    )
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        )
      ],
      1
    ),
    _vm._v(" "),
    _c("section", { staticClass: "container" }, [
      _c("div", { staticClass: "card pb-2" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "card-body py-2 px-3",
            staticStyle: { display: "block" }
          },
          [
            _c(
              "b-form",
              {
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.formClient($event)
                  }
                }
              },
              [
                _c(
                  "b-form-group",
                  {
                    attrs: {
                      id: "input-group-1",
                      label: "Nombre (*)",
                      "label-for": "c_name"
                    }
                  },
                  [
                    _c("b-form-input", {
                      attrs: {
                        id: "c_name",
                        type: "text",
                        placeholder: "Nombre del cliente"
                      },
                      model: {
                        value: _vm.fClient.name,
                        callback: function($$v) {
                          _vm.$set(_vm.fClient, "name", $$v)
                        },
                        expression: "fClient.name"
                      }
                    }),
                    _vm._v(" "),
                    _vm.errors && _vm.errors.name
                      ? _c("div", { staticClass: "text-danger" }, [
                          _vm._v(_vm._s(_vm.errors.name[0]))
                        ])
                      : _vm._e()
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "b-form-group",
                  {
                    attrs: {
                      id: "input-group-2",
                      label: "Ci / Nit (*)",
                      "label-for": "c_cinit"
                    }
                  },
                  [
                    _c("b-form-input", {
                      attrs: {
                        id: "c_cinit",
                        type: "text",
                        placeholder: "CI o NIT del cliente",
                        step: "0.01"
                      },
                      model: {
                        value: _vm.fClient.nit_ci,
                        callback: function($$v) {
                          _vm.$set(_vm.fClient, "nit_ci", $$v)
                        },
                        expression: "fClient.nit_ci"
                      }
                    }),
                    _vm._v(" "),
                    _vm.errors && _vm.errors.nit_ci
                      ? _c("div", { staticClass: "text-danger" }, [
                          _vm._v(_vm._s(_vm.errors.nit_ci[0]))
                        ])
                      : _vm._e()
                  ],
                  1
                ),
                _vm._v(" "),
                _c("hr"),
                _vm._v(" "),
                _c(
                  "b-button",
                  { attrs: { type: "submit", variant: "success", size: "lg" } },
                  [
                    _vm._v(
                      "\n                        Guardar\n                    "
                    )
                  ]
                )
              ],
              1
            )
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header py-2 px-3" }, [
      _c("h3", { staticClass: "card-title mb-0" }, [
        _vm._v("Datos del cliente")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card-tools" }, [
        _c(
          "button",
          {
            staticClass: "btn btn-tool",
            attrs: {
              type: "button",
              "data-card-widget": "collapse",
              "data-toggle": "tooltip",
              title: "minimizar"
            }
          },
          [_c("i", { staticClass: "fas fa-minus" })]
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/viewsSingle/CreateProduct.vue?vue&type=template&id=b2880d6a&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/viewsSingle/CreateProduct.vue?vue&type=template&id=b2880d6a& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "section",
      { staticClass: "content-header" },
      [
        _c(
          "b-container",
          [
            _c(
              "b-row",
              { attrs: { "align-v": "center" } },
              [
                _c(
                  "b-col",
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "text-danger",
                        attrs: { to: { name: "products" } }
                      },
                      [
                        _c("i", { staticClass: "fas fa-chevron-left" }),
                        _vm._v(
                          "\n                        Volver\n                    "
                        )
                      ]
                    )
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        )
      ],
      1
    ),
    _vm._v(" "),
    _c("section", { staticClass: "container" }, [
      _c("div", { staticClass: "card pb-2" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "card-body py-2 px-3",
            staticStyle: { display: "block" }
          },
          [
            _c(
              "b-form",
              {
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.formProduct($event)
                  }
                }
              },
              [
                _c(
                  "b-form-group",
                  {
                    attrs: {
                      id: "input-group-1",
                      label: "Nombre (*)",
                      "label-for": "p_name"
                    }
                  },
                  [
                    _c("b-form-input", {
                      attrs: {
                        id: "p_name",
                        type: "text",
                        placeholder: "Nombre de producto"
                      },
                      model: {
                        value: _vm.fProduct.name,
                        callback: function($$v) {
                          _vm.$set(_vm.fProduct, "name", $$v)
                        },
                        expression: "fProduct.name"
                      }
                    }),
                    _vm._v(" "),
                    _vm.errors && _vm.errors.name
                      ? _c("div", { staticClass: "text-danger" }, [
                          _vm._v(_vm._s(_vm.errors.name[0]))
                        ])
                      : _vm._e()
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "b-form-group",
                  {
                    attrs: {
                      id: "input-group-2",
                      label: "Precio (*)",
                      "label-for": "p_price"
                    }
                  },
                  [
                    _c("b-form-input", {
                      attrs: {
                        id: "p_price",
                        type: "number",
                        placeholder: "Precio del producto",
                        step: "0.01"
                      },
                      model: {
                        value: _vm.fProduct.price,
                        callback: function($$v) {
                          _vm.$set(_vm.fProduct, "price", $$v)
                        },
                        expression: "fProduct.price"
                      }
                    }),
                    _vm._v(" "),
                    _vm.errors && _vm.errors.price
                      ? _c("div", { staticClass: "text-danger" }, [
                          _vm._v(_vm._s(_vm.errors.price[0]))
                        ])
                      : _vm._e()
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "b-form-group",
                  {
                    attrs: {
                      id: "input-group-3",
                      label: "Descripción",
                      "label-for": "p_description"
                    }
                  },
                  [
                    _c("b-form-textarea", {
                      attrs: {
                        id: "p_description",
                        placeholder: "Descripción del producto"
                      },
                      model: {
                        value: _vm.fProduct.description,
                        callback: function($$v) {
                          _vm.$set(_vm.fProduct, "description", $$v)
                        },
                        expression: "fProduct.description"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "b-form-group",
                  {
                    attrs: {
                      id: "input-group-4",
                      label: "Stock",
                      "label-for": "p_stock"
                    }
                  },
                  [
                    _c("b-form-input", {
                      attrs: {
                        id: "p_stock",
                        type: "number",
                        placeholder: "Stock del producto"
                      },
                      model: {
                        value: _vm.fProduct.stock,
                        callback: function($$v) {
                          _vm.$set(_vm.fProduct, "stock", $$v)
                        },
                        expression: "fProduct.stock"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c("hr"),
                _vm._v(" "),
                _c(
                  "b-button",
                  { attrs: { type: "submit", variant: "success", size: "lg" } },
                  [
                    _vm._v(
                      "\n                        Guardar\n                    "
                    )
                  ]
                )
              ],
              1
            )
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header py-2 px-3" }, [
      _c("h3", { staticClass: "card-title mb-0" }, [
        _vm._v("Datos del producto")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card-tools" }, [
        _c(
          "button",
          {
            staticClass: "btn btn-tool",
            attrs: {
              type: "button",
              "data-card-widget": "collapse",
              "data-toggle": "tooltip",
              title: "minimizar"
            }
          },
          [_c("i", { staticClass: "fas fa-minus" })]
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/viewsSingle/EditClient.vue?vue&type=template&id=0c2a3aa6&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/viewsSingle/EditClient.vue?vue&type=template&id=0c2a3aa6& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "section",
      { staticClass: "content-header" },
      [
        _c(
          "b-container",
          [
            _c(
              "b-row",
              { attrs: { "align-v": "center" } },
              [
                _c(
                  "b-col",
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "text-danger",
                        attrs: { to: { name: "clients" } }
                      },
                      [
                        _c("i", { staticClass: "fas fa-chevron-left" }),
                        _vm._v(
                          "\n                        Volver\n                    "
                        )
                      ]
                    )
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        )
      ],
      1
    ),
    _vm._v(" "),
    _c("section", { staticClass: "container" }, [
      _c("div", { staticClass: "card pb-2" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "card-body py-2 px-3",
            staticStyle: { display: "block" }
          },
          [
            _c(
              "b-form",
              {
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.upClient($event)
                  }
                }
              },
              [
                _c(
                  "b-form-group",
                  {
                    attrs: {
                      id: "input-group-1",
                      label: "Nombre (*)",
                      "label-for": "c_name"
                    }
                  },
                  [
                    _c("b-form-input", {
                      attrs: {
                        id: "c_name",
                        type: "text",
                        placeholder: "Nombre del cliente"
                      },
                      model: {
                        value: _vm.client.name,
                        callback: function($$v) {
                          _vm.$set(_vm.client, "name", $$v)
                        },
                        expression: "client.name"
                      }
                    }),
                    _vm._v(" "),
                    _vm.errors && _vm.errors.name
                      ? _c("div", { staticClass: "text-danger" }, [
                          _vm._v(_vm._s(_vm.errors.name[0]))
                        ])
                      : _vm._e()
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "b-form-group",
                  {
                    attrs: {
                      id: "input-group-2",
                      label: "Ci / Nit (*)",
                      "label-for": "c_nitci"
                    }
                  },
                  [
                    _c("b-form-input", {
                      attrs: {
                        id: "c_nitci",
                        type: "text",
                        step: "0.01",
                        disabled: ""
                      },
                      model: {
                        value: _vm.client.nit_ci,
                        callback: function($$v) {
                          _vm.$set(_vm.client, "nit_ci", $$v)
                        },
                        expression: "client.nit_ci"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c("hr"),
                _vm._v(" "),
                _c(
                  "b-button",
                  { attrs: { type: "submit", variant: "success" } },
                  [
                    _vm._v(
                      "\n                        Guardar\n                    "
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "router-link",
                  {
                    staticClass: "btn btn-danger ml-2",
                    attrs: { to: { name: "clients" }, tag: "button" }
                  },
                  [
                    _vm._v(
                      "\n                        Cancelar\n                    "
                    )
                  ]
                )
              ],
              1
            )
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header py-2 px-3" }, [
      _c("h3", { staticClass: "card-title mb-0" }, [_vm._v("Editar cliente")]),
      _vm._v(" "),
      _c("div", { staticClass: "card-tools" }, [
        _c(
          "button",
          {
            staticClass: "btn btn-tool",
            attrs: {
              type: "button",
              "data-card-widget": "collapse",
              "data-toggle": "tooltip",
              title: "minimizar"
            }
          },
          [_c("i", { staticClass: "fas fa-minus" })]
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/viewsSingle/EditProduct.vue?vue&type=template&id=10f8e106&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/viewsSingle/EditProduct.vue?vue&type=template&id=10f8e106& ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "section",
      { staticClass: "content-header" },
      [
        _c(
          "b-container",
          [
            _c(
              "b-row",
              { attrs: { "align-v": "center" } },
              [
                _c(
                  "b-col",
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "text-danger",
                        attrs: { to: { name: "products" } }
                      },
                      [
                        _c("i", { staticClass: "fas fa-chevron-left" }),
                        _vm._v(
                          "\n                        Volver\n                    "
                        )
                      ]
                    )
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        )
      ],
      1
    ),
    _vm._v(" "),
    _c("section", { staticClass: "container" }, [
      _c("div", { staticClass: "card pb-2" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "card-body py-2 px-3",
            staticStyle: { display: "block" }
          },
          [
            _c(
              "b-form",
              {
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.upProduct($event)
                  }
                }
              },
              [
                _c(
                  "b-form-group",
                  {
                    attrs: {
                      id: "input-group-1",
                      label: "Nombre (*)",
                      "label-for": "p_name"
                    }
                  },
                  [
                    _c("b-form-input", {
                      attrs: {
                        id: "p_name",
                        type: "text",
                        placeholder: "Nombre de producto"
                      },
                      model: {
                        value: _vm.product.name,
                        callback: function($$v) {
                          _vm.$set(_vm.product, "name", $$v)
                        },
                        expression: "product.name"
                      }
                    }),
                    _vm._v(" "),
                    _vm.errors && _vm.errors.name
                      ? _c("div", { staticClass: "text-danger" }, [
                          _vm._v(_vm._s(_vm.errors.name[0]))
                        ])
                      : _vm._e()
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "b-form-group",
                  {
                    attrs: {
                      id: "input-group-2",
                      label: "Precio (*)",
                      "label-for": "p_price"
                    }
                  },
                  [
                    _c("b-form-input", {
                      attrs: {
                        id: "p_price",
                        type: "number",
                        placeholder: "Precio del producto",
                        step: "0.01"
                      },
                      model: {
                        value: _vm.product.sale_price,
                        callback: function($$v) {
                          _vm.$set(_vm.product, "sale_price", $$v)
                        },
                        expression: "product.sale_price"
                      }
                    }),
                    _vm._v(" "),
                    _vm.errors && _vm.errors.sale_price
                      ? _c("div", { staticClass: "text-danger" }, [
                          _vm._v(_vm._s(_vm.errors.sale_price[0]))
                        ])
                      : _vm._e()
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "b-form-group",
                  {
                    attrs: {
                      id: "input-group-3",
                      label: "Descripción",
                      "label-for": "p_description"
                    }
                  },
                  [
                    _c("b-form-textarea", {
                      attrs: {
                        id: "p_description",
                        placeholder: "Descripción del producto"
                      },
                      model: {
                        value: _vm.product.description,
                        callback: function($$v) {
                          _vm.$set(_vm.product, "description", $$v)
                        },
                        expression: "product.description"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "b-form-group",
                  {
                    attrs: {
                      id: "input-group-4",
                      label: "Stock",
                      "label-for": "p_stock"
                    }
                  },
                  [
                    _c("b-form-input", {
                      attrs: {
                        id: "p_stock",
                        type: "number",
                        placeholder: "Stock del producto"
                      },
                      model: {
                        value: _vm.product.stock,
                        callback: function($$v) {
                          _vm.$set(_vm.product, "stock", $$v)
                        },
                        expression: "product.stock"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c("hr"),
                _vm._v(" "),
                _c(
                  "b-button",
                  { attrs: { type: "submit", variant: "success" } },
                  [
                    _vm._v(
                      "\n                        Guardar\n                    "
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "router-link",
                  {
                    staticClass: "btn btn-danger ml-2",
                    attrs: { to: { name: "products" }, tag: "button" }
                  },
                  [
                    _vm._v(
                      "\n                        Cancelar\n                    "
                    )
                  ]
                )
              ],
              1
            )
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header py-2 px-3" }, [
      _c("h3", { staticClass: "card-title mb-0" }, [_vm._v("Editar producto")]),
      _vm._v(" "),
      _c("div", { staticClass: "card-tools" }, [
        _c(
          "button",
          {
            staticClass: "btn btn-tool",
            attrs: {
              type: "button",
              "data-card-widget": "collapse",
              "data-toggle": "tooltip",
              title: "minimizar"
            }
          },
          [_c("i", { staticClass: "fas fa-minus" })]
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/Clients.vue":
/*!****************************************!*\
  !*** ./resources/js/views/Clients.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Clients_vue_vue_type_template_id_11d2d639___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Clients.vue?vue&type=template&id=11d2d639& */ "./resources/js/views/Clients.vue?vue&type=template&id=11d2d639&");
/* harmony import */ var _Clients_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Clients.vue?vue&type=script&lang=js& */ "./resources/js/views/Clients.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Clients_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Clients.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/views/Clients.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Clients_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Clients_vue_vue_type_template_id_11d2d639___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Clients_vue_vue_type_template_id_11d2d639___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Clients.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Clients.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./resources/js/views/Clients.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Clients_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Clients.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Clients.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Clients_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Clients.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/Clients.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Clients_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./Clients.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Clients.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Clients_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Clients_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Clients_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Clients_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Clients_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/Clients.vue?vue&type=template&id=11d2d639&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/Clients.vue?vue&type=template&id=11d2d639& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Clients_vue_vue_type_template_id_11d2d639___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Clients.vue?vue&type=template&id=11d2d639& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Clients.vue?vue&type=template&id=11d2d639&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Clients_vue_vue_type_template_id_11d2d639___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Clients_vue_vue_type_template_id_11d2d639___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Dashboard.vue":
/*!******************************************!*\
  !*** ./resources/js/views/Dashboard.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dashboard_vue_vue_type_template_id_1f79daf6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=1f79daf6& */ "./resources/js/views/Dashboard.vue?vue&type=template&id=1f79daf6&");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js& */ "./resources/js/views/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Dashboard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/views/Dashboard.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dashboard_vue_vue_type_template_id_1f79daf6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Dashboard_vue_vue_type_template_id_1f79daf6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Dashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Dashboard.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/views/Dashboard.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Dashboard.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/Dashboard.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/Dashboard.vue?vue&type=template&id=1f79daf6&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/Dashboard.vue?vue&type=template&id=1f79daf6& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_1f79daf6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=template&id=1f79daf6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard.vue?vue&type=template&id=1f79daf6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_1f79daf6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_1f79daf6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Invoices.vue":
/*!*****************************************!*\
  !*** ./resources/js/views/Invoices.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Invoices_vue_vue_type_template_id_13fa4405___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Invoices.vue?vue&type=template&id=13fa4405& */ "./resources/js/views/Invoices.vue?vue&type=template&id=13fa4405&");
/* harmony import */ var _Invoices_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Invoices.vue?vue&type=script&lang=js& */ "./resources/js/views/Invoices.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Invoices_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Invoices.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/views/Invoices.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Invoices_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Invoices_vue_vue_type_template_id_13fa4405___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Invoices_vue_vue_type_template_id_13fa4405___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Invoices.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Invoices.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/views/Invoices.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Invoices_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Invoices.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Invoices.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Invoices_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Invoices.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/Invoices.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Invoices_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./Invoices.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Invoices.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Invoices_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Invoices_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Invoices_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Invoices_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Invoices_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/Invoices.vue?vue&type=template&id=13fa4405&":
/*!************************************************************************!*\
  !*** ./resources/js/views/Invoices.vue?vue&type=template&id=13fa4405& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Invoices_vue_vue_type_template_id_13fa4405___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Invoices.vue?vue&type=template&id=13fa4405& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Invoices.vue?vue&type=template&id=13fa4405&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Invoices_vue_vue_type_template_id_13fa4405___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Invoices_vue_vue_type_template_id_13fa4405___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/MyAccount.vue":
/*!******************************************!*\
  !*** ./resources/js/views/MyAccount.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MyAccount_vue_vue_type_template_id_3c8a575c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MyAccount.vue?vue&type=template&id=3c8a575c& */ "./resources/js/views/MyAccount.vue?vue&type=template&id=3c8a575c&");
/* harmony import */ var _MyAccount_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MyAccount.vue?vue&type=script&lang=js& */ "./resources/js/views/MyAccount.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MyAccount_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MyAccount_vue_vue_type_template_id_3c8a575c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MyAccount_vue_vue_type_template_id_3c8a575c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/MyAccount.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/MyAccount.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/views/MyAccount.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyAccount_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./MyAccount.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/MyAccount.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyAccount_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/MyAccount.vue?vue&type=template&id=3c8a575c&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/MyAccount.vue?vue&type=template&id=3c8a575c& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MyAccount_vue_vue_type_template_id_3c8a575c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./MyAccount.vue?vue&type=template&id=3c8a575c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/MyAccount.vue?vue&type=template&id=3c8a575c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MyAccount_vue_vue_type_template_id_3c8a575c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MyAccount_vue_vue_type_template_id_3c8a575c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Products.vue":
/*!*****************************************!*\
  !*** ./resources/js/views/Products.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Products_vue_vue_type_template_id_eec6f8fa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Products.vue?vue&type=template&id=eec6f8fa& */ "./resources/js/views/Products.vue?vue&type=template&id=eec6f8fa&");
/* harmony import */ var _Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Products.vue?vue&type=script&lang=js& */ "./resources/js/views/Products.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Products_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Products.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/views/Products.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Products_vue_vue_type_template_id_eec6f8fa___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Products_vue_vue_type_template_id_eec6f8fa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Products.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Products.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/views/Products.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Products.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Products.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Products.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/Products.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./Products.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Products.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/Products.vue?vue&type=template&id=eec6f8fa&":
/*!************************************************************************!*\
  !*** ./resources/js/views/Products.vue?vue&type=template&id=eec6f8fa& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_template_id_eec6f8fa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Products.vue?vue&type=template&id=eec6f8fa& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Products.vue?vue&type=template&id=eec6f8fa&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_template_id_eec6f8fa___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_template_id_eec6f8fa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/viewsSingle/CreateClient.vue":
/*!*********************************************************!*\
  !*** ./resources/js/views/viewsSingle/CreateClient.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CreateClient_vue_vue_type_template_id_d791f1c2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateClient.vue?vue&type=template&id=d791f1c2& */ "./resources/js/views/viewsSingle/CreateClient.vue?vue&type=template&id=d791f1c2&");
/* harmony import */ var _CreateClient_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateClient.vue?vue&type=script&lang=js& */ "./resources/js/views/viewsSingle/CreateClient.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CreateClient_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CreateClient_vue_vue_type_template_id_d791f1c2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CreateClient_vue_vue_type_template_id_d791f1c2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/viewsSingle/CreateClient.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/viewsSingle/CreateClient.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/viewsSingle/CreateClient.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateClient_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CreateClient.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/viewsSingle/CreateClient.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateClient_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/viewsSingle/CreateClient.vue?vue&type=template&id=d791f1c2&":
/*!****************************************************************************************!*\
  !*** ./resources/js/views/viewsSingle/CreateClient.vue?vue&type=template&id=d791f1c2& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateClient_vue_vue_type_template_id_d791f1c2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./CreateClient.vue?vue&type=template&id=d791f1c2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/viewsSingle/CreateClient.vue?vue&type=template&id=d791f1c2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateClient_vue_vue_type_template_id_d791f1c2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateClient_vue_vue_type_template_id_d791f1c2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/viewsSingle/CreateProduct.vue":
/*!**********************************************************!*\
  !*** ./resources/js/views/viewsSingle/CreateProduct.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CreateProduct_vue_vue_type_template_id_b2880d6a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateProduct.vue?vue&type=template&id=b2880d6a& */ "./resources/js/views/viewsSingle/CreateProduct.vue?vue&type=template&id=b2880d6a&");
/* harmony import */ var _CreateProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateProduct.vue?vue&type=script&lang=js& */ "./resources/js/views/viewsSingle/CreateProduct.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CreateProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CreateProduct_vue_vue_type_template_id_b2880d6a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CreateProduct_vue_vue_type_template_id_b2880d6a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/viewsSingle/CreateProduct.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/viewsSingle/CreateProduct.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/viewsSingle/CreateProduct.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CreateProduct.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/viewsSingle/CreateProduct.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/viewsSingle/CreateProduct.vue?vue&type=template&id=b2880d6a&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/viewsSingle/CreateProduct.vue?vue&type=template&id=b2880d6a& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateProduct_vue_vue_type_template_id_b2880d6a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./CreateProduct.vue?vue&type=template&id=b2880d6a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/viewsSingle/CreateProduct.vue?vue&type=template&id=b2880d6a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateProduct_vue_vue_type_template_id_b2880d6a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateProduct_vue_vue_type_template_id_b2880d6a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/viewsSingle/EditClient.vue":
/*!*******************************************************!*\
  !*** ./resources/js/views/viewsSingle/EditClient.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EditClient_vue_vue_type_template_id_0c2a3aa6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditClient.vue?vue&type=template&id=0c2a3aa6& */ "./resources/js/views/viewsSingle/EditClient.vue?vue&type=template&id=0c2a3aa6&");
/* harmony import */ var _EditClient_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditClient.vue?vue&type=script&lang=js& */ "./resources/js/views/viewsSingle/EditClient.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EditClient_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditClient_vue_vue_type_template_id_0c2a3aa6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EditClient_vue_vue_type_template_id_0c2a3aa6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/viewsSingle/EditClient.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/viewsSingle/EditClient.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/viewsSingle/EditClient.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditClient_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./EditClient.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/viewsSingle/EditClient.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditClient_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/viewsSingle/EditClient.vue?vue&type=template&id=0c2a3aa6&":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/viewsSingle/EditClient.vue?vue&type=template&id=0c2a3aa6& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditClient_vue_vue_type_template_id_0c2a3aa6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./EditClient.vue?vue&type=template&id=0c2a3aa6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/viewsSingle/EditClient.vue?vue&type=template&id=0c2a3aa6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditClient_vue_vue_type_template_id_0c2a3aa6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditClient_vue_vue_type_template_id_0c2a3aa6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/viewsSingle/EditProduct.vue":
/*!********************************************************!*\
  !*** ./resources/js/views/viewsSingle/EditProduct.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EditProduct_vue_vue_type_template_id_10f8e106___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditProduct.vue?vue&type=template&id=10f8e106& */ "./resources/js/views/viewsSingle/EditProduct.vue?vue&type=template&id=10f8e106&");
/* harmony import */ var _EditProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditProduct.vue?vue&type=script&lang=js& */ "./resources/js/views/viewsSingle/EditProduct.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EditProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditProduct_vue_vue_type_template_id_10f8e106___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EditProduct_vue_vue_type_template_id_10f8e106___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/viewsSingle/EditProduct.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/viewsSingle/EditProduct.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/viewsSingle/EditProduct.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./EditProduct.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/viewsSingle/EditProduct.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/viewsSingle/EditProduct.vue?vue&type=template&id=10f8e106&":
/*!***************************************************************************************!*\
  !*** ./resources/js/views/viewsSingle/EditProduct.vue?vue&type=template&id=10f8e106& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProduct_vue_vue_type_template_id_10f8e106___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./EditProduct.vue?vue&type=template&id=10f8e106& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/viewsSingle/EditProduct.vue?vue&type=template&id=10f8e106&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProduct_vue_vue_type_template_id_10f8e106___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProduct_vue_vue_type_template_id_10f8e106___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
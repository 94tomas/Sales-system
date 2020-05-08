(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/viewsSingle/Invoice.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/viewsSingle/Invoice.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Invoice',
  data: function data() {
    return {
      condition: false,
      datas: {},
      totalInWords: ''
    };
  },
  props: ['invoice_id', 'invoice_print'],
  mounted: function mounted() {
    this.getItems(this.invoice_id);
    this.invoicePrint(this.invoice_print);
  },
  methods: {
    print: function print() {
      // pass the element id here
      this.$htmlToPaper('invoice');
    },
    getItems: function getItems(id) {
      var _this = this;

      // console.log(id);
      axios.get('/api/dbinvoices/' + id).then(function (response) {
        _this.datas = response.data[0];
        response.data[0].date_saleqr = response.data[0].date_sale;
        response.data[0].date_sale = _this.saleDetails(response.data[0].date_sale); // convert price total in words

        _this.inWords(response.data[0].total_price - response.data[0].discount); // console.log(this.datas);

      })["catch"](function (error) {
        alert('error');
      });
      this.condition = true;
    },
    saleDetails: function saleDetails(date) {
      var arrayDate = date.split('-');
      var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
      var newDate = arrayDate[2] + ' de ' + months[parseInt(arrayDate[1]) - 1] + ' de ' + arrayDate[0];
      return newDate;
    },
    inWords: function inWords(number) {
      // numeral
      var numeral = __webpack_require__(/*! numeral */ "./node_modules/numeral/numeral.js");

      var cnumber = numeral(number).format('0.00');
      var numString = cnumber.toString();
      var numArray = numString.split('.');
      var num = parseInt(numArray[0]); // written number

      var writtenNumber = __webpack_require__(/*! written-number */ "./node_modules/written-number/lib/index.js");

      writtenNumber.defaults.lang = 'es';
      this.totalInWords = writtenNumber(num).toUpperCase();
      this.totalInWords += ' ' + numArray[1];
    },
    invoicePrint: function invoicePrint(ifPrint) {
      // console.log(ifPrint);
      if (ifPrint) {
        this.$refs.btnPrint.click();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/viewsSingle/Invoice.vue?vue&type=template&id=2503b725&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/viewsSingle/Invoice.vue?vue&type=template&id=2503b725& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
    _vm.condition
      ? _c("div", { attrs: { id: "invoice" } }, [
          _c("div", { staticClass: "d-flex justify-content-between mb-4" }, [
            _vm._m(0),
            _vm._v(" "),
            _c("div", [
              _c(
                "div",
                { staticClass: "p-3 border border-secondary rounded mb-3" },
                [
                  _vm._m(1),
                  _vm._v(" "),
                  _vm._m(2),
                  _vm._v(" "),
                  _c("p", { staticClass: "mb-0" }, [
                    _c("strong", [_vm._v("FACTURA: ")]),
                    _vm._v(" "),
                    _c("span", { staticClass: "text-danger" }, [
                      _vm._v("N°. " + _vm._s(_vm.datas.number) + " ")
                    ])
                  ])
                ]
              ),
              _vm._v(" "),
              _vm._m(3),
              _vm._v(" "),
              _c("p", { staticClass: "text-center" }, [
                _vm._v("Actividad económica: Venta de varios productos")
              ])
            ])
          ]),
          _vm._v(" "),
          _vm._m(4),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "mb-2 border p-2 rounded-top",
              staticStyle: { "border-color": "#d6e9f9 !important" }
            },
            [
              _c("div", { staticClass: "row align-items-end" }, [
                _c("div", { staticClass: "col-7" }, [
                  _vm._v(
                    "\n                    Potosí, " +
                      _vm._s(_vm.datas.date_sale) +
                      " "
                  ),
                  _c("br"),
                  _vm._v(" "),
                  _c("strong", [_vm._v("Señor(es): ")]),
                  _vm._v(
                    _vm._s(_vm.datas.clients[0].name) + "\n                "
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-5" }, [
                  _c("strong", [_vm._v("NIT/CI: ")]),
                  _vm._v(
                    _vm._s(_vm.datas.clients[0].nit_ci) + "\n                "
                  )
                ])
              ])
            ]
          ),
          _vm._v(" "),
          _c("div", [
            _c("table", { staticClass: "table table-sm table-bordered" }, [
              _vm._m(5),
              _vm._v(" "),
              _c(
                "tbody",
                [
                  _vm._l(_vm.datas.sale_details, function(item, index) {
                    return _c("tr", { key: index }, [
                      _c("td", [
                        _vm._v(
                          "\n                            " +
                            _vm._s(item.pivot.quantity) +
                            "\n                        "
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          "\n                            " +
                            _vm._s(item.name) +
                            "\n                        "
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          "\n                            " +
                            _vm._s(
                              _vm._f("numFormat")(item.sale_price, "0.00")
                            ) +
                            "\n                        "
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          "\n                            " +
                            _vm._s(
                              _vm._f("numFormat")(
                                item.pivot.quantity * item.sale_price,
                                "0.00"
                              )
                            ) +
                            "\n                        "
                        )
                      ])
                    ])
                  }),
                  _vm._v(" "),
                  _vm._m(6)
                ],
                2
              ),
              _vm._v(" "),
              _c("tfoot", [
                _vm.datas.discount
                  ? _c("tr", [
                      _c(
                        "td",
                        { staticClass: "text-right", attrs: { colspan: "3" } },
                        [_vm._v("Descuento:")]
                      ),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          _vm._s(
                            _vm._f("numFormat")(_vm.datas.discount, "0.00")
                          )
                        )
                      ])
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _c("tr", [
                  _c(
                    "td",
                    { staticClass: "text-right", attrs: { colspan: "3" } },
                    [_vm._v("Total Bs.:")]
                  ),
                  _vm._v(" "),
                  _c("td", [
                    _vm._v(
                      _vm._s(
                        _vm._f("numFormat")(
                          _vm.datas.total_price - _vm.datas.discount,
                          "0.00"
                        )
                      )
                    )
                  ])
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row mb-3" }, [
            _c("div", { staticClass: "col-7" }, [
              _c("div", [
                _c("strong", [_vm._v("Son: ")]),
                _vm._v(
                  _vm._s(_vm.totalInWords) +
                    "/100 Bolivianos\n                    "
                ),
                _c("br"),
                _vm._v(" "),
                _c("strong", [_vm._v("Fecha límite de emisión: ")]),
                _vm._v("30/08/2020\n                    "),
                _c("br"),
                _vm._v(" "),
                _c("strong", [_vm._v("Código de control: ")]),
                _vm._v(" FD-B5-6D-1A-A5\n                ")
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-5" }, [
              _c(
                "div",
                { staticClass: "text-right" },
                [
                  _c("qrcode", {
                    staticClass: "border",
                    attrs: {
                      value:
                        "nit" +
                        "|" +
                        _vm.datas.number +
                        "|" +
                        "N°autorizacion" +
                        "|" +
                        _vm.datas.date_saleqr +
                        "|" +
                        _vm.datas.total_price +
                        "|" +
                        (_vm.datas.total_price - _vm.datas.discount) +
                        "|" +
                        "codigoControl" +
                        "|" +
                        _vm.datas.clients[0].nit_ci +
                        "|0|0|0|" +
                        _vm.datas.discount,
                      options: { width: 120, color: { dark: "#343a40" } },
                      tag: "img"
                    }
                  })
                ],
                1
              )
            ])
          ]),
          _vm._v(" "),
          _vm._m(7)
        ])
      : _c("div", [
          _c(
            "div",
            { staticClass: "text-center text-danger my-2" },
            [_c("b-spinner", { staticClass: "align-middle" })],
            1
          )
        ]),
    _vm._v(" "),
    _c("div", { staticClass: "text-right pt-3" }, [
      _c(
        "button",
        {
          ref: "btnPrint",
          staticClass: "btn btn-outline-success",
          on: { click: _vm.print }
        },
        [_c("strong", [_vm._v("Imprimir")])]
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-center" }, [
      _c("img", {
        staticStyle: { width: "100%", "max-width": "130px" },
        attrs: { src: "/img/logo.png" }
      }),
      _vm._v(" "),
      _c(
        "p",
        {
          staticClass: "mb-0",
          staticStyle: { "font-size": "13px", "line-height": "13px" }
        },
        [_vm._v("Nombre de la empresa o comercio")]
      ),
      _vm._v(" "),
      _c(
        "p",
        {
          staticClass: "mb-0",
          staticStyle: { "font-size": "13px", "line-height": "13px" }
        },
        [_c("strong", [_vm._v("Casa Matriz")])]
      ),
      _vm._v(" "),
      _c(
        "p",
        {
          staticClass: "mb-0",
          staticStyle: { "font-size": "13px", "line-height": "13px" }
        },
        [_vm._v("Calle Dolores N° 21")]
      ),
      _vm._v(" "),
      _c(
        "p",
        {
          staticClass: "mb-0",
          staticStyle: { "font-size": "13px", "line-height": "13px" }
        },
        [_vm._v("Zona/Barrio Villa Olores")]
      ),
      _vm._v(" "),
      _c(
        "p",
        {
          staticClass: "mb-0",
          staticStyle: { "font-size": "13px", "line-height": "13px" }
        },
        [_vm._v("Telfs: 4260456 - 4565154")]
      ),
      _vm._v(" "),
      _c(
        "p",
        {
          staticClass: "mb-0",
          staticStyle: { "font-size": "13px", "line-height": "13px" }
        },
        [_vm._v("Potosí - Bolivia")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "mb-0" }, [
      _c("strong", [_vm._v("NIT: ")]),
      _vm._v("111222333 ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "mb-0" }, [
      _c("strong", [_vm._v("AUTORIZACION N°: ")]),
      _vm._v("11111111111111111111 ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "p",
      {
        staticClass: "text-danger text-center mb-0",
        staticStyle: { "letter-spacing": "2px" }
      },
      [_c("strong", [_vm._v("ORIGINAL")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h3", { staticClass: "text-center" }, [
      _c("strong", [_vm._v("FACTURA")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", { staticClass: "table-info" }, [
        _c("th", [_vm._v("CANTIDAD")]),
        _vm._v(" "),
        _c("th", [_vm._v("CONCEPTO")]),
        _vm._v(" "),
        _c("th", [_vm._v("P. UNITARIO")]),
        _vm._v(" "),
        _c("th", [_vm._v("SUB. TOTAL")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", [_vm._v(" ")]),
      _vm._v(" "),
      _c("td", [_vm._v(" ")]),
      _vm._v(" "),
      _c("td", [_vm._v(" ")]),
      _vm._v(" "),
      _c("td", [_vm._v(" ")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "text-center p-2 border mx-4",
        staticStyle: { "background-color": "#f5f5f5", "font-size": "13px" }
      },
      [
        _vm._v(
          '\n            "ESTA FACTURA CONTRIBUYE AL DESARROLLO DEL PAIS. EL USO ILICITO DE ESTA SERA SANCIONADO DE ACUERDO A LEY"\n            '
        ),
        _c("br"),
        _vm._v(
          '\n            Ley No. 453: "El proveedor deberá dar cumplimiento a las condiciones ofertadas"\n        '
        )
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/viewsSingle/Invoice.vue":
/*!****************************************************!*\
  !*** ./resources/js/views/viewsSingle/Invoice.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Invoice_vue_vue_type_template_id_2503b725___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Invoice.vue?vue&type=template&id=2503b725& */ "./resources/js/views/viewsSingle/Invoice.vue?vue&type=template&id=2503b725&");
/* harmony import */ var _Invoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Invoice.vue?vue&type=script&lang=js& */ "./resources/js/views/viewsSingle/Invoice.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Invoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Invoice_vue_vue_type_template_id_2503b725___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Invoice_vue_vue_type_template_id_2503b725___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/viewsSingle/Invoice.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/viewsSingle/Invoice.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/viewsSingle/Invoice.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Invoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Invoice.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/viewsSingle/Invoice.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Invoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/viewsSingle/Invoice.vue?vue&type=template&id=2503b725&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/viewsSingle/Invoice.vue?vue&type=template&id=2503b725& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Invoice_vue_vue_type_template_id_2503b725___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Invoice.vue?vue&type=template&id=2503b725& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/viewsSingle/Invoice.vue?vue&type=template&id=2503b725&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Invoice_vue_vue_type_template_id_2503b725___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Invoice_vue_vue_type_template_id_2503b725___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
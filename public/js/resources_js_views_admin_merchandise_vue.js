(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_admin_merchandise_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/brandprofile.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/brandprofile.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _admin_components_lib_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../admin/components/lib/api */ "./resources/js/views/admin/components/lib/api.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'profile',
  data: function data() {
    return _defineProperty({
      method: 'POST',
      model: {}
    }, "model", '');
  },
  created: function created() {
    var _this = this;

    (0,_admin_components_lib_api__WEBPACK_IMPORTED_MODULE_0__.get)('/getuser').then(function (res) {
      _this.setData(res);
    });
  },
  methods: {
    setData: function setData(res) {
      vue__WEBPACK_IMPORTED_MODULE_1__.default.set(this.$data, 'model', res.data.data);
      console.log(res.data.data); //   console.log(res.data)
    },
    profile: function profile() {
      this.$router.push('/admin/dashborad4');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/merchandise.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/merchandise.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _chart_demo_chart_bar_demo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chart/demo/chart-bar-demo */ "./resources/js/chart/demo/chart-bar-demo.js");
/* harmony import */ var _admin_components_lib_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../admin/components/lib/api */ "./resources/js/views/admin/components/lib/api.js");
/* harmony import */ var _brandprofile_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./brandprofile.vue */ "./resources/js/views/admin/brandprofile.vue");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'admin',
  components: {
    Profile: _brandprofile_vue__WEBPACK_IMPORTED_MODULE_2__.default
  },
  data: function data() {
    return _defineProperty({
      method: 'POST',
      model: {}
    }, "model", '');
  },
  // created(){
  // get('/getuser')
  //       .then((res) => {
  //          this.setData(res)
  //       })
  // }, 
  methods: {
    setData: function setData(res) {
      vue__WEBPACK_IMPORTED_MODULE_3__.default.set(this.$data, 'model', res.data.data);
      console.log(res.data.data);
    },
    profile: function profile() {
      this.$router.push('/admin/dashborad4');
    }
  }
});

/***/ }),

/***/ "./resources/js/chart/demo/chart-bar-demo.js":
/*!***************************************************!*\
  !*** ./resources/js/chart/demo/chart-bar-demo.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ chartBarDemo)
/* harmony export */ });
function number_format(number, decimals, dec_point, thousands_sep) {
  // *     example: number_format(1234.56, 2, ',', ' ');
  // *     return: '1 234,56'
  number = (number + "").replace(",", "").replace(" ", "");

  var n = !isFinite(+number) ? 0 : +number,
      prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
      sep = typeof thousands_sep === "undefined" ? "," : thousands_sep,
      dec = typeof dec_point === "undefined" ? "." : dec_point,
      s = "",
      toFixedFix = function toFixedFix(n, prec) {
    var k = Math.pow(10, prec);
    return "" + Math.round(n * k) / k;
  }; // Fix for IE parseFloat(0.55).toFixed(0) = 0;


  s = (prec ? toFixedFix(n, prec) : "" + Math.round(n)).split(".");

  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }

  if ((s[1] || "").length < prec) {
    s[1] = s[1] || "";
    s[1] += new Array(prec - s[1].length + 1).join("0");
  }

  return s.join(dec);
}

function chartBarDemo() {
  // Set new default font family and font color to mimic Bootstrap's default styling
  Chart.defaults.global.defaultFontFamily = "Nunito", '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
  Chart.defaults.global.defaultFontColor = "#858796"; // Bar Chart Example

  var ctx = document.getElementById("myBarChart");
  var myBarChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["MON", "TUE", "WED", "THU", "FRI", "SAT"],
      datasets: [{
        label: "Revenue",
        backgroundColor: "#FF9966",
        hoverBackgroundColor: "#FF5757",
        borderColor: "#4e73df",
        data: [4215, 5312, 6251, 7841, 9821, 14984]
      }]
    },
    options: {
      maintainAspectRatio: false,
      layout: {
        padding: {
          left: 10,
          right: 25,
          top: 25,
          bottom: 0
        }
      },
      scales: {
        xAxes: [{
          time: {
            unit: "month"
          },
          gridLines: {
            display: false,
            drawBorder: false
          },
          ticks: {
            maxTicksLimit: 6
          },
          maxBarThickness: 25
        }],
        yAxes: [{
          ticks: {
            min: 0,
            max: 15000,
            maxTicksLimit: 5,
            padding: 10,
            // Include a dollar sign in the ticks
            callback: function callback(value, index, values) {
              return "$" + number_format(value);
            }
          },
          gridLines: {
            color: "rgb(234, 236, 244)",
            zeroLineColor: "rgb(234, 236, 244)",
            drawBorder: false,
            borderDash: [2],
            zeroLineBorderDash: [2]
          }
        }]
      },
      legend: {
        display: false
      },
      tooltips: {
        titleMarginBottom: 10,
        titleFontColor: "#6e707e",
        titleFontSize: 14,
        backgroundColor: "rgb(255,255,255)",
        bodyFontColor: "#858796",
        borderColor: "#dddfeb",
        borderWidth: 1,
        xPadding: 15,
        yPadding: 15,
        displayColors: false,
        caretPadding: 10,
        callbacks: {
          label: function label(tooltipItem, chart) {
            var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || "";
            return datasetLabel + ": $" + number_format(tooltipItem.yLabel);
          }
        }
      }
    }
  });
}

/***/ }),

/***/ "./resources/js/views/admin/components/lib/api.js":
/*!********************************************************!*\
  !*** ./resources/js/views/admin/components/lib/api.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "get": () => (/* binding */ get),
/* harmony export */   "byMethod": () => (/* binding */ byMethod)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

function get(url, params) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default()({
    method: 'GET',
    url: url,
    params: params
  });
}
function byMethod(method, url, data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default()({
    method: method,
    url: url,
    data: data
  });
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/brandprofile.vue?vue&type=style&index=0&id=7dabd941&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/brandprofile.vue?vue&type=style&index=0&id=7dabd941&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.hei[data-v-7dabd941]{\n    height: 350px\n}\n.aaa[data-v-7dabd941]{\n    display: flex;\n    flex-direction: column;\n}\n.alps[data-v-7dabd941]{\n    border-radius: 10px;\nbackground: #FFF;\nbox-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);\nheight: 52px;\n    display: flex;\n    align-content: center;\n}\n.alp[data-v-7dabd941]{\n    border-radius: 10px;\nbackground: #FFF;\nbox-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);\nheight: 82px;\n    display: flex;\n    align-content: center;\n}\n.spanss[data-v-7dabd941]{\n    color: #000;\n\nfont-family: sans-serif;\nfont-size: 16px;\nfont-style: normal;\nfont-weight:  bold;\nline-height: normal;\n}\n.spa[data-v-7dabd941]{\n    color: #000;\n\nfont-family: DM Sans;\nfont-size: 13px;\nfont-style: normal;\nfont-weight: 400;\nline-height: normal;\n}\n.id-box img[data-v-7dabd941] {\n     width: 100%;\n     border-radius: 50%;\n    \n     max-height: 190px;\n     min-height: 190px;\n     -o-object-fit: contain;\n        object-fit: contain;\n}\n.page-1[data-v-7dabd941] {\n     width: 100%;\n     background-color: #F5F3EA;\n     padding: 30px;\n}\n.contanir[data-v-7dabd941] {\n     width: 100%;\n     max-width: 1600px;\n     margin: 0 auto;\n}\n.Sponsorship h2[data-v-7dabd941] {\n     color: #000;\n     font-family: sans-serif;\n     font-size: 18px;\n     font-style: normal;\n     font-weight: 500;\n     line-height: 24px; /* 150% */\n     padding-bottom: 25px;\n     margin: 0px ;\n}\n.card-box[data-v-7dabd941] {\n     width: 100%;\n     display: flex;\n     justify-content: space-between;\n}\n.cards[data-v-7dabd941] {\n     border-radius: 16px;\n     border: 2px solid #000;\n     background: #F96;\n     box-shadow: 4px 4px 0px 2px #1B1C1D;\n     width: 30%;\n     height: 100%;\n     flex-shrink: 0;\n}\n.main[data-v-7dabd941] {\n     width: 100%;\n     display: flex;\n     justify-content: space-between;\n}\n.box-1[data-v-7dabd941] {\n     height: 100%;\n     background: transparent;\n     width: 67%;\n     display: flex;\n     flex-wrap: wrap;\n     align-items: center;\n     justify-content: space-between;\n     gap: 38px;\n}\n.box-2[data-v-7dabd941] {\n     height: 100% !important;\n     flex-shrink: 0;\n     border-radius: 20px;\n     background: #FFF;\n     box-shadow: 0px 10px 54px 0px rgba(0, 0, 0, 0.25);\n     width: 30%;\n     padding: 30px;\n}\n.Sponsorship[data-v-7dabd941] {\n     width: 100%;\n     height: 100%;\n     flex-shrink: 0;\n     border-radius: 20px;\n     background: #FFF;\n     box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);\n     padding: 30px 33px ;\n}\n.btn-box[data-v-7dabd941] {\n     width: 100%;\n     display: flex;\n     align-items: center;\n     justify-content: space-between;\n     padding: 30px 0px;\n}\n.btn-2[data-v-7dabd941] {\n     display: flex;\n     width: 46%;\n     justify-content: space-between;\n}\n.btn-1[data-v-7dabd941] {\n     width: 35%;\n     display: flex;\n     align-items: center;\n     gap: 18px;\n}\n.Campaign[data-v-7dabd941] {\n     display: flex;\n     align-items: center;\n     gap: 10px;\n     border-radius: 10px;\n     background: #FFF;\n     box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);\n     padding: 12px 20px;\n}\n.Campaign h2[data-v-7dabd941] {\n     padding: 0px;\n     color: #000;\n     font-family: sans-serif;\n     font-size: 16px;\n     font-style: normal;\n     font-weight: 500;\n     line-height: normal;\n}\n.Campaign p[data-v-7dabd941] {\n     color: #000;\n     font-family: sans-serif;\n     font-size: 14px;\n     font-style: normal;\n     font-weight: 500;\n     line-height: normal;\n     margin: 0px;\n}\n.over-btn[data-v-7dabd941] {\n     width: 100%;\n     display: flex;\n     justify-content: center;\n     padding: 50px 0px 0px 0px;\n}\n.over-btn button[data-v-7dabd941] {\n     border-radius: 6px;\n     border: 1px solid #000;\n     background: #F96;\n     box-shadow: 2px 2px 0px 0px #1B1C1D;\n     display: inline-flex;\n     padding: 10px 21.25px 10px 20px;\n     justify-content: center;\n     align-items: center;\n     gap: 4.75px;\n     color: #FFF;\n     text-align: center;\n     font-family: sans-serif;\n     font-size: 16px;\n     font-style: normal;\n     font-weight: 700;\n     line-height: 24px; /* 150% */\n}\n.btn-1 button[data-v-7dabd941] {\n     border-radius: 6px;\n     border: 1px solid #000;\n     background: #F96;\n     box-shadow: 2px 2px 0px 0px #1B1C1D;\n     display: flex;\n     width: 154.75px;\n     justify-content: center;\n     align-items: center;\n     gap: 7.647px;\n     flex-shrink: 0;\n     padding: 10px;\n     color: #FFF;\n     text-align: center;\n     font-family: sans-serif;\n     font-size: 16px;\n     font-style: normal;\n     font-weight: 700;\n     line-height: 24px; /* 150% */\n}\nbutton.Add[data-v-7dabd941] {\n     border-radius: 6px;\n     border: 1px solid #000;\n     background: #F5F3EA;\n     box-shadow: 2px 2px 0px 0px #1B1C1D;\n     color: #000;\n}\n.OverView[data-v-7dabd941] {\n     width: 100%;\n     padding-top: 75px;\n}\n.OverView h2[data-v-7dabd941] {\n     color: #000;\n     font-family: sans-serif;\n     font-size: 26px;\n     font-style: normal;\n     font-weight: 500;\n     line-height: 24px; /* 92.308% */\n     margin: 0px;\n     padding-bottom: 30px;\n}\n.over-box[data-v-7dabd941] {\n     width: 100%;\n     display: flex;\n}\n.Over-card h4[data-v-7dabd941] {\n     color: #FF5757;\n     font-family: sans-serif;\n     font-size: 20px;\n     font-style: normal;\n     font-weight: 800;\n     line-height: 24px; /* 114.286% */\n     margin: 0px;\n}\n.Over-card h4 span[data-v-7dabd941] {\n     color: #000;\n     font-family: sans-serif;\n     font-size: 38px;\n     font-style: normal;\n     font-weight: 700;\n     line-height: 24px; /* 58.537% */\n     padding-left: 5px;\n}\n.Over-card[data-v-7dabd941] {\n     width: 25%;\n}\n \n /* .../ */\n.pox-1[data-v-7dabd941] {\n     width: 100%;\n     display: flex;\n     justify-content: space-between;\n     align-items: center;\n     padding: 20px;\n     border-bottom: 1px solid #000;\n}\n.pox-1 h2[data-v-7dabd941] {\n     color: #000;\n     text-align: center;\n     font-family: sans-serif;\n     font-size: 16px;\n     font-style: normal;\n     font-weight: 800;\n     line-height: 24px; /* 150% */\n     margin: 0px;\n     padding: 0px;\n}\n.top-btn[data-v-7dabd941] {\n     width: 49%;\n     display: flex;\n     align-items: center;\n}\n.top-btn button[data-v-7dabd941] {\n     border: none;\n     background: transparent;\n}\n.pox-2[data-v-7dabd941] {\n     width: 100%;\n     padding: 20px;\n}\n.pox-2 p[data-v-7dabd941] {\n     color: #000;\n     font-family: sans-serif;\n     font-size: 18px;\n     font-style: normal;\n     font-weight: 400;\n     line-height: normal;\n     letter-spacing: -0.96px;\n     margin: 0px;\n}\n.pox-2 h2[data-v-7dabd941] {\n     color: #000;\n     font-family: sans-serif;\n     font-style: normal;\n     font-weight: 600;\n     line-height: 24px; /* 150% */\n     padding: 15px 0px;\n}\n.pox-box[data-v-7dabd941] {\n     width: 100%;\n     display: flex;\n     flex-wrap: wrap;\n     align-items: center;\n     justify-content: space-between;\n     gap: 10px 0px;\n}\n.yes[data-v-7dabd941] {\n     width: 50%;\n     display: flex;\n     align-items: center;\n     gap: 5px;\n}\n.pox-3[data-v-7dabd941] {\n     width: 100%;\n     display: flex;\n     justify-content: space-between;\n     align-items: flex-end;\n     padding: 25px 0px 0px 0px;\n}\n.pox-3 h2[data-v-7dabd941] {\n     color: #000;\n     font-family: sans-serif;\n     font-size: 18px;\n     font-style: normal;\n     font-weight: 400;\n     line-height: normal;\n     padding: 0px 0px 0px 0px;\n}\n.pox-3 p[data-v-7dabd941] {\n     color: #000;\n     text-align: center;\n     font-family: sans-serif;\n     font-size: 15px;\n     font-style: normal;\n     font-weight: 600;\n     line-height: 24px; /* 150% */\n     width: 40%;\n}\n.pox-3 h2 span[data-v-7dabd941] {\n     color: #000;\n     font-family: sans-serif;\n     font-size: 20px;\n     font-style: normal;\n     font-weight: 600;\n     line-height: normal;\n}\nbutton.llo[data-v-7dabd941] {\n     color: #fff;\n}\n.box-2 h2[data-v-7dabd941] {\n     color: #000;\n     font-family: sans-serif;\n     font-size: 18px;\n     font-style: normal;\n     font-weight: 500;\n     line-height: normal;\n}\n.id-box[data-v-7dabd941] {\n     width: 100%;\n     display: flex;\n     flex-direction: column;\n     align-items: center;\n     padding: 70px 0px 120px 0px;\n}\n.id-box h2[data-v-7dabd941] {\n     color: #000;\n     font-family: sans-serif;\n     font-size: 26px;\n     font-style: normal;\n     font-weight: bold;\n     line-height: normal;\n     margin: 0px;\n     padding: 20px 0px 4px 0px;\n}\n.id-box h3[data-v-7dabd941] {color: #000;font-family: sans-serif;font-size: 16px;font-style: normal;font-weight: 500;line-height: normal;}\n.titel-box[data-v-7dabd941] {\n     width: 100%;\n     display: flex;\n     justify-content: space-between;\n     align-items: center;\n     padding-bottom: 20px;\n}\n.id-titel[data-v-7dabd941] {\n     display: flex;\n     align-items: center;\n     width: 30%;\n     justify-content: space-between;\n}\n.id-titel p[data-v-7dabd941] {\n     color: #000;\n     font-family: sans-serif;\n     font-size: 16px;\n     font-style: normal;\n     font-weight: 500;\n     line-height: normal;\n     margin: 0px;\n     white-space: nowrap;\n     overflow: hidden;\n     text-overflow: ellipsis;\n}\n.contact-box[data-v-7dabd941] {\n     width: 100%;\n     display: flex;\n     justify-content: space-around;\n     align-items: center;\n     padding-bottom: 40px;\n}\n.contact[data-v-7dabd941] {\n     display: flex;\n     align-items: center;\n     justify-content: space-between;\n     gap: 15px;\n}\n.contact p[data-v-7dabd941] {\n     color: #000;\n     font-family: sans-serif;\n     font-size: 16px;\n     font-style: normal;\n     font-weight: 400;\n     line-height: normal;\n     margin: 0px;\n}\n.para-box[data-v-7dabd941] {\n     width: 100%;\n     border-top: 1px solid #F96;\n     display: flex;\n     flex-wrap: wrap;\n     justify-content: center;\n     align-items: center;\n     flex-direction: column;\n}\n.para-box p[data-v-7dabd941] {\n     color: #000;\n     text-align: center;\n     font-family: sans-serif;\n     font-size: 16px;\n     font-style: normal;\n     font-weight: 500;\n     line-height: 24px; /* 150% */\n     margin: 0px;\n     padding: 20px 0px 10px 0px;\n}\n.para-box button[data-v-7dabd941] {\n     border-radius: 6px;\n     border: 1px solid #000;\n     background: #F96;\n     box-shadow: 2px 2px 0px 0px #1B1C1D;\n     display: flex;\n     width: 154.75px;\n     height: 44px;\n     padding: 10px 18px;\n     justify-content: center;\n     align-items: center;\n     gap: 7.647px;\n     flex-shrink: 0;\n      /* 150% */\n}\n.para-box button p[data-v-7dabd941] {\n     color: #FFF;\n     text-align: center;\n     font-family: sans-serif;\n     font-size: 16px;\n     font-style: normal;\n     font-weight: 700;\n     line-height: 24px; /* 150% */\n     padding: 0px;\n}\n.new-1[data-v-7dabd941] {\n     width: 100%;\n     display: flex;\n     justify-content: space-between;\n}\n.new-2[data-v-7dabd941] {\n     width: 100%;\n     display: flex;\n     align-items: center;\n     justify-content: space-between;\n}\n.new-3[data-v-7dabd941] {\n     width: 100%;\n     display: flex;\n     align-items: center;\n     justify-content: space-between;\n}\n.rol-1[data-v-7dabd941] {\n     border-radius: 20px;\n     background: #FFF;\n     box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);\n     flex-shrink: 0;\n     width: 36%;\n     padding: 32px;\n}\n.rol-1 p[data-v-7dabd941] {\n     color: #000;\n     font-family: sans-serif;\n     font-size: 16px;\n     font-style: normal;\n     font-weight: 500;\n     line-height: 24px; /* 150% */\n     margin: 0px;\n     padding-bottom: 12px;\n}\n.rol-1 h2[data-v-7dabd941] {\n     color: #1B1C1D;\n     font-family: sans-serif;\n     font-size: 66px;\n     font-style: normal;\n     font-weight: bold;\n     line-height: normal;\n}\n.new-btn-lid[data-v-7dabd941] {\n     width: 100%;\n     display: flex;\n     align-items: center;\n     justify-content: space-between;\n}\n.new-btn-lid  button[data-v-7dabd941] {\n     border-radius: 6px;\n     border: 1px solid #000;\n     background: #F96;\n     box-shadow: 2px 2px 0px 0px #1B1C1D;\n     display: flex;\n     width: 154.75px;\n     height: 44px;\n     padding: 10px 18px;\n     justify-content: center;\n     align-items: center;\n     gap: 7.647px;\n     flex-shrink: 0;\n}\n.new-btn-lid button p[data-v-7dabd941] {\n     margin: 0px;\n     color: #FFF;\n     text-align: center;\n     font-family: sans-serif;\n     font-size: 16px;\n     font-style: normal;\n     font-weight: 700;\n     line-height: 24px;\n     margin: 0px;\n     padding: 0px;\n}\n.rol-3[data-v-7dabd941] {\n     width: 62%;\n     display: flex;\n     flex-wrap: wrap;\n     align-items: center;\n     justify-content: space-between;\n     padding-top: 24px;\n}\n.rol-3 p[data-v-7dabd941] {\n     margin: 0px;\n     color: #000;\n     font-family: sans-serif;\n     font-size: 16px;\n     font-style: normal;\n     font-weight: 500;\n     line-height: normal;\n     width: 100%;\n}\n.rol-card[data-v-7dabd941] {\n     width: 48%;\n     border-radius: 10px;\n     background: #FFF;\n     box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);\n     display: flex;\n     align-items: center;\n     justify-content: space-between;\n     padding: 10px 15px;\n     flex-wrap: wrap;\n}\n.rol-para h2[data-v-7dabd941] {\n     color: #000;\n     font-family: sans-serif;\n     font-size: 16px;\n     font-style: normal;\n     font-weight: 500;\n     line-height: normal;\n     margin: 0px;\n}\n.rol-para[data-v-7dabd941] {\n     width: 84%;\n}\n.rol-para p[data-v-7dabd941] {\n     color: #000;\n     font-family: sans-serif;\n     font-size: 14px;\n     font-style: normal;\n     font-weight: 500;\n     line-height: normal;\n     margin: 0px;\n}\n.div-1[data-v-7dabd941] {\n     width: 100%;\n     display: flex;\n     align-items: center;\n     justify-content: space-around;\n}\n.div-1 h2[data-v-7dabd941] {\n     color: #000;\n     font-family: sans-serif;\n     font-size: 16px;\n     font-style: normal;\n     font-weight: bold;\n     line-height: normal;\n     margin: 0px;\n     width: 80%;\n}\n.div-1 p[data-v-7dabd941] {\n     width: 20%;\n}\n.div-2[data-v-7dabd941] {\n     width: 100%;\n     display: flex;\n     align-items: center;\n     justify-content: space-between;\n     padding-top: 15px;\n}\n.Enrolled[data-v-7dabd941] {\n     display: flex;\n     align-items: center;\n     width: 58%;\n}\n.Enrolled[data-v-7dabd941] {}\n.Reviews[data-v-7dabd941] {\n     width: 40%;\n     display: flex;\n     align-items: center;\n}\n.short-card[data-v-7dabd941] {\n     width: 24%;\n     border-radius: 20px;\n     background: #FFF;\n     box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);\n     padding: 18px 25px;\n}\n.short-card p[data-v-7dabd941] {\n     color: #000;\n     font-family: sans-serif;\n     font-size: 16px;\n     font-style: normal;\n     font-weight: 500;\n     line-height: 24px; /* 150% */\n     margin: 0px;\n}\n.short-card h2[data-v-7dabd941] {\n     color: #000;\n     font-family: sans-serif;\n     font-size: 42px;\n     font-style: normal;\n     font-weight: 1000;\n     line-height: normal;\n     margin: 0px;\n     padding: 12px 0px 5px 0px;\n}\n.short-card h3[data-v-7dabd941] {\n     color: #000;\n     font-family: sans-serif;\n     font-size: 16px;\n     font-style: normal;\n     font-weight: 400;\n     line-height: normal;\n     margin: 0px;\n}\n.dashbord-card[data-v-7dabd941] {\n     background: #FFF;\n     box-shadow: 4px 0px 24px 0px rgba(0, 0, 0, 0.25);\n     height: 417px;\n     flex-shrink: 0;\n     width: 64%;\n     border-radius: 20px 0px 0px 20px;\n}\n.conting-card[data-v-7dabd941] {\n     height: 417px;\n     flex-shrink: 0;\n     background: #FFF;\n     box-shadow: 4px 0px 24px 0px rgba(0, 0, 0, 0.25);\n     width: 35%;\n     padding: 42px 40px;\n     display: flex;\n     flex-wrap: wrap;\n     align-items: center;\n     justify-content: space-between;\n     border-radius: 0px 20px 20px 0px;\n}\n.conting-card h2[data-v-7dabd941] {\n     color: #000;\n     font-family: sans-serif;\n     font-size: 26px;\n     font-style: normal;\n     font-weight: 500;\n     line-height: 24px; /* 92.308% */\n     width: 100%;\n     margin: 0px;\n}\n.divs[data-v-7dabd941] {\n     width: 48%;\n}\n.divs h2[data-v-7dabd941] {\n     color: #F96;\n     font-family: sans-serif;\n     font-size: 21px;\n     font-style: normal;\n     font-weight: bold;\n     line-height: 24px; /* 114.286% */\n     margin: 0px;\n}\n.divs h3[data-v-7dabd941] {\n     color: #000;\n     font-family: sans-serif;\n     font-size: 41px;\n     font-style: normal;\n     font-weight: 700;\n     line-height: 24px; /* 58.537% */\n     margin: 0px;\n     padding-top: 20px;\n}\n@media screen and (max-width: 1600px){\n.hei[data-v-7dabd941]{\n        height: 265px;\n}\n.contanir[data-v-7dabd941] {\n     width: 100%;\n     max-width: 1440px;\n     margin: 0 auto;\n}\n.dashbord-card[data-v-7dabd941] {\n     background: #FFF;\n     box-shadow: 4px 0px 24px 0px rgba(0, 0, 0, 0.25);\n     height: 400px;\n     flex-shrink: 0;\n     width: 64%;\n     border-radius: 20px 0px 0px 20px;\n}\n.divs h2[data-v-7dabd941] {\n     color: #F96;\n     font-family: sans-serif;\n     font-size: 18px;\n     font-style: normal;\n     font-weight: bold;\n     line-height: 24px;\n     margin: 0px;\n}\n.divs h3[data-v-7dabd941] {\n     color: #000;\n     font-family: sans-serif;\n     font-size: 38px;\n     font-style: normal;\n     font-weight: 700;\n     line-height: 24px;\n     margin: 0px;\n     padding-top: 12px;\n}\n.rol-1 h2[data-v-7dabd941] {\n     color: #1B1C1D;\n     font-family: sans-serif;\n     font-size: 55px;\n     font-style: normal;\n     font-weight: 1000;\n     line-height: normal;\n     text-align: center;\n}\n.new-btn-lid button[data-v-7dabd941] {\n     border-radius: 6px;\n     border: 1px solid #000;\n     background: #F96;\n     box-shadow: 2px 2px 0px 0px #1B1C1D;\n     display: flex;\n     width: 130px;\n     height: 38px;\n     padding: 10px 18px;\n     justify-content: center;\n     align-items: center;\n     gap: 7.647px;\n     flex-shrink: 0;\n}\n.new-btn-lid button p[data-v-7dabd941] {\n     margin: 0px;\n     color: #FFF;\n     text-align: center;\n     font-family: sans-serif;\n     font-size: 12px;\n     font-style: normal;\n     font-weight: 700;\n     line-height: 24px;\n     margin: 0px;\n     padding: 0px;\n}\n.rol-1[data-v-7dabd941] {\n     border-radius: 20px;\n     background: #FFF;\n     box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);\n     flex-shrink: 0;\n     width: 36%;\n     padding: 30px;\n}\n.rol-3[data-v-7dabd941] {\n     width: 62%;\n     display: flex;\n     flex-wrap: wrap;\n     align-items: center;\n     justify-content: space-between;\n     padding-top: 15px;\n}\n.rol-card svg[data-v-7dabd941] {\n     width: 26px;\n     height: 25px;\n}\n.rol-3 p[data-v-7dabd941] {\n     margin: 0px;\n     color: #000;\n     font-family: sans-serif;\n     font-size: 14px;\n     font-style: normal;\n     font-weight: 500;\n     line-height: normal;\n     width: 100%;\n}\n.rol-para p[data-v-7dabd941] {\n     color: #000;\n     font-family: sans-serif;\n     font-size: 12px;\n     font-style: normal;\n     font-weight: 500;\n     line-height: normal;\n     margin: 0px;\n}\n.pox-1[data-v-7dabd941] {\n     width: 100%;\n     display: flex;\n     justify-content: space-between;\n     align-items: center;\n     padding: 12px;\n     border-bottom: 1px solid #000;\n}\n.top-btn button[data-v-7dabd941] {\n     border: none;\n     background: transparent;\n     padding: 4px;\n}\n.yes[data-v-7dabd941] {\n     width: 50%;\n     display: flex;\n     align-items: center;\n     gap: 2px;\n}\n.pox-3 h2 span[data-v-7dabd941] {\n     color: #000;\n     font-family: sans-serif;\n     font-size: 17px;\n     font-style: normal;\n     font-weight: 600;\n     line-height: normal;\n}\n.div-1 p[data-v-7dabd941] {\n     width: 20%;\n}\n.short-card h2[data-v-7dabd941] {\n     color: #000;\n     font-family: sans-serif;\n     font-size: 38px;\n     font-style: normal;\n     font-weight: 1000;\n     line-height: normal;\n     margin: 0px;\n     padding: 5px 0px 0px 0px;\n}\n.conting-card[data-v-7dabd941] {\n     height: 400px;\n     flex-shrink: 0;\n     background: #FFF;\n     box-shadow: 4px 0px 24px 0px rgba(0, 0, 0, 0.25);\n     width: 35%;\n     padding: 15px 25px;\n     display: flex;\n     flex-wrap: wrap;\n     align-items: center;\n     justify-content: space-between;\n     border-radius: 0px 20px 20px 0px;\n}\n.id-box[data-v-7dabd941] {\n     width: 100%;\n     display: flex;\n     flex-direction: column;\n     align-items: center;\n     padding: 35px 0px 70px 0px;\n}\n.short-card[data-v-7dabd941] {\n     width: 24%;\n     border-radius: 20px;\n     background: #FFF;\n     box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);\n     padding: 14px 20px;\n}\n.pox-3 p[data-v-7dabd941] {\n  \n     color: #000;\n     text-align: center;\n     font-family: sans-serif;\n     font-size: 14px;\n     font-style: normal;\n     font-weight: 600;\n     line-height: 24px;\n     width: 40%;\n}\n.pox-3 h2[data-v-7dabd941] {\n     color: #000;\n     font-family: sans-serif;\n     font-size: 17px;\n     font-style: normal;\n     font-weight: 400;\n     line-height: normal;\n     padding: 0px 0px 0px 0px;\n}\n.btn-1 button[data-v-7dabd941] {\n     border-radius: 6px;\n     border: 1px solid #000;\n     background: #F96;\n     box-shadow: 2px 2px 0px 0px #1B1C1D;\n     display: flex;\n     width: 154.75px;\n     justify-content: center;\n     align-items: center;\n     gap: 7.647px;\n     flex-shrink: 0;\n     padding: 8px;\n     color: #FFF;\n     text-align: center;\n     font-family: sans-serif;\n     font-size: 16px;\n     font-style: normal;\n     font-weight: 700;\n     line-height: 24px;\n}\n.btn-2[data-v-7dabd941] {\n     display: flex;\n     width: 50%;\n     justify-content: space-between;\n}\n.id-titel[data-v-7dabd941] {\n     display: flex;\n     align-items: center;\n     width: 32%;\n     justify-content: space-between;\n}\n.over-btn button[data-v-7dabd941] {\n     border-radius: 6px;\n     border: 1px solid #000;\n     background: #F96;\n     box-shadow: 2px 2px 0px 0px #1B1C1D;\n     display: inline-flex;\n     padding: 8px 21.25px 8px 20px;\n     justify-content: center;\n     align-items: center;\n     gap: 4.75px;\n     color: #FFF;\n     text-align: center;\n     font-family: sans-serif;\n     font-size: 16px;\n     font-style: normal;\n     font-weight: 700;\n     line-height: 24px;\n}\n.Over-card h4 span[data-v-7dabd941] {\n     color: #000;\n     font-family: sans-serif;\n     font-size: 35px;\n     font-style: normal;\n     font-weight: 700;\n     line-height: 24px;\n     padding-left: 5px;\n}\n.Over-card h4[data-v-7dabd941] {\n     color: #FF5757;\n     font-family: sans-serif;\n     font-size: 18px;\n     font-style: normal;\n     font-weight: 800;\n     line-height: 24px;\n     margin: 0px;\n}\n.para-box button[data-v-7dabd941] {\n     border-radius: 6px;\n     border: 1px solid #000;\n     background: #F96;\n     box-shadow: 2px 2px 0px 0px #1B1C1D;\n     display: flex;\n     width: 154.75px;\n     height: 42px;\n     padding: 10px 18px;\n     justify-content: center;\n     align-items: center;\n     gap: 7.647px;\n     flex-shrink: 0;\n}\nbutton.Add[data-v-7dabd941] {\n     border-radius: 6px;\n     border: 1px solid #000 !important;\n     background: #F5F3EA !important;\n     box-shadow: 2px 2px 0px 0px #1B1C1D !important; \n     color: #000 !important;\n}\n}\n@media screen and (max-width: 1440px){\n.hei[data-v-7dabd941]{\n        height: 230px;\n}\n.id-box h3[data-v-7dabd941] {\n     color: #000;\n     font-family: sans-serif;\n     font-size: 14px;\n     font-style: normal;\n     font-weight: 500;\n     line-height: normal;\n}\n.contanir[data-v-7dabd941] {\n     width: 100%;\n     max-width: 1170px;\n     margin: 0 auto;\n}\n.div-1 h2[data-v-7dabd941] {\n     color: #000;\n     font-family: sans-serif;\n     font-size: 14px;\n     font-style: normal;\n     font-weight: bold;\n     line-height: normal;\n     margin: 0px;\n     width: 80%;\n}\n.rol-para h2[data-v-7dabd941] {\n     color: #000;\n     font-family: sans-serif;\n     font-size: 12px;\n     font-style: normal;\n     font-weight: 500;\n     line-height: normal;\n     margin: 0px;\n}\n.rol-3 p[data-v-7dabd941] {\n     margin: 0px;\n     color: #000;\n     font-family: sans-serif;\n     font-size: 13px;\n     font-style: normal;\n     font-weight: 500;\n     line-height: normal;\n     width: 100%;\n}\n.rol-1 h2[data-v-7dabd941] {\n     color: #1B1C1D;\n     font-family: sans-serif;\n     font-size: 38px;\n     font-style: normal;\n     font-weight: 1000;\n     line-height: normal;\n     text-align: center;\n}\n.new-btn-lid button[data-v-7dabd941] {\n     border-radius: 6px;\n     border: 1px solid #000;\n     background: #F96;\n     box-shadow: 2px 2px 0px 0px #1B1C1D;\n     display: flex;\n     width: 110px;\n     height: 34px;\n     padding: 10px 0px;\n     justify-content: center;\n     align-items: center;\n     gap: 4px;\n     flex-shrink: 0;\n}\n.div-1 svg[data-v-7dabd941] {\n     width: 20px;\n     height: 20px;\n}\n.div-1 p[data-v-7dabd941] {\n     width: 20%;\n     font-size: 12px;\n}\n.rol-para p[data-v-7dabd941] {\n     color: #000;\n     font-family: sans-serif;\n     font-size: 10px;\n     font-style: normal;\n     font-weight: 500;\n     line-height: normal;\n     margin: 0px;\n}\n.Reviews p[data-v-7dabd941] {\n     font-size: 10px;\n}\n.Enrolled p[data-v-7dabd941] {\n     font-size: 10px;\n}\n.div-2[data-v-7dabd941] {\n     width: 100%;\n     display: flex;\n     align-items: center;\n     justify-content: space-between;\n     padding-top: 3px;\n}\n.short-card p[data-v-7dabd941] {\n     color: #000;\n     font-family: sans-serif;\n     font-size: 15px;\n     font-style: normal;\n     font-weight: 500;\n     line-height: 24px;\n     margin: 0px;\n}\n.short-card h2[data-v-7dabd941] {\n     color: #000;\n     font-family: sans-serif;\n     font-size: 25px;\n     font-style: normal;\n     font-weight: 1000;\n     line-height: normal;\n     margin: 0px;\n     padding: 0px 0px 0px 0px;\n}\n.short-card[data-v-7dabd941] {\n     width: 24%;\n     border-radius: 15px;\n     background: #FFF;\n     box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);\n     padding: 12px 20px;\n}\n.dashbord-card[data-v-7dabd941] {\n     background: #FFF;\n     box-shadow: 4px 0px 24px 0px rgba(0, 0, 0, 0.25);\n     height: 350px;\n     flex-shrink: 0;\n     width: 64%;\n     border-radius: 20px 0px 0px 20px;\n}\n.conting-card[data-v-7dabd941] {\n     height: 350px;\n     flex-shrink: 0;\n     background: #FFF;\n     box-shadow: 4px 0px 24px 0px rgba(0, 0, 0, 0.25);\n     width: 35%;\n     padding: 15px 25px;\n     display: flex;\n     flex-wrap: wrap;\n     align-items: center;\n     justify-content: space-between;\n     border-radius: 0px 20px 20px 0px;\n}\n.box-1[data-v-7dabd941] {\n     height: 100%;\n     background: transparent;\n     width: 67%;\n     display: flex;\n     flex-wrap: wrap;\n     align-items: center;\n     justify-content: space-between;\n     gap: 30px;\n}\n.divs h2[data-v-7dabd941] {\n     color: #F96;\n     font-family: sans-serif;\n     font-size: 16px;\n     font-style: normal;\n     font-weight: bold;\n     line-height: 24px;\n     margin: 0px;\n}\n.divs h3[data-v-7dabd941] {\n     color: #000;\n     font-family: sans-serif;\n     font-size: 28px;\n     font-style: normal;\n     font-weight: 700;\n     line-height: 24px;\n     margin: 0px;\n     padding-top: 10px;\n}\n.conting-card[data-v-7dabd941] {\n     height: 350px;\n     flex-shrink: 0;\n     background: #FFF;\n     box-shadow: 4px 0px 24px 0px rgba(0, 0, 0, 0.25);\n     width: 35%;\n     padding: 12px 15px;\n     display: flex;\n     flex-wrap: wrap;\n     align-items: center;\n     justify-content: space-between;\n     border-radius: 0px 20px 20px 0px;\n}\n.id-box[data-v-7dabd941] {\n     width: 100%;\n     display: flex;\n     flex-direction: column;\n     align-items: center;\n     padding: 40px 0px 65px 0px;\n}\n.rol-1[data-v-7dabd941] {\n     border-radius: 20px;\n     background: #FFF;\n     box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);\n     flex-shrink: 0;\n     width: 36%;\n     padding: 20px;\n}\n.pox-2 h2[data-v-7dabd941] {\n     color: #000;\n     font-family: sans-serif;\n     font-style: normal;\n     font-weight: 600;\n     line-height: 20px;\n     padding: 12px 0px;\n}\n.Sponsorship[data-v-7dabd941] {\n     width: 100%;\n     height: 100%;\n     flex-shrink: 0;\n     border-radius: 20px;\n     background: #FFF;\n     box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);\n     padding: 30px 20px;\n}\n.OverView[data-v-7dabd941] {\n     width: 100%;\n     padding-top: 60px;\n}\n.OverView h2[data-v-7dabd941] {\n     color: #000;\n     font-family: sans-serif;\n     font-size: 24px;\n     font-style: normal;\n     font-weight: 500;\n     line-height: 24px;\n     margin: 0px;\n     padding-bottom: 20px;\n}\n.Over-card h4[data-v-7dabd941] {\n     color: #FF5757;\n     font-family: sans-serif;\n     font-size: 16px;\n     font-style: normal;\n     font-weight: 800;\n     line-height: 24px;\n     margin: 0px;\n}\n.Over-card h4 span[data-v-7dabd941] {\n     color: #000;\n     font-family: sans-serif;\n     font-size: 28px;\n     font-style: normal;\n     font-weight: 700;\n     line-height: 24px;\n     padding-left: 0px;\n}\n.over-btn[data-v-7dabd941] {\n     width: 100%;\n     display: flex;\n     justify-content: center;\n     padding: 40px 0px 0px 0px;\n}\n.over-btn button[data-v-7dabd941] {\n     border-radius: 6px;\n     border: 1px solid #000;\n     background: #F96;\n     box-shadow: 2px 2px 0px 0px #1B1C1D;\n     display: inline-flex;\n     padding: 7px 16.25px 7px 15px;\n     justify-content: center;\n     align-items: center;\n     gap: 4.75px;\n     color: #FFF;\n     text-align: center;\n     font-family: sans-serif;\n     font-size: 16px;\n     font-style: normal;\n     font-weight: 700;\n     line-height: 24px;\n}\n.top-btn button[data-v-7dabd941] {\n     border: none;\n     background: transparent;\n     padding: 4px;\n     display: flex;\n     align-items: center;\n}\n.top-btn button svg[data-v-7dabd941] {\n     width: 15px;\n     height: 15px;\n}\n.top-btn[data-v-7dabd941] {\n     width: 42%;\n     display: flex;\n     align-items: center;\n}\n.pox-1[data-v-7dabd941] {\n     width: 100%;\n     display: flex;\n     justify-content: space-between;\n     align-items: center;\n     padding: 8px;\n     border-bottom: 1px solid #000;\n}\n.top-btn button span[data-v-7dabd941] {\n     font-size: 12px;\n}\n.pox-1 h2[data-v-7dabd941] {\n     color: #000;\n     text-align: center;\n     font-family: sans-serif;\n     font-size: 14px;\n     font-style: normal;\n     font-weight: 800;\n     line-height: 24px;\n     margin: 0px;\n     padding: 0px;\n}\n.pox-2[data-v-7dabd941] {\n     width: 100%;\n     padding: 10px;\n}\n.pox-2 p[data-v-7dabd941] {\n     color: #000;\n     font-family: sans-serif;\n     font-size: 16px;\n     font-style: normal;\n     font-weight: 400;\n     line-height: normal;\n     letter-spacing: -0.96px;\n     margin: 0px;\n}\n.pox-3 h2[data-v-7dabd941] {\n     color: #000;\n     font-family: sans-serif;\n     font-size: 14px;\n     font-style: normal;\n     font-weight: 400;\n     line-height: normal;\n     padding: 0px 0px 0px 0px;\n     width: 58%;\n}\n.pox-3[data-v-7dabd941] {\n     width: 100%;\n     display: flex;\n     justify-content: space-between;\n     align-items: flex-end;\n     padding: 15px 0px;\n}\n.pox-box[data-v-7dabd941] {\n     width: 100%;\n     display: flex;\n     flex-wrap: wrap;\n     align-items: center;\n     justify-content: space-between;\n     gap: 5px 0px;\n}\n.cards[data-v-7dabd941] {\n     border-radius: 16px;\n     border: 2px solid #000;\n     background: #F96;\n     box-shadow: 4px 4px 0px 2px #1B1C1D;\n     width: 30%;\n     height: 100%;\n     flex-shrink: 0;\n}\n.yes p[data-v-7dabd941] {\n     font-size: 14px;\n}\n.pox-3 h2 span[data-v-7dabd941] {\n     color: #000;\n     font-family: sans-serif;\n     font-size: 15px;\n     font-style: normal;\n     font-weight: 600;\n     line-height: normal;\n}\n.pox-3 p[data-v-7dabd941] {\n     color: #000;\n     text-align: center;\n     font-family: sans-serif;\n     font-size: 12px;\n     font-style: normal;\n     font-weight: 600;\n     line-height: 24px;\n     width: 44%;\n     margin: 0px;\n     padding: 0px;\n}\n.btn-1 button[data-v-7dabd941] {\n     border-radius: 6px;\n     border: 1px solid #000;\n     background: #F96;\n     box-shadow: 2px 2px 0px 0px #1B1C1D;\n     display: flex;\n     width: 130.75px;\n     justify-content: center;\n     align-items: center;\n     gap: 7.647px;\n     flex-shrink: 0;\n     padding: 6px;\n     color: #FFF;\n     text-align: center;\n     font-family: sans-serif;\n     font-size: 14px;\n     font-style: normal;\n     font-weight: 700;\n     line-height: 24px;\n}\n.btn-2[data-v-7dabd941] {\n     display: flex;\n     width: 52%;\n     justify-content: space-between;\n}\n.Campaign[data-v-7dabd941] {\n     display: flex;\n     align-items: center;\n     gap: 8px;\n     border-radius: 10px;\n     background: #FFF;\n     box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);\n     padding: 8px 10px;\n}\n.Campaign svg[data-v-7dabd941] {\n     width: 30px;\n     height: 30px;\n}\n.id-box[data-v-7dabd941] {\n     width: 100%;\n     display: flex;\n     flex-direction: column;\n     align-items: center;\n     padding: 50px 0px 80px 0px;\n}\n.id-box img[data-v-7dabd941] {\n     width: 100%;\n     border-radius: 50%;\n    \n     max-height: 150px;\n     min-height: 150px;\n     -o-object-fit: contain;\n        object-fit: contain;\n}\n.id-box h2[data-v-7dabd941] {\n     color: #000;\n     font-family: sans-serif;\n     font-size: 24px;\n     font-style: normal;\n     font-weight: bold;\n     line-height: normal;\n     margin: 0px;\n     padding: 15px 0px 2px 0px;\n}\n.contact[data-v-7dabd941] {\n     display: flex;\n     align-items: center;\n     justify-content: space-between;\n     gap: 5px;\n}\n.contact p[data-v-7dabd941] {\n     color: #000;\n     font-family: sans-serif;\n     font-size: 12px;\n     font-style: normal;\n     font-weight: 400;\n     line-height: normal;\n     margin: 0px;\n}\n.id-titel p[data-v-7dabd941] {\n     color: #000;\n     font-family: sans-serif;\n     font-size: 10px;\n     font-style: normal;\n     font-weight: 500;\n     line-height: normal;\n     margin: 0px;\n     white-space: nowrap;\n     overflow: hidden;\n     text-overflow: ellipsis;\n}\n.id-titel svg[data-v-7dabd941] {\n     width: 18px;\n     height: 18px;\n}\n.contact-box[data-v-7dabd941] {\n     width: 100%;\n     display: flex;\n     justify-content: space-around;\n     align-items: center;\n     padding-bottom: 15px;\n}\n.para-box p[data-v-7dabd941] {\n     color: #000;\n     text-align: center;\n     font-family: sans-serif;\n     font-size: 13px;\n     font-style: normal;\n     font-weight: 500;\n     line-height: 24px;\n     margin: 0px;\n     padding: 20px 0px 10px 0px;\n}\n.para-box button[data-v-7dabd941] {\n     border-radius: 6px;\n     border: 1px solid #000;\n     background: #F96;\n     box-shadow: 2px 2px 0px 0px #1B1C1D;\n     display: flex;\n     width: 144.75px;\n     height: 38px;\n     padding: 10px 18px;\n     justify-content: center;\n     align-items: center;\n     gap: 7.647px;\n     flex-shrink: 0;\n}\n.main[data-v-7dabd941] {\n     width: 100%;\n     display: flex;\n     justify-content: space-between;\n     align-items: flex-start;\n}\n.box-2[data-v-7dabd941] {\n     height: 100% !important;\n     flex-shrink: 0;\n     border-radius: 20px;\n     background: #FFF;\n     box-shadow: 0px 10px 54px 0px rgba(0, 0, 0, 0.25);\n     width: 30%;\n     padding: 24px;\n}\n}\n@media screen and (max-width: 1024px){\n.page-1[data-v-7dabd941] {\n     width: 100%;\n     background-color: #F5F3EA;\n     padding: 40px;\n}\n.main[data-v-7dabd941] {\n     width: 100%;\n     display: flex;\n     justify-content: center;\n     align-items: center;\n     flex-wrap: wrap;\n     gap: 55px 0px;\n}\n.box-1[data-v-7dabd941] {\n   height: 100%;\n     background: transparent;\n     width: 100%;\n}\n.box-2[data-v-7dabd941] {\n     height: 100% !important;\n     flex-shrink: 0;\n     border-radius: 20px;\n     background: #FFF;\n     box-shadow: 0px 10px 54px 0px rgba(0, 0, 0, 0.25);\n     width: 42%;\n     padding: 24px;\n}\n.btn-2[data-v-7dabd941] {\n     display: flex;\n     width: 44%;\n     justify-content: space-between;\n}\n}\n@media screen and (max-width: 768px){\n.cards[data-v-7dabd941] {\n     border-radius: 16px;\n     border: 2px solid #000;\n     background: #F96;\n     box-shadow: 4px 4px 0px 2px #1B1C1D;\n     width: 44%;\n     height: 100%;\n     flex-shrink: 0;\n}\n.new-1[data-v-7dabd941] {\n     width: 100%;\n     display: flex;\n     justify-content: space-between;\n     flex-direction: column;\n}\n.rol-1[data-v-7dabd941] {\n     border-radius: 20px;\n     background: #FFF;\n     box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);\n     flex-shrink: 0;\n     width: 45%;\n     padding: 20px;\n}\n.rol-3[data-v-7dabd941] {\n     width: 75%;\n     display: flex;\n     flex-wrap: wrap;\n     align-items: center;\n     justify-content: space-between;\n     padding-top: 15px;\n     gap: 15px;\n}\n.card-box[data-v-7dabd941] {\n     width: 100%;\n     display: flex;\n     justify-content: center;\n     flex-wrap: wrap;\n     align-items: center;\n     gap: 31px;\n}\n.btn-box[data-v-7dabd941] {\n     width: 100%;\n     display: flex;\n     align-items: stretch;\n     justify-content: space-between;\n     padding: 30px 0px 0px 0px ; \n     flex-direction: column;\n     gap: 25px;\n}\n.btn-2[data-v-7dabd941] {\n     display: flex;\n     width: 60%;\n     justify-content: space-between;\n}\n.box-2[data-v-7dabd941] {\n     height: 100% !important;\n     flex-shrink: 0;\n     border-radius: 20px;\n     background: #FFF;\n     box-shadow: 0px 10px 54px 0px rgba(0, 0, 0, 0.25);\n     width: 58%;\n     padding: 24px;\n}\n.Sponsorship[data-v-7dabd941] {\n     width: 100%;\n     height: 100%;\n     flex-shrink: 0;\n     border-radius: 20px;\n     background: #FFF;\n     box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);\n     padding: 30px 20px;\n}\n}\n@media screen and (max-width: 425px){\n.short-card h3[data-v-7dabd941] {\n     color: #000;\n     font-family: sans-serif;\n     font-size: 12px;\n     font-style: normal;\n     font-weight: 400;\n     line-height: normal;\n     margin: 0px;\n}\n.id-titel p[data-v-7dabd941] {\n     color: #000;\n     font-family: sans-serif;\n     font-size: 8px;\n     font-style: normal;\n     font-weight: 500;\n     line-height: normal;\n     margin: 0px;\n     white-space: nowrap;\n     overflow: hidden;\n     text-overflow: ellipsis;\n}\n.contact p[data-v-7dabd941] {\n     color: #000;\n     font-family: sans-serif;\n     font-size: 10px;\n     font-style: normal;\n     font-weight: 400;\n     line-height: normal;\n     margin: 0px;\n}\n.rol-1 p[data-v-7dabd941] {\n     color: #000;\n     font-family: sans-serif;\n     font-size: 13px;\n     font-style: normal;\n     font-weight: 500;\n     line-height: 24px;\n     margin: 0px;\n     padding-bottom: 12px;\n}\n.page-1[data-v-7dabd941] {\n     width: 100%;\n     background-color: #F5F3EA;\n     padding: 20px;\n}\n.rol-card svg[data-v-7dabd941] {\n     width: 20px;\n     height: 20px;\n}\n.yes[data-v-7dabd941] {\n     width: 50%;\n     display: flex;\n     align-items: center;\n     gap: 2px;\n     justify-content: center;\n}\n.cards[data-v-7dabd941] {\n     border-radius: 16px;\n     border: 2px solid #000;\n     background: #F96;\n     box-shadow: 4px 4px 0px 2px #1B1C1D;\n     width: 85%;\n     height: 100%;\n     flex-shrink: 0;\n}\n.btn-box[data-v-7dabd941] {\n     width: 100%;\n     display: flex;\n     padding: 30px 0px 0px 0px;\n     flex-direction: column;\n     gap: 25px ;\n     align-content: center;\n     align-items: center;\n}\n.btn-1[data-v-7dabd941] {\n     width: 100%;\n     display: flex;\n     align-items: center;\n     gap: 18px;\n     justify-content: center;\n}\n.btn-2[data-v-7dabd941] {\n     display: flex;\n     width: 60%;\n     flex-direction: column;\n     gap: 12px;\n}\n.over-box[data-v-7dabd941] {\n     width: 100%;\n     display: flex;\n     flex-wrap: wrap;\n     gap: 20px 0px;\n}\n.Over-card[data-v-7dabd941] {\n     width: 50%;\n}\n.OverView[data-v-7dabd941] {\n     width: 100%;\n     padding-top: 40px;\n}\n.over-btn button[data-v-7dabd941] {\n     border-radius: 6px;\n     border: 1px solid #000;\n     background: #F96;\n     box-shadow: 2px 2px 0px 0px #1B1C1D;\n     display: inline-flex;\n     padding: 6px 16.25px 6px 15px;\n     justify-content: center;\n     align-items: center;\n     gap: 4.75px;\n     color: #FFF;\n     text-align: center;\n     font-family: sans-serif;\n     font-size: 14px;\n     font-style: normal;\n     font-weight: 700;\n     line-height: 24px;\n}\n.over-btn[data-v-7dabd941] {\n     width: 100%;\n     display: flex;\n     justify-content: center;\n     padding: 30px 0px 0px 0px;\n}\n.box-2[data-v-7dabd941] {\n     height: 100% !important;\n     flex-shrink: 0;\n     border-radius: 20px;\n     background: #FFF;\n     box-shadow: 0px 10px 54px 0px rgba(0, 0, 0, 0.25);\n     width: 90%;\n}\n.id-box[data-v-7dabd941] {\n     width: 100%;\n     display: flex;\n     flex-direction: column;\n     align-items: center;\n     padding: 30px 0px 50px 0px;\n}\n.rol-1[data-v-7dabd941] {\n     border-radius: 20px;\n     background: #FFF;\n     box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);\n     flex-shrink: 0;\n     width: 100%;\n     padding: 20px;\n}\n.new-btn-lid[data-v-7dabd941] {\n     width: 100%;\n     display: flex;\n     align-items: center;\n     justify-content: center;\n     gap: 20px;\n}\n.rol-3[data-v-7dabd941] {\n     width: 100%;\n     display: flex;\n     flex-wrap: wrap;\n     align-items: center;\n     justify-content: space-between;\n     padding-top: 15px;\n     gap: 10px;\n}\n.rol-card[data-v-7dabd941] {\n     width: 48%;\n     border-radius: 10px;\n     background: #FFF;\n     box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);\n     display: flex;\n     align-items: center;\n     justify-content: space-between;\n     padding: 12px 10px;\n     flex-wrap: wrap;\n}\n.rol-para h2[data-v-7dabd941] {\n     color: #000;\n     font-family: sans-serif;\n     font-size: 12px;\n     font-style: normal;\n     font-weight: 500;\n     line-height: normal;\n     margin: 0px;\n}\n.rol-para p[data-v-7dabd941] {\n     color: #000;\n     font-family: sans-serif;\n     font-size: 8px;\n     font-style: normal;\n     font-weight: 500;\n     line-height: normal;\n     margin: 0px;\n}\n.div-1 h2[data-v-7dabd941] {\n     color: #000;\n     font-family: sans-serif;\n     font-size: 12px;\n     font-style: normal;\n     font-weight: bold;\n     line-height: normal;\n     margin: 0px;\n     width: 80%;\n}\n.div-1 svg[data-v-7dabd941] {\n     width: 15px;\n     height: 15px;\n}\n.Enrolled p[data-v-7dabd941] {\n     font-size: 7px;\n}\n.Reviews p[data-v-7dabd941] {\n     font-size: 7px;\n}\n.Enrolled svg[data-v-7dabd941] {\n     width: 18px;\n     height: 18px;\n}\n.Reviews svg[data-v-7dabd941] {\n     width: 18px;\n     height: 18px;\n}\n.new-2[data-v-7dabd941] {\n     width: 100%;\n     display: flex;\n     align-items: center;\n     justify-content: center;\n     flex-wrap: wrap;\n     gap: 30px;\n}\n.short-card[data-v-7dabd941] {\n     width: 42%;\n     background: #FFF;\n     box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);\n     padding: 12px 20px;\n}\n.new-3[data-v-7dabd941] {\n     width: 100%;\n     display: flex;\n     justify-content: space-between;\n     flex-direction: column;\n     align-items: center;\n     gap: 28px;\n}\n.dashbord-card[data-v-7dabd941] {\n     background: #FFF;\n     box-shadow: 4px 0px 24px 0px rgba(0, 0, 0, 0.25);\n     height: 100%;\n     flex-shrink: 0;\n     width: 90%;\n     border-radius: 20px;\n}\n.conting-card[data-v-7dabd941] {\n     height: 350px;\n     flex-shrink: 0;\n     background: #FFF;\n     box-shadow: 4px 0px 24px 0px rgba(0, 0, 0, 0.25);\n     width: 76%;\n     padding: 12px 15px;\n     display: flex;\n     flex-wrap: wrap;\n     align-items: center;\n     justify-content: space-between;\n     border-radius: 20px;\n}\n}\n ", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/merchandise.vue?vue&type=style&index=0&id=875b56d8&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/merchandise.vue?vue&type=style&index=0&id=875b56d8&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.page-1[data-v-875b56d8] {\r\n    width: 100%;\r\n    background-color: #F5F3EA;\r\n    padding: 30px;\n}\n.contanir[data-v-875b56d8] {\r\n    width: 100%;\r\n    max-width: 1600px;\r\n    margin: 0 auto;\n}\n.Sponsorship h2[data-v-875b56d8] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 18px;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: 24px; /* 150% */\r\n    padding-bottom: 25px;\r\n    margin: 0px ;\n}\n.card-box[data-v-875b56d8] {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\n}\n.cards[data-v-875b56d8] {\r\n    border-radius: 16px;\r\n    border: 2px solid #000;\r\n    background: #F96;\r\n    box-shadow: 4px 4px 0px 2px #1B1C1D;\r\n    width: 30%;\r\n    height: 369px;\r\n    flex-shrink: 0;\n}\n.main[data-v-875b56d8] {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\n}\n.box-1[data-v-875b56d8] {\r\n    height: 100%;\r\n    background: transparent;\r\n    width: 67%;\n}\n.box-2[data-v-875b56d8] {\r\n    height: 871px;\r\n    flex-shrink: 0;\r\n    border-radius: 20px;\r\n    background: #FFF;\r\n    box-shadow: 0px 10px 54px 0px rgba(0, 0, 0, 0.25);\r\n    width: 30%;\r\n    padding: 30px;\n}\n.Sponsorship[data-v-875b56d8] {\r\n    width: 100%;\r\n    height: 581px;\r\n    flex-shrink: 0;\r\n    border-radius: 20px;\r\n    background: #FFF;\r\n    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);\r\n    padding: 30px 33px ;\n}\n.btn-box[data-v-875b56d8] {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding: 30px 0px;\n}\n.btn-2[data-v-875b56d8] {\r\n    display: flex;\r\n    width: 46%;\r\n    justify-content: space-between;\n}\n.btn-1[data-v-875b56d8] {\r\n    width: 35%;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 18px;\n}\n.Campaign[data-v-875b56d8] {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 10px;\r\n    border-radius: 10px;\r\n    background: #FFF;\r\n    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);\r\n    padding: 12px 20px;\n}\n.Campaign h2[data-v-875b56d8] {\r\n    padding: 0px;\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: normal;\n}\n.Campaign p[data-v-875b56d8] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 14px;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: normal;\r\n    margin: 0px;\n}\n.over-btn[data-v-875b56d8] {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    padding: 50px 0px 0px 0px;\n}\n.over-btn button[data-v-875b56d8] {\r\n    border-radius: 6px;\r\n    border: 1px solid #000;\r\n    background: #F96;\r\n    box-shadow: 2px 2px 0px 0px #1B1C1D;\r\n    display: inline-flex;\r\n    padding: 10px 21.25px 10px 20px;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 4.75px;\r\n    color: #FFF;\r\n    text-align: center;\r\n    font-family: sans-serif;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    line-height: 24px; /* 150% */\n}\n.btn-1 button[data-v-875b56d8] {\r\n    border-radius: 6px;\r\n    border: 1px solid #000;\r\n    background: #F96;\r\n    box-shadow: 2px 2px 0px 0px #1B1C1D;\r\n    display: flex;\r\n    width: 154.75px;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 7.647px;\r\n    flex-shrink: 0;\r\n    padding: 10px;\r\n    color: #FFF;\r\n    text-align: center;\r\n    font-family: sans-serif;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    line-height: 24px; /* 150% */\n}\nbutton.Add[data-v-875b56d8] {\r\n    border-radius: 6px;\r\n    border: 1px solid #000;\r\n    background: #F5F3EA;\r\n    box-shadow: 2px 2px 0px 0px #1B1C1D;\r\n    color: #000;\n}\n.OverView[data-v-875b56d8] {\r\n    width: 100%;\r\n    padding-top: 75px;\n}\n.OverView h2[data-v-875b56d8] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 26px;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: 24px; /* 92.308% */\r\n    margin: 0px;\r\n    padding-bottom: 30px;\n}\n.over-box[data-v-875b56d8] {\r\n    width: 100%;\r\n    display: flex;\n}\n.Over-card h4[data-v-875b56d8] {\r\n    color: #FF5757;\r\n    font-family: sans-serif;\r\n    font-size: 20px;\r\n    font-style: normal;\r\n    font-weight: 800;\r\n    line-height: 24px; /* 114.286% */\r\n    margin: 0px;\n}\n.Over-card h4 span[data-v-875b56d8] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 38px;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    line-height: 24px; /* 58.537% */\r\n    padding-left: 5px;\n}\n.Over-card[data-v-875b56d8] {\r\n    width: 25%;\n}\r\n\r\n/* .../ */\n.pox-1[data-v-875b56d8] {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: 20px;\r\n    border-bottom: 1px solid #000;\n}\n.pox-1 h2[data-v-875b56d8] {\r\n    color: #000;\r\n    text-align: center;\r\n    font-family: sans-serif;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 800;\r\n    line-height: 24px; /* 150% */\r\n    margin: 0px;\r\n    padding: 0px;\n}\n.top-btn[data-v-875b56d8] {\r\n    width: 49%;\r\n    display: flex;\r\n    align-items: center;\n}\n.top-btn button[data-v-875b56d8] {\r\n    border: none;\r\n    background: transparent;\n}\n.pox-2[data-v-875b56d8] {\r\n    width: 100%;\r\n    padding: 20px;\n}\n.pox-2 p[data-v-875b56d8] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 18px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    letter-spacing: -0.96px;\r\n    margin: 0px;\n}\n.pox-2 h2[data-v-875b56d8] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    line-height: 24px; /* 150% */\r\n    padding: 15px 0px;\n}\n.pox-box[data-v-875b56d8] {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    gap: 10px 0px;\n}\n.yes[data-v-875b56d8] {\r\n    width: 50%;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 5px;\n}\n.yes[data-v-875b56d8] {}\n.pox-3[data-v-875b56d8] {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: flex-end;\r\n    padding: 25px 0px;\n}\n.pox-3 h2[data-v-875b56d8] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 18px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    padding: 0px 0px 0px 0px;\n}\n.pox-3 p[data-v-875b56d8] {\r\n    color: #000;\r\n    text-align: center;\r\n    font-family: sans-serif;\r\n    font-size: 15px;\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    line-height: 24px; /* 150% */\r\n    width: 40%;\n}\n.pox-3 h2 span[data-v-875b56d8] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 20px;\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    line-height: normal;\n}\nbutton.llo[data-v-875b56d8] {\r\n    color: #fff;\n}\r\n\r\n/* .../ */\n.box-2 h2[data-v-875b56d8] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 18px;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: normal;\n}\n.id-box[data-v-875b56d8] {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    padding: 70px 0px 120px 0px;\n}\n.id-box h2[data-v-875b56d8] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 26px;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    margin: 0px;\r\n    padding: 20px 0px 4px 0px;\n}\n.id-box h3[data-v-875b56d8] {color: #000;font-family: sans-serif;font-size: 16px;font-style: normal;font-weight: 500;line-height: normal;}\n.titel-box[data-v-875b56d8] {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding-bottom: 20px;\n}\n.id-titel[data-v-875b56d8] {\r\n    display: flex;\r\n    align-items: center;\r\n    width: 30%;\r\n    justify-content: space-between;\n}\n.id-titel p[data-v-875b56d8] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: normal;\r\n    margin: 0px;\n}\n.contact-box[data-v-875b56d8] {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    padding-bottom: 40px;\n}\n.contact[data-v-875b56d8] {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    gap: 15px;\n}\n.contact p[data-v-875b56d8] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    margin: 0px;\n}\n.para-box[data-v-875b56d8] {\r\n    width: 100%;\r\n    border-top: 1px solid #F96;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    align-items: center;\n}\n.para-box p[data-v-875b56d8] {\r\n    color: #000;\r\n    text-align: center;\r\n    font-family: sans-serif;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: 24px; /* 150% */\r\n    margin: 0px;\r\n    padding: 32px 0px 44px 0px;\n}\n.para-box button[data-v-875b56d8] {\r\n    border-radius: 6px;\r\n    border: 1px solid #000;\r\n    background: #F96;\r\n    box-shadow: 2px 2px 0px 0px #1B1C1D;\r\n    display: flex;\r\n    width: 154.75px;\r\n    height: 44px;\r\n    padding: 10px 18px;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 7.647px;\r\n    flex-shrink: 0;\r\n     /* 150% */\n}\n.para-box button p[data-v-875b56d8] {\r\n    color: #FFF;\r\n    text-align: center;\r\n    font-family: sans-serif;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    line-height: 24px; /* 150% */\r\n    padding: 0px;\n}\n@media screen and (max-width: 1600px){\n.contanir[data-v-875b56d8] {\r\n    width: 100%;\r\n    max-width: 1440px;\r\n    margin: 0 auto;\n}\n.pox-1[data-v-875b56d8] {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: 12px;\r\n    border-bottom: 1px solid #000;\n}\n.top-btn button[data-v-875b56d8] {\r\n    border: none;\r\n    background: transparent;\r\n    padding: 4px;\n}\n.yes[data-v-875b56d8] {\r\n    width: 50%;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 2px;\n}\n.pox-3 h2 span[data-v-875b56d8] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 17px;\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    line-height: normal;\n}\n.pox-3 p[data-v-875b56d8] {\r\n    color: #000;\r\n    text-align: center;\r\n    font-family: sans-serif;\r\n    font-size: 14px;\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    line-height: 24px;\r\n    width: 40%;\n}\n.pox-3 h2[data-v-875b56d8] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 17px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    padding: 0px 0px 0px 0px;\n}\n.btn-1 button[data-v-875b56d8] {\r\n    border-radius: 6px;\r\n    border: 1px solid #000;\r\n    background: #F96;\r\n    box-shadow: 2px 2px 0px 0px #1B1C1D;\r\n    display: flex;\r\n    width: 154.75px;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 7.647px;\r\n    flex-shrink: 0;\r\n    padding: 8px;\r\n    color: #FFF;\r\n    text-align: center;\r\n    font-family: sans-serif;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    line-height: 24px;\n}\n.btn-2[data-v-875b56d8] {\r\n    display: flex;\r\n    width: 50%;\r\n    justify-content: space-between;\n}\n.id-titel[data-v-875b56d8] {\r\n    display: flex;\r\n    align-items: center;\r\n    width: 32%;\r\n    justify-content: space-between;\n}\n.over-btn button[data-v-875b56d8] {\r\n    border-radius: 6px;\r\n    border: 1px solid #000;\r\n    background: #F96;\r\n    box-shadow: 2px 2px 0px 0px #1B1C1D;\r\n    display: inline-flex;\r\n    padding: 8px 21.25px 8px 20px;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 4.75px;\r\n    color: #FFF;\r\n    text-align: center;\r\n    font-family: sans-serif;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    line-height: 24px;\n}\n.Over-card h4 span[data-v-875b56d8] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 35px;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    line-height: 24px;\r\n    padding-left: 5px;\n}\n.Over-card h4[data-v-875b56d8] {\r\n    color: #FF5757;\r\n    font-family: sans-serif;\r\n    font-size: 18px;\r\n    font-style: normal;\r\n    font-weight: 800;\r\n    line-height: 24px;\r\n    margin: 0px;\n}\n.para-box button[data-v-875b56d8] {\r\n    border-radius: 6px;\r\n    border: 1px solid #000;\r\n    background: #F96;\r\n    box-shadow: 2px 2px 0px 0px #1B1C1D;\r\n    display: flex;\r\n    width: 154.75px;\r\n    height: 42px;\r\n    padding: 10px 18px;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 7.647px;\r\n    flex-shrink: 0;\n}\nbutton.Add[data-v-875b56d8] {\r\n    border-radius: 6px;\r\n    border: 1px solid #000 !important;\r\n    background: #F5F3EA !important;\r\n    box-shadow: 2px 2px 0px 0px #1B1C1D !important; \r\n    color: #000 !important;\n}\n}\n@media screen and (max-width: 1440px){\n.contanir[data-v-875b56d8] {\r\n    width: 100%;\r\n    max-width: 1170px;\r\n    margin: 0 auto;\n}\n.pox-2 h2[data-v-875b56d8] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    line-height: 20px;\r\n    padding: 12px 0px;\n}\n.Sponsorship[data-v-875b56d8] {\r\n    width: 100%;\r\n    height: 470px;\r\n    flex-shrink: 0;\r\n    border-radius: 20px;\r\n    background: #FFF;\r\n    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);\r\n    padding: 30px 20px;\n}\n.OverView[data-v-875b56d8] {\r\n    width: 100%;\r\n    padding-top: 60px;\n}\n.OverView h2[data-v-875b56d8] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 24px;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: 24px;\r\n    margin: 0px;\r\n    padding-bottom: 20px;\n}\n.Over-card h4[data-v-875b56d8] {\r\n    color: #FF5757;\r\n    font-family: sans-serif;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 800;\r\n    line-height: 24px;\r\n    margin: 0px;\n}\n.Over-card h4 span[data-v-875b56d8] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 28px;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    line-height: 24px;\r\n    padding-left: 0px;\n}\n.over-btn[data-v-875b56d8] {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    padding: 40px 0px 0px 0px;\n}\n.over-btn button[data-v-875b56d8] {\r\n    border-radius: 6px;\r\n    border: 1px solid #000;\r\n    background: #F96;\r\n    box-shadow: 2px 2px 0px 0px #1B1C1D;\r\n    display: inline-flex;\r\n    padding: 7px 16.25px 7px 15px;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 4.75px;\r\n    color: #FFF;\r\n    text-align: center;\r\n    font-family: sans-serif;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    line-height: 24px;\n}\n.top-btn button[data-v-875b56d8] {\r\n    border: none;\r\n    background: transparent;\r\n    padding: 4px;\r\n    display: flex;\r\n    align-items: center;\n}\n.top-btn button svg[data-v-875b56d8] {\r\n    width: 15px;\r\n    height: 15px;\n}\n.top-btn[data-v-875b56d8] {\r\n    width: 42%;\r\n    display: flex;\r\n    align-items: center;\n}\n.pox-1[data-v-875b56d8] {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: 8px;\r\n    border-bottom: 1px solid #000;\n}\n.top-btn button span[data-v-875b56d8] {\r\n    font-size: 12px;\n}\n.pox-1 h2[data-v-875b56d8] {\r\n    color: #000;\r\n    text-align: center;\r\n    font-family: sans-serif;\r\n    font-size: 14px;\r\n    font-style: normal;\r\n    font-weight: 800;\r\n    line-height: 24px;\r\n    margin: 0px;\r\n    padding: 0px;\n}\n.pox-2[data-v-875b56d8] {\r\n    width: 100%;\r\n    padding: 10px;\n}\n.pox-2 p[data-v-875b56d8] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    letter-spacing: -0.96px;\r\n    margin: 0px;\n}\n.pox-3 h2[data-v-875b56d8] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 14px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    padding: 0px 0px 0px 0px;\r\n    width: 58%;\n}\n.pox-3[data-v-875b56d8] {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: flex-end;\r\n    padding: 15px 0px;\n}\n.pox-box[data-v-875b56d8] {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    gap: 5px 0px;\n}\n.cards[data-v-875b56d8] {\r\n    border-radius: 16px;\r\n    border: 2px solid #000;\r\n    background: #F96;\r\n    box-shadow: 4px 4px 0px 2px #1B1C1D;\r\n    width: 30%;\r\n    height: 280px;\r\n    flex-shrink: 0;\n}\n.yes p[data-v-875b56d8] {\r\n    font-size: 14px;\n}\n.pox-3 h2 span[data-v-875b56d8] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 15px;\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    line-height: normal;\n}\n.pox-3 p[data-v-875b56d8] {\r\n    color: #000;\r\n    text-align: center;\r\n    font-family: sans-serif;\r\n    font-size: 12px;\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    line-height: 24px;\r\n    width: 44%;\r\n    margin: 0px;\r\n    padding: 0px;\n}\n.btn-1 button[data-v-875b56d8] {\r\n    border-radius: 6px;\r\n    border: 1px solid #000;\r\n    background: #F96;\r\n    box-shadow: 2px 2px 0px 0px #1B1C1D;\r\n    display: flex;\r\n    width: 130.75px;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 7.647px;\r\n    flex-shrink: 0;\r\n    padding: 6px;\r\n    color: #FFF;\r\n    text-align: center;\r\n    font-family: sans-serif;\r\n    font-size: 14px;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    line-height: 24px;\n}\n.btn-2[data-v-875b56d8] {\r\n    display: flex;\r\n    width: 52%;\r\n    justify-content: space-between;\n}\n.Campaign[data-v-875b56d8] {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 8px;\r\n    border-radius: 10px;\r\n    background: #FFF;\r\n    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);\r\n    padding: 8px 10px;\n}\n.Campaign svg[data-v-875b56d8] {\r\n    width: 30px;\r\n    height: 30px;\n}\n.id-box[data-v-875b56d8] {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    padding: 50px 0px 80px 0px;\n}\n.id-box img[data-v-875b56d8] {\r\n    width: 40%;\n}\n.id-box h2[data-v-875b56d8] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 24px;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    margin: 0px;\r\n    padding: 15px 0px 2px 0px;\n}\n.contact[data-v-875b56d8] {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    gap: 5px;\n}\n.contact p[data-v-875b56d8] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 14px;\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: normal;\r\n    margin: 0px;\n}\n.id-titel p[data-v-875b56d8] {\r\n    color: #000;\r\n    font-family: sans-serif;\r\n    font-size: 12px;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: normal;\r\n    margin: 0px;\n}\n.id-titel svg[data-v-875b56d8] {\r\n    width: 18px;\r\n    height: 18px;\n}\n.contact-box[data-v-875b56d8] {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    padding-bottom: 15px;\n}\n.para-box p[data-v-875b56d8] {\r\n    color: #000;\r\n    text-align: center;\r\n    font-family: sans-serif;\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    line-height: 24px;\r\n    margin: 0px;\r\n    padding: 25px 0px 25px 0px;\n}\n.para-box button[data-v-875b56d8] {\r\n    border-radius: 6px;\r\n    border: 1px solid #000;\r\n    background: #F96;\r\n    box-shadow: 2px 2px 0px 0px #1B1C1D;\r\n    display: flex;\r\n    width: 144.75px;\r\n    height: 38px;\r\n    padding: 10px 18px;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 7.647px;\r\n    flex-shrink: 0;\n}\n.main[data-v-875b56d8] {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: flex-start;\n}\n.box-2[data-v-875b56d8] {\r\n    height: 720px;\r\n    flex-shrink: 0;\r\n    border-radius: 20px;\r\n    background: #FFF;\r\n    box-shadow: 0px 10px 54px 0px rgba(0, 0, 0, 0.25);\r\n    width: 30%;\r\n    padding: 24px;\n}\n}\n@media screen and (max-width: 1024px){\n.page-1[data-v-875b56d8] {\r\n    width: 100%;\r\n    background-color: #F5F3EA;\r\n    padding: 40px;\n}\n.main[data-v-875b56d8] {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-wrap: wrap;\r\n    gap: 55px 0px;\n}\n.box-1[data-v-875b56d8] {\r\n  height: 100%;\r\n    background: transparent;\r\n    width: 100%;\n}\n.box-2[data-v-875b56d8] {\r\n    height: 720px;\r\n    flex-shrink: 0;\r\n    border-radius: 20px;\r\n    background: #FFF;\r\n    box-shadow: 0px 10px 54px 0px rgba(0, 0, 0, 0.25);\r\n    width: 42%;\r\n    padding: 24px;\n}\n.btn-2[data-v-875b56d8] {\r\n    display: flex;\r\n    width: 44%;\r\n    justify-content: space-between;\n}\n}\n@media screen and (max-width: 768px){\n.cards[data-v-875b56d8] {\r\n    border-radius: 16px;\r\n    border: 2px solid #000;\r\n    background: #F96;\r\n    box-shadow: 4px 4px 0px 2px #1B1C1D;\r\n    width: 44%;\r\n    height: 260px;\r\n    flex-shrink: 0;\n}\n.card-box[data-v-875b56d8] {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-wrap: wrap;\r\n    align-items: center;\r\n    gap: 31px;\n}\n.btn-box[data-v-875b56d8] {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: stretch;\r\n    justify-content: space-between;\r\n    padding: 30px 0px;\r\n    flex-direction: column;\r\n    gap: 25px;\n}\n.btn-2[data-v-875b56d8] {\r\n    display: flex;\r\n    width: 60%;\r\n    justify-content: space-between;\n}\n.box-2[data-v-875b56d8] {\r\n    height: 720px;\r\n    flex-shrink: 0;\r\n    border-radius: 20px;\r\n    background: #FFF;\r\n    box-shadow: 0px 10px 54px 0px rgba(0, 0, 0, 0.25);\r\n    width: 58%;\r\n    padding: 24px;\n}\n.Sponsorship[data-v-875b56d8] {\r\n    width: 100%;\r\n    height: 100%;\r\n    flex-shrink: 0;\r\n    border-radius: 20px;\r\n    background: #FFF;\r\n    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);\r\n    padding: 30px 20px;\n}\n}\n@media screen and (max-width: 425px){\n.page-1[data-v-875b56d8] {\r\n    width: 100%;\r\n    background-color: #F5F3EA;\r\n    padding: 20px;\n}\n.yes[data-v-875b56d8] {\r\n    width: 50%;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 2px;\r\n    justify-content: center;\n}\n.cards[data-v-875b56d8] {\r\n    border-radius: 16px;\r\n    border: 2px solid #000;\r\n    background: #F96;\r\n    box-shadow: 4px 4px 0px 2px #1B1C1D;\r\n    width: 85%;\r\n    height: 260px;\r\n    flex-shrink: 0;\n}\n.btn-box[data-v-875b56d8] {\r\n    width: 100%;\r\n    display: flex;\r\n    padding: 30px 0px 0px 0px;\r\n    flex-direction: column;\r\n    gap: 25px ;\r\n    align-content: center;\r\n    align-items: center;\n}\n.btn-1[data-v-875b56d8] {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 18px;\r\n    justify-content: center;\n}\n.btn-2[data-v-875b56d8] {\r\n    display: flex;\r\n    width: 60%;\r\n    flex-direction: column;\r\n    gap: 12px;\n}\n.over-box[data-v-875b56d8] {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    gap: 20px 0px;\n}\n.Over-card[data-v-875b56d8] {\r\n    width: 50%;\n}\n.OverView[data-v-875b56d8] {\r\n    width: 100%;\r\n    padding-top: 40px;\n}\n.over-btn button[data-v-875b56d8] {\r\n    border-radius: 6px;\r\n    border: 1px solid #000;\r\n    background: #F96;\r\n    box-shadow: 2px 2px 0px 0px #1B1C1D;\r\n    display: inline-flex;\r\n    padding: 6px 16.25px 6px 15px;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 4.75px;\r\n    color: #FFF;\r\n    text-align: center;\r\n    font-family: sans-serif;\r\n    font-size: 14px;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    line-height: 24px;\n}\n.over-btn[data-v-875b56d8] {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    padding: 30px 0px 0px 0px;\n}\n.box-2[data-v-875b56d8] {\r\n    height: 100%;\r\n    flex-shrink: 0;\r\n    border-radius: 20px;\r\n    background: #FFF;\r\n    box-shadow: 0px 10px 54px 0px rgba(0, 0, 0, 0.25);\r\n    width: 90%;\n}\n.id-box[data-v-875b56d8] {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    padding: 30px 0px 50px 0px;\n}\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/brandprofile.vue?vue&type=style&index=0&id=7dabd941&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/brandprofile.vue?vue&type=style&index=0&id=7dabd941&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_brandprofile_vue_vue_type_style_index_0_id_7dabd941_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./brandprofile.vue?vue&type=style&index=0&id=7dabd941&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/brandprofile.vue?vue&type=style&index=0&id=7dabd941&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_brandprofile_vue_vue_type_style_index_0_id_7dabd941_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_brandprofile_vue_vue_type_style_index_0_id_7dabd941_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/merchandise.vue?vue&type=style&index=0&id=875b56d8&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/merchandise.vue?vue&type=style&index=0&id=875b56d8&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_merchandise_vue_vue_type_style_index_0_id_875b56d8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./merchandise.vue?vue&type=style&index=0&id=875b56d8&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/merchandise.vue?vue&type=style&index=0&id=875b56d8&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_merchandise_vue_vue_type_style_index_0_id_875b56d8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_merchandise_vue_vue_type_style_index_0_id_875b56d8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/views/admin/brandprofile.vue":
/*!***************************************************!*\
  !*** ./resources/js/views/admin/brandprofile.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _brandprofile_vue_vue_type_template_id_7dabd941_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./brandprofile.vue?vue&type=template&id=7dabd941&scoped=true& */ "./resources/js/views/admin/brandprofile.vue?vue&type=template&id=7dabd941&scoped=true&");
/* harmony import */ var _brandprofile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./brandprofile.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/brandprofile.vue?vue&type=script&lang=js&");
/* harmony import */ var _brandprofile_vue_vue_type_style_index_0_id_7dabd941_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./brandprofile.vue?vue&type=style&index=0&id=7dabd941&scoped=true&lang=css& */ "./resources/js/views/admin/brandprofile.vue?vue&type=style&index=0&id=7dabd941&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _brandprofile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _brandprofile_vue_vue_type_template_id_7dabd941_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _brandprofile_vue_vue_type_template_id_7dabd941_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "7dabd941",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/brandprofile.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/merchandise.vue":
/*!**************************************************!*\
  !*** ./resources/js/views/admin/merchandise.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _merchandise_vue_vue_type_template_id_875b56d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./merchandise.vue?vue&type=template&id=875b56d8&scoped=true& */ "./resources/js/views/admin/merchandise.vue?vue&type=template&id=875b56d8&scoped=true&");
/* harmony import */ var _merchandise_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./merchandise.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/merchandise.vue?vue&type=script&lang=js&");
/* harmony import */ var _merchandise_vue_vue_type_style_index_0_id_875b56d8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./merchandise.vue?vue&type=style&index=0&id=875b56d8&scoped=true&lang=css& */ "./resources/js/views/admin/merchandise.vue?vue&type=style&index=0&id=875b56d8&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _merchandise_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _merchandise_vue_vue_type_template_id_875b56d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _merchandise_vue_vue_type_template_id_875b56d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "875b56d8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/merchandise.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/brandprofile.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/admin/brandprofile.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_brandprofile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./brandprofile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/brandprofile.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_brandprofile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/admin/merchandise.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/admin/merchandise.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_merchandise_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./merchandise.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/merchandise.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_merchandise_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/admin/brandprofile.vue?vue&type=style&index=0&id=7dabd941&scoped=true&lang=css&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/views/admin/brandprofile.vue?vue&type=style&index=0&id=7dabd941&scoped=true&lang=css& ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_brandprofile_vue_vue_type_style_index_0_id_7dabd941_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./brandprofile.vue?vue&type=style&index=0&id=7dabd941&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/brandprofile.vue?vue&type=style&index=0&id=7dabd941&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/views/admin/merchandise.vue?vue&type=style&index=0&id=875b56d8&scoped=true&lang=css&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/views/admin/merchandise.vue?vue&type=style&index=0&id=875b56d8&scoped=true&lang=css& ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_merchandise_vue_vue_type_style_index_0_id_875b56d8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./merchandise.vue?vue&type=style&index=0&id=875b56d8&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/merchandise.vue?vue&type=style&index=0&id=875b56d8&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/views/admin/brandprofile.vue?vue&type=template&id=7dabd941&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/views/admin/brandprofile.vue?vue&type=template&id=7dabd941&scoped=true& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_brandprofile_vue_vue_type_template_id_7dabd941_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_brandprofile_vue_vue_type_template_id_7dabd941_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_brandprofile_vue_vue_type_template_id_7dabd941_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./brandprofile.vue?vue&type=template&id=7dabd941&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/brandprofile.vue?vue&type=template&id=7dabd941&scoped=true&");


/***/ }),

/***/ "./resources/js/views/admin/merchandise.vue?vue&type=template&id=875b56d8&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/views/admin/merchandise.vue?vue&type=template&id=875b56d8&scoped=true& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_merchandise_vue_vue_type_template_id_875b56d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_merchandise_vue_vue_type_template_id_875b56d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_merchandise_vue_vue_type_template_id_875b56d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./merchandise.vue?vue&type=template&id=875b56d8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/merchandise.vue?vue&type=template&id=875b56d8&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/brandprofile.vue?vue&type=template&id=7dabd941&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/brandprofile.vue?vue&type=template&id=7dabd941&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "box-2" }, [
    _c("h2", [_vm._v("Brand Profile")]),
    _vm._v(" "),
    _c("div", { staticClass: "row hei" }, [
      _c(
        "div",
        {
          staticClass: "col-7",
          staticStyle: {
            display: "flex",
            "flex-direction": "column",
            "justify-content": "center"
          }
        },
        [
          _c(
            "h2",
            {
              staticStyle: {
                color: "#000",
                "font-family": "fantasy",
                "font-size": "26px",
                "font-style": "normal",
                "font-weight": "500",
                "line-height": "normal"
              }
            },
            [_vm._v(_vm._s(_vm.model.user_name))]
          ),
          _vm._v(" "),
          _c(
            "h6",
            { staticStyle: { "font-size": "smaller", color: "black" } },
            [_vm._v(_vm._s(_vm.model.brand.website))]
          ),
          _vm._v(" "),
          _c(
            "h6",
            { staticStyle: { "font-size": "smaller", color: "black" } },
            [
              _c("i", {
                staticClass: "fas fa-fw fa-envelope",
                staticStyle: { color: "#F96" }
              }),
              _vm._v(_vm._s(_vm.model.email))
            ]
          ),
          _vm._v(" "),
          _c(
            "h6",
            { staticStyle: { "font-size": "smaller", color: "black" } },
            [
              _c("i", {
                staticClass: "fas fa-fw fa-flag",
                staticStyle: { color: "#F96" }
              }),
              _vm._v(_vm._s(_vm.model.brand.country))
            ]
          )
        ]
      ),
      _vm._v(" "),
      _vm._m(0)
    ]),
    _vm._v(" "),
    _vm._m(1),
    _vm._v(" "),
    _c("br"),
    _vm._v(" "),
    _vm._m(2),
    _vm._v(" "),
    _c("br"),
    _vm._v(" "),
    _vm._m(3),
    _vm._v(" "),
    _c("br"),
    _vm._v(" "),
    _vm._m(4),
    _vm._v(" "),
    _c("br"),
    _vm._v(" "),
    _c("div", { staticClass: "para-box" }, [
      _c("p", [_vm._v(_vm._s(_vm.model.brand.company))])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-5" }, [
      _c("div", { staticClass: "id-box" }, [
        _c("img", { attrs: { src: "/images/Characters.png", alt: "" } })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row alps" }, [
      _c("div", { staticClass: "col-8" }, [
        _c("span", { staticClass: "spanss" }, [
          _vm._v("Total Hired Influencers")
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-4 text-center" }, [
        _c("img", { attrs: { src: "/images/arrow.png" } }),
        _c("span", { staticClass: "spanss" }, [_vm._v("15")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row alps" }, [
      _c("div", { staticClass: "col-8" }, [
        _c("span", { staticClass: "spanss" }, [
          _vm._v("Total Hired Influencers")
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-4 text-center" }, [
        _c("img", { attrs: { src: "/images/arrow.png" } }),
        _c("span", { staticClass: "spanss" }, [_vm._v("15")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row alp" }, [
      _c("div", { staticClass: "col-8 " }, [
        _c("span", { staticClass: "spanss" }, [
          _vm._v("Total Hired Influencers")
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-4 text-center" }, [
        _c("span", { staticClass: "spanss" }, [
          _c("img", { attrs: { src: "/images/arrow.png" } }),
          _vm._v("15")
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-7 " }, [
        _c("span", { staticClass: "spa" }, [
          _c("img", { attrs: { src: "/images/mdi_users.png" } }),
          _vm._v("123 Enrolled Users")
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-5 text-center" }, [
        _c("span", { staticClass: "spa" }, [
          _c("img", { attrs: { src: "/images/ph_chat-fill.png" } }),
          _vm._v("100 Reviews")
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row alp" }, [
      _c("div", { staticClass: "col-8 " }, [
        _c("span", { staticClass: "spanss" }, [_vm._v("My Merchandise")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-4 text-center" }, [
        _c("span", { staticClass: "spanss" }, [
          _c("img", { attrs: { src: "/images/arrow.png" } }),
          _vm._v("10")
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-7 " }, [
        _c("span", { staticClass: "spa" }, [
          _c("img", { attrs: { src: "/images/mdi_graph-line.png" } }),
          _vm._v("123 Total Impressions")
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-5 text-center" }, [
        _c("span", { staticClass: "spa" }, [
          _c("img", { attrs: { src: "/images/ep_sold-out.png" } }),
          _vm._v("100 Sold")
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/merchandise.vue?vue&type=template&id=875b56d8&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/merchandise.vue?vue&type=template&id=875b56d8&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "page-1" }, [
    _c("div", { staticClass: "contanir" }, [
      _c(
        "div",
        { staticClass: "main" },
        [
          _c("div", { staticClass: "box-1" }, [
            _c("div", { staticClass: "Sponsorship" }, [
              _c("h2", [_vm._v("My Merchandise")]),
              _vm._v(" "),
              _c("div", { staticClass: "card-box" }, [
                _c("div", { staticClass: "cards" }, [
                  _c("div", { staticClass: "pox-1" }, [
                    _c("h2", [_vm._v("Basic One")]),
                    _vm._v(" "),
                    _c("div", { staticClass: "top-btn" }, [
                      _c("button", [
                        _c(
                          "svg",
                          {
                            attrs: {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "22",
                              height: "22",
                              viewBox: "0 0 22 22",
                              fill: "none"
                            }
                          },
                          [
                            _c("path", {
                              attrs: {
                                d:
                                  "M12.0583 3.23158C12.0757 4.21754 12.1263 5.10849 11.9737 5.99333C11.958 6.08661 12.0095 6.1947 12.0391 6.29322C12.1856 6.77878 12.2056 7.2661 12.0792 7.76039C11.9694 8.19017 12.0635 8.62867 12.0313 9.06369C11.9816 9.73494 12.1629 10.4027 12.1289 11.0696C12.101 11.6127 12.1097 12.1619 12.0252 12.7016C11.9824 12.9753 11.9676 13.2342 12.0382 13.514C12.1141 13.8183 11.9319 14.1199 11.9319 14.4355C11.9319 14.7825 11.8447 15.1242 11.7453 15.4572C11.6346 15.8303 11.2964 15.9245 11.0218 15.6525C10.6024 15.2375 10.4185 14.6953 10.3365 14.1339C10.2685 13.6692 10.2293 13.195 10.2049 12.7268C10.1796 12.2317 10.0088 11.733 10.1744 11.2309C10.2032 11.1446 10.2093 11.0374 10.1857 10.9502C10.0253 10.3661 10.1334 9.75848 10.0184 9.17004C9.98262 8.98872 9.99481 8.78995 10.0236 8.60513C10.0637 8.34883 10.0567 8.103 9.97651 7.85891C9.87365 7.54682 10.0044 7.23647 9.99831 6.92351C9.99221 6.60706 9.98088 6.29323 9.90503 5.99333C9.78473 5.5217 9.85185 5.0527 9.90067 4.59327C9.94425 4.17831 9.90764 3.77817 9.89719 3.36931C9.88672 2.98312 9.85359 2.5795 9.92071 2.19941C9.99743 1.76788 10.3915 1.58045 10.7515 1.42266C11.0741 1.28143 11.3121 1.4802 11.5439 1.69727C11.8866 2.01719 12.0696 2.38595 12.0374 2.86108C12.0269 3.01625 12.0557 3.17405 12.0592 3.2342L12.0583 3.23158Z",
                                fill: "#1C1D1E"
                              }
                            }),
                            _vm._v(" "),
                            _c("path", {
                              attrs: {
                                d:
                                  "M4.00555 15.3727C4.00118 14.8253 4.49024 14.4051 5.05865 14.4966C5.43437 14.5568 5.7857 14.6945 6.09082 14.9386C6.32532 15.126 6.56156 15.3161 6.81786 15.4704C7.71491 16.0082 8.57273 16.5976 9.34685 17.3037C9.41485 17.3656 9.50291 17.4161 9.59008 17.4467C10.1123 17.6289 10.5089 17.9941 10.9099 18.3507C11.154 18.5678 11.3354 18.5869 11.5515 18.3394C11.8384 18.0116 12.1662 17.7553 12.5619 17.5731C12.8409 17.4441 13.0031 17.1721 13.2253 16.9733C13.5348 16.6969 13.9132 16.5191 14.2697 16.3247C14.764 16.0553 15.158 15.6656 15.6096 15.3492C16.0647 15.0301 16.5476 14.7625 17.0698 14.569C17.1875 14.5254 17.3131 14.4949 17.4377 14.4827C17.6731 14.4609 17.8195 14.6038 17.9337 14.7878C18.0418 14.9613 17.9965 15.1173 17.8823 15.2707C17.6565 15.5741 17.4639 15.8958 17.1466 16.1312C16.742 16.4319 16.4744 16.8905 16.0281 17.1511C15.6367 17.8381 14.9323 18.1685 14.3473 18.6375C14.0038 18.913 13.7066 19.2494 13.4049 19.5728C13.1617 19.8335 12.8958 20.0462 12.5462 20.1404C12.3431 20.1953 12.1792 20.3174 12.0057 20.4307C11.5917 20.7009 11.1697 20.6835 10.7565 20.4186C10.1463 20.0271 9.49244 19.7028 8.91534 19.259C8.31643 18.7988 7.60856 18.4937 7.06109 17.9575C6.72808 17.6315 6.30004 17.4589 5.8877 17.2575C5.31843 16.9794 4.77793 16.6507 4.33857 16.1843C4.09709 15.9272 4.00729 15.6918 4.00469 15.3754L4.00555 15.3727Z",
                                fill: "#1C1D1E"
                              }
                            })
                          ]
                        ),
                        _c("span", [_vm._v("110 ")])
                      ]),
                      _vm._v(" "),
                      _c("button", { staticClass: "llo" }, [
                        _c(
                          "svg",
                          {
                            attrs: {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "22",
                              height: "22",
                              viewBox: "0 0 22 22",
                              fill: "none"
                            }
                          },
                          [
                            _c("path", {
                              attrs: {
                                d:
                                  "M9.94172 18.7684C9.92428 17.7825 9.87372 16.8915 10.0263 16.0067C10.042 15.9134 9.99054 15.8053 9.96089 15.7068C9.81443 15.2212 9.79439 14.7339 9.9208 14.2396C10.0306 13.8098 9.93647 13.3713 9.96874 12.9363C10.0184 12.2651 9.83711 11.5973 9.8711 10.9304C9.899 10.3873 9.89027 9.83805 9.97485 9.29843C10.0176 9.0247 10.0324 8.76579 9.96177 8.48595C9.88593 8.18171 10.0681 7.88007 10.0681 7.5645C10.0681 7.21752 10.1553 6.87579 10.2547 6.54278C10.3654 6.16966 10.7036 6.07552 10.9782 6.3475C11.3976 6.76247 11.5815 7.3047 11.6635 7.86612C11.7315 8.33078 11.7707 8.80501 11.7951 9.27315C11.8204 9.76832 11.9912 10.267 11.8256 10.7691C11.7968 10.8554 11.7907 10.9626 11.8143 11.0498C11.9747 11.6339 11.8666 12.2415 11.9816 12.83C12.0174 13.0113 12.0052 13.2101 11.9764 13.3949C11.9363 13.6512 11.9433 13.897 12.0235 14.1411C12.1264 14.4532 11.9956 14.7635 12.0017 15.0765C12.0078 15.3929 12.0191 15.7068 12.095 16.0067C12.2153 16.4783 12.1482 16.9473 12.0993 17.4067C12.0558 17.8217 12.0924 18.2218 12.1028 18.6307C12.1133 19.0169 12.1464 19.4205 12.0793 19.8006C12.0026 20.2321 11.6085 20.4196 11.2485 20.5773C10.9259 20.7186 10.6879 20.5198 10.4561 20.3027C10.1134 19.9828 9.93037 19.614 9.96264 19.1389C9.97309 18.9837 9.94432 18.826 9.94084 18.7658L9.94172 18.7684Z",
                                fill: "white"
                              }
                            }),
                            _vm._v(" "),
                            _c("path", {
                              attrs: {
                                d:
                                  "M17.9945 6.62727C17.9988 7.17474 17.5098 7.59494 16.9413 7.5034C16.5656 7.44325 16.2143 7.30551 15.9092 7.0614C15.6747 6.87398 15.4384 6.68393 15.1821 6.52962C14.2851 5.99176 13.4273 5.40243 12.6531 4.69631C12.5851 4.63441 12.4971 4.58385 12.4099 4.55333C11.8877 4.37113 11.4911 4.00586 11.0901 3.64926C10.846 3.43219 10.6646 3.41312 10.4485 3.66062C10.1616 3.98842 9.83385 4.24474 9.43807 4.42694C9.1591 4.55595 8.99695 4.82794 8.77466 5.02671C8.46517 5.30305 8.08683 5.48088 7.73028 5.67529C7.23599 5.94468 6.84196 6.33436 6.39037 6.65081C5.93532 6.96988 5.45236 7.23751 4.93017 7.43104C4.81247 7.47461 4.68695 7.50514 4.56228 7.51733C4.32692 7.53913 4.18045 7.39617 4.06625 7.21221C3.95816 7.03874 4.00348 6.88271 4.11768 6.72927C4.34347 6.42589 4.53614 6.10422 4.85345 5.86884C5.25796 5.56808 5.52559 5.10952 5.97193 4.84886C6.36335 4.16191 7.06773 3.83152 7.65269 3.36252C7.99617 3.08697 8.29344 2.75055 8.59508 2.42715C8.83829 2.16645 9.10418 1.95379 9.45376 1.85955C9.65687 1.80474 9.82077 1.68264 9.99426 1.56934C10.4083 1.2991 10.8303 1.31652 11.2435 1.58144C11.8537 1.97285 12.5076 2.29717 13.0847 2.74102C13.6836 3.20119 14.3914 3.50626 14.9389 4.04249C15.2719 4.36853 15.7 4.54113 16.1123 4.74251C16.6816 5.02061 17.2221 5.34927 17.6614 5.81567C17.9029 6.07283 17.9927 6.30819 17.9953 6.62464L17.9945 6.62727Z",
                                fill: "white"
                              }
                            })
                          ]
                        ),
                        _c("span", [_vm._v("110 ")])
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "pox-2" }, [
                    _c("p", [
                      _vm._v(
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper pharetra ligula."
                      )
                    ]),
                    _vm._v(" "),
                    _c("h2", [_vm._v("What’s Included")]),
                    _vm._v(" "),
                    _c("div", { staticClass: "pox-box" }, [
                      _c("div", { staticClass: "yes" }, [
                        _c(
                          "svg",
                          {
                            attrs: {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "24",
                              height: "24",
                              viewBox: "0 0 24 24",
                              fill: "none"
                            }
                          },
                          [
                            _c("path", {
                              attrs: {
                                d:
                                  "M21 7.00009L9 19.0001L3.5 13.5001L4.91 12.0901L9 16.1701L19.59 5.59009L21 7.00009Z",
                                fill: "black"
                              }
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c("p", [_vm._v("Marketing")])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "yes" }, [
                        _c(
                          "svg",
                          {
                            attrs: {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "24",
                              height: "24",
                              viewBox: "0 0 24 24",
                              fill: "none"
                            }
                          },
                          [
                            _c("path", {
                              attrs: {
                                d:
                                  "M21 7.00009L9 19.0001L3.5 13.5001L4.91 12.0901L9 16.1701L19.59 5.59009L21 7.00009Z",
                                fill: "black"
                              }
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c("p", [_vm._v("Marketing")])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "yes" }, [
                        _c(
                          "svg",
                          {
                            attrs: {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "24",
                              height: "24",
                              viewBox: "0 0 24 24",
                              fill: "none"
                            }
                          },
                          [
                            _c("path", {
                              attrs: {
                                d:
                                  "M21 7.00009L9 19.0001L3.5 13.5001L4.91 12.0901L9 16.1701L19.59 5.59009L21 7.00009Z",
                                fill: "black"
                              }
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c("p", [_vm._v("Marketing")])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "yes" }, [
                        _c(
                          "svg",
                          {
                            attrs: {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "24",
                              height: "24",
                              viewBox: "0 0 24 24",
                              fill: "none"
                            }
                          },
                          [
                            _c("path", {
                              attrs: {
                                d:
                                  "M21 7.00009L9 19.0001L3.5 13.5001L4.91 12.0901L9 16.1701L19.59 5.59009L21 7.00009Z",
                                fill: "black"
                              }
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c("p", [_vm._v("Marketing")])
                      ])
                    ]),
                    _vm._v(" "),
                    _vm._m(0)
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "cards" }, [
                  _c("div", { staticClass: "pox-1" }, [
                    _c("h2", [_vm._v("Advance One")]),
                    _vm._v(" "),
                    _c("div", { staticClass: "top-btn" }, [
                      _c("button", [
                        _c(
                          "svg",
                          {
                            attrs: {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "22",
                              height: "22",
                              viewBox: "0 0 22 22",
                              fill: "none"
                            }
                          },
                          [
                            _c("path", {
                              attrs: {
                                d:
                                  "M12.0583 3.23158C12.0757 4.21754 12.1263 5.10849 11.9737 5.99333C11.958 6.08661 12.0095 6.1947 12.0391 6.29322C12.1856 6.77878 12.2056 7.2661 12.0792 7.76039C11.9694 8.19017 12.0635 8.62867 12.0313 9.06369C11.9816 9.73494 12.1629 10.4027 12.1289 11.0696C12.101 11.6127 12.1097 12.1619 12.0252 12.7016C11.9824 12.9753 11.9676 13.2342 12.0382 13.514C12.1141 13.8183 11.9319 14.1199 11.9319 14.4355C11.9319 14.7825 11.8447 15.1242 11.7453 15.4572C11.6346 15.8303 11.2964 15.9245 11.0218 15.6525C10.6024 15.2375 10.4185 14.6953 10.3365 14.1339C10.2685 13.6692 10.2293 13.195 10.2049 12.7268C10.1796 12.2317 10.0088 11.733 10.1744 11.2309C10.2032 11.1446 10.2093 11.0374 10.1857 10.9502C10.0253 10.3661 10.1334 9.75848 10.0184 9.17004C9.98262 8.98872 9.99481 8.78995 10.0236 8.60513C10.0637 8.34883 10.0567 8.103 9.97651 7.85891C9.87365 7.54682 10.0044 7.23647 9.99831 6.92351C9.99221 6.60706 9.98088 6.29323 9.90503 5.99333C9.78473 5.5217 9.85185 5.0527 9.90067 4.59327C9.94425 4.17831 9.90764 3.77817 9.89719 3.36931C9.88672 2.98312 9.85359 2.5795 9.92071 2.19941C9.99743 1.76788 10.3915 1.58045 10.7515 1.42266C11.0741 1.28143 11.3121 1.4802 11.5439 1.69727C11.8866 2.01719 12.0696 2.38595 12.0374 2.86108C12.0269 3.01625 12.0557 3.17405 12.0592 3.2342L12.0583 3.23158Z",
                                fill: "#1C1D1E"
                              }
                            }),
                            _vm._v(" "),
                            _c("path", {
                              attrs: {
                                d:
                                  "M4.00555 15.3727C4.00118 14.8253 4.49024 14.4051 5.05865 14.4966C5.43437 14.5568 5.7857 14.6945 6.09082 14.9386C6.32532 15.126 6.56156 15.3161 6.81786 15.4704C7.71491 16.0082 8.57273 16.5976 9.34685 17.3037C9.41485 17.3656 9.50291 17.4161 9.59008 17.4467C10.1123 17.6289 10.5089 17.9941 10.9099 18.3507C11.154 18.5678 11.3354 18.5869 11.5515 18.3394C11.8384 18.0116 12.1662 17.7553 12.5619 17.5731C12.8409 17.4441 13.0031 17.1721 13.2253 16.9733C13.5348 16.6969 13.9132 16.5191 14.2697 16.3247C14.764 16.0553 15.158 15.6656 15.6096 15.3492C16.0647 15.0301 16.5476 14.7625 17.0698 14.569C17.1875 14.5254 17.3131 14.4949 17.4377 14.4827C17.6731 14.4609 17.8195 14.6038 17.9337 14.7878C18.0418 14.9613 17.9965 15.1173 17.8823 15.2707C17.6565 15.5741 17.4639 15.8958 17.1466 16.1312C16.742 16.4319 16.4744 16.8905 16.0281 17.1511C15.6367 17.8381 14.9323 18.1685 14.3473 18.6375C14.0038 18.913 13.7066 19.2494 13.4049 19.5728C13.1617 19.8335 12.8958 20.0462 12.5462 20.1404C12.3431 20.1953 12.1792 20.3174 12.0057 20.4307C11.5917 20.7009 11.1697 20.6835 10.7565 20.4186C10.1463 20.0271 9.49244 19.7028 8.91534 19.259C8.31643 18.7988 7.60856 18.4937 7.06109 17.9575C6.72808 17.6315 6.30004 17.4589 5.8877 17.2575C5.31843 16.9794 4.77793 16.6507 4.33857 16.1843C4.09709 15.9272 4.00729 15.6918 4.00469 15.3754L4.00555 15.3727Z",
                                fill: "#1C1D1E"
                              }
                            })
                          ]
                        ),
                        _c("span", [_vm._v("110 ")])
                      ]),
                      _vm._v(" "),
                      _c("button", { staticClass: "llo" }, [
                        _c(
                          "svg",
                          {
                            attrs: {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "22",
                              height: "22",
                              viewBox: "0 0 22 22",
                              fill: "none"
                            }
                          },
                          [
                            _c("path", {
                              attrs: {
                                d:
                                  "M9.94172 18.7684C9.92428 17.7825 9.87372 16.8915 10.0263 16.0067C10.042 15.9134 9.99054 15.8053 9.96089 15.7068C9.81443 15.2212 9.79439 14.7339 9.9208 14.2396C10.0306 13.8098 9.93647 13.3713 9.96874 12.9363C10.0184 12.2651 9.83711 11.5973 9.8711 10.9304C9.899 10.3873 9.89027 9.83805 9.97485 9.29843C10.0176 9.0247 10.0324 8.76579 9.96177 8.48595C9.88593 8.18171 10.0681 7.88007 10.0681 7.5645C10.0681 7.21752 10.1553 6.87579 10.2547 6.54278C10.3654 6.16966 10.7036 6.07552 10.9782 6.3475C11.3976 6.76247 11.5815 7.3047 11.6635 7.86612C11.7315 8.33078 11.7707 8.80501 11.7951 9.27315C11.8204 9.76832 11.9912 10.267 11.8256 10.7691C11.7968 10.8554 11.7907 10.9626 11.8143 11.0498C11.9747 11.6339 11.8666 12.2415 11.9816 12.83C12.0174 13.0113 12.0052 13.2101 11.9764 13.3949C11.9363 13.6512 11.9433 13.897 12.0235 14.1411C12.1264 14.4532 11.9956 14.7635 12.0017 15.0765C12.0078 15.3929 12.0191 15.7068 12.095 16.0067C12.2153 16.4783 12.1482 16.9473 12.0993 17.4067C12.0558 17.8217 12.0924 18.2218 12.1028 18.6307C12.1133 19.0169 12.1464 19.4205 12.0793 19.8006C12.0026 20.2321 11.6085 20.4196 11.2485 20.5773C10.9259 20.7186 10.6879 20.5198 10.4561 20.3027C10.1134 19.9828 9.93037 19.614 9.96264 19.1389C9.97309 18.9837 9.94432 18.826 9.94084 18.7658L9.94172 18.7684Z",
                                fill: "white"
                              }
                            }),
                            _vm._v(" "),
                            _c("path", {
                              attrs: {
                                d:
                                  "M17.9945 6.62727C17.9988 7.17474 17.5098 7.59494 16.9413 7.5034C16.5656 7.44325 16.2143 7.30551 15.9092 7.0614C15.6747 6.87398 15.4384 6.68393 15.1821 6.52962C14.2851 5.99176 13.4273 5.40243 12.6531 4.69631C12.5851 4.63441 12.4971 4.58385 12.4099 4.55333C11.8877 4.37113 11.4911 4.00586 11.0901 3.64926C10.846 3.43219 10.6646 3.41312 10.4485 3.66062C10.1616 3.98842 9.83385 4.24474 9.43807 4.42694C9.1591 4.55595 8.99695 4.82794 8.77466 5.02671C8.46517 5.30305 8.08683 5.48088 7.73028 5.67529C7.23599 5.94468 6.84196 6.33436 6.39037 6.65081C5.93532 6.96988 5.45236 7.23751 4.93017 7.43104C4.81247 7.47461 4.68695 7.50514 4.56228 7.51733C4.32692 7.53913 4.18045 7.39617 4.06625 7.21221C3.95816 7.03874 4.00348 6.88271 4.11768 6.72927C4.34347 6.42589 4.53614 6.10422 4.85345 5.86884C5.25796 5.56808 5.52559 5.10952 5.97193 4.84886C6.36335 4.16191 7.06773 3.83152 7.65269 3.36252C7.99617 3.08697 8.29344 2.75055 8.59508 2.42715C8.83829 2.16645 9.10418 1.95379 9.45376 1.85955C9.65687 1.80474 9.82077 1.68264 9.99426 1.56934C10.4083 1.2991 10.8303 1.31652 11.2435 1.58144C11.8537 1.97285 12.5076 2.29717 13.0847 2.74102C13.6836 3.20119 14.3914 3.50626 14.9389 4.04249C15.2719 4.36853 15.7 4.54113 16.1123 4.74251C16.6816 5.02061 17.2221 5.34927 17.6614 5.81567C17.9029 6.07283 17.9927 6.30819 17.9953 6.62464L17.9945 6.62727Z",
                                fill: "white"
                              }
                            })
                          ]
                        ),
                        _c("span", [_vm._v("110 ")])
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "pox-2" }, [
                    _c("p", [
                      _vm._v(
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper pharetra ligula."
                      )
                    ]),
                    _vm._v(" "),
                    _c("h2", [_vm._v("What’s Included")]),
                    _vm._v(" "),
                    _c("div", { staticClass: "pox-box" }, [
                      _c("div", { staticClass: "yes" }, [
                        _c(
                          "svg",
                          {
                            attrs: {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "24",
                              height: "24",
                              viewBox: "0 0 24 24",
                              fill: "none"
                            }
                          },
                          [
                            _c("path", {
                              attrs: {
                                d:
                                  "M21 7.00009L9 19.0001L3.5 13.5001L4.91 12.0901L9 16.1701L19.59 5.59009L21 7.00009Z",
                                fill: "black"
                              }
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c("p", [_vm._v("Marketing")])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "yes" }, [
                        _c(
                          "svg",
                          {
                            attrs: {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "24",
                              height: "24",
                              viewBox: "0 0 24 24",
                              fill: "none"
                            }
                          },
                          [
                            _c("path", {
                              attrs: {
                                d:
                                  "M21 7.00009L9 19.0001L3.5 13.5001L4.91 12.0901L9 16.1701L19.59 5.59009L21 7.00009Z",
                                fill: "black"
                              }
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c("p", [_vm._v("Marketing")])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "yes" }, [
                        _c(
                          "svg",
                          {
                            attrs: {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "24",
                              height: "24",
                              viewBox: "0 0 24 24",
                              fill: "none"
                            }
                          },
                          [
                            _c("path", {
                              attrs: {
                                d:
                                  "M21 7.00009L9 19.0001L3.5 13.5001L4.91 12.0901L9 16.1701L19.59 5.59009L21 7.00009Z",
                                fill: "black"
                              }
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c("p", [_vm._v("Marketing")])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "yes" }, [
                        _c(
                          "svg",
                          {
                            attrs: {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "24",
                              height: "24",
                              viewBox: "0 0 24 24",
                              fill: "none"
                            }
                          },
                          [
                            _c("path", {
                              attrs: {
                                d:
                                  "M21 7.00009L9 19.0001L3.5 13.5001L4.91 12.0901L9 16.1701L19.59 5.59009L21 7.00009Z",
                                fill: "black"
                              }
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c("p", [_vm._v("Marketing")])
                      ])
                    ]),
                    _vm._v(" "),
                    _vm._m(1)
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "cards" }, [
                  _c("div", { staticClass: "pox-1" }, [
                    _c("h2", [_vm._v("Premium One")]),
                    _vm._v(" "),
                    _c("div", { staticClass: "top-btn" }, [
                      _c("button", [
                        _c(
                          "svg",
                          {
                            attrs: {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "22",
                              height: "22",
                              viewBox: "0 0 22 22",
                              fill: "none"
                            }
                          },
                          [
                            _c("path", {
                              attrs: {
                                d:
                                  "M12.0583 3.23158C12.0757 4.21754 12.1263 5.10849 11.9737 5.99333C11.958 6.08661 12.0095 6.1947 12.0391 6.29322C12.1856 6.77878 12.2056 7.2661 12.0792 7.76039C11.9694 8.19017 12.0635 8.62867 12.0313 9.06369C11.9816 9.73494 12.1629 10.4027 12.1289 11.0696C12.101 11.6127 12.1097 12.1619 12.0252 12.7016C11.9824 12.9753 11.9676 13.2342 12.0382 13.514C12.1141 13.8183 11.9319 14.1199 11.9319 14.4355C11.9319 14.7825 11.8447 15.1242 11.7453 15.4572C11.6346 15.8303 11.2964 15.9245 11.0218 15.6525C10.6024 15.2375 10.4185 14.6953 10.3365 14.1339C10.2685 13.6692 10.2293 13.195 10.2049 12.7268C10.1796 12.2317 10.0088 11.733 10.1744 11.2309C10.2032 11.1446 10.2093 11.0374 10.1857 10.9502C10.0253 10.3661 10.1334 9.75848 10.0184 9.17004C9.98262 8.98872 9.99481 8.78995 10.0236 8.60513C10.0637 8.34883 10.0567 8.103 9.97651 7.85891C9.87365 7.54682 10.0044 7.23647 9.99831 6.92351C9.99221 6.60706 9.98088 6.29323 9.90503 5.99333C9.78473 5.5217 9.85185 5.0527 9.90067 4.59327C9.94425 4.17831 9.90764 3.77817 9.89719 3.36931C9.88672 2.98312 9.85359 2.5795 9.92071 2.19941C9.99743 1.76788 10.3915 1.58045 10.7515 1.42266C11.0741 1.28143 11.3121 1.4802 11.5439 1.69727C11.8866 2.01719 12.0696 2.38595 12.0374 2.86108C12.0269 3.01625 12.0557 3.17405 12.0592 3.2342L12.0583 3.23158Z",
                                fill: "#1C1D1E"
                              }
                            }),
                            _vm._v(" "),
                            _c("path", {
                              attrs: {
                                d:
                                  "M4.00555 15.3727C4.00118 14.8253 4.49024 14.4051 5.05865 14.4966C5.43437 14.5568 5.7857 14.6945 6.09082 14.9386C6.32532 15.126 6.56156 15.3161 6.81786 15.4704C7.71491 16.0082 8.57273 16.5976 9.34685 17.3037C9.41485 17.3656 9.50291 17.4161 9.59008 17.4467C10.1123 17.6289 10.5089 17.9941 10.9099 18.3507C11.154 18.5678 11.3354 18.5869 11.5515 18.3394C11.8384 18.0116 12.1662 17.7553 12.5619 17.5731C12.8409 17.4441 13.0031 17.1721 13.2253 16.9733C13.5348 16.6969 13.9132 16.5191 14.2697 16.3247C14.764 16.0553 15.158 15.6656 15.6096 15.3492C16.0647 15.0301 16.5476 14.7625 17.0698 14.569C17.1875 14.5254 17.3131 14.4949 17.4377 14.4827C17.6731 14.4609 17.8195 14.6038 17.9337 14.7878C18.0418 14.9613 17.9965 15.1173 17.8823 15.2707C17.6565 15.5741 17.4639 15.8958 17.1466 16.1312C16.742 16.4319 16.4744 16.8905 16.0281 17.1511C15.6367 17.8381 14.9323 18.1685 14.3473 18.6375C14.0038 18.913 13.7066 19.2494 13.4049 19.5728C13.1617 19.8335 12.8958 20.0462 12.5462 20.1404C12.3431 20.1953 12.1792 20.3174 12.0057 20.4307C11.5917 20.7009 11.1697 20.6835 10.7565 20.4186C10.1463 20.0271 9.49244 19.7028 8.91534 19.259C8.31643 18.7988 7.60856 18.4937 7.06109 17.9575C6.72808 17.6315 6.30004 17.4589 5.8877 17.2575C5.31843 16.9794 4.77793 16.6507 4.33857 16.1843C4.09709 15.9272 4.00729 15.6918 4.00469 15.3754L4.00555 15.3727Z",
                                fill: "#1C1D1E"
                              }
                            })
                          ]
                        ),
                        _c("span", [_vm._v("110 ")])
                      ]),
                      _vm._v(" "),
                      _c("button", { staticClass: "llo" }, [
                        _c(
                          "svg",
                          {
                            attrs: {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "22",
                              height: "22",
                              viewBox: "0 0 22 22",
                              fill: "none"
                            }
                          },
                          [
                            _c("path", {
                              attrs: {
                                d:
                                  "M9.94172 18.7684C9.92428 17.7825 9.87372 16.8915 10.0263 16.0067C10.042 15.9134 9.99054 15.8053 9.96089 15.7068C9.81443 15.2212 9.79439 14.7339 9.9208 14.2396C10.0306 13.8098 9.93647 13.3713 9.96874 12.9363C10.0184 12.2651 9.83711 11.5973 9.8711 10.9304C9.899 10.3873 9.89027 9.83805 9.97485 9.29843C10.0176 9.0247 10.0324 8.76579 9.96177 8.48595C9.88593 8.18171 10.0681 7.88007 10.0681 7.5645C10.0681 7.21752 10.1553 6.87579 10.2547 6.54278C10.3654 6.16966 10.7036 6.07552 10.9782 6.3475C11.3976 6.76247 11.5815 7.3047 11.6635 7.86612C11.7315 8.33078 11.7707 8.80501 11.7951 9.27315C11.8204 9.76832 11.9912 10.267 11.8256 10.7691C11.7968 10.8554 11.7907 10.9626 11.8143 11.0498C11.9747 11.6339 11.8666 12.2415 11.9816 12.83C12.0174 13.0113 12.0052 13.2101 11.9764 13.3949C11.9363 13.6512 11.9433 13.897 12.0235 14.1411C12.1264 14.4532 11.9956 14.7635 12.0017 15.0765C12.0078 15.3929 12.0191 15.7068 12.095 16.0067C12.2153 16.4783 12.1482 16.9473 12.0993 17.4067C12.0558 17.8217 12.0924 18.2218 12.1028 18.6307C12.1133 19.0169 12.1464 19.4205 12.0793 19.8006C12.0026 20.2321 11.6085 20.4196 11.2485 20.5773C10.9259 20.7186 10.6879 20.5198 10.4561 20.3027C10.1134 19.9828 9.93037 19.614 9.96264 19.1389C9.97309 18.9837 9.94432 18.826 9.94084 18.7658L9.94172 18.7684Z",
                                fill: "white"
                              }
                            }),
                            _vm._v(" "),
                            _c("path", {
                              attrs: {
                                d:
                                  "M17.9945 6.62727C17.9988 7.17474 17.5098 7.59494 16.9413 7.5034C16.5656 7.44325 16.2143 7.30551 15.9092 7.0614C15.6747 6.87398 15.4384 6.68393 15.1821 6.52962C14.2851 5.99176 13.4273 5.40243 12.6531 4.69631C12.5851 4.63441 12.4971 4.58385 12.4099 4.55333C11.8877 4.37113 11.4911 4.00586 11.0901 3.64926C10.846 3.43219 10.6646 3.41312 10.4485 3.66062C10.1616 3.98842 9.83385 4.24474 9.43807 4.42694C9.1591 4.55595 8.99695 4.82794 8.77466 5.02671C8.46517 5.30305 8.08683 5.48088 7.73028 5.67529C7.23599 5.94468 6.84196 6.33436 6.39037 6.65081C5.93532 6.96988 5.45236 7.23751 4.93017 7.43104C4.81247 7.47461 4.68695 7.50514 4.56228 7.51733C4.32692 7.53913 4.18045 7.39617 4.06625 7.21221C3.95816 7.03874 4.00348 6.88271 4.11768 6.72927C4.34347 6.42589 4.53614 6.10422 4.85345 5.86884C5.25796 5.56808 5.52559 5.10952 5.97193 4.84886C6.36335 4.16191 7.06773 3.83152 7.65269 3.36252C7.99617 3.08697 8.29344 2.75055 8.59508 2.42715C8.83829 2.16645 9.10418 1.95379 9.45376 1.85955C9.65687 1.80474 9.82077 1.68264 9.99426 1.56934C10.4083 1.2991 10.8303 1.31652 11.2435 1.58144C11.8537 1.97285 12.5076 2.29717 13.0847 2.74102C13.6836 3.20119 14.3914 3.50626 14.9389 4.04249C15.2719 4.36853 15.7 4.54113 16.1123 4.74251C16.6816 5.02061 17.2221 5.34927 17.6614 5.81567C17.9029 6.07283 17.9927 6.30819 17.9953 6.62464L17.9945 6.62727Z",
                                fill: "white"
                              }
                            })
                          ]
                        ),
                        _c("span", [_vm._v("110 ")])
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "pox-2" }, [
                    _c("p", [
                      _vm._v(
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper pharetra ligula."
                      )
                    ]),
                    _vm._v(" "),
                    _c("h2", [_vm._v("What’s Included")]),
                    _vm._v(" "),
                    _c("div", { staticClass: "pox-box" }, [
                      _c("div", { staticClass: "yes" }, [
                        _c(
                          "svg",
                          {
                            attrs: {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "24",
                              height: "24",
                              viewBox: "0 0 24 24",
                              fill: "none"
                            }
                          },
                          [
                            _c("path", {
                              attrs: {
                                d:
                                  "M21 7.00009L9 19.0001L3.5 13.5001L4.91 12.0901L9 16.1701L19.59 5.59009L21 7.00009Z",
                                fill: "black"
                              }
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c("p", [_vm._v("Marketing")])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "yes" }, [
                        _c(
                          "svg",
                          {
                            attrs: {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "24",
                              height: "24",
                              viewBox: "0 0 24 24",
                              fill: "none"
                            }
                          },
                          [
                            _c("path", {
                              attrs: {
                                d:
                                  "M21 7.00009L9 19.0001L3.5 13.5001L4.91 12.0901L9 16.1701L19.59 5.59009L21 7.00009Z",
                                fill: "black"
                              }
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c("p", [_vm._v("Marketing")])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "yes" }, [
                        _c(
                          "svg",
                          {
                            attrs: {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "24",
                              height: "24",
                              viewBox: "0 0 24 24",
                              fill: "none"
                            }
                          },
                          [
                            _c("path", {
                              attrs: {
                                d:
                                  "M21 7.00009L9 19.0001L3.5 13.5001L4.91 12.0901L9 16.1701L19.59 5.59009L21 7.00009Z",
                                fill: "black"
                              }
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c("p", [_vm._v("Marketing")])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "yes" }, [
                        _c(
                          "svg",
                          {
                            attrs: {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "24",
                              height: "24",
                              viewBox: "0 0 24 24",
                              fill: "none"
                            }
                          },
                          [
                            _c("path", {
                              attrs: {
                                d:
                                  "M21 7.00009L9 19.0001L3.5 13.5001L4.91 12.0901L9 16.1701L19.59 5.59009L21 7.00009Z",
                                fill: "black"
                              }
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c("p", [_vm._v("Marketing")])
                      ])
                    ]),
                    _vm._v(" "),
                    _vm._m(2)
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "btn-box" }, [
                _c("div", { staticClass: "btn-1" }, [
                  _c("button", [
                    _c("span", [_vm._v("View Report")]),
                    _c(
                      "svg",
                      {
                        attrs: {
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "13",
                          height: "13",
                          viewBox: "0 0 13 13",
                          fill: "none"
                        }
                      },
                      [
                        _c("path", {
                          attrs: {
                            d:
                              "M2.51279 5.45272C3.05059 5.44321 3.53656 5.41563 4.0192 5.49884C4.07008 5.5074 4.12904 5.47935 4.18278 5.46318C4.44763 5.38329 4.71344 5.37236 4.98305 5.44131C5.21748 5.50122 5.45666 5.44986 5.69394 5.46746C6.06008 5.49456 6.42432 5.39566 6.78809 5.4142C7.08433 5.42942 7.3839 5.42466 7.67824 5.47079C7.82755 5.49409 7.96877 5.50217 8.12141 5.46366C8.28736 5.42229 8.45189 5.52167 8.62402 5.52167C8.81328 5.52167 8.99968 5.56922 9.18132 5.62343C9.38484 5.68382 9.43619 5.86831 9.28784 6.0181C9.06149 6.24682 8.76573 6.34715 8.4595 6.39185C8.20605 6.42894 7.94738 6.45033 7.69203 6.46365C7.42194 6.47744 7.14995 6.57064 6.87605 6.48029C6.82898 6.4646 6.77049 6.46127 6.72294 6.47411C6.40435 6.56161 6.07292 6.50264 5.75195 6.56541C5.65305 6.5849 5.54463 6.57825 5.44382 6.56256C5.30402 6.54068 5.16993 6.54449 5.03679 6.58823C4.86656 6.64434 4.69728 6.57302 4.52657 6.57634C4.35396 6.57967 4.18278 6.58585 4.0192 6.62722C3.76195 6.69284 3.50613 6.65623 3.25553 6.6296C3.02919 6.60583 2.81093 6.6258 2.58792 6.6315C2.37727 6.63721 2.15711 6.65528 1.94979 6.61867C1.71441 6.57682 1.61217 6.36189 1.52611 6.1655C1.44907 5.98957 1.55749 5.85975 1.67589 5.73327C1.8504 5.54639 2.05154 5.44653 2.3107 5.46413C2.39534 5.46983 2.48141 5.45414 2.51422 5.45224L2.51279 5.45272Z",
                            fill: "white"
                          }
                        }),
                        _vm._v(" "),
                        _c("path", {
                          attrs: {
                            d:
                              "M9.13513 9.8451C8.83651 9.84748 8.60731 9.58072 8.65724 9.27068C8.69005 9.06574 8.76518 8.87411 8.89833 8.70768C9.00056 8.57977 9.10422 8.45091 9.18839 8.31111C9.48177 7.82181 9.80322 7.35391 10.1884 6.93166C10.2221 6.89457 10.2497 6.84654 10.2664 6.79899C10.3657 6.51416 10.565 6.2978 10.7595 6.07907C10.8779 5.94593 10.8883 5.84702 10.7533 5.7291C10.5745 5.57265 10.4347 5.39386 10.3353 5.17798C10.2649 5.02582 10.1166 4.93737 10.0082 4.81612C9.85743 4.64731 9.76043 4.44094 9.65439 4.24646C9.50745 3.97685 9.2949 3.76192 9.12229 3.5156C8.94825 3.26739 8.80227 3.00396 8.69671 2.71913C8.67294 2.65493 8.65629 2.58646 8.64964 2.51846C8.63775 2.39008 8.71573 2.31019 8.81607 2.2479C8.91069 2.18894 8.9958 2.21366 9.07949 2.27595C9.24497 2.39911 9.42043 2.5042 9.54882 2.67728C9.71287 2.89792 9.96299 3.0439 10.1052 3.28736C10.4799 3.50086 10.6601 3.88507 10.9159 4.20414C11.0662 4.39149 11.2497 4.55364 11.4261 4.71817C11.5683 4.85083 11.6843 4.99586 11.7357 5.18654C11.7656 5.29733 11.8322 5.38673 11.894 5.48136C12.0414 5.70722 12.0319 5.93737 11.8874 6.16276C11.6739 6.49562 11.497 6.85225 11.2549 7.16703C11.0039 7.49371 10.8375 7.87982 10.545 8.17844C10.3672 8.36008 10.273 8.59356 10.1632 8.81847C10.0115 9.12898 9.83222 9.4238 9.57782 9.66345C9.43755 9.79517 9.30917 9.84415 9.13656 9.84557L9.13513 9.8451Z",
                            fill: "white"
                          }
                        })
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("button", { staticClass: "Add" }, [
                    _c("span", [_vm._v("Add New")]),
                    _c(
                      "svg",
                      {
                        attrs: {
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "13",
                          height: "13",
                          viewBox: "0 0 13 13",
                          fill: "none"
                        }
                      },
                      [
                        _c("path", {
                          attrs: {
                            d:
                              "M2.51279 5.45272C3.05059 5.44321 3.53656 5.41563 4.0192 5.49884C4.07008 5.5074 4.12904 5.47935 4.18278 5.46318C4.44763 5.38329 4.71344 5.37236 4.98305 5.44131C5.21748 5.50122 5.45666 5.44986 5.69394 5.46746C6.06008 5.49456 6.42432 5.39566 6.78809 5.4142C7.08433 5.42942 7.3839 5.42466 7.67824 5.47079C7.82755 5.49409 7.96877 5.50217 8.12141 5.46366C8.28736 5.42229 8.45189 5.52167 8.62402 5.52167C8.81328 5.52167 8.99968 5.56922 9.18132 5.62343C9.38484 5.68382 9.43619 5.86831 9.28784 6.0181C9.06149 6.24682 8.76573 6.34715 8.4595 6.39185C8.20605 6.42894 7.94738 6.45033 7.69203 6.46365C7.42194 6.47744 7.14995 6.57064 6.87605 6.48029C6.82898 6.4646 6.77049 6.46127 6.72294 6.47411C6.40435 6.56161 6.07292 6.50264 5.75195 6.56541C5.65305 6.5849 5.54463 6.57825 5.44382 6.56256C5.30402 6.54068 5.16993 6.54449 5.03679 6.58823C4.86656 6.64434 4.69728 6.57302 4.52657 6.57634C4.35396 6.57967 4.18278 6.58585 4.0192 6.62722C3.76195 6.69284 3.50613 6.65623 3.25553 6.6296C3.02919 6.60583 2.81093 6.6258 2.58792 6.6315C2.37727 6.63721 2.15711 6.65528 1.94979 6.61867C1.71441 6.57682 1.61217 6.36189 1.52611 6.1655C1.44907 5.98957 1.55749 5.85975 1.67589 5.73327C1.8504 5.54639 2.05154 5.44653 2.3107 5.46413C2.39534 5.46983 2.48141 5.45414 2.51422 5.45224L2.51279 5.45272Z",
                            fill: "#1C1D1E"
                          }
                        }),
                        _vm._v(" "),
                        _c("path", {
                          attrs: {
                            d:
                              "M9.13513 9.8451C8.83651 9.84748 8.60731 9.58072 8.65724 9.27068C8.69005 9.06574 8.76518 8.87411 8.89833 8.70768C9.00056 8.57977 9.10422 8.45091 9.18839 8.31111C9.48177 7.82181 9.80322 7.35391 10.1884 6.93166C10.2221 6.89457 10.2497 6.84654 10.2664 6.79899C10.3657 6.51416 10.565 6.2978 10.7595 6.07907C10.8779 5.94593 10.8883 5.84702 10.7533 5.7291C10.5745 5.57265 10.4347 5.39386 10.3353 5.17798C10.2649 5.02582 10.1166 4.93737 10.0082 4.81612C9.85743 4.64731 9.76043 4.44094 9.65439 4.24646C9.50745 3.97685 9.2949 3.76192 9.12229 3.5156C8.94825 3.26739 8.80227 3.00396 8.69671 2.71913C8.67294 2.65493 8.65629 2.58646 8.64964 2.51846C8.63775 2.39008 8.71573 2.31019 8.81607 2.2479C8.91069 2.18894 8.9958 2.21366 9.07949 2.27595C9.24497 2.39911 9.42043 2.5042 9.54882 2.67728C9.71287 2.89792 9.96299 3.0439 10.1052 3.28736C10.4799 3.50086 10.6601 3.88507 10.9159 4.20414C11.0662 4.39149 11.2497 4.55364 11.4261 4.71817C11.5683 4.85083 11.6843 4.99586 11.7357 5.18654C11.7656 5.29733 11.8322 5.38673 11.894 5.48136C12.0414 5.70722 12.0319 5.93737 11.8874 6.16276C11.6739 6.49562 11.497 6.85225 11.2549 7.16703C11.0039 7.49371 10.8375 7.87982 10.545 8.17844C10.3672 8.36008 10.273 8.59356 10.1632 8.81847C10.0115 9.12898 9.83222 9.4238 9.57782 9.66345C9.43755 9.79517 9.30917 9.84415 9.13656 9.84557L9.13513 9.8451Z",
                            fill: "#1C1D1E"
                          }
                        })
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "btn-2" }, [
                  _c("div", { staticClass: "Campaign" }, [
                    _c(
                      "svg",
                      {
                        attrs: {
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "40",
                          height: "40",
                          viewBox: "0 0 40 40",
                          fill: "none"
                        }
                      },
                      [
                        _c(
                          "g",
                          { attrs: { "clip-path": "url(#clip0_375_2459)" } },
                          [
                            _c("path", {
                              attrs: {
                                d:
                                  "M40 20C40 8.95437 31.0456 0 20 0C8.95437 0 0 8.95437 0 20C0 29.9825 7.31375 38.2567 16.875 39.757V25.7812H11.7969V20H16.875V15.5937C16.875 10.5812 19.8609 7.8125 24.4294 7.8125C26.6175 7.8125 28.9062 8.20312 28.9062 8.20312V13.125H26.3844C23.8998 13.125 23.125 14.6667 23.125 16.2484V20H28.6719L27.7852 25.7812H23.125V39.757C32.6862 38.2567 40 29.9827 40 20Z",
                                fill: "#1877F2"
                              }
                            }),
                            _vm._v(" "),
                            _c("path", {
                              attrs: {
                                d:
                                  "M27.7852 25.7812L28.6719 20H23.125V16.2484C23.125 14.6666 23.8998 13.125 26.3844 13.125H28.9062V8.20312C28.9062 8.20312 26.6175 7.8125 24.4292 7.8125C19.8609 7.8125 16.875 10.5813 16.875 15.5938V20H11.7969V25.7812H16.875V39.757C17.9088 39.919 18.9536 40.0003 20 40C21.0464 40.0003 22.0912 39.9191 23.125 39.757V25.7812H27.7852Z",
                                fill: "white"
                              }
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c("defs", [
                          _c("clipPath", { attrs: { id: "clip0_375_2459" } }, [
                            _c("rect", {
                              attrs: {
                                width: "40",
                                height: "40",
                                fill: "white"
                              }
                            })
                          ])
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _vm._m(3)
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "Campaign" }, [
                    _c(
                      "svg",
                      {
                        attrs: {
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "40",
                          height: "40",
                          viewBox: "0 0 40 40",
                          fill: "none"
                        }
                      },
                      [
                        _c("path", {
                          attrs: {
                            d:
                              "M30.625 0H9.375C4.19733 0 0 4.19733 0 9.375V30.625C0 35.8027 4.19733 40 9.375 40H30.625C35.8027 40 40 35.8027 40 30.625V9.375C40 4.19733 35.8027 0 30.625 0Z",
                            fill: "url(#paint0_radial_375_2467)"
                          }
                        }),
                        _vm._v(" "),
                        _c("path", {
                          attrs: {
                            d:
                              "M30.625 0H9.375C4.19733 0 0 4.19733 0 9.375V30.625C0 35.8027 4.19733 40 9.375 40H30.625C35.8027 40 40 35.8027 40 30.625V9.375C40 4.19733 35.8027 0 30.625 0Z",
                            fill: "url(#paint1_radial_375_2467)"
                          }
                        }),
                        _vm._v(" "),
                        _c("path", {
                          attrs: {
                            d:
                              "M20.0014 4.375C15.758 4.375 15.2253 4.39359 13.5588 4.46938C11.8953 4.54563 10.7598 4.80891 9.76641 5.19531C8.73859 5.59438 7.86688 6.12828 6.99844 6.99703C6.12922 7.86562 5.59531 8.73734 5.195 9.76469C4.8075 10.7584 4.54391 11.8944 4.46906 13.557C4.39453 15.2238 4.375 15.7566 4.375 20.0002C4.375 24.2438 4.39375 24.7747 4.46938 26.4412C4.54594 28.1047 4.80922 29.2402 5.19531 30.2336C5.59469 31.2614 6.12859 32.1331 6.99734 33.0016C7.86563 33.8708 8.73734 34.4059 9.76438 34.805C10.7586 35.1914 11.8942 35.4547 13.5573 35.5309C15.2241 35.6067 15.7563 35.6253 19.9995 35.6253C24.2434 35.6253 24.7744 35.6067 26.4409 35.5309C28.1044 35.4547 29.2411 35.1914 30.2353 34.805C31.2627 34.4059 32.1331 33.8708 33.0012 33.0016C33.8705 32.1331 34.4042 31.2614 34.8047 30.2341C35.1887 29.2402 35.4525 28.1044 35.5306 26.4416C35.6055 24.775 35.625 24.2438 35.625 20.0002C35.625 15.7566 35.6055 15.2241 35.5306 13.5573C35.4525 11.8939 35.1887 10.7586 34.8047 9.76516C34.4042 8.73734 33.8705 7.86562 33.0012 6.99703C32.1322 6.12797 31.263 5.59406 30.2344 5.19547C29.2383 4.80891 28.1022 4.54547 26.4387 4.46938C24.772 4.39359 24.2414 4.375 19.9966 4.375H20.0014ZM18.5997 7.19078C19.0158 7.19016 19.48 7.19078 20.0014 7.19078C24.1734 7.19078 24.6678 7.20578 26.3153 7.28063C27.8387 7.35031 28.6656 7.60484 29.2164 7.81875C29.9456 8.10188 30.4655 8.44047 31.012 8.9875C31.5589 9.53438 31.8973 10.0552 32.1813 10.7844C32.3952 11.3344 32.65 12.1613 32.7194 13.6847C32.7942 15.3319 32.8105 15.8266 32.8105 19.9966C32.8105 24.1666 32.7942 24.6614 32.7194 26.3084C32.6497 27.8319 32.3952 28.6587 32.1813 29.2089C31.8981 29.9381 31.5589 30.4573 31.012 31.0039C30.4652 31.5508 29.9459 31.8892 29.2164 32.1725C28.6663 32.3873 27.8387 32.6413 26.3153 32.7109C24.6681 32.7858 24.1734 32.802 20.0014 32.802C15.8292 32.802 15.3347 32.7858 13.6877 32.7109C12.1642 32.6406 11.3373 32.3861 10.7861 32.1722C10.057 31.8889 9.53609 31.5505 8.98922 31.0036C8.44234 30.4567 8.10391 29.9372 7.82 29.2077C7.60609 28.6575 7.35125 27.8306 7.28188 26.3072C7.20703 24.66 7.19203 24.1653 7.19203 19.9927C7.19203 15.8202 7.20703 15.328 7.28188 13.6808C7.35156 12.1573 7.60609 11.3305 7.82 10.7797C8.10328 10.0505 8.44234 9.52969 8.98938 8.98281C9.53625 8.43594 10.057 8.09734 10.7862 7.81359C11.337 7.59875 12.1642 7.34484 13.6877 7.27484C15.1291 7.20969 15.6877 7.19016 18.5997 7.18687V7.19078ZM28.342 9.78516C27.3069 9.78516 26.467 10.6242 26.467 11.6595C26.467 12.6947 27.3069 13.5345 28.342 13.5345C29.3772 13.5345 30.217 12.6947 30.217 11.6595C30.217 10.6244 29.3772 9.78453 28.342 9.78453V9.78516ZM20.0014 11.9759C15.5702 11.9759 11.9773 15.5688 11.9773 20.0002C11.9773 24.4316 15.5702 28.0227 20.0014 28.0227C24.4328 28.0227 28.0244 24.4316 28.0244 20.0002C28.0244 15.5689 24.4325 11.9759 20.0011 11.9759H20.0014ZM20.0014 14.7917C22.8778 14.7917 25.2098 17.1234 25.2098 20.0002C25.2098 22.8766 22.8778 25.2086 20.0014 25.2086C17.1248 25.2086 14.7931 22.8766 14.7931 20.0002C14.7931 17.1234 17.1248 14.7917 20.0014 14.7917Z",
                            fill: "white"
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "defs",
                          [
                            _c(
                              "radialGradient",
                              {
                                attrs: {
                                  id: "paint0_radial_375_2467",
                                  cx: "0",
                                  cy: "0",
                                  r: "1",
                                  gradientUnits: "userSpaceOnUse",
                                  gradientTransform:
                                    "translate(10.625 43.0808) rotate(-90) scale(39.643 36.8711)"
                                }
                              },
                              [
                                _c("stop", {
                                  attrs: { "stop-color": "#FFDD55" }
                                }),
                                _vm._v(" "),
                                _c("stop", {
                                  attrs: {
                                    offset: "0.1",
                                    "stop-color": "#FFDD55"
                                  }
                                }),
                                _vm._v(" "),
                                _c("stop", {
                                  attrs: {
                                    offset: "0.5",
                                    "stop-color": "#FF543E"
                                  }
                                }),
                                _vm._v(" "),
                                _c("stop", {
                                  attrs: {
                                    offset: "1",
                                    "stop-color": "#C837AB"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "radialGradient",
                              {
                                attrs: {
                                  id: "paint1_radial_375_2467",
                                  cx: "0",
                                  cy: "0",
                                  r: "1",
                                  gradientUnits: "userSpaceOnUse",
                                  gradientTransform:
                                    "translate(-6.70016 2.88141) rotate(78.681) scale(17.7206 73.045)"
                                }
                              },
                              [
                                _c("stop", {
                                  attrs: { "stop-color": "#3771C8" }
                                }),
                                _vm._v(" "),
                                _c("stop", {
                                  attrs: {
                                    offset: "0.128",
                                    "stop-color": "#3771C8"
                                  }
                                }),
                                _vm._v(" "),
                                _c("stop", {
                                  attrs: {
                                    offset: "1",
                                    "stop-color": "#6600FF",
                                    "stop-opacity": "0"
                                  }
                                })
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _vm._m(4)
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "OverView" }, [
              _c("h2", [_vm._v("OverView")]),
              _vm._v(" "),
              _vm._m(5),
              _vm._v(" "),
              _c("div", { staticClass: "over-btn" }, [
                _c("button", [
                  _c("span", [_vm._v("Browse Other Sponsorships")]),
                  _c(
                    "svg",
                    {
                      attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "13",
                        height: "13",
                        viewBox: "0 0 13 13",
                        fill: "none"
                      }
                    },
                    [
                      _c("path", {
                        attrs: {
                          d:
                            "M2.51279 5.45272C3.05059 5.44321 3.53656 5.41563 4.0192 5.49884C4.07008 5.5074 4.12904 5.47935 4.18278 5.46318C4.44763 5.38329 4.71344 5.37236 4.98305 5.44131C5.21748 5.50122 5.45666 5.44986 5.69394 5.46746C6.06008 5.49456 6.42432 5.39566 6.78809 5.4142C7.08433 5.42942 7.3839 5.42466 7.67824 5.47079C7.82755 5.49409 7.96877 5.50217 8.12141 5.46366C8.28736 5.42229 8.45189 5.52167 8.62402 5.52167C8.81328 5.52167 8.99968 5.56922 9.18132 5.62343C9.38484 5.68382 9.43619 5.86831 9.28784 6.0181C9.06149 6.24682 8.76573 6.34715 8.4595 6.39185C8.20605 6.42894 7.94738 6.45033 7.69203 6.46365C7.42194 6.47744 7.14995 6.57064 6.87605 6.48029C6.82898 6.4646 6.77049 6.46127 6.72294 6.47411C6.40435 6.56161 6.07292 6.50264 5.75195 6.56541C5.65305 6.5849 5.54463 6.57825 5.44382 6.56256C5.30402 6.54068 5.16993 6.54449 5.03679 6.58823C4.86656 6.64434 4.69728 6.57302 4.52657 6.57634C4.35396 6.57967 4.18278 6.58585 4.0192 6.62722C3.76195 6.69284 3.50613 6.65623 3.25553 6.6296C3.02919 6.60583 2.81093 6.6258 2.58792 6.6315C2.37727 6.63721 2.15711 6.65528 1.94979 6.61867C1.71441 6.57682 1.61217 6.36189 1.52611 6.1655C1.44907 5.98957 1.55749 5.85975 1.67589 5.73327C1.8504 5.54639 2.05154 5.44653 2.3107 5.46413C2.39534 5.46983 2.48141 5.45414 2.51422 5.45224L2.51279 5.45272Z",
                          fill: "white"
                        }
                      }),
                      _vm._v(" "),
                      _c("path", {
                        attrs: {
                          d:
                            "M9.13513 9.8451C8.83651 9.84748 8.60731 9.58072 8.65724 9.27068C8.69005 9.06574 8.76518 8.87411 8.89833 8.70768C9.00056 8.57977 9.10422 8.45091 9.18839 8.31111C9.48177 7.82181 9.80322 7.35391 10.1884 6.93166C10.2221 6.89457 10.2497 6.84654 10.2664 6.79899C10.3657 6.51416 10.565 6.2978 10.7595 6.07907C10.8779 5.94593 10.8883 5.84702 10.7533 5.7291C10.5745 5.57265 10.4347 5.39386 10.3353 5.17798C10.2649 5.02582 10.1166 4.93737 10.0082 4.81612C9.85743 4.64731 9.76043 4.44094 9.65439 4.24646C9.50745 3.97685 9.2949 3.76192 9.12229 3.5156C8.94825 3.26739 8.80227 3.00396 8.69671 2.71913C8.67294 2.65493 8.65629 2.58646 8.64964 2.51846C8.63775 2.39008 8.71573 2.31019 8.81607 2.2479C8.91069 2.18894 8.9958 2.21366 9.07949 2.27595C9.24497 2.39911 9.42043 2.5042 9.54882 2.67728C9.71287 2.89792 9.96299 3.0439 10.1052 3.28736C10.4799 3.50086 10.6601 3.88507 10.9159 4.20414C11.0662 4.39149 11.2497 4.55364 11.4261 4.71817C11.5683 4.85083 11.6843 4.99586 11.7357 5.18654C11.7656 5.29733 11.8322 5.38673 11.894 5.48136C12.0414 5.70722 12.0319 5.93737 11.8874 6.16276C11.6739 6.49562 11.497 6.85225 11.2549 7.16703C11.0039 7.49371 10.8375 7.87982 10.545 8.17844C10.3672 8.36008 10.273 8.59356 10.1632 8.81847C10.0115 9.12898 9.83222 9.4238 9.57782 9.66345C9.43755 9.79517 9.30917 9.84415 9.13656 9.84557L9.13513 9.8451Z",
                          fill: "white"
                        }
                      })
                    ]
                  )
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("Profile")
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "pox-3" }, [
      _c("h2", [
        _vm._v("Active Duration"),
        _c("br"),
        _c("span", [_vm._v("04 Hours 20min")])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("Price: 12$/HRs")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "pox-3" }, [
      _c("h2", [
        _vm._v("Active Duration"),
        _c("br"),
        _c("span", [_vm._v("04 Hours 20min")])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("Price: 12$/HRs")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "pox-3" }, [
      _c("h2", [
        _vm._v("Active Duration"),
        _c("br"),
        _c("span", [_vm._v("04 Hours 20min")])
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("Price: 12$/HRs")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", [
      _c("h2", [_vm._v("Campaign Started")]),
      _vm._v(" "),
      _c("p", [_vm._v("25 March,2023")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", [
      _c("h2", [_vm._v("Campaign Started")]),
      _vm._v(" "),
      _c("p", [_vm._v("25 March,2023")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "over-box" }, [
      _c("div", { staticClass: "Over-card" }, [
        _c("h4", [_vm._v("Total Profit "), _c("span", [_vm._v(" 20.3k")])])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "Over-card" }, [
        _c("h4", [_vm._v("Total Profit "), _c("span", [_vm._v(" 20.3k")])])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "Over-card" }, [
        _c("h4", [_vm._v("Total Profit "), _c("span", [_vm._v(" 20.3k")])])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "Over-card" }, [
        _c("h4", [_vm._v("Total Profit "), _c("span", [_vm._v(" 20.3k")])])
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);
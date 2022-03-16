"use strict";

//Auto generated code by babel compiler used in order to get react to work without needing to be compiled from console command

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { 
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i); 
}

function _arrayLikeToArray(arr, len) {
     if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) {
     var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) {
     if (Array.isArray(arr)) return arr; 
    }

//auto generated code ends

function App() {
  var errorUseState = React.useState(""),
      errorUseState2 = _slicedToArray(errorUseState, 2),
      errorMessage = errorUseState2[0],
      setErrorMessage = errorUseState2[1];

  var inputUseState = React.useState({}),
      inputUseState2 = _slicedToArray(inputUseState, 2),
      inputs = inputUseState2[0],
      setInputs = inputUseState2[1];

  var provinces = ["ON", "BC", "NL", "PE", "NS", "NB", "QC", "MB", "SK", "AB", "YT", "NT", "NU", ""];

  var handleChange = function handleChange(event) {
    var name = event.target.name;
    var value = event.target.value;
    setInputs(function (values) {
      return _defineProperty({ ...values
      }, name, value);
    });
  };

  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();
    var errorText = "";
    setErrorMessage("");
    if (!provinces.includes(inputs.provinceCode) && inputs.provinceCode != undefined) {
      errorText += "ERROR: Province must be a valid Canadian province code \n";
    }

    if (inputs.firstName == undefined || inputs.firstName == "") {
      errorText += "ERROR: first name cannot be blank";
    }

    if (errorText != "") {
      setErrorMessage(errorText);
    } else {
      var name = inputs.firstName;
      alert("Nice to meet you " + name);
    }
  };

  return React.createElement("div", {
    className: "App"},
    React.createElement("header", {
    className: "App-header"}, 
    React.createElement("h1", null, "This is Morgan's Website"), React.createElement("form", {
    name: "inputForm",
    onSubmit: handleSubmit}, 
    React.createElement("h3", null, "Tell me about yourself!"), errorMessage && React.createElement("p", {
    style: {
      color: 'red'
    },
    id: "error"}, errorMessage), 
    React.createElement("label", 
    {
        for: "name"
    }, "*First Name: "), 
    React.createElement("input", 
    {
        type: "text",
        name: "firstName",
        id: "name",
        onChange: handleChange,
        value: inputs.firstName || "",
        tabIndex: "1"
    }), " ", React.createElement("br", null), 
    React.createElement("label", 
    {
        for: "province"
    }, "Province Code: "), 
    React.createElement("input", 
    {
        type: "text",
        name: "provinceCode",
        id: "province",
        onChange: handleChange,
        value: inputs.provinceCode || "",
        tabIndex: "2"
    }), " ", React.createElement("br", null), 
    React.createElement("input", 
    {
        type: "submit",
        value: "Submit",
        tabIndex: "3"
    })), 
    React.createElement("p", null, "* means required field"), React.createElement("a", 
    {
        tabIndex: "4",
        href: "https://www.google.ca/",
        target: "_empty"
    }, 
    React.createElement("img", 
    {
        width: "100px",
        height: "100px",
        src: "google-logo-9808.png",
        alt: "Google's Logo acts as a link to googles homepage"
    }))));
}

ReactDOM.render( React.createElement(App, null), document.getElementById('root'));
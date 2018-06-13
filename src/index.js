import _ from "lodash"
import $ from "jquery"
import t from "./test"

function component() {
  var element = $("<div></div>")

  element.html(_.join([
    "hello", "webpack"
  ], " "))

  console.log("hi jquery")

  return element
}

$("body").append(component())

if (module.hot) {
  module.hot.accept("./test.js", function() {
    console.log("accepting the updated module")
    t()
  })
}

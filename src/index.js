import _ from "lodash"
import $ from "jquery"
import t from "./test"

function component() {
  var element = $("<div></div>")

  element.html(_.join([
    "hello", "webpack"
  ], " "))

  console.log("hello jquery")
  console.log(t())

  return element
}

$("body").append(component())

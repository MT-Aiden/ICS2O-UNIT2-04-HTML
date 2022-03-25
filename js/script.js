// Created by: Aiden McLeod
// Created on: Mar 2022
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates area and perimeter of rectangle.
 */
function calculate () {
  // input
  const base = parseInt(document.getElementById('base').value)
  const height = parseInt(document.getElementById('height').value)

  // process
  const area = (base * height) / 2

  // output
  document.getElementById('area').innerHTML = 'Area is: ' + area + ' cm²'
}

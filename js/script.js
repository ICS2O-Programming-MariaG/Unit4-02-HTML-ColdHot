// Copyright (c) 2022 Maria Goemans All rights reserved
//
// Created by: Maria G
// Created on: April 28, 2022
// This file contains the JS functions for index.html

"use strict"

function tempSent() {
  //declaring original variables & constant
  let temperature = parseFloat(document.getElementById("temp-input").value);
  const TEMP_THRESHOLD = 15;
  let message = "";
  //setting different if/then scenarios
  if (temperature >= TEMP_THRESHOLD) {
    message = "It is relatively hot out! You probably won't need a jacket, but you might want to wear sunscreen or a baseball cap.";
  }
  //else represents a temperature of less than 15 degrees
  else {
    message = "It is pretty chilly out! We suggest you wear some kind of jacket to stay warm.";
  }
  //display the correct message to the screen
  document.getElementById("results").innerHTML = message;
}

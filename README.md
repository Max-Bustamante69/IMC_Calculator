# Simple IMC Calculator App

This Markdown file provides an overview of a simple IMC (Body Mass Index) calculator app developed using HTML, CSS, and Vanilla JavaScript.

## Overview

The IMC calculator app allows users to calculate their Body Mass Index (BMI) based on their gender, height, weight, and age inputs. The app provides a user interface with sliders and buttons for input and interaction.

## Features

1. **Gender Selection**: Users can select their gender by clicking on the corresponding buttons.

2. **Height Slider**: The height slider allows users to select their height in centimeters.

3. **Weight and Age Input**: Users can input their weight and age using buttons or manually.

4. **Calculate Button**: After providing the necessary inputs, users can click the "CALCULAR !" button to calculate their BMI.

5. **Result Dialog**: The app displays a dialog with the calculated BMI, a result description, and an option to recalculate.

## Implementation Details

The app is developed using HTML, CSS, and Vanilla JavaScript. Below are the code sections for the HTML structure, JavaScript functionality, and CSS styling.

### HTML Structure

```html
<!-- Paste the HTML code here -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>IMC Calculator</title>
    <link rel="stylesheet" href="style.css">
    <script defer src="./code.js"></script>



</head>
<body>

    

    <header >
        <h2>IMC Calculator</h2>
    </header>

  <div class="container">



    <section id="genre">

        <div id="btnMale" class="selected  component card hover btnGender">
            <img src="./assets/mars.svg" alt="male">
            <p class="text">HOMBRE</p>
        </div>
        
        <div id="btnFemale" class="component card hover btnGender" >
            <img src="./assets/venus.svg" alt="female">
            <p class="text">MUJER</p>
        </div>

    </section>

    <section id="height">

        <div class="component card">
            <p class="text" >ALTURA (cm)</p>
            <h2  id="heightVal"></h2>
            <input type="range" class="custom-slider" name="height" id="hSlide" step="1" min="20" max="250">
        </div>

    </section>

    <section id="pes_edad">

        <div id="peso" class="component card">
            <p class="text">PESO (kg)</p>
            <h2 class="min-max" contenteditable="true" id="weightVal"  min="0" max="594">0</h2>
            <button id="minusW" class="minus purple custom-button">-</button>
            <button id="plusW" class="plus purple custom-button">+</button>
        </div>
        <div id="edad" class="component card">
            <p class="text">EDAD</p>
            <h2 max="110" min="0" contenteditable="true" class="min-max" id="ageVal">0</h2>
            <button id="minusA"  class="minus purple  custom-button">-</button>
            <button id="plusA" class="plus purple  custom-button">+</button>
        </div>

    </section>

    <section id="resultado">
        <div id="btnCalcular" class="purple component card">
            <h2 class="purple text">CALCULAR !</h2>
        </div>
    </section>
    <dialog class="card">
        <header class="purple "><h2>Tu resultado</h2></header>
        <div >
            <h2 id="result"></h2>
            <h2 id="IMC"></h2>
            <h3 class="text" id="resultDescription"></h3>
        </div>
        <button id="closeDialog" class="card purple"><h2>Recalcular</h2></button>

    </dialog>

</div>

</body>
</html>

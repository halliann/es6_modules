console.log("Hello World");

// TODO
import { WishList } from './wishlist.js';

const form = document.getElementById('form-container');
const ul = document.getElementById('ul');

// car input
const carMakeInput = document.getElementById('car-make-input');
const carModelInput = document.getElementById('car-model-input');
const carYearInput = document.getElementById('car-year-input');

// car cards
const cardName = document.getElementById('card-name');
const carCardMake = document.getElementById('car-card-make');
const carCardModel = document.getElementById('car-card-model');
const carCardYear = document.getElementById('car-card-year');
const removeBtn = document.getElementById('removeBtn');

// create instance from WishList class
const wishlist = new WishList();

form.addEventListener('submit', addCar);
removeBtn.addEventListener('click', removeCar);

function updateDOMList() {
    ul.textContent = '';

    wishlist.list.forEach((car) => {
        let newLi = document.createElement('li');
        newLi.textContent = `${car.make} ${car.model}`;
        newLi.addEventListener('click', () => showCarDetails(car));
        ul.appendChild(newLi);
    });
};

function showCarDetails(car) {
    carCardMake.textContent = car.make;
    carCardModel.textContent = car.model;
    carCardYear.textContent = car.year;
    removeBtn.disabled = false;
    removeBtn.setAttribute('data-carId', car.id);
};


function addCar(event) {
    event.preventDefault();

    let make = carMakeInput.value;
    let model = carModelInput.value;
    let year = carYearInput.value;

    console.log(`Adding car: ${make}, ${model}, ${year}`);

    wishlist.add(make, model, year);

    updateDOMList();
};

function removeCar(){
    let carId = Number(removeBtn.getAttribute('data-carId'));
    wishlist.remove(carId);

    updateDOMList();

    carCardMake.textContent = "";
    carCardModel.textContent = "";
    carCardYear.textContent = "";
    removeBtn.disabled = true;
};
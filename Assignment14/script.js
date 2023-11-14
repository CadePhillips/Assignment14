const { response } = require("express");
const e = require ("express");

const addItem = async(e) => {
    e.preventDefault();

    const form = document.getElementById("form-name");
    const formData = new FormData(form);

    if(form.id.value == 1) {
        formData.delete("id");
        formData.delete("image");
    }
}

const getItem = () => {
    const inputs = document.querySelectorAll("#box input");
    let items = [];
    inputs.forEach((input)=> {
        items.push(input.value);
    });
    return items;
}

window.onload = () => {
    document.getElementById("add/edit-form").onsubmit = addItem;
}
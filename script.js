const input = document.querySelector("input");
const img = document.querySelector("img");
const button = document.querySelector("button");

button.addEventListener("click", () => { 
    const inputValue = input.value;
    if (inputValue === ""){
        alert('Please enter a Valid URL');}
        else{
            img.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
            img.alt= inputValue;
        }

});
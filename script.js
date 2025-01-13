let btn1 = document.querySelector("#myButton1");
let btn2 = document.querySelector("#myButton2");
let codebox = document.querySelector(".codebox");
let b1 = "#381585";
let b2 = "#82c222";
//! independent function to generate random color code
const hashCodes = () => {
  const hCodes = "0123456789abcdef";
  let colorCode = "#";
  for (let i = 0; i < 6; i++) {
    colorCode += hCodes[Math.floor(Math.random() * 16)];
  }
  return colorCode;
};
//* defining funtion for button events
let generteHashcode1 = () => {
  b1 = hashCodes();
  console.log(b1);
  btn1.innerHTML = b1;
  codebox.innerHTML = `linear-gradient(45deg, ${b1}, ${b2})`;
  document.body.style.backgroundImage = `linear-gradient(45deg, ${b1}, ${b2})`;
};
let generteHashcode2 = () => {
  b2 = hashCodes();
  console.log(b2);
  btn2.innerText = b2;
  codebox.innerHTML = `linear-gradient(45deg, ${b1}, ${b2})`;
  document.body.style.backgroundImage = `linear-gradient(45deg, ${b1},${b2})`;
};
// *addEventListener for buttons
btn1.addEventListener("click", generteHashcode1);
btn2.addEventListener("click", generteHashcode2);

// *addEventListener for copy colorcode
codebox.addEventListener("click", () => {
  navigator.clipboard.writeText(codebox.innerHTML);
  alert(`code copied ${codebox.innerHTML}`);
});

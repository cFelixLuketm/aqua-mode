
const variantDots = document.querySelectorAll("#variantDots");

variantDots.forEach(variantDot => {
  const variantText = variantDot.querySelector("#variantText");
  variantDot.addEventListener("mouseover", function(){
    variantText.classList.add('active');
  }, false)

  variantDot.addEventListener("mouseout", function(){
    variantText.classList.remove('active');
  }, false)
})





const safari = document.querySelector('input[value="Safari"]');
console.log(safari)

window.onload = function() {
  console.log("loaded")
  if(document.body.contains(safari)) {
    console.log("safaripresent")
    if (safari.checked) {
      console.log("safarichecked")
    } else {
      console.log("safari not checked")
    }
  }
}

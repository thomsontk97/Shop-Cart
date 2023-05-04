// myProducts.filter((item)=>item.title.includes(search.value))

// myCartProductArray = myProducts.filter((item)=> myCartIDs.includes(item.id))

function goToProfile() {
  document.getElementById("loader-container").style.display = "flex";

  setTimeout(() => {
    window.location.replace("./signup.html");
  }, 1000);
}

function login() {
  document.getElementById("loader-container").style.display = "flex";

  setTimeout(() => {
    window.location.replace("./login.html");
  }, 1000);
}

document.getElementById("signup").addEventListener("click", goToProfile);
document.getElementById("login").addEventListener("click", login);

document.getElementById("log-in").addEventListener("click", login);
document.getElementById("sign-up").addEventListener("click", goToProfile);

document.getElementById("cart").addEventListener("click", () => {
  alert("User not logged in");
});

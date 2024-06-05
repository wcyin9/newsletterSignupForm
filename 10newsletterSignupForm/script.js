const mainContainer = document.getElementById('container')

const userEmailE1 = document.getElementById("userEmail")
const invalidEmailE1 = document.getElementById("invalidEmail");
const emailInput = document.getElementById("email")
const submitBtnE1 = document.getElementById("submitBtn")

const successContainer = document.getElementById("successCont");
const dismissMsg = document.getElementById("dismissBtn")

function formSuccess () {
  successContainer.classList.add("subscribed")
  mainContainer.classList.add("subscribed")
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

submitBtnE1.addEventListener("click", (e) => {
  e.preventDefault()
  const email = emailInput.value.trim()

  if(validateEmail(email)) {
    formSuccess()
    userEmailE1.innerText = email
    emailInput.value=''

    invalidEmailE1.classList.remove("active")
    emailInput.classList.remove("active")
  } else {
    invalidEmailE1.classList.add("active")
    emailInput.classList.add("active")
    emailInput.classList.add("error");
  }
})

dismissMsg.addEventListener("click", () => {
  successContainer.classList.remove("subscribed")
  mainContainer.classList.remove("subscribed")
})

let passwordLength = 16
const inputEl = document.querySelector("#password")

function generatePassword() {
  const chars =
    "abcdefghjkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ123456789?!@&*()[]"

  let password = ""

  for (let i = 0; i < passwordLength; i++) {
    const randomNumber = Math.floor(Math.random() * chars.length)
    password += chars.substring(randomNumber, randomNumber + 1)
  }

  
  inputEl.value = password
}

const passwordLengthEl = document.querySelector("#password-length")
      passwordLengthEl.addEventListener("input", function () {
        passwordLength = passwordLengthEl.value
        generatePassword()
      })

function copy() {
  navigator.clipboard.writeText(inputEl.value)
}

document.querySelector('#copy').addEventListener("click", copy)
document.querySelector('#copy2').addEventListener("click", copy)

generatePassword()
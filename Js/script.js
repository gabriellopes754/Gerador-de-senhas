let passwordLength = 16
const inputEl = document.querySelector("#password")
const maisculasEl = document.querySelector("#maiusculas")
const numerosEl = document.querySelector("#numeros")
const simbolosEl = document.querySelector("#simbolos")

function generatePassword() {
  let chars ="abcdefghjkmnpqrstuvwxyz"

    const maisculaschars = "ABCDEFGHJKLMNPQRSTUVWXYZ"
    const numeroschars = "123456789"
    const simboloschars = "?!@&*()[]"


    if(maisculasEl.checked) {
      chars += maisculaschars
    }
    if(numerosEl.checked) {
      chars += numeroschars
    }
    if(simbolosEl.checked) {
      chars += simboloschars
    }

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
        document.querySelector('#comprsenha2').innerText = passwordLength
        generatePassword()
      })

      function copy() {
        navigator.clipboard.writeText(inputEl.value)
      }



maisculasEl.addEventListener("click" , generatePassword)
numerosEl.addEventListener("click", generatePassword)
simbolosEl.addEventListener("click", generatePassword)



document.querySelector('#copy').addEventListener("click", copy)
document.querySelector('#copy2').addEventListener("click", copy)
document.querySelector("#atualizar").addEventListener("click", generatePassword)


generatePassword()
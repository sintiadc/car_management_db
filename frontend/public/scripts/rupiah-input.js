const rupiahInputElement = document.querySelector("#rentPerDay");

const validateStringNum = (str) => {
    if (typeof str != "string") return false 
    return !isNaN(str) && // periksa nilai bkn angka(NaN), ! u/ ngubah hasil isNaN(str) jadi periksa str=angka
        !isNaN(parseFloat(str)) // ubah str jadi bil.desimal
}

let prevValue = ""
rupiahInputElement.addEventListener("change", () => {
    const inputVal = rupiahInputElement.value;
    if (inputVal == "") return
    if (validateStringNum(inputVal)) {
        prevValue = inputVal
        return
    } else {
        rupiahInputElement.value = prevValue;
    }
})
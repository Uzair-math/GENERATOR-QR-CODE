const qrText = document.getElementById('qr-text')
const sizes = document.getElementById('sizes')
const genbtn = document.getElementById('genbtn')
const downloadbtn = document.getElementById('downloadbtn')

const qrContainer = document.querySelector('.qr-body')
let size = sizes.value 
genbtn.addEventListener('click', (e)=>{
    e.preventDefault()
    isEmptyinput()
})

sizes.addEventListener("change", (e)=>{
    size = e.target.value;
    isEmptyinput()
})

downloadbtn.addEventListener('click', ()=>{
    let img = document.querySelector('.qr-body img')
    if (img !== null) {
            let imgAttr = img.getAttribute('src')
            downloadbtn.setAttribute("href", imgAttr)

    }else{
        downloadbtn.setAttribute("href", `${document.querySelector('canvas').toDataURL()}`)
    }
})

function isEmptyinput(){
    qrText.value.length > 0 ? generateQrCode() : alert("Enter the text or URL to generate your QR code")
}

function generateQrCode(){
    qrContainer.innerHTML = ""
    new QRCode(qrContainer, {
        text:qrText.value,
        height:size,
        width:size,
        colorLight:"#fff",
        colorDark:"#000"
    })
}

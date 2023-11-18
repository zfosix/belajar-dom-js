document.addEventListener('DOMContentLoaded', function () {
     const inputMaxLengthOnLoad = document.getElementById('inputNama').maxLength;
     document.getElementById('sisaKarakter').innerText = inputMaxLengthOnLoad;
});

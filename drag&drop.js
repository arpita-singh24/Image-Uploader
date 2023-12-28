const dropArea = document.getElementById("drop-area");
const imgView = document.getElementById("img-view");
const inputFile = document.getElementById("input-file");
inputFile.addEventListener("change", uploadImage);


function uploadImage(){
    
    let imgURL = URL.createObjectURL(inputFile.files[0]);
    imgView.style.backgroundImage = `url(${imgURL})`;
    imgView.textContent = "";
    imgView.style.border = 0;
    imgView.style.backgroundPosition = "center";
    imgView.style.backgroundSize = "cover";
}

dropArea.addEventListener("dragover", function(e){
    e.preventDefault();
});

dropArea.addEventListener("drop", function(e){
    e.preventDefault();
    // inputFile.files = e.dataTransfer.files;
    uploadImage();
});

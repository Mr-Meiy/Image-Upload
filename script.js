var white=false,blue=false;
var validate = () => {
    let fileUpload = document.getElementById("file");
    let imagename = document.getElementById("imagename");
    let dimensions = document.getElementById("dimension");
    let regex = new RegExp("([0-9\s_\\.\-:])+(.jpg|.jpeg)$");
    if (regex.test(fileUpload.value)) {
        imagename.classList.remove("bg-danger");
        imagename.classList.add("bg-success");
        let reader = new FileReader();
        reader.readAsDataURL(fileUpload.files[0]);
        reader.onload = (e) => {
            dimensions.innerText = "Dimensions";
            let image = new Image();
            image.src = e.target.result;
            image.onload = () => {
                let height = image.height;
                let width = image.width;
                dimensions.innerText = "Dimensions: " + width + " x " + height;
                if (width == 240 && height == 290) {
                    dimensions.classList.remove("bg-danger");
                    dimensions.classList.add("bg-success");
                    white=true;
                    redirect();
                    //location.replace("https://forms.gle/vTh1TLDGUZjoP6vx9");
                    return true;
                } else {
                    dimensions.classList.remove("bg-success");
                    dimensions.classList.add("bg-danger");
                    white=false;
                    return true;
                }
            };
        }
    } else {
        imagename.classList.add("bg-success");
        imagename.classList.add("bg-danger");
    }
}
var validatea = () => {
    let fileUpload = document.getElementById("filea");
    let imagename = document.getElementById("imagenamea");
    let dimensions = document.getElementById("dimensiona");
    let regex = new RegExp("([0-9\s_\\.\-:])+(.jpg|.jpeg)$");
    if (regex.test(fileUpload.value)) {
        imagename.classList.remove("bg-danger");
        imagename.classList.add("bg-success");
        let reader = new FileReader();
        reader.readAsDataURL(fileUpload.files[0]);
        reader.onload = (e) => {
            dimensions.innerText = "Dimensions";
            let image = new Image();
            image.src = e.target.result;
            image.onload = () => {
                let height = image.height;
                let width = image.width;
                dimensions.innerText = "Dimensions: " + width + " x " + height;
                if (width == 240 && height == 290) {
                    dimensions.classList.remove("bg-danger");
                    dimensions.classList.add("bg-success");
                    blue=true;
                    redirect();
                    //location.replace("https://forms.gle/vTh1TLDGUZjoP6vx9");
                    return true;
                } else {
                    dimensions.classList.remove("bg-success");
                    dimensions.classList.add("bg-danger");
                    blue=false;
                    return true;
                }
            };
        }
    } else {
        imagename.classList.add("bg-success");
        imagename.classList.add("bg-danger");
    }
}
var redirect=()=>{
    if(white=true && blue==true) {
        location.replace("https://forms.gle/vTh1TLDGUZjoP6vx9")
    }
}
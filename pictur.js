var fldr;
var image = document.getElementById("image");

window.randomfolder = function (f) {
    fldr = f[(Math.floor(Math.random() * f.length))]; // choose random folder
}

window.clickcount = function () {

    var count = 0;
    let btn = document.getElementById("bton");  // counting number of clicks
    btn.onclick = function () {
        count++;
        c.innerHTML = count;
    }
    return count;
}

window.drawImage = function () {

    const imageContainer = document.getElementById("image");

    const folder = ["excellence", "cabin", "keyboard", "connection"];  // display image
    randomfolder(folder);
    var imagesf = "C:/xampp/htdocs/pictionary/" + fldr + "/";

  /*  window.dispImage = function () {
        for (var i = 0; i < imageNames.length; i++) {
            if (i + 1 == count) {
                image.innerHTML = imageNames[i];
                const imageElement = document.createElement("img");
                imageElement.src = imagesf + imageNames[i];
                imageContainer.appendChild(imageElement);
            }
        }
        if (count > imageNames.length) {
            document.getElementById("clue").innerHTML = "No More clues";
        }
        return;
    } */


    if (fldr == "excellence") {
        var imageNames = ["x.png", "cell.jpeg", "ounce.jpeg"];

            imageNames.forEach(imageName => {
            const imageElement = document.createElement("img");
            imageElement.src = imagesf + imageName;
            imageElement.alt = imageName;
            imageContainer.appendChild(imageElement);
        });
    }

    else if (fldr == "cabin") {
        const imageNames = ["cab.png", "in.jpeg"];
        imageNames.forEach(imageName => {
            const imageElement = document.createElement("img");
            imageElement.src = imagesf + imageName;
            imageElement.alt = imageName;
            imageContainer.appendChild(imageElement);
        });
    }
    else if (fldr == "keyboard") {
        const imageNames = ["key.png", "board.jpeg"];
        imageNames.forEach(imageName => {
            const imageElement = document.createElement("img");
            imageElement.src = imagesf + imageName;
            imageElement.alt = imageName;
            imageContainer.appendChild(imageElement);
        });
    }
    else if (fldr == "connection") {
        const imageNames = ["con.png", "nect.jpeg", "sun.jpeg"];
        imageNames.forEach(imageName => {
            const imageElement = document.createElement("img");
            imageElement.src = imagesf + imageName;
            imageElement.alt = imageName;
            imageContainer.appendChild(imageElement);
        });
    }
}


function refresh() {
    location.reload();  // play again
}

window.verify = function () {
    if ((document.getElementById("ans").value).toLowerCase() == fldr) {   //check answer
        document.getElementById("result").innerHTML = "CORRECT";
    }
    else {
        document.getElementById("result").innerHTML = "WRONG";
    }
}

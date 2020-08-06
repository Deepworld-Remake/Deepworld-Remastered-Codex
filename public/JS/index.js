var itemData;

loadImage = async img => {
    return new Promise((resolve, reject) => {
        img.onload = async () => {
            resolve(true);
        };
    });
};

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = async function () {
	if (this.readyState == 4 && this.status == 200) {
		var obj = this.responseText;
		itemData = JSON.parse(obj);
		console.log(itemData);

		itemData.forEach(async (e) => {
			var newElement = document.createElement("div");
			newElement.setAttribute("class", "sectionData");
			let img = new Image();
			img.src = "./Sprites/" + e.sprite + ".png";
			img.setAttribute("class", "sectionDataSprite");
			newElement.innerHTML = `<span class="sectionDataName">${e.ui}</span><br><br><a href="./itemData?itemId=${e.id}" class="sectionDataLink">${e.ui}</a><br>`;
			document.querySelector(".itemData").appendChild(newElement);
			document.querySelector(".itemData").appendChild(img);
		});
	}
};

xhttp.open("GET", "./Config/ItemConfig.json", true);
xhttp.send();
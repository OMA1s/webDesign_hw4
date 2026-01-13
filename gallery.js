/*Name this external file gallery.js*/

function upDate(previewPic){
  const el = document.getElementById('image');
  el.style.backgroundImage = `url(${previewPic.src})`;
  el.innerText = previewPic.alt;
	}

	function unDo(){
    document.getElementById('image').style.backgroundImage = "url('')";
    document.getElementById('image').textContent = "Hover over an image below to display here.";
		
	}
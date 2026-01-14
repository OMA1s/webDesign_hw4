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

function onPageLoad(){
    const el = document.getElementsByClassName('preview');
    console.log("OnPageLoad Function");  
    for(let i = 0; i < el.length; i++){
        console.log(el[i]);
        el[i].setAttribute("tabindex", "0");
    }
}
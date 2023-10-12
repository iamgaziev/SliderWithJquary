$(document).ready(function () {
  let block = $(".block");
  let block2 = $(".block2");

  let imgBlock = 500;
  let ind = 0;
  let res = 0;

  for (let i = 0; i < 5; i++) {
    let cir = document.createElement("div");
    cir.classList.add(`img`);
    cir.classList.add(`img_${i + 1}`);
    cir.innerText = i + 1;
    block.append(cir);
  }

  let leng = block.children().length;
  let circleArray = [];

  for (let i = 0; i < leng; i++) {
    let cir = document.createElement("div");
    cir.classList.add(`cir`);
    cir.classList.add(`cir_${i + 1}`);
    block2.append(cir);
    circleArray.push(cir)
  }
  circleArray[0].classList.add("css")


  $('.cir').click(function (e){
    let giveIndex = e.target.classList[1];
    ind = parseInt(giveIndex.replace("cir_", ''), 10);
    for (let i = 0; i < circleArray.length; i++){
      if(circleArray[i].classList.contains("css")){
        circleArray[i].classList.remove("css");
      }
    }
    e.target.classList.add("css")
    ind = (ind - 1 + leng) % leng;
    res = ind * imgBlock;
    block.animate({ left: `-${res}px` });
  });

  $(".next").click(function () {
    ind = (ind + 1) % leng;
    res = ind * imgBlock;
    block.animate({ left: `-${res}px` });
    circleArray[ind].classList.add("css")
    if(ind===0){
      circleArray[circleArray.length-1].classList.remove("css")
    }
    else{
      circleArray[ind-1].classList.remove("css")
    }
  });

  $(".prev").click(function () {
    ind = (ind - 1 + leng) % leng;
    res = ind * imgBlock;
    block.animate({ left: `-${res}px`});
    circleArray[ind].classList.add("css")
    if(ind===circleArray.length-1){
      circleArray[0].classList.remove("css")
    }
    else{
      circleArray[ind+1].classList.remove("css")
    }
  });
});

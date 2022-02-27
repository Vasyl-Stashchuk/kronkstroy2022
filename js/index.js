function viewBlockAll(){
  const blocks1 = document.querySelectorAll(".blockPrivate, .blockLastPrivate");
  for( let i = 0; i < blocks1.length ; i++){
    blocks1[i].classList.remove('passive');
  }
  const blocks2 = document.querySelectorAll(".blockResidential, .blockLastResidential");
  for( let i = 0; i < blocks2.length ; i++){
    blocks2[i].classList.remove('passive');
  }
  const blocks3 = document.querySelectorAll(".blockCommercial, .blockLastCommercial");
  for( let i = 0; i < blocks3.length ; i++){
    blocks3[i].classList.remove('passive');
  }
}

function viewBlockPrivate(){
  const blocks1 = document.querySelectorAll(".blockPrivate, .blockLastPrivate");
  for( let i = 0; i < blocks1.length; i++){
    blocks1[i].classList.remove('passive');
  }
    const blocks2 = document.querySelectorAll(".blockResidential, .blockLastResidential");
    for( let i = 0; i < blocks2.length; i++){
      blocks2[i].classList.add('passive');
    }
      const blocks3 = document.querySelectorAll(".blockCommercial, .blockLastCommercial");
      for( let i = 0; i < blocks3.length; i++){
      blocks3[i].classList.add('passive');
  }
}

function viewBlockResidential(){
  const blocks1 = document.querySelectorAll(".blockPrivate, .blockLastPrivate");
  for( let i = 0; i < blocks1.length; i++){
    blocks1[i].classList.add('passive');
  }
  const blocks2 = document.querySelectorAll(".blockResidential, .blockLastResidential");
  for( let i = 0; i < blocks2.length; i++){
    blocks2[i].classList.remove('passive');
  }
  const blocks3 = document.querySelectorAll(".blockCommercial, .blockLastCommercial");
  for( let i = 0; i < blocks3.length; i++){
    blocks3[i].classList.add('passive');
  
  }
}

function viewBlockCommercial(){
  const blocks1 = document.querySelectorAll(".blockPrivate, .blockLastPrivate");
  for( let i = 0; i < blocks1.length; i++){
    blocks1[i].classList.add('passive');
  }
  const blocks2 = document.querySelectorAll(".blockResidential, .blockLastResidential");
  for( let i = 0; i < blocks2.length; i++){
    blocks2[i].classList.add('passive');
  }
  const blocks3 = document.querySelectorAll(".blockCommercial, .blockLastCommercial");
  for( let i = 0; i < blocks3.length; i++){
    blocks3[i].classList.remove('passive');
  }
}

function buttonBlock0(){
  document.getElementById("block1").style.filter = "none";
  document.getElementById("block2").style.filter = "none";
  document.getElementById("block3").style.filter = "none";
  document.getElementById("block0").style.filter = "invert()";
}

function buttonBlock1(){
  document.getElementById("block1").style.filter = "invert()";
  document.getElementById("block2").style.filter = "none";
  document.getElementById("block3").style.filter = "none";
  document.getElementById("block0").style.filter = "none";
}

function buttonBlock2(){
  document.getElementById("block1").style.filter = "none";
  document.getElementById("block2").style.filter = "invert()";
  document.getElementById("block3").style.filter = "none";
  document.getElementById("block0").style.filter = "none";
}
function buttonBlock3(){
  document.getElementById("block1").style.filter = "none";
  document.getElementById("block2").style.filter = "none";
  document.getElementById("block3").style.filter = "invert()";
  document.getElementById("block0").style.filter = "none";
}


(function () {
  const blockScreen = document.querySelector('.screen-block');
  blockScreen.innerHTML +=`
  <div class="block-screen" id="we-do">
  <a class="block0" id="block0" onclick = "viewBlockAll()" onmousedown = "buttonBlock0()" style="filter: invert();">
    <div>
      <img src="img/icons/big-house-building-of-three-floors.png">
      <h4>ВСЕ <br>
         ПРОЕКТЫ</h4>
    </div>
  </a>
  <a class="block1" id="block1" onclick = "viewBlockPrivate()" onmousedown = "buttonBlock1()">
    <div>
      <img src="img/icons/premium-icon-house-building-48770.png">
      <h4>ЧАСТНЫЙ СЕКТОР</h4>
    </div>
  </a>
  <a class="block2" id="block2" onclick = "viewBlockResidential()" onmousedown = "buttonBlock2()">
    <div>
      <img src="img/icons/premium-icon-stepped-building-tower-48755.png">
      <h4>ЖИЛАЯ НЕДВИЖИМОСТЬ</h4>
    </div>
  </a>
  <a class="block3" id="block3" onclick = "viewBlockCommercial()" onmousedown = "buttonBlock3()">
    <div>
      <img src="img/icons/premium-icon-building-48765.png">
      <h4>КОММЕРЧЕСКАЯ НЕДВИЖИМОСТЬ</h4>
    </div>
  </a>
</div>
  `;

})();





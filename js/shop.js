const shirt1 = $("img[src='../images/tshirt1.jpg']");
const shirt2 = $("img[src='../images/tshirt2.jpg']");
const shirt3 = $("img[src='../images/tshirt3.jpeg']");
const shirt4 = $("img[src='../images/tshirt4.jpeg']");
const shirt5 = $("img[src='../images/tshirt5.jpg']");

const pants1 = $("img[src='../images/pants1.jpg']");
const pants2 = $("img[src='../images/pants2.jpg']");
const pants3 = $("img[src='../images/pants3.jpg']");
const pants4 = $("img[src='../images/pants4.jpg']");
const pants5 = $("img[src='../images/pants5.jpg']");

const acc1 = $("img[src='../images/acc1.jpeg']");
const acc2 = $("img[src='../images/acc2.jpg']");
const acc3 = $("img[src='../images/acc3.jpg']");
const acc4 = $("img[src='../images/acc4.jpg']");
const acc5 = $("img[src='../images/acc5.jpg']");

const equip1 = $("img[src='../images/equip1.jpg']");
const equip2 = $("img[src='../images/equip2.jpg']");
const equip3 = $("img[src='../images/equip3.jpg']");
const equip4 = $("img[src='../images/equip4.jpg']");
const equip5 = $("img[src='../images/equip5.jpg']");

//randomize images when you refresh the page
function randomImages(arr) {
    let rand, temp;
  
    for (i = arr.length - 1; i > 0; i -= 1) {
        rand = Math.floor((i + 1) * Math.random());
        temp = arr[rand];
        arr[rand] = arr[i];
        arr[i] = temp;
    }
    return arr;
  }
  
  var photos = document.querySelector('#photos');
  var list = [];
  
  for (var i = 0; i < photos.children.length; i += 1) {
  list.push([i]);
  }
  list = randomImages(list);
  
  for (var i = 0; i < photos.children.length; i += 1) {
  photos.children[i].style.order = list[i];
  }
  
  
  $('#productType').change(function() {
    if($('#productType').val() === 't shirts') {
      shirt1.show(); shirt2.show(); shirt3.show(); shirt4.show(); shirt5.show();
  
      pants1.hide(); pants2.hide(); pants3.hide(); pants4.hide(); pants5.hide();
  
      acc1.hide(); acc2.hide(); acc3.hide(); acc4.hide(); acc5.hide();
  
      equip1.hide(); equip2.hide(); equip3.hide(); equip4.hide(); equip5.hide();
    }
  });
  
  $('#productType').change(function() {
    if($('#productType').val() === 'pants') {
      shirt1.hide(); shirt2.hide(); shirt3.hide(); shirt4.hide(); shirt5.hide();
  
      pants1.show(); pants2.show(); pants3.show(); pants4.show(); pants5.show();
  
      acc1.hide(); acc2.hide(); acc3.hide(); acc4.hide(); acc5.hide();
  
      equip1.hide(); equip2.hide(); equip3.hide(); equip4.hide(); equip5.hide();
    }
  });
  
  $('#productType').change(function() {
    if($('#productType').val() === 'accessories') {
      shirt1.hide(); shirt2.hide(); shirt3.hide(); shirt4.hide(); shirt5.hide();
  
      pants1.hide(); pants2.hide(); pants3.hide(); pants4.hide(); pants5.hide();
  
      acc1.show(); acc2.show(); acc3.show(); acc4.show(); acc5.show();
  
      equip1.hide(); equip2.hide(); equip3.hide(); equip4.hide(); equip5.hide();
    }
  });
  
  $('#productType').change(function() {
    if($('#productType').val() === 'equipment') {
      shirt1.hide(); shirt2.hide(); shirt3.hide(); shirt4.hide(); shirt5.hide();
  
      pants1.hide(); pants2.hide(); pants3.hide(); pants4.hide(); pants5.hide();
  
      acc1.hide(); acc2.hide(); acc3.hide(); acc4.hide(); acc5.hide();
  
      equip1.show(); equip2.show(); equip3.show(); equip4.show(); equip5.show();
    }
  });
  
// console.dir(document);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.all);
// document.all[10].textContent= 'Hello';
// console.log(document.link);
// console.log(document.images);
// console.log(document.getElementById('header-title'));
// var header = document.getElementById('main-header');
// console.log(headerTitle)
// headerTitle.textContent = 'hi';
// headerTitle.innerText = 'hello';
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h3>hidiagidgaiadad</h3>';

// header.style.border = 'solid 3px #ccc';


// GETELEMENTBYCLASSNAME

// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items['1']);
// items[2].textContent = 'hello 22';
// items[3].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';


// for (var i = 0; i < items.length; i++){
//     items[i].style.backgroundColor = '#ccc';
// }
// for (var i = 0; i < items.length; i++){
//     items[i].style.color = '#fff';
// }

//GETELEMENTBYTAGNAME//

// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[0].textContent = 'hello 22';
// li[1].style.fontWeight = 'bold';
// li[1].style.color = 'yellow';


// for (var i = 0; i < li.length; i++){
//     li[i].style.backgroundColor = '#ccc';
//     li[i].style.fontSize = '30px';


// }
// for (var i = 0; i < li.length; i++){
//     li[i].style.color = '#fff';
// }


// QUERYSELECTOR//

// var header = document.querySelector('#main-header');
// header.style.border = 'solid #ccc 4px';

// var input = document.querySelector('input');
// input.value = 'hello there';

// var submit = document.querySelector('input[type="submit"]');
// submit.value = "Send";

// submit.style.color = "#fff";
// submit.style.backgroundColor = "green";

// header.innerText = "hello";


// var item = document.querySelector('li');
// console.log(item);
// console.log(item[2]);
// item.style.color ='green';
// item.style.backgroundColor ='#ccc';

// var titles = document.querySelectorAll('.title');

// console.log(titles);

// titles[1].style.color ="red";
// titles[0].textContent ="Bobby";

// for (i = 0; i < titles.length; i++){
//     titles[i].textContent ="ANGEL";
// }

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');


// for(var x = 0; x< odd.length; x++){
//     odd[x].style.backgroundColor ="#ccc";
//     even[x].style.backgroundColor ="#111";
//     even[x].style.color ="#fff";
// }


//TRAVERSING THE DOM //

// var itemList = document.querySelector('#items');
//parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = 'pink';
// console.log(itemList.parentNode.parentNode);
// itemList.parentNode.parentNode.style.backgroundColor ='yellow';
// itemList.parentNode.parentNode.parentNode.style.backgroundColor ='#ccc';
// console.log(itemList.parentNode.parentNode.parentNode);

// parentElement//

// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = 'yellow';
// console.log(itemList.parentElement.parentElement);
// itemList.parentElement.parentElement.style.backgroundColor ='green';
// itemList.parentElement.parentElement.parentElement.style.backgroundColor ='#ccc';
// console.log(itemList.parentElement.parentElement.parentNode);

//childNodes

// console.log(itemList.childNodes);
// console.log(itemList.children);
// console.log(itemLIst.children[1]);
// itemList.children[1].style.backgroundColor = 'red';

//firstChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent ="hello123";

// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color ="green";

// create Element

// var newDiv = document.createElement('div');
// add class
// newDiv.className='hi';

// add id
// newDiv.id ='hello';

// add attribute

// newDiv.setAttribute('title', 'hello div');

// create text node
// var newDivText = document.createTextNode('angel ferrer');

// newDiv.appendChild(newDivText);

// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');

// console.log(newDiv);

// newDiv.style.fontSize = "30px";
// newDiv.style.color = "#ccc";

// container.insertBefore(newDiv, h1);

//events//


// var button = document.getElementById('button').addEventListener('click', buttonClick);

// function buttonClick(e){
    // document.getElementById('main-header').textContent ='hello bobby javascript';
    // document.getElementById('header-title').textContent='bobby';
    // document.querySelector('#main').style.backgroundColor ='#ccc';
    // document.querySelector('li').style.color ='yellow';
    // var list = document.querySelectorAll('li');
    // for(i = 0; i<list.length; i++){
    //   list[i].style.color ='yellow';
    // }
    //console.log(e);
    // console.log(e.target);
    // console.log(e.target.id);
    // console.log(e.target.className);
    // console.log(e.target.classList);
    // var output = document.getElementById('output');
    // output.innerHTML = '<h3>'+e.target.id+'</h3>';

    // console.log(e.type);

    // console.log(e.clientX);
    // console.log(e.clientY);
    // console.log(e.offsetX);
    // console.log(e.offset);
    // console.log(e.altKey);
    // console.log(e.ctrlKey);
    // console.log(e.shiftKey);
   

// }
//   var button = document.getElementById('button');
//   var box = document.getElementById('box');
  
  
//   button.addEventListener('mousedown', runEvent);
//   button.addEventListener('dblclick', runEvent);
// box.addEventListener('mouseenter', runEvent);
// box.addEventListener('mouseleave', runEvent);
// box.addEventListener('mouseover', runEvent);
// box.addEventListener('mousemove', runEvent);


// box.addEventListener('mousemove', runEvent);
var itemInput = document.querySelector('input[type="text"]');
var form = document.querySelector('form');
var select = document.querySelector('select');

// itemInput.addEventListener('keydown', runEvent);
// itemInput.addEventListener('keyup', runEvent);
//itemInput.addEventListener('keypress', runEvent);
// itemInput.addEventListener('focus', runEvent)
// itemInput.addEventListener('blur', runEvent)

// itemInput.addEventListener('cut', runEvent)
// itemInput.addEventListener('paste', runEvent)

// itemInput.addEventListener('input', runEvent)
    // select.addEventListener('change', runEvent);

  form.addEventListener('submit', runEvent);  
  function runEvent(e){
      e.preventDefault();
    console.log('EVENT TYPE:'+e.type);
    // document.body.style.display ="none";

    // output.innerHTML = '<p>'+e.target.value+'</p>';



    //console.log(e.target.value);
    // document.getElementById('output').innerHTML = '<h3 style="color:red;">'+e.target.value+'</h3>';

    // output.innerHTML = '<h3>MouseX:'+e.offsetX+' </h3><h3>MouseY:'+e.offsetY+'</h3>';

    // box.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",40)";
    // document.body.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",40)";
   
}


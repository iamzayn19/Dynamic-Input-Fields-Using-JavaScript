add = function(){
    var x = document.createElement('input');
    x.setAttribute('name','inp');
    x.setAttribute('type','text');
    x.setAttribute('placeholder','Enter some text here');
    var y = document.getElementById('fields');
    y.appendChild(x);
}
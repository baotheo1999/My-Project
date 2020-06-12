function hien() {
    document.getElementById('menu_an').style.display = 'block';
    document.getElementById('menu_an').style.animation="menu-an-left 0.2s ease-out"
    document.getElementById('container-an').style.display = 'block';
    document.getElementById('lock').style.overflow = 'hidden';
    document.getElementById('menu_an').style.overflow = 'auto';
  }
  
  function an() {
    document.getElementById('menu_an').style.display = 'none';
    document.getElementById('container-an').style.display = 'none';
    document.getElementById('lock').style.overflow = 'auto';
  }
  
  // slide1
  var index = 1;
  show(index);
  function plus(n){
    show(index += n);
  }
  
  function show(n){
    var i;
    var x=document.getElementsByClassName("slide-center");
    if(n > x.length-4)
      index = 1;
    if(n<1)
      index=x.length-5;
          
    for(i=0;i<x.length; i++){
      x[i].style.display="none";
    }
    x[index-1].style.display="block";
    x[index].style.display="block";
    x[index+1].style.display="block";
    x[index+2].style.display="block";
    x[index+3].style.display="block";
  }
  
  // slide2
  
  var a = 1;
  show(a);
  function plu(m){
    sho(a += m);
  }
  
  function sho(m){
    var j;
    var s=document.getElementsByClassName("slide-down");
    if(m > s.length-4)
      a = 1;
    if(m<1)
      a=s.length-5;
          
    for(j=0;j<s.length; j++){
      s[j].style.display="none";
    }
    s[a-1].style.display="block";
    s[a].style.display="block";
    s[a+1].style.display="block";
    s[a+2].style.display="block";
    s[a+3].style.display="block";
  }


  
  
  
  
  
  
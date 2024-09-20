function showLoader() {
    var loader = document.getElementById('loader');
    loader.style.display = 'flex';
    setTimeout(function(){
      loader.style.opacity = '0';
      setTimeout(function(){
        loader.style.display = 'none';
      }, 200);
    }, 1500); 
  }
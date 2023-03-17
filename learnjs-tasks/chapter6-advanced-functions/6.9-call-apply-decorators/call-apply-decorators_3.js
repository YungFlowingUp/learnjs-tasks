function debounce(f, ms) {
    let isCd = false;
  
    return function() {
        if (isCd) {
            return
        } 
  
    f.apply(this, arguments);
  
    isCd = true;
  
    setTimeout(() => isCd = false, ms);
    }  
}
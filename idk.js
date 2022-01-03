function incrementCount(current_count){
    setInterval(function(){
      // clear count
      var str_counter_0 =
      str_counter_0++;
      if (str_counter_0 > 99) {
        str_counter_0 = 0; // reset count
        str_counter_1++;    // increase next count
      }
      
     console.log(str_counter_0);
      
    },1000);
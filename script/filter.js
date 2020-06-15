app.filter("gender",function(){
    
    return function(gender){
        switch(gender){
            case 0:
                return "female"
            case 1:
                return "male"
            case 2:
                return "not disclosed"
        }
    }
})
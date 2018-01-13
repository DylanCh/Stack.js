var Stack =  function(type){
    if(type===null || type===undefined){
        throw new SyntaxError('Please specify a type');
    }  
    else if (typeof(type)!=='string'){
        throw new TypeError('Please provide a type as a string (Surrounded by quotation marks).');
    }
    else if (type.trim().length<=0){
        throw new Error('Type is not valid');
    }
    else {
        this.type = type;
        this.core = [];   
    }
};

Stack.prototype.push = function(val){
    if(typeof(val)!==this.type){
        throw new TypeError(`Value pushed to the stack must by of ${typeof(this.type)} type.`);
    }
    else this.core.push(val);
};

Stack.prototype.pop = function(){
    return this.core.pop();
};

Stack.prototype.toArray = function(){
    return this.core;
};

Stack.prototype.foreach = function(){
    return this.core.forEach;
};

Stack.prototype.peek = function(){
    return this.core[this.core.length-1];
}
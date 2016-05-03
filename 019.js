//js对象深拷贝
function clone(obj){
    var copyObj,prop;
    if(Array.isArray(obj)){
    	copyObj = [];
    } else {
    	copyObj = {};
    }
    for(prop in obj) {
    	if(obj.hasOwnProperty(prop)){
    		copyObj[prop] = clone(obj[prop]);
    	}
    }
    return copyObj;
}

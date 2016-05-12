			//一、去重：
			
			//方法1.Array.indexOf简单比对
			if(arr.indexOf(item)==arr.lastIndexOf(item)){ 
				//唯一的
			}
			
			//方法2.利用obj属性唯一的特性
			var obj = {};
			if(obj.hasOwnProperty(item)){  
				//重复了
			} else {
			    	obj[item] = true;
			    	//没重复
			}
			
			
			//二、删除元素
			//去重利用obj属性唯一的特性
			
			//方法1.利用Array.filter法省去自己对数组元素删除
			//特点：不改变原数组
			function uniq1(arr){
				var obj = {};
				return arr.filter(function(item,index,arr){
			    		if(obj.hasOwnProperty(item)){  //重复了
			    			return false;
			    		} else {
			    			obj[item] = true;
			    			return true;
			    		}
			    	});
			}
			console.log(uniq1(test));
			console.log(test);
			

			//2.遍历一下：自己删除arr元素
			//特点：直接改变原数组
			//注意：forEach遍历时操作arr元素，index会乱，所以把forEach遍历换成for
			function uniq2(arr){
				var obj = {};
				for(i=0;i<arr.length;i++){
			    	if(obj.hasOwnProperty(arr[i])){  //重复了
			    		arr.splice(i,1);
			    		i--;  //不加这行代码会每次漏掉一个元素
			    	} else {
			    		obj[arr[i]] = true;
			    	}	
			    }
			    return arr;
			}
			console.log(uniq2(test));
			console.log(test);

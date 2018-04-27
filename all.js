var s=skrollr.init({
	render: function(data) {
        //Log the current scroll position.
        //data:{"curTop":2,"lastTop":0,"maxTop":3400,"direction":"down"}

        // console.log(JSON.stringify(data));
		// console.log(data.curTop);
    },
    keyframe: function(element, name, direction) {
        /*
            **在html tag 中有加入data-emit-events 會進入這個function**
            
            element:整個dom
            name:ex(data-100)
            direction:up/down
        */

        // console.log(element,name,direction);
    },
    easing: {
		//This easing will sure drive you crazy
		wtf: Math.random,
		inverted: function(p) {
            console.log(p);
            
			return 1 - p;
		}
	}
});

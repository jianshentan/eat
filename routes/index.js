
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index');
};

exports.subscription = function(req, res){
  res.render('subscription');
};

exports.products = function(req, res){
  res.render('products');
};

exports.product = function(req, res){
	switch (req.params.product) {
		case "steak":
			res.render('product', {
				handle: "steak",
			  	name: "PURE STEAK",
			  	image: "media/eat_A.png",
			  	bg: "media/eat_A_bg.png",
			  	description: "Some filler text about the Pure Steak pouch and why it is so damn good."	
		  	});
		  	break;
		case "broccoli":
			res.render('product', {
				handle: "broccoli",
			  	name: "POWER BROCCOLI",
			  	image: "media/eat_B.png",
			  	bg: "media/eat_B_bg.png",
			  	description: "Some filler text about the Pure Steak pouch and why it is so damn good."	
		  	});
		  	break;
		case "swordfish":
			res.render('product', {
				handle: "swordfish",
			  	name: "OMEGA SWORDFISH",
			  	image: "media/eat_C.png",
			  	bg: "media/eat_C_bg.png",
			  	description: "Some filler text about the Pure Steak pouch and why it is so damn good."	
		  	});
		  	break;
		case "springmix":
			res.render('product', {
				handle: "springmix",
			  	name: "SPRING MIX INTENSE",
			  	image: "media/eat_D.png",
			  	bg: "media/eat_D_bg.png",
			  	description: "Some filler text about the Pure Steak pouch and why it is so damn good."	
		  	});
		  	break;
		case "bread":
			res.render('product', {
				handle: "bread",
			  	name: "TRIPLE ENERGY BREAD",
			  	image: "media/eat_E.png",
			  	bg: "media/eat_E_bg.png",
			  	description: "Some filler text about the Pure Steak pouch and why it is so damn good."	
		  	});
		  	break;
		default:
			break;
	}
};
if('serviceWorker' in navigator){
	navigator.srviceWorker.register('sw.js',{
		 scope:'./'

	})
    
	.then(reg=>{
		console.log("success");
	});
		.catch(error=>{
			console.log("error");
		});
}
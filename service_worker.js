// Cached core static resources 
self.addEventListener("install",e=>{
	e.waitUntil(
	  caches.open("static").then(cache=>{
		
		return cache.addAll(["./",'./images/Santhosh192.png',"./index.html","./style.css","./index.js",'./images/Santhosh500.png','./images/maskable.png','./images/software.png',"./app.js"]);
	  })
	);
  });
  
  // Fatch resources
  self.addEventListener("fetch",e=>{
	e.respondWith(
	  caches.match(e.request).then(response=>{
		return response||fetch(e.request);
	  })
	);
  });
var B = async x => await fetch(`https://iiilll.firebaseio.com/*/.json?orderBy=%22$value%22&limitToLast=40`).then(r => r.json()).then(r => Object.values(r || []))
console.log(B.slice(0,39).length)
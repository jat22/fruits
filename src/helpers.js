
function choice(items){
	const randIdx = Math.floor(Math.random() * items.length);
	return items[randIdx]
}

function remove(items, item){
	const itemIdx = items.findIndex((i) => i === item)
	if(itemIdx === -1) return undefined;
	return items.splice(itemIdx, 1)
}


export {choice, remove};
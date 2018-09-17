// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (propertyName) => {
	return propertyName;
};
const createNotEnumerableProperty = (propertyName) => {
	Object.defineProperty(Object.prototype,propertyName,{
		enumerable:false,
		value: 'value'
	})
	return propertyName
};
const createProtoMagicObject = () => {
	let obj = ()=>{}
	obj.prototype = obj.__proto__
	return obj
};
const incrementor = () => {
	if(incrementor.prototype == undefined)
		incrementor.prototype = {value:1}
	else
		incrementor.prototype.value++;

	incrementor.valueOf = () => incrementor.prototype.value;
	return(incrementor);
};
const asyncIncrementor = () => {
	if(incrementor.prototype == undefined)
	{
		incrementor.prototype = {value:1}
	}
	else
	{
		incrementor.prototype.value++;
	}
	incrementor.valueOf = () => incrementor.prototype.value;
	return(incrementor);
};
const createIncrementer = function* crInc() {
	let i = 0;
	while(true)
	{
		i++;
		yield i; 
	}
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = () => {};
const getDeepPropertiesCount = (obj) => {
	let length = 0
	for(let i in obj)
	{
		length++;
		if(typeof obj[i] == 'object')
			length += getDeepPropertiesCount(obj[i])
	}
	return length
};
const createSerializedObject = () => {
	let obj = {}
	obj.toJSON = function()  {return this.toString()}
	return obj;
};
const toBuffer = () => {};
const sortByProto = (array = []) => {
	return array.sort((a,b) => a.__proto__ - b.__proto__)
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;
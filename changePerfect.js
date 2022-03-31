import { _ } from "lodash";

const collection=[{name:"MANI"},{family:"MOVASSAGH"}]
const secondCollection=[]
collection.forEach((element,index)=>{
  const obj={}
  //console.log(element,index)
  const entries=Object.keys(element)
  const values=Object.values(element)
obj.title=_.startCase(_.toLower(entries));
obj.values=_.startCase(_.toLower(values));
  //console.log(obj)
  secondCollection.push(obj);
return secondCollection;  
})
console.log(secondCollection)

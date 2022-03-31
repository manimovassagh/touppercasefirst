import { _ } from "lodash";
const konditionen=[
  {"validation":"Some item"
},
{"pkw":"Price Show"
},
{"tatortila":"Some item"
}
]

konditionen.forEach((kondition)=>
{
  const obj =kondition;
  const key=Object.keys(obj)[0]
  console.log(key)
  const newKey=_.upperFirst(key)
  obj[newKey] = obj[Object.keys(obj)[0]];
  delete obj[Object.keys(obj)[0]];
  console.log(obj);

  
}
)
console.log(konditionen)

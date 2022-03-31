import { _ } from "lodash";

const collection = [{ name: "MANI" }, { family: "MOVASSAGH" }];
const secondCollection = [];
function reviseFetchedData() {
  collection.forEach((element, index) => {
    const _obj = {};
    //console.log(element,index)
    const entries = Object.keys(element);
    const values = Object.values(element);
    _obj.title = _.startCase(_.toLower(entries));
    _obj.values = _.startCase(_.toLower(values));
    //console.log(obj)
    secondCollection.push(_obj);
  });
  return secondCollection;
}
reviseFetchedData();
console.log(secondCollection);


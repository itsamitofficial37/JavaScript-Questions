let scope = "global";
getScope = () => {
var scope = "local";
const inner = () => {return scope;}
return inner;
}
getScope()();
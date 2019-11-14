var members = ["KIM", "LEE", "PARK"];
console.log(members[1]); //LEE
var i = 0;
while (i < members.length) {
  console.log("array loop", members[i]);
  i += 1;
}

var roles = { programmer: "KIM", designer: "LEE", manager: "PARK" };
console.log(roles["designer"]); //LEE

for (var name in roles) {
  console.log("object = >", name, "value = >", roles[name]);
}

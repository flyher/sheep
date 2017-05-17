// #compare size test='3' mark='<'
//example
//<h1>team</h1>
//<div>
//   {{#team}}
//    {{#compare size test='10' mark='<'}}
//     <li>the team is a little team</li>
//    {{/compare}}
//    {{#compare size test='10' mark='>'}}
//     <li>the team is a big team</li>
//    {{/compare}}
//   {{/team}}
//</div>
module.exports = function (context, options) {
  var mark = options.hash.mark;
  var num = parseInt(options.hash.test);
  var show = false;
  if (mark === '<') {
    if (parseInt(context) < num) {
      show = true;
    }
  } else if (mark === '>') {
    if (parseInt(context) > num) {
      show = true;
    }
  }
  if (show) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
}
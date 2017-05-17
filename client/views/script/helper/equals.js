//compare the passed in context against a test string
//example
//<h1>bird</h1>
//<ul>
//   {{#bird}}
//    {{#equals type test='male'}}
//     <li>{{name}} is male bird</li>
//    {{/equals}}
//    {{#equals type test='female'}}
//     <li>{{name}} is female bird</li>
//    {{/equals}}
//   {{/bird}}
//</ul>
module.exports = function (context, options) {
  // for jshint check
  /*ignore jshint start*/
  if ((context === '') || context !== (options.hash.test)) {
    return options.inverse(this);
  }
  return options.fn(this);
  /*ignore jshint end*/
}
// var initializing = false;
// function jClass(baseClass, prop) {
//     if (typeof (baseClass) === 'object') {
//         prop = baseClass;
//         baseClass = null;
//     }
//     function F() {
//         if (!initializing) {
//             this.init
//         }
//     }
// }

window.sheep = {
    domainUrl: 'http://localhost:3000/',
    apiUrl: function (route) {
        return this.domainUrl + route;
    },
    http: function (requestUrl, requestMethod, callback) {
        if (!$.support.leadingWhitespace) {
            // Use Microsoft XDR
            var xdr = new XDomainRequest();
            xdr.open(requestMethod, requestUrl);
            xdr.onload = function () {
                var res = $.parseJSON(xdr.responseText);
                if (res == null || typeof (res) == 'undefined') {
                    res = $.parseJSON(data.firstChild.textContent);
                }
                callback(res);
            };
            xdr.send();
        } else {
            $.ajax({
                type: requestMethod,
                url: requestUrl,
                cache: true,
                dataType: 'JSON',
                success: function (res, sucess) {
                    callback(res);
                }
            })
        }
    }
};
var sheep = window.sheep;
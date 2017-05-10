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

module.exports = sheep;
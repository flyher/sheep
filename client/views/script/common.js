var initializing = false;
function jClass(baseClass, prop) {
    if (typeof (baseClass) === 'object') {
        prop = baseClass;
        baseClass = null;
    }
    function F() {
        if (!initializing) {
            this.init
        }
    }
}
sheep.Json = {
    ApiUrl: function (route) {
        return 'http://localhost:3000/' + route;
    },
    Get: function (url, callback) {
        if (!$.support.leadingWhitespace) {
            // Use Microsoft XDR
            var xdr = new XDomainRequest();
            xdr.open("get", url);
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
                type: 'get',
                url: url,
                cache: true,
                dataType: 'JSON',
                success: function (res, sucess) {
                    callback(res);
                }
            })
        }
    }
};
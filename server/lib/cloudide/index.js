require("../../../common/paths");
var connect = require(__dirname+"/../../../common/connect/lib/connect");

exports.main = function(projectDir, port) {
    server = connect.createServer(
        connect.logger(),
        connect.conditionalGet(),
        connect.staticProvider(__dirname + "/../../../client")
    );

    server.listen(port);
}

if (module === require.main) {
    exports.main(".", 3000)
}
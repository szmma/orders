const config = {};

config.host = process.env.HOST || "https://orderdbsec.documents.azure.com:443/";
config.authKey =
  process.env.AUTH_KEY || "OO50Ifk0DmjgRiWJrMhIHdfi5pH2u9PwAVmUtX8liQgUrDQMBwGAato6LG6E4COaelT43ICfhKYmgvQEYxqT4Q==";
config.databaseId = "ToDoList";
config.containerId = "Items";

if (config.host.includes("https://localhost:")) {
  console.log("Local environment detected");
  console.log("WARNING: Disabled checking of self-signed certs. Do not have this code in production.");
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  console.log(`Go to http://localhost:${process.env.PORT || '3000'} to try the sample.`);
}
//
it("nativeApi Client Should successfully execute request", function (done) {
            var connectionPolicy = new DocumentBase.ConnectionPolicy();
            // Disable SSL verification explicitly
            connectionPolicy.DisableSSLVerification = true;
            var client = new DocumentDBClient(host, { masterKey: masterKey },
                connectionPolicy);

            // create database
            client.createDatabase({ id: Base.generateGuidId() }, function (err, db) {
                assert.equal(err, undefined, "error creating database");
                done();
            });
        });
//
module.exports = config;

const ganache = require("ganache-core");
require('dotenv').config();

const options = {
    mnemonic: "margin afraid simple man boss worth rose actress predict latin picture piano",
    default_balance_ether: 1234567890,
    total_accounts: 2,
    network_id: 2468,
    // db_path: "https://ipfs.io/ipfs/QmWdBJ26yiVd34jfDkM5SswVUqCwjg1nHzpx3i3vPM6TB8",
    // db_path: "/tmp/ganache-server",
    logger: console
}
const server = ganache.server(options);
server.listen(process.env.PORT || 8545, (a, b) => {
    console.log(a);
    console.log(b);
});

import fs from "fs-extra";

const DB_FILE = "./data/database.json";

if (!fs.existsSync("./data")) {
  fs.mkdirSync("./data");
}

if (!fs.existsSync(DB_FILE)) {
  fs.writeJsonSync(DB_FILE, {
    users: {},
    disabledCommands: [],
    codes: {},
    rains: [],
    withdrawals: [],
    deposits: [],
    houseProfit: 0
  }, { spaces: 2 });
}

export function loadDB() {
  return fs.readJsonSync(DB_FILE);
}

export function saveDB(data) {
  fs.writeJsonSync(DB_FILE, data, { spaces: 2 });
}
const fs = require('node:fs/promises');
const path = require('node:path');

const dbPath = path.join(process.cwd(), 'dataBAse', 'users.json');

const reader = async () => {
  const buffer = await fs.readFile(dbPath);
  const data  = buffer.toString();

  return data ? JSON.stringify(data) : []
}

const writer = async (users) => {
  const buffer = await fs.writeFile(dbPath, users);
}

module.exports = {
  reader,
  writer
}
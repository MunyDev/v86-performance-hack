import fs from 'fs'
console.log(JSON.stringify([...new Uint8Array(fs.readFileSync("t.wasm"))]));
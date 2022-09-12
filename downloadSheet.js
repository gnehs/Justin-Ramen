import axios from 'axios';
import fs from 'fs';
(async () => {
  let { data } = await axios.get('https://sheet.spacet.me/18lADeBHO3iH6mlECyVcboejMZM5o9YEFQVpsO5EiTgI/Records.json');
  data = data.values
  // drop first row
  data.shift();
  //filter length < 2
  data = data.filter((row) => row.length >= 2).map((row) => ({ date: row[0], value: parseInt(row[1]) }))

  data = {
    data,
    total: data.map((row) => row.value).reduce((a, b) => a + b, 0)
  }
  // write file
  fs.writeFileSync('./src/assets/data.json', JSON.stringify(data));
  fs.writeFileSync('./public/data.json', JSON.stringify(data));
})();
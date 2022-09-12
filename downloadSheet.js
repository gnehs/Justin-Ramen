import axios from 'axios';
import fs from 'fs';
(async () => {
  const { data } = await axios.get('https://sheet.spacet.me/18lADeBHO3iH6mlECyVcboejMZM5o9YEFQVpsO5EiTgI/Records.json');
  fs.writeFileSync('./src/assets/data.json', JSON.stringify(data));
})();
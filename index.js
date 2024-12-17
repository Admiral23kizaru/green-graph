import moment from "moment";
import simpleGit from "simple-git";
import jsonfile from "jsonfile";

const git = simpleGit();
const path = './data.json';

// Generate a random date in the past 365 days
const date = moment().subtract(Math.floor(Math.random() * 365), 'days').format();
const data = { date };

async function main() {
  try {
    // Step 1: Write the data file
    await jsonfile.writeFile(path, data);
    console.log('✅ JSON file written with date:', date);

    // Step 2: Set Git identity
    await git.addConfig('user.name', 'Admiral23kizaru');
    await git.addConfig('user.email', 'zzephyr934@gmail.com');

    // Step 3: Commit and push
    await git.add([path]);
    await git.commit(`Auto commit on ${date}`, { '--date': date });
    await git.push();

    console.log('🚀 Commit pushed to GitHub!');
  } catch (err) {
    console.error('❌ Error:', err.message);
  }
}

main();

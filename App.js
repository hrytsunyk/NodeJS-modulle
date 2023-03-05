const fs = require('node:fs/promises');
const path = require('node:path');

const worker = async () => {
    try {
        const fileName = ['fileName1.txt', 'fileName2.txt', 'fileName3.txt', 'fileName4.txt', 'fileName5.txt'];
        const folderName = ['folderName1', 'folderName2', 'folderName3', 'folderName4', 'folderName5'];

        const promises = folderName.map(async (folderName, index) => {
            const folderPath = path.join(process.cwd(), folderName)

            await fs.mkdir(folderPath, {recursive: true})
            await fs.writeFile(path.join(folderPath, fileName[index]), 'Hello okten')

        })

        await Promise.all(promises)

        const files = await fs.readdir(path.join(process.cwd()))

        for (const file of files) {
            const stats = await fs.stat(path.join(process.cwd(), file))
            const isFile = stats.isFile();
            if (isFile) {
                console.log('This is file', path.join(process.cwd(), file))
            }else {
                console.log('This is folder', path.join(process.cwd(), file));
            }
        }

    } catch (e) {
        console.log(e.message)
    }

}

worker()
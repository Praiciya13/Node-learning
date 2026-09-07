const fileTopic = require('fs').promises;

async function manageFiles() {
    try {
        // Create a folder if it does not already exist.
        await fileTopic.mkdir('./docs', { recursive: true });
        console.log('Folder got created');

        // Create a file and write the text.
        await fileTopic.writeFile('./docs/testFile.txt', 'Hello myself newly created file');
        console.log('File got created');

        // Read the file.
        const data = await fileTopic.readFile('./docs/testFile.txt', 'utf8');
        console.log(data);

        // Delete the file and folder.
        await fileTopic.unlink('./docs/testFile.txt');
        await fileTopic.rm('./docs', { recursive: true, force: true });
        console.log('Deleted folder');
    } catch (err) {
        console.log(err.message);
    }
}

manageFiles();
function downloadBook(filename) {
    const accountName = 'openedulibrarybooks';
    const accountKey = 'Hx8Q2mcWqsa1lmwzhF6rYVg8TII0+lMNOeFrTN8oRmKRBTToGBTPCvJ9e6dfso1J4qaDl7TkXvmn+AStUE8Bpw==';
    const containerName = 'openedulibrarypdfs';

    // Create a Blob Storage URL for the file
    const blobUrl = `https://${accountName}.blob.core.windows.net/${containerName}/${filename}`;

    // Create an invisible link element
    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = filename;

    // Append the link to the document body
    document.body.appendChild(link);

    // Simulate a click on the link to start the download
    link.click();

    // Remove the link from the document body
    document.body.removeChild(link);
}




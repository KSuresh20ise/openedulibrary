function downloadBook(filename) {
    const accountName = 'openedulibrarybookspdf';
    const accountKey = '1XG1cQXBLt448SUuIex9qggXXn+AGqfV6w1CVYPv7zAyyzfiyb52T0lOF7wFnkYIQOk5WaOfrU1/+ASticpnkQ==';
    const containerName = 'openedulibrarybookspdfs';

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




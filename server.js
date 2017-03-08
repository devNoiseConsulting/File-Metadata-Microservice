let express = require('express');
let path = require('path');
let multer  = require('multer');
let upload = multer();

let app = express();

app.set('port', (process.env.PORT || 8080));

app.post('/get-file-size', upload.single('file'), function(req, res) {
    let output = {
        "size": req.file.size
    };
    res.end(JSON.stringify(output, null, 2));
});

app.use(express.static(path.join(__dirname, 'public'))); //  "public" off of current is root

app.listen(app.get('port'), function() {
    console.log('File Metadata Microservice is listening on port ', app.get('port'));
});

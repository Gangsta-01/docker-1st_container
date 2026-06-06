const os = require('os');
const express = require('express');
const redis = require('redis');

const app = express();

const redisClient = redis.createClient({
    host: 'redis',
    port: 6379
});

app.get('/', function(req, res) {
    redisClient.get('numVisits', function(err, numVisits) {

        let numVisitsToDisplay = parseInt(numVisits) + 1;

        if (isNaN(numVisitsToDisplay)) {
            numVisitsToDisplay = 1;
        }

        redisClient.set('numVisits', numVisitsToDisplay);

        res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Docker Demo App</title>

            <style>
                *{
                    margin:0;
                    padding:0;
                    box-sizing:border-box;
                    font-family:Segoe UI, sans-serif;
                }

                body{
                    height:100vh;
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    background:linear-gradient(
                        135deg,
                        #0f172a,
                        #1e293b,
                        #334155
                    );
                    color:white;
                }

                .card{
                    width:450px;
                    padding:40px;
                    border-radius:20px;
                    background:rgba(255,255,255,0.08);
                    backdrop-filter:blur(10px);
                    text-align:center;
                    box-shadow:0 10px 30px rgba(0,0,0,.3);
                }

                h1{
                    font-size:2rem;
                    margin-bottom:20px;
                }

                .hostname{
                    color:#38bdf8;
                    font-weight:bold;
                    margin-bottom:25px;
                }

                .counter{
                    font-size:4rem;
                    font-weight:bold;
                    color:#22c55e;
                }

                .label{
                    margin-top:10px;
                    color:#cbd5e1;
                }

                .footer{
                    margin-top:25px;
                    font-size:.9rem;
                    color:#94a3b8;
                }
            </style>
        </head>

        <body>
            <div class="card">
                <h1>🐳 Docker Demo App</h1>

                <div class="hostname">
                    Container: ${os.hostname()}
                </div>

                <div class="counter">
                    ${numVisitsToDisplay}
                </div>

                <div class="label">
                    Total Visits
                </div>

                <div class="footer">
                    Node.js + Express + Redis + Docker Compose
                </div>
            </div>
        </body>
        </html>
        `);
    });
});

app.listen(3000, function() {
    console.log('Web application is listening on port 3000');
});

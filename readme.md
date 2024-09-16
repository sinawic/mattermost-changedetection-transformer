
# Mattermost ChangeDetection Webhook Notification API transformer

Since changedetection does not support integration directly to mattermost for notifications and ..

I decided to create this repo, in nodejs. And with very customizable way.

**You can point changedetection alerts as WEBHOOK to this projects address, and this project will extract relevant data and send as a notification to mattermost.**


## Run project as docker container

- `docker pull sinawic/mattermost-changedetection-transformer`
- create `.env` file with key `NOTIFICATION_URL`
- `docker-compose up -d`


## Build project yourself

After you edit `index.js` file for like manipulating the data that will be notified

- `docker build -t sinawic/mattermost-changedetection-transformer .`
- create `.env` file with key `NOTIFICATION_URL`
- `docker-compose up -d`

## Add notification url in changedetection

in the job edit section on `Notifications` tab add the `URL` like below:

`json://transformer_ip:transformer_port`


## Access project API

The project will be listening on port `3000`


## Environment Variables:

- NOTIFICATION_URL=https://example.com/hooks/xxx


## Developing the project

After you clone the repo:

- `npm i`
- create `.env` file with key `NOTIFICATION_URL`
- `node index.js`


### Customize notification data

In `/app/file.json` **inside container** latest request received from changedetection will be stored in json format.

You can customize the fields sent as a notification by editting the `index.js` file, then rebuilding the container with steps above.

========================

Any contribution will be openly appreciated!

> WITH ❤ BY SINAWIC

# NodeJS Postgres
// gist: https://gist.github.com/BLOCKCHAINDEVWEB/da147a50bf50e7215e227eeac1be1144

## Get started
execute commands:
```bash
cd postgres
docker-compose up -d
```

## pgAdmin4
open url: http://localhost:5555/
Completed Login with: 
  Email: sample@email.com
  Password: password
Click Login Button

Go to left side flap
Fly over 'server' and select 'Create select server'

Completed General Tag with:
  Name: localhost
Completed Connexion Tag with: 
  Host name/Address: postgres
  User name: root
  User password: password

Select localhost>Database>auth
Click right with mouse
Select CREATE Script
Push the table code and executate

## Start server
execute commands:
```bash
cd server
npm install
npm start
```

:)



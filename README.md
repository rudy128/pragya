# How to set up Pragya for Development

## Requirements:

### - Node.js
### - Docker (For MonogDB)
### - PNPM

Use the following commands:
```
git clone https://github.com/rudy128/pragya.git
cd pragya
npm install -g pnpm
docker build -t pragya-mongodb .
docker run -d -p 27017:27017 --name pragya-mongodb mongodb
pnpm run set-up
```
## Create a .env file in server. Use .env.example to create one properly

## Start the server
`pnpm run dev`

Build Script is under Development

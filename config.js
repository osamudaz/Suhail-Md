const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://suhail_shho_user:2iVYHx6LvhpWfgY9k7OdLnjUx2FLPT9T@dpg-cqftgkt6l47c73blmlgg-a.oregon-postgres.render.com/suhail_shho"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_43_07_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDkxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjA0LFxuICAgICAgICA4OCxcbiAgICAgICAgMTM5LFxuICAgICAgICA5NSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMyxcbiAgICAgICAgNTUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjE1LFxuICAgICAgICA3MSxcbiAgICAgICAgMjExLFxuICAgICAgICAxMjcsXG4gICAgICAgIDYzLFxuICAgICAgICA2MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNTMsXG4gICAgICAgIDQ5LFxuICAgICAgICA4MSxcbiAgICAgICAgMjI5LFxuICAgICAgICAzNixcbiAgICAgICAgOTEsXG4gICAgICAgIDIwLFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTU4LFxuICAgICAgICAxMSxcbiAgICAgICAgODIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgODQsXG4gICAgICAgIDk0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIwMixcbiAgICAgICAgNzMsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDM3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDEyLFxuICAgICAgICA5OSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxODAsXG4gICAgICAgIDU2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDU0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNzMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNzksXG4gICAgICAgIDI3LFxuICAgICAgICAxNjksXG4gICAgICAgIDEyMixcbiAgICAgICAgMjEwLFxuICAgICAgICAxMjksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNjAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjEwLFxuICAgICAgICAwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDExMCxcbiAgICAgICAgODIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTYwLFxuICAgICAgICA1MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjM4LFxuICAgICAgICAzNSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjA2LFxuICAgICAgICA0MyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjM1LFxuICAgICAgICA0NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICA0MyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTg5LFxuICAgICAgICAxODMsXG4gICAgICAgIDYsXG4gICAgICAgIDkxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTM2LFxuICAgICAgICAyMjksXG4gICAgICAgIDU2LFxuICAgICAgICAzMCxcbiAgICAgICAgMzksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxLFxuICAgICAgICA1MyxcbiAgICAgICAgMTczLFxuICAgICAgICAxLFxuICAgICAgICAxMzksXG4gICAgICAgIDg3LFxuICAgICAgICA1MSxcbiAgICAgICAgNjUsXG4gICAgICAgIDYwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDk0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE5LFxuICAgICAgICA1NSxcbiAgICAgICAgOSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIsXG4gICAgICAgIDk3LFxuICAgICAgICA1NixcbiAgICAgICAgMTA5LFxuICAgICAgICAxOSxcbiAgICAgICAgOSxcbiAgICAgICAgMTEwLFxuICAgICAgICA2NCxcbiAgICAgICAgMTI5LFxuICAgICAgICAzOSxcbiAgICAgICAgODAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDc5LFxuICAgICAgICA0NCxcbiAgICAgICAgMjUxLFxuICAgICAgICA0MyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDQzLFxuICAgICAgICAyMzksXG4gICAgICAgIDMsXG4gICAgICAgIDExMixcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA3NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA2N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDU4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxODcsXG4gICAgICAgIDg5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDM5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDExNSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTg3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDkzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjE3LFxuICAgICAgICA2OSxcbiAgICAgICAgMjEsXG4gICAgICAgIDk1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxODksXG4gICAgICAgIDc1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTMxLFxuICAgICAgICAwLFxuICAgICAgICAyMyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxODksXG4gICAgICAgIDExOSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTAzLFxuICAgICAgICAyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTY3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTA1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMzUsXG4gICAgICAgIDU0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxOTksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTkyLFxuICAgICAgICA3NSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMDQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSHYzTGJkNWNxU3IrM3JDMHorKzRUb1gzZlZsbnhlbnVkMUlSMWNwYkI1ST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiODd2eDRXUE5UeUtvVFFtMmMzWE1TQVwiLFxuICBcInBob25lSWRcIjogXCJkYjAxZmFhNS05MDJiLTQ1MzEtOTIwOC00MmJiZmVmOGNkYWFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTc5LFxuICAgICAgMTA4LFxuICAgICAgMjUxLFxuICAgICAgMjUwLFxuICAgICAgMTEyLFxuICAgICAgMjQwLFxuICAgICAgMTQ5LFxuICAgICAgNzEsXG4gICAgICAxNTksXG4gICAgICAxNTEsXG4gICAgICAxMzIsXG4gICAgICAxNTEsXG4gICAgICA1MixcbiAgICAgIDIsXG4gICAgICAzNyxcbiAgICAgIDk2LFxuICAgICAgOCxcbiAgICAgIDEzNSxcbiAgICAgIDEyOSxcbiAgICAgIDEzNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzgsXG4gICAgICAxMTMsXG4gICAgICA2LFxuICAgICAgNDEsXG4gICAgICAxMCxcbiAgICAgIDk4LFxuICAgICAgMTMsXG4gICAgICAxNzMsXG4gICAgICA1MyxcbiAgICAgIDgwLFxuICAgICAgOTUsXG4gICAgICA3NixcbiAgICAgIDEyNixcbiAgICAgIDI1MSxcbiAgICAgIDczLFxuICAgICAgMTE4LFxuICAgICAgNzAsXG4gICAgICAzNCxcbiAgICAgIDI1NCxcbiAgICAgIDY0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlJSTDZZR1JEXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzc2ODY5MTQ4MzM6NDRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwnZGr8J2SgvCdko7wnZKU8J2SkCDwnZGx8J2Sk1wiLFxuICAgIFwibGlkXCI6IFwiMjA4MzE0ODg5NzE1OTAwOjQ0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BhaDFwOERFSytmLzdRR0dBUWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiMkwvZytZbmVFcmlzcnhuZm1VdHUveW1oTjNVNXFJTTdVMncvOURaWFZIdz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJOZGtja3h3dFZYc05kM2JET2xkUjhqVCtiTXU4Yy9IZlpxVWZoVkMvY0dyRUk5MUxoTDJhZnMyVno3b0lLaXhRZ29wb2xBL2lMZ2hJbW1CeVRmMldBZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJLQ1dDSUgwQmY4Y1BOV0dPaHgxYm4xbEVVS1RyVU9RMm9YNHNQMUNnKzNmaGdnbzdJRnozUEV1RS9md0xXcEE4VlB1Z3Q3RnNWb3hLWSsrdUk0ZHZDQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzc2ODY5MTQ4MzM6NDRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTI0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE3NDk0Mjhcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

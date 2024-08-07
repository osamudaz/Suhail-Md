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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_22_08_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDc2LFxuICAgICAgICA5MyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDM2LFxuICAgICAgICA3NSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNDksXG4gICAgICAgIDExMCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDcsXG4gICAgICAgIDI1LFxuICAgICAgICAxODcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNjIsXG4gICAgICAgIDksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjE0LFxuICAgICAgICA2MixcbiAgICAgICAgMjA3LFxuICAgICAgICA0NCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMzksXG4gICAgICAgIDEwNixcbiAgICAgICAgNTYsXG4gICAgICAgIDY3LFxuICAgICAgICA5NSxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTcsXG4gICAgICAgIDAsXG4gICAgICAgIDQ3LFxuICAgICAgICA5OSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTcsXG4gICAgICAgIDMsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTU2LFxuICAgICAgICA4NSxcbiAgICAgICAgMzksXG4gICAgICAgIDIxMixcbiAgICAgICAgMTA1LFxuICAgICAgICAxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMzUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTAsXG4gICAgICAgIDI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxOSxcbiAgICAgICAgMTA5LFxuICAgICAgICA0MSxcbiAgICAgICAgMTA1LFxuICAgICAgICAwLFxuICAgICAgICAyMzksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjEsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDU3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNDYsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDgzLFxuICAgICAgICAxODYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDc3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDYzLFxuICAgICAgICAyMTksXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNixcbiAgICAgICAgMTY0LFxuICAgICAgICAzMyxcbiAgICAgICAgODMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTkxLFxuICAgICAgICAzMCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDU5LFxuICAgICAgICA3NyxcbiAgICAgICAgMTIzLFxuICAgICAgICA2NyxcbiAgICAgICAgOCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDQxLFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjU1LFxuICAgICAgICA5MSxcbiAgICAgICAgNzYsXG4gICAgICAgIDg4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTU1LFxuICAgICAgICAzMCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDUwLFxuICAgICAgICAyLFxuICAgICAgICA0MixcbiAgICAgICAgMjUsXG4gICAgICAgIDczLFxuICAgICAgICA3MSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMzEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTkyLFxuICAgICAgICA3NixcbiAgICAgICAgMzksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDUsXG4gICAgICAgIDE4MixcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIsXG4gICAgICAgIDYwLFxuICAgICAgICA0NyxcbiAgICAgICAgNjAsXG4gICAgICAgIDkzLFxuICAgICAgICAyOSxcbiAgICAgICAgMTMwLFxuICAgICAgICA4NixcbiAgICAgICAgMTQzLFxuICAgICAgICA1NixcbiAgICAgICAgMjA1LFxuICAgICAgICAyNDksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA5NCxcbiAgICAgICAgNjYsXG4gICAgICAgIDYzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTYyLFxuICAgICAgICA5OSxcbiAgICAgICAgMTE2LFxuICAgICAgICA2OCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMjBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTYsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMzYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMCxcbiAgICAgICAgNjgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjEwLFxuICAgICAgICA1MyxcbiAgICAgICAgMjksXG4gICAgICAgIDEzLFxuICAgICAgICA3NyxcbiAgICAgICAgMjIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjI3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIzMixcbiAgICAgICAgNzAsXG4gICAgICAgIDQwLFxuICAgICAgICA4MixcbiAgICAgICAgODUsXG4gICAgICAgIDU1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxODksXG4gICAgICAgIDY4LFxuICAgICAgICA1NixcbiAgICAgICAgMTE0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTU3LFxuICAgICAgICA2NCxcbiAgICAgICAgMjE4LFxuICAgICAgICA3MSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNjMsXG4gICAgICAgIDI5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE0LFxuICAgICAgICA0MSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNixcbiAgICAgICAgNTAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNDksXG4gICAgICAgIDE2OCxcbiAgICAgICAgODYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTA4LFxuICAgICAgICA2NyxcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDYzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkpmaHpIbi85YzR5dlpnUjFqRXc5bWJZUUx6bmZlbndXR2lsdDIxSDZtNzA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkVudDRWOWRxU2U2VlpFZTNnVE5ndEFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZTYyOWZkODctZTU0Ni00ZDA5LWJmOGItYWFmMzhjOWQ0ZWVkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDc2LFxuICAgICAgMTU2LFxuICAgICAgMTcxLFxuICAgICAgMjE1LFxuICAgICAgMyxcbiAgICAgIDE5NCxcbiAgICAgIDE4MyxcbiAgICAgIDYwLFxuICAgICAgMTI4LFxuICAgICAgNjUsXG4gICAgICAxNTcsXG4gICAgICAyMzgsXG4gICAgICA2OSxcbiAgICAgIDg4LFxuICAgICAgMjIwLFxuICAgICAgMTMxLFxuICAgICAgMTkzLFxuICAgICAgMTk5LFxuICAgICAgMzgsXG4gICAgICAxMDJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTE0LFxuICAgICAgMTY3LFxuICAgICAgNzUsXG4gICAgICAxMzEsXG4gICAgICAyMjcsXG4gICAgICAyMTksXG4gICAgICAyMTYsXG4gICAgICA4LFxuICAgICAgMjExLFxuICAgICAgMjU1LFxuICAgICAgMjQzLFxuICAgICAgMTkyLFxuICAgICAgMjcsXG4gICAgICAyMjUsXG4gICAgICAyMjEsXG4gICAgICA2NyxcbiAgICAgIDEyOCxcbiAgICAgIDE2NixcbiAgICAgIDYsXG4gICAgICAyMzhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiM0VMUTZKNTdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNzY4NjkxNDgzMzo1MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCdla3wnZaG8J2WmfCdlpLwnZaG8J2Wk1wiLFxuICAgIFwibGlkXCI6IFwiMjA4MzE0ODg5NzE1OTAwOjUwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BlaDFwOERFSTJsekxVR0dBUWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiMkwvZytZbmVFcmlzcnhuZm1VdHUveW1oTjNVNXFJTTdVMncvOURaWFZIdz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJGVnFsN1IxK1VCNExtWjY4dTM2ZmRkS1hjbjl0emtZT3VuWi82RXlsVHI4NVBnMisxeUlCUDN1OU12T0JzTmhqMVkrNndtRStZVjNubnhvK0RFK01CUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ5ZHJzczBLSzZpMUlOalQxVmF0RDdxVVU3UDFEbHBUckhZN1Bqa084eFlFUkdmOHhLaHVtK0lZODN4NTFKZ1FNN1NkbHF2QitqbTRVdVlnVkR1TXpDdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzc2ODY5MTQ4MzM6NTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTI0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjMwMTE3Mjlcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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

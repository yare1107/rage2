let handler = async (m, { isPrems, conn }) => {
let time = global.db.data.users[m.sender].lastcofre + 0 // 36000000 10 Horas //86400000 24 Horas
if (new Date - global.db.data.users[m.sender].lastcofre < 0) throw `[❗𝐈𝐍𝐅𝐎❗] 𝚈𝙰 𝚁𝙴𝙲𝙻𝙰𝙼𝙰𝚂𝚃𝙴 𝚃𝚄 𝙲𝙾𝙵𝚁𝙴\𝚗𝚅𝚄𝙴𝙻𝚅𝙴 𝙴𝙽 *${msToTime(time - new Date())}* 𝙿𝙰𝚁𝙰 𝚅𝙾𝙻𝚅𝙴𝚁 𝙰 𝚁𝙴𝙲𝙻𝙰𝙼𝙰𝚁`

let img = 'https://i.ibb.co/J55dPST/garena-free-fire-logo-rosj9f102kpok60v.jpg' 
let texto = `> > 𝙈𝙀𝙉𝙐 𝘿𝙀 𝙁𝙍𝙀𝙀 𝙁𝙄𝙍𝙀 👑. 
 
 👑 𝙁𝙍𝙀𝙀 𝙁𝙄𝙍𝙀 👑
🖤 ➺ 🎫.donarsala
🖤 ➺ 🗼.𝘉𝘦𝘳𝘮𝘶𝘥𝘢
🖤 ➺ 🏝️.𝘗𝘶𝘳𝘨𝘢𝘵𝘰𝘳𝘪𝘰
🖤 ➺ 🏜️.𝘒𝘢𝘭𝘢𝘩𝘢𝘳𝘪
🖤 ➺ 🏗️.𝘕𝘦𝘹𝘵𝘦𝘳𝘳𝘢
🖤 ➺ 🏞️.𝘈𝘭𝘱𝘦𝘴

👑 𝙍𝙀𝙂𝙇𝘼𝙎 𝙂𝙀𝙉𝙀𝙍𝘼𝙇𝙀𝙎 👑
🖤 ➺ 🎮.𝘳𝘦𝘨𝘭𝘢𝘴𝘭𝘪𝘥𝘦𝘳𝘦𝘴
🖤 ➺ 🎮.𝘳𝘦𝘨𝘭𝘢𝘴𝘭𝘪𝘥𝘦𝘳𝘦𝘴2

▸▸ 𝙇𝙄𝙎𝙏𝘼 𝙑𝙀𝙍𝙎𝙐𝙎 👑 ◂◂

𝘚𝘐𝘎𝘕𝘐𝘍𝘐𝘊𝘈𝘋𝘖𝘚: 𝘏𝘏:𝘔𝘔 (𝘏𝘖𝘙𝘈:𝘔𝘐𝘕𝘜𝘛𝘖𝘚) 
𝘊𝘗 (𝘊𝘖𝘋𝘐𝘎𝘖 𝘋𝘌 𝘗𝘈𝘐𝘚) 𝘗𝘈𝘙𝘈 𝘓𝘈 𝘏𝘖𝘙𝘈 (𝘔𝘟, 𝘊𝘖, 𝘊𝘓 𝘠 𝘈𝘙) 
𝘊𝘙 (𝘊𝘖𝘓𝘖𝘙 𝘋𝘌 𝘙𝘖𝘗𝘈)
𝘌𝘫𝘦𝘮𝘱𝘭𝘰: .4𝘷𝘴4 22:30 𝘔𝘟
𝘌𝘫𝘦𝘮𝘱𝘭𝘰: .8𝘷𝘴8 22:50 𝘕𝘌𝘎𝘙𝘖

⚔ ➺.4𝘷𝘴4 𝘏𝘏:𝘔𝘔 𝘊𝘗
⚔ ➺.6𝘷𝘴6 𝘏𝘏:𝘔𝘔 𝘊𝘗
⚔ ➺.8𝘷𝘴8 𝘏𝘏:𝘔𝘔 𝘊𝘙 
⚔ ➺.𝘴𝘤𝘳𝘪𝘮 𝘏𝘏:𝘔𝘔 𝘊𝘗
⚔ ➺.𝘪𝘯𝘵𝘦𝘳𝘯𝘢4 𝘏𝘏:𝘔𝘔 𝘊𝘗
⚔ ➺.12𝘷𝘴12 𝘏𝘏:𝘔𝘔 𝘊𝘙
⚔ ➺.16𝘷𝘴16 𝘏𝘏:𝘔𝘔 𝘊𝘙
⚔ ➺.20𝘷𝘴20 𝘏𝘏:𝘔𝘔 𝘊𝘙
⚔ ➺.24𝘷𝘴24 𝘏𝘏:𝘔𝘔 𝘊𝘙
⚔ ➺.𝘊𝘶𝘢𝘥𝘳𝘪𝘭𝘢𝘵𝘦𝘳𝘰 𝘏𝘏:𝘔𝘔 𝘊𝘙

> cualquier duda o inconveniente con el dueño (.owner)`

const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}
await conn.sendFile(m.chat, img, 'img.jpg', texto, fkontak)
global.db.data.users[m.sender].lastcofre = new Date * 1
}
handler.help = ['menuff']
handler.tags = ['freefire' ,'main'] 
handler.command = ['menuff', 'menufreefire'] 
handler.register = true
export default handler
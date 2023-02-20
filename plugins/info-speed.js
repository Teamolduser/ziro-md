let { MessageType } = (await import('@adiwajshing/baileys')).default
import moment from 'moment-timezone'
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()

  let teks = `Pilih Dibawah kak Model Speed Nya ! o(〃＾▽＾〃)o`
const sections = [
   {
	title: `${htjava} SPEED MENU –––––––––·•`,
	rows: [
	{title: "Speed V1", rowId: ".speed1"},
    {title: "Speed V2", rowId: ".speed2"},
	{title: "Speed V3", rowId: ".speed3"},
	]
  },{
	title: `${htjava} SUPPORT ME –––––––·•`,
	rows: [
	    {title: "💹 • Donasi", rowId: ".owner nomor"},
	{title: "🔖 • Sewa", rowId: ".sewa"},
	{title: "🌟 • Buy Premium", rowId: ".premium"},
	]
  },
]

const listMessage = {
  text: ` `,
  footer: teks,
  title: `${htki} *SPEED* ${htka}`,
  buttonText: "Click Here !",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: fkontak, mentions: await conn.parseMention(teks), contextInfo:{ forwardingScore: 99999, isForwarded: true }})
}

handler.help = ['speed']
handler.tags = ['info']
handler.command = /^(ping)/i
export default handler

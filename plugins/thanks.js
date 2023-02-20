let handler = async m => m.reply(`Yoi Cuyy🗿SAMA SAMA`.trim()) // Tambah sendiri kalo mau
handler.help = ['thanks']
handler.tags = ['info']
handler.command = /^thanks|terima kasih|terimakasih|tq|makasih|mksh|$/i

export default handler
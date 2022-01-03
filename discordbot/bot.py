import discord

client = discord.Client()
token = "NzgwMjE2Njk0NzkzNTY4MzA3.X7r3aw.5cxq9c1QWFcUiBSdTZOuW9bGSbA"

@client.event
async def on_ready():
    print('We have logged in as {0.user}'.format(client))

@client.event
async def on_message(message):
    if message.author == client.user:
        return

    if message.content.startswith('$hello'):
        await message.channel.send('Hello!')

client.run('token')
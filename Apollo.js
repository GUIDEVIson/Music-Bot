//Set listener on 'message'
Apollo.on('message', message => {
  if (message.content === 'กูนี้ยังชอบพวกมึงเลย') {
    message.reply('เดียวนะ มึงใครอะมากจาไหน');
  }
});


let WebSocket = require('ws');

wss.on('connection', (ws) => {
	ws.on('message', (message) => {
		console.log(`Received: ${message}`);

		wss.clients.forEach((client) => {
			client.send(message);
		});
	});
});
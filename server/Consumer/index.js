const amqp = require('amqplib');

async function createConnection(uri = 'guest:guest@localhost:5672') {
  const connection = await amqp.connect(`amqp://${uri}`);
  return connection;
}

createConnection()
  .then(conn => conn.createChannel())
  .then(ch => {
    console.log('Channel created!');

    const queue = 'messages';
    ch.assertQueue(queue);
    ch.consume(queue, function(msg) {
      if (msg !== null) {
        console.log('%s Received: %s', new Date(), msg.content.toString());
        ch.ack(msg);
      }
    });
  });
// Consumer channel without prefetch

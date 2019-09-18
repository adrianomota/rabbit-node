import amqp from 'amqplib';

class SendMessageService {
  async run({ message }) {
    try {
      const open = amqp.connect('amqp://guest:guest@localhost:5672');

      open
        .then(conn => conn.createChannel())
        .then(ch => {
          console.log('channel created...');

          const queue = 'messages';
          ch.assertQueue(queue);
          ch.sendToQueue(queue, Buffer.from(message));
        });
    } catch (err) {
      console.log(err);
    }
  }
}

export default new SendMessageService();

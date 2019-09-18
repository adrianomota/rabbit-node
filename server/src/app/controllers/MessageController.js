import SendMessageService from '../Services/SendMessageService';

class MessageController {
  async store(req, res) {
    await SendMessageService.run({ message: req.body.message });

    return res.status(200).json({ ok: true });
  }
}

export default new MessageController();

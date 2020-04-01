const ReturnForm = require('../models/ReturnForm');

module.exports = {
  async create(req, res) {
    try {
      const returnForm = await ReturnForm.create(req.body);
      res.json(returnForm);
    } catch (err) {
      res.status(500).send({ message: err });
    }
  },

  async findById(req, res) {
    const { id } = req.params;

    try {
      const returnForm = await ReturnForm.findById(id);

      if (returnForm) {
        res.json(returnForm);
      } else {
        res.status(404).send({message: 'Não encontrado!'});
      }
    } catch (error) {
      res.status(500).send({ message: error });
    }
  },

  async findAll(req, res) {
    const { page = 1 } = req.query;
    const { perPage = 5 } = req.query;
    
    try {
      const count = await ReturnForm.estimatedDocumentCount();

      res.header('X-Total-Count', count);
      
      const items = await ReturnForm.find().limit(+perPage).skip((page-1)*perPage);

      res.send(items);
    } catch (error) {
      res.status(500).send({ message: error });
    }
  },

  async update(req, res) {
    const { id } = req.params;

    try {
      await ReturnForm.findOneAndUpdate(id, req.body);

      res.json({ message: 'Ok' });

    } catch (error) {
      res.status(500).send({ message: error });
    }
  },

  async delete(req, res) {
    const { id } = req.params;

    try {
      await ReturnForm.remove({ _id: id });

      res.json({ message: 'Ok' });
      
    } catch (error) {
      res.status(500).send({ message: error });
    }
  }
}
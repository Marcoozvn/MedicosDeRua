const Anamnese = require('../models/AnamneseForm');

module.exports = {
  async create(req, res) {
    try {
      const anamnese = await Anamnese.create(req.body);
      res.json(anamnese);
    } catch (err) {
      res.status(500).send({ message: err });
    }
  },

  async findById(req, res) {
    const { id } = req.params;

    try {
      const anamnese = await Anamnese.findById(id);

      if (anamnese) {
        res.json(anamnese);
      } else {
        res.status(404).send({message: 'Não encontrado!'});
      }
    } catch (error) {
      res.status(500).send({ message: error });
    }
  },

  async findAll(req, res) {
    try {
      const items = await Anamnese.find({});

      res.send(items);
    } catch (error) {
      res.status(500).send({ message: error });
    }
  },

  async update(req, res) {
    const { id } = req.params;

    try {
      await Anamnese.findOneAndUpdate(id, req.body);

      res.json({ message: 'Ok' });

    } catch (error) {
      res.status(500).send({ message: error });
    }
  },

  async delete(req, res) {
    const { id } = req.params;

    try {
      await Anamnese.remove({ _id: id });

      res.json({ message: 'Ok' });
      
    } catch (error) {
      res.status(500).send({ message: error });
    }
  }
}
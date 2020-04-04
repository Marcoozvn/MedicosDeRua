const Anamnese = require('../models/AnamneseForm');
const Return = require('../models/ReturnForm');
const AssistedUser = require('../models/AssistedUser');

module.exports = {
  async createAnamnese(req, res) {
    try {
      const { paciente: { nome, cpf, idade }} = req.body;

      let user;

      if (cpf) {
        user = await AssistedUser.findOne({cpf});

      } else {
        user = await AssistedUser.findOne({nome});
      }

      if (!user) AssistedUser.create({nome, cpf, idade});

      const anamnese = await Anamnese.create({
        ...req.body,
        paciente: user
      });

      res.json(anamnese);
    } catch (err) {
      res.status(500).send({ message: err });
    }
  },

  async updateAnamnese(req, res) {
    const { id } = req.params;

    try {
      await Anamnese.findOneAndUpdate(id, req.body);

      res.json({ message: 'Ok' });

    } catch (error) {
      res.status(500).send({ message: error });
    }
  },

  async deleteAnamnese(req, res) {
    const { id } = req.params;

    try {
      await Anamnese.remove({ _id: id });

      res.json({ message: 'Ok' });
      
    } catch (error) {
      res.status(500).send({ message: error });
    }
  },

  async createReturn(req, res) {
    try {
      const { paciente: { nome, cpf, idade }} = req.body;

      let user;

      if (cpf) {
        user = await AssistedUser.findOne({cpf});

      } else {
        user = await AssistedUser.findOne({nome});
      }

      if (!user) AssistedUser.create({nome, cpf, idade});

      const returnForm = await Return.create({
        ...req.body,
        paciente: user
      });

      res.json(returnForm);
    } catch (err) {
      res.status(500).send({ message: err });
    }
  },

  async updateReturn(req, res) {
    const { id } = req.params;

    try {
      await ReturnForm.findOneAndUpdate(id, req.body);

      res.json({ message: 'Ok' });

    } catch (error) {
      res.status(500).send({ message: error });
    }
  },

  async deleteReturn(req, res) {
    const { id } = req.params;

    try {
      await ReturnForm.remove({ _id: id });

      res.json({ message: 'Ok' });
      
    } catch (error) {
      res.status(500).send({ message: error });
    }
  },

  async find(req, res) {
    const { assistedUserId } = req.params;

    try {
      const anamneses = await Anamnese.find({ paciente: { _id: assistedUserId } });
      const returns = await Return.find({ paciente: { _id: assistedUserId } });

      const result = [...anamneses, ...returns];

      res.json(result);
      
    } catch (error) {
      res.status(500).send({ message: error })
    }
  }
}
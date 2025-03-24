const express = require('express');
const router = express.Router();
const User = require('../models/User');

// GET : Liste des utilisateurs
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur', error: err });
  }
});

// POST : Ajouter un utilisateur
router.post('/', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const newUser = new User({ name, email, password });
    await newUser.save();
    res.status(201).json({ message: 'Utilisateur ajouté avec succès', user: newUser });
  } catch (err) {
    res.status(400).json({ message: 'Erreur lors de l’ajout', error: err });
  }
});

module.exports = router;
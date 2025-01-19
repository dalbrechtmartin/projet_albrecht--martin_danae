const Utilisateur = require('../models/utilisateur.model');
const { ACCESS_TOKEN_SECRET } = require("../config.js");
const jwt = require('jsonwebtoken');

function generateAccessToken(user) {
    return jwt.sign(user, ACCESS_TOKEN_SECRET, { expiresIn: '365d' });
}

exports.login = async (req, res) => {
    const { login, password } = req.body;
    if (!login || !password) {
        return res.status(400).send("Login and password are required");
    }

    const utilisateur = await Utilisateur.findOne({ where: { login, pass: password } });

    if (!utilisateur) {
        return res.status(400).send("Invalid login or password");
    }

    const user = {
        id: utilisateur.id,
        name: utilisateur.nom,
        email: utilisateur.email
    };

    let accessToken = generateAccessToken(user);
    res.setHeader('Authorization', `Bearer ${accessToken}`);
    res.send({ token: accessToken, utilisateur });
};

exports.createUser = async (req, res) => {
    try {
        const user = await Utilisateur.create({
            nom: req.body.nom,
            prenom: req.body.prenom,
            login: req.body.login,
            pass: req.body.pass
        });
        res.status(201).json(user);

    } 
    catch (error) {
        res.status(500).json({ message: 'Error creating user', error });
    }
};

exports.updateUser = async (req, res) => {
    const userId = req.params.id;
    const [updated] = await Utilisateur.update(req.body, { where: { id: userId } });

    if (!updated) {
        return res.status(404).send("User not found");
    }

    const updatedUser = await Utilisateur.findOne({ where: { id: userId } });
    res.status(200).json(updatedUser);
};

exports.deleteUser = async (req, res) => {
    const userId = req.params.id;
    const deleted = await Utilisateur.destroy({ where: { id: userId } });

    if (!deleted) {
        return res.status(404).send("User not found");
    }

    res.status(204).send();
};
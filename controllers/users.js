const express = require('express');

const usersService = require('../services/bd/users');

exports.getAllUsers = async  (req, res, next) => {
   const users = await usersService.getUsers();
   res.json({success: true, data: users});
};

exports.getUserById = async  (req, res) => {
   const user = usersService.getUserById(req.params.id);
   if (user) {
      res.json({success: true, data: user});
   } else {
      res.status(404).json({success: false, message: 'User non trouvé'});
   }
};

exports.addUser = async  (req, res) => {
   try {
      usersService.addUser(req.body.id, req.body.firstName, req.body.lastName);
      res.status(201).json({success: true, message: 'User ajouté'});
   } catch (e) {
      res.status(400).json({success: false, message: 'User non ajouté', error: e.message});
   }
};

exports.deleteUserById = async  (req, res) => {
   usersService.deleteUserById(req.params.userId);
   res.json({success: true, message: 'User supprimé'});
};

exports.findByName = async (req, res) => {
    const user = usersService.findByName(req.params.firstNameParam);
    if (user) {
        res.json({success: true, data: user});
     } else {
        res.status(404).json({success: false, message: 'User non trouvé'});
     }
};

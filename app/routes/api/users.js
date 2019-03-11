const express = require('express')
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport')
// const validateRegisterInput = require('../../validation/register');
// const validateLoginInput = require('../../validation/login');



router.get("/test", (req, res) => res.json({msg: "This is a users route"}));

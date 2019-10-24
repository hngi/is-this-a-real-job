const express = require('express');
const jobInviteRouter = express.Router();

jobInviteRouter.route('/')
    .get((req, res) => {
        res.render('job invites'


        )
    })

module.exports = jobInviteRouter;
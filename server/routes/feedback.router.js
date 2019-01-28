const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


const feedback = [];

// GET feedback and show on the Review Feedback page
router.post('/', (req,res) => {
    pool.query('SELECT * FROM "feedback";').then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error in GET /review-comments', error);
        res.sendStatus(500);
    });
});

module.exports = router;
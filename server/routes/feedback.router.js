const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');



// GET feedback and show on the Review Feedback page
router.post('/', async (req,res) => {
    const feedback = req.body;
    const queryText = (`INSERT INTO "feedback"("feeling", "understanding",
                                                "support", "comments")
                        VALUES ($1, $2, $3, $4);`);
    
    pool.query(queryText, [feedback.feelings, feedback.understanding,
                            feedback.support, feedback.comments]).
                            then((result) => {
                                 res.send(201);
                            }).catch((error) => {
        console.log('Error in POST /review-comments', error);
        res.sendStatus(500);
    })
});

module.exports = router;
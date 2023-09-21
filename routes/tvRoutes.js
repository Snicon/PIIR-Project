const express = require('express');
const router = express.Router();

// Initiate lirc for sending commands
const lirc_node = require('lirc_node');
lirc_node.init();

router.get('/on', (req, res) => {
    res.send("Turning on the tv.")
})

router.get('/off', (req, res) => {
    res.send("Turning off the tv.")
})

router.get('/toggle', (req, res) => {

    try {
        lirc_node.irsend.send_once("LG_AKB72915207", "KEY_POWER", () => {
            res.json({
                status: "successful",
                message: "TV power toggled."
            });
        });
    } catch (error) {
        // TODO: Gather context for what is failing + detect if the ir command is actually being sent successfully at all.
        res.json({
            status: "failed",
            message: "Something went wrong during the process of sending the IR command."
        })
    }

})

module.exports = router;
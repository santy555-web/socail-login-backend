var express = require('express');
var router = express.Router();
var Task = require('../module/userdata');

router.get('/', function (req, res, next) {

    Task.getUserDataForm(function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});

router.get('/:id?', function(req, res, next) {

    Task.getUserDataById(req.params.id, function(err, rows)
    {  
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
    
    }); 
    

router.post('/',function(req,res,next){

    Task.addUserDataForm(req.body, function(err,rows)
    {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    
    });
});


router.delete('/:id',function(req,res,next)
{
    Task.deleteUserDataForm(req.params.id, function(err,rows)
    {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});


router.put('/:id', function (req, res, next) {

    Task.editUserDataForm(req.params.id, req.body, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });

});


module.exports = router;
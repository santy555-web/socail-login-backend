var express = require('express');
var router = express.Router();
var Task = require('../module/login');

router.get('/', function (req, res, next) {

    Task.getUserForm(function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});

router.get('/:id?', function(req, res, next) {

    Task.getUserFormById(req.params.id, function(err, rows)
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

    Task.addUserForm(req.body, function(err,rows)
    {
        if (err) {
            res.json(err);
        }
        else {
            console.log(req.body);
            res.json(rows);
        }
    
    });
});


router.delete('/:id',function(req,res,next)
{
    Task.deleteUserForm(req.params.id, function(err,rows)
    {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});


// router.put('/:id', function (req, res, next) {

//     Task.editStudentForm(req.params.id, req.body, function (err, rows) {
//         if (err) {
//             res.json(err);
//         }
//         else {
//             res.json(rows);
//         }
//     });

// });


module.exports = router;
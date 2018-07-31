var promise = require('bluebird');

var options = {
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connection = '35.200.200.11:model-palace-211807:asia-south1:beetle-2018';
var db = pgp(connection);

function user_register(req, res, next) {
    db.none( 'INSERT INTO user_account(username, password, company_name, tel, email) VALUES(${username}, ${password}, ${company_name}, ${tel}, ${email})', req.body )
        .then( (data) => {
            console.log(data);            
            res.status(200).json({
                status: 'Success!',
                data: data,
                message: 'Register Done!'
            })
        }).catch((err)=>{
            return next(err)
            console.log(err);            
        })
}

function getUser(req, res, next) {
    db.any('SELECT * FROM user_account')
        .then((data) => {
            res.status(200).json({
                status: 'Success!',
                data: data,
                message: 'Get All User'
            })
        }).catch((err) => {
            return next(err)
        })
}

function addDevice(req, res, next) {
    db.none('INSERT INTO devices(user_id, uuid, password, tel) VALUES(${user_id}, ${uuid}, ${password}, ${tel})', req.body)
        .then((data) => {
            res.status(200).json({
                status: 'Success',
                message: 'Device Added'
            })
        }).catch((err) => {
            return next(err)
        })
}

function getDevices(req, res, next) {
    var id = 5;
    db.any('SELECT * FROM devices WHERE user_id = $1', id)
        .then((data) => {
            res.status(200).json({
                status: 'Success!',
                data: data,
                message: 'Ok'
            })
        }).catch((err) => {
            return next(err)          
        })
}
/*function getAllPuppies(req, res, next) {
    db.any('SELECT * FROM pups')
        .then((data) => {
            res.status(200).json({
                status: 'success',
                data: data,
                message: 'Retreived all puppies'
            })
        }).catch((err) => {
            return next.err
        })
}

function getSinglePuppy(req, res, next) {
    var pupID = parseInt(req.params.id);
    db.one('select * from pups where id = $1', pupID)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved ONE puppy'
                });
        })
        .catch(function (err) {
            return next(err);
        });
}

function createPuppy(req, res, next) {
    req.body.age = parseInt(req.body.age);
    db.none( 'insert into pups(name, breed, age, sex)' + 'values(${name}, ${breed}, ${age}, ${sex})', req.body)
        .then(function () {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Inserted one puppy'
                });
        })
        .catch(function (err) {
            return next(err);
        });
}

function updatePuppy(req, res, next) {
    db.none('update pups set name=$1, breed=$2, age=$3, sex=$4 where id=$5',
        [req.body.name, req.body.breed, parseInt(req.body.age),
        req.body.sex, parseInt(req.params.id)])
        .then(function () {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Updated puppy'
                });
        })
        .catch(function (err) {
            return next(err);
        });
}

function removePuppy(req, res, next) {
    var pupID = parseInt(req.params.id);
    db.result('delete from pups where id = $1', pupID)
        .then(function (result) {
            res.status(200)
                .json({
                    status: 'success',
                    message: `Removed ${result.rowCount} puppy`
                });
        })
        .catch(function (err) {
            return next(err);
        });
}

function getPuppiesBySex(req, res, next){
    var sex = req.params.sex;
    db.any( 'SELECT * FROM pups WHERE sex = $1', sex )
    .then((data) => {
        res.status(200).json({
            status: 'Success',
            data: data,
            message: 'Retieved All Male Puppies'
        })
    })
}*/


module.exports = {
    user_register: user_register,
    getUser: getUser,
    addDevice: addDevice,
    getDevices: getDevices
}
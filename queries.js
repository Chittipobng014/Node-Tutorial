var promise = require('bluebird');

var options = {
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connection = 'postgres://clgfhgaukuolin:09efedd1bf282ea7dc4b9091b07f94155e1e4d9633a72dddff2ccf70b7ca83e0@ec2-54-83-22-244.compute-1.amazonaws.com:5432/dbhajskmdk85id?ssl=true';
var db = pgp(connection);

function userRegister(req, res, next) {
    db.none( 'INSERT INTO user_account(username, password, company_name, tel, email) VALUES(${username}, ${password}, ${company_name}, ${tel}, ${email})', req.body )
        .then( (data) => {       
            res.status(200).json({
                status: 'Success!',
                data: data,
                message: 'Register Done!'
            })
        }).catch((err)=>{
            return next(err)  
        })
}

function getUser(req, res, next) {
    db.any('SELECT id FROM user_account WHERE username = ${username} and password = ${password}', req.body)
        .then((response) => {
            if (response.length != 0) {          
                res.status(200).json({
                    status: '200',
                    res: response
            })
            } else{
                res.status(200).json({
                    status: '200',
                    res: 'false'
            })
            }
        }).catch((err) => {
            return next(err)
        })
}

function addDevice(req, res, next) {
    db.none('INSERT INTO devices(uuid, name, user_id) VALUES(${uuid}, ${name}, ${user_id})', req.body)
        .then((response) => {
            res.status(200).json({
                status: '200',
                message: 'Device Added!'
            })
        }).catch((err) => {
            return next(err)
        })
}

function memberRegister(req, res, next) {
    db.none('INSERT INTO device_info(uuid, password, tel) VALUES(${uuid}, ${password}, ${tel})', req.body)
        .then((response) => {
            res.status(200).json({
                status:'200',
                message: 'Register Success!'
            })
        }).catch((err) => {
            return next(err)
        })
}

function getDevices(req, res, next) {
    db.any('SELECT * FROM devices WHERE user_id = ${user_id}', req.body)
        .then((response) => {
            res.status(200).json({
                status: '200',
                data: response
            })
        }).catch((err) => {
            return next(err)          
        })
}

function unlock(req, res, next) {
    db.any('SELECT uuid FROM device_info WHERE uuid = ${uuid} and password = ${password}', req.body)
        .then((response) => {
            if (response.length != 0) {          
                res.status(200).json({
                    status: '200',
                    res: 'true'
                })
            } else{
                res.status(200).json({
                    status: '200',
                    res: 'false'
                })
            }
        }).catch((err) => {
            return next(err)
        })
}

module.exports = {
    userRegister: userRegister,
    getUser: getUser,
    addDevice: addDevice,
    getDevices: getDevices,
    unlock: unlock,
    memberRegister: memberRegister
}
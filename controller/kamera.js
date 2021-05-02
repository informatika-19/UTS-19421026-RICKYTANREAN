const kameraModel = require ('../model/kamera')
const objectid = require('mongoose').Types.ObjectId

exports.create = (data) =>
new Promise((resolve, reject) =>{
    kameraModel.create(data)
    .then(() => resolve ({
        status : true,
        pesan: 'input penyewaan berhasil'
    })).catch (() => reject({
        status : false,
        pesan: 'input penyewaan gagal'
    }))

})

exports.update = (id, data)=>
  new Promise((resolve, reject)=>{
    kameraModel.updateOne({
      _id: objectid(id)
    }, data).then (() => resolve({
        status : true,
        pesan : ' update sukses ',
      })).catch(()=> reject ({
      status : false,
      pesan : 'update gagal',
    }))
  })

  exports.showAllData = () =>
    new Promise((resolve, reject)=>{
    kameraModel.find()
      .then (result =>{
        resolve({
          status : true,
          pesan : 'sukses menampilkan',
          data : result
        })
      }).catch(()=> reject ({
        status : false,
        pesan : 'gagal menampilkan',
        data : []
      }))
    })  

exports.showbyID = (id) =>
    new Promise((resolve, reject) => {
    kameraModel.findOne({
        _id: objectid(id)
      }).then (result =>{
        resolve({
          status : true,
          pesan : 'sukses menampilkan',
          data : result
        })
      }).catch(()=> reject ({
        status : false,
        pesan : 'gagal menampilkan',
        data : null
      }))
    })

exports.delete = (id) =>
    new Promise((resolve, reject)=>{
      kameraModel.deleteOne({
        _id: objectid(id)
      }).then (() => resolve({
        status : true,
        pesan : 'berhasil menghapus',
        })).catch(()=> reject ({
        status : false,
        pesan : 'gagal menghapus',
        }))
    })
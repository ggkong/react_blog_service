module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const TypeSchema = new Schema({
        id       : { type : Number },
        typeName : { type : String },
        orderNum : { type : Number }
    })

    return mongoose.model('type', TypeSchema)
}
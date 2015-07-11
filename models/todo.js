var mongoose = require( 'mongoose' );
var Schema   = mongoose.Schema;
 
var TodoSchema = new Schema({
    note: String,
    updated_at: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Todo', TodoSchema);

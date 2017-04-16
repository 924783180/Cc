/**
 * Created by 冷寒 on 2017/4/16.
 */
let mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1/last');
exports.Movie = mongoose.model('Movie',new mongoose.Schema({
    name:String,
    url:String
}));
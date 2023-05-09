import mongoose from "mongoose";

var Schema = mongoose.Schema;


const userSchema = Schema({
    name: String,
    username: String,
    email: String,
    phone: Number,
    id: { type: String }
})

// autoIncrement.initialize(mongoose.connection);
// userSchema.plugin(autoIncrement.plugin, 'user');

// Use pre middleware
var CounterSchema = Schema({
    _id: { type: String, required: true },
    seq: { type: Number, default: 0 }
});
var counter = mongoose.model('counter', CounterSchema);

userSchema.pre('save', function(next) {
    if (this.isNew) {
        var doc = this;
        counter.findByIdAndUpdate({ _id: 'entityId' }, { $inc: { seq: 1 } }, { new: true, upsert: true })
            .then(function(count) {
                doc.id = count.seq;
                next();
            })
            .catch(function(error) {
                throw error;
            });
    } else {
        next();
    }
});

const user = mongoose.model('user', userSchema);
export default user;
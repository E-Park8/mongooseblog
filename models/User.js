const { model, Schema } = require('mongoose')

const User = new Schema ({
    name: {
        type: String,
        unique: true,
        required: true   //required is the allowNull of mongoose
    },
    username: {
        type: String,
        unique: true,
        required: true   //required is the allowNull of mongoose
    },
    email: {
        type: String,
        unique: true,
        required: true   //required is the allowNull of mongoose
    },
    blogposts: [{
        type: Schema.Types.ObjectId,
        ref: 'Blogpost'
    }]
}, {timestamps: true})

module.exports = model('User', User)


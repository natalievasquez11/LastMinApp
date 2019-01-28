module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define('User', {
        eventName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        performer: {
            type: DataTypes.STRING,
            allowNull: true
        },
        showType: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        faves: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: true
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: true
        }
    });
    return User;
};


// module.exports = function(sequelize, DataTypes) {
//     var User = sequelize.define("User", {
//         firstName: {
//             type: DataTypes.STRING,
//             allowNull: false
//         }, 
//         lastName: {
//             type: DataTypes.STRING,
//             allowNull: false
//         },
//         username: {
//             type: DataTypes.STRING,
//             allowNull: false
//         },
//         password: {
//             type: DataTypes.STRING,
//             allowNull: false
//         },
//         faves: DataTypes.ARRAY
//     });
//     return User;
// };
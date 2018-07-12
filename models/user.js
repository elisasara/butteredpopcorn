module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        facebookId: {
           type: DataTypes.STRING,
           allowNull:true 
        },
        
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: 2,
                    msg: "Name must be at least two characters in length"
                }
            }
        },

        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    User.associate = function (models) {
        User.hasMany(models.WantToWatch, {
            onDelete: "cascade"
        });
        User.hasMany(models.Watched, {
            onDelete: "cascade"
        });
        User.hasMany(models.CurrentlyWatching, {
            onDelete: "cascade"
        });
        User.hasMany(models.Friends, {
            onDelete: "cascade"
        });
    };
    // User.associate = function(models) {
    //     User.hasMany(models.Watched, {
    //         onDelete: "cascade"
    //     });
    // };
    // User.associate = function(models) {
    //     User.hasMany(models.CurrentlyWatching, {
    //         onDelete: "cascade"
    //     });
    // };
    // User.associate = function(models) {
    //     User.hasMany(models.Friends, {
    //         onDelete: "cascade"
    //     });
    // };
    return User;
};
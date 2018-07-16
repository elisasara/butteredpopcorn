module.exports = function (sequelize, DataTypes) {
    var Watched = sequelize.define("Watched", {
        tmdbID: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        rating: {
            type: DataTypes.STRING
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "Watched"
        }
    });
    Watched.associate = function (models) {
        Watched.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return Watched;
};
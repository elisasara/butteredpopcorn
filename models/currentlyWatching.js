module.exports = function (sequelize, DataTypes) {
    var CurrentlyWatching = sequelize.define("CurrentlyWatching", {
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
        status: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "Watching"
        }
    });
    CurrentlyWatching.associate = function (models) {
        CurrentlyWatching.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return CurrentlyWatching;
};
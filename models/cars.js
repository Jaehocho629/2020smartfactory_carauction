
const { DataTypes } = require('sequelizer');

module.exports = (sequelize) => {
    const cars = sequelize.define('cars', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        register_date: {
            type: DataTypes.STRING(50),
            unique: false,
            allowNull: false,
        },
        model: {
            type: DataTypes.STRING(50),
            unique: false,
            allowNull: false,
        },
        model_year: {
            type: DataTypes.STRING(50),
            unique: false,
            allowNull: false,
        },
        mileage: {
            type: DataTypes.INTEGER,
            unique: false,
            allowNull: false
        },
        user_id: {
            type: DataTypes.STRING(30),
            unique: false,
            allowNull: false
        },
        option: {
            type: DataTypes.STRING(20),
            unique: false,
            allowNull: false
        },




    }, {
        sequelize: sequelize,
        timestamp: true,
        moduleName: 'cars',
        tableName: 'cars',
        paranoid: true,
        charset: 'utf8',
        collation: 'utf8_general_ci'
    })

    Car.associate = (db) => {
        db.belongsTo(db.User, { foreignKey: 'ownerId', targetKey: 'id', as: "owner" });
        db.Car.hasOne(db.Auction, { foreignKey: 'carId', sourceKey: 'id', as: 'inAuction' });
    }

    return car;
}

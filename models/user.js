
module.exports = (sequelize,DataTypes)=>{
    const User = sequelize.define("User",{
        name: DataTypes.STRING,
        username: {
            type: DataTypes.STRING,
            unique: true
        },
        password: DataTypes.STRING,
        coins: {
            type: DataTypes.INTEGER,
            defaultValue: 50
        }
    })
    return User;
};
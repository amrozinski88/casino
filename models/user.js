
module.exports = (sequelize,DataTypes)=>{
    const User = sequelize.define("User",{
        name: DataTypes.STRING,
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        coins: {
            type: DataTypes.INTEGER,
            defaultValue: 50
        }
    })
    return User;
};
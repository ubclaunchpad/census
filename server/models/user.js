module.exports = (sequelize, type) => {
    return sequelize.define('user', {
        user_id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: type.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    args: false,
                    msg: 'name cannot be empty'
                }
            }
        }
    })
}
const Sequelize = require('sequelize');
const config = require('../config/config.json');
const { database, username, password, host } = config.test;
const sequelize = new Sequelize(database, username, password, {
  host: host,
  dialect: 'postgres',
  define: {
    timestamps: false,
  }
});
const UserModel = require('../models/user');

// models
const User = UserModel(sequelize, Sequelize);

// test related libraries
const assert = require('assert');

describe('Users functions', function() {
    describe('createUser()', function() {
        afterEach(async function() {
            await User.destroy({
                where: {},
                truncate: true,
            });
        });

        it('should create a new user when the payload is valid', async function() {
            const payload = { name: "Example" };
            const user = User.build(payload);
            try {
                await user.save();
            } catch (e) {
                assert.fail("ValidationError should not be thrown");
            }
            const count = await User.count();
            assert.equal(count, 1);
        });

        it('should not create a new user when the payload is invalid', async function() {
            const payload = {};
            const user = User.build(payload);
            try {
                await user.save();
                assert.fail("ValidationError should not be thrown");
            } catch (e) {
                // expected
            }
            const count = await User.count();
            assert.equal(count, 0);
        });
    });
});
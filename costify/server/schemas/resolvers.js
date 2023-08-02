const { AuthenticationError } = require('apollo-server-express');
const { users, expenses, income } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        // // users: async () => {
        // //     return users.find().populate('expenses').populate('income');
        // // },
        // user: async (parent, { username }) => {
        //     return users.findOne({ username }).populate('expenses').populate('income');
        // },
        // expenses: async (parent, { username }) => {
        //     const params = username ? { username } : {};
        //     return expenses.find(params).sort({ createdAt: -1 });

        // },
        // expense: async (parent, { _id }) => {
        //     return expenses.findOne({ _id });


        // },
        // income: async (parent, { username }) => {
        //     const params = username ? { username } : {};
        //     return income.find(params).sort({ createdAt: -1 });


        // },
        // income: async (parent, { _id }) => {

        //     return income.findOne({ _id });


        // },
        me: async (parent, args, context) => {
            if (context.user) {
                return users.findOne({ _id: context.user._id }).populate('expenses').populate('income');
            }
            throw new AuthenticationError('You need to be logged in!');
        },
    },
    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            const user = await users.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await users.findOne({ email });

            if (!user) {
                throw new AuthenticationError('No profile with this email found!');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect password!');
            }

            const token = signToken(user);
            return { token, user };
        },
        addExpense: async (parent, { expense, amount }, context) => {
            if (context.user) {
                const expense = await expenses.create({
                    expense,
                    amount,
                    username: context.user.username,
                });

                await users.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { expenses: expense._id } }
                );

                return expense;
            }

            throw new AuthenticationError('You need to be logged in!');
        },
        addIncome: async (parent, { income, amount }, context) => {
            if (context.user) {
                const income = await income.create({
                    income,
                    amount,
                    username: context.user.username,
                });

                await users.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { income: income._id } }
                );

                return income;
            }

            throw new AuthenticationError('You need to be logged in!');
        }
    }
};

module.exports = resolvers;

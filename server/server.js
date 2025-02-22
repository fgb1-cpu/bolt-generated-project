const express = require('express');
    const mongoose = require('mongoose');
    const cors = require('cors');
    const dotenv = require('dotenv');

    dotenv.config();

    const app = express();
    const port = process.env.PORT || 5000;

    app.use(cors());
    app.use(express.json());

    mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/neofin', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const connection = mongoose.connection;
    connection.once('open', () => {
      console.log("MongoDB database connection established successfully");
    });

    // Routes
    const authRouter = require('./api/routes/auth.routes');
    const userRouter = require('./api/routes/user.routes');
    const portfolioRouter = require('./api/routes/portfolio.routes');
    const cryptoRouter = require('./api/routes/crypto.routes');
    const tradfiRouter = require('./api/routes/tradfi.routes');
    const analyticsRouter = require('./api/routes/analytics.routes');
    const aiRouter = require('./api/routes/ai.routes');

    app.use('/api/auth', authRouter);
    app.use('/api/users', userRouter);
    app.use('/api/portfolio', portfolioRouter);
    app.use('/api/crypto', cryptoRouter);
    app.use('/api/tradfi', tradfiRouter);
    app.use('/api/analytics', analyticsRouter);
    app.use('/api/ai', aiRouter);

    app.listen(port, () => {
      console.log(`Server is running on port: ${port}`);
    });

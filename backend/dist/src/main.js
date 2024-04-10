"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: ['http://localhost:3001', 'http://localhost:5173'],
        methods: 'GET,PUT,POST,DELETE',
        allowedHeaders: 'Content-Type,Authorization',
        preflightContinue: false,
        optionsSuccessStatus: 204,
    });
    await app.listen(3000);
}
bootstrap();

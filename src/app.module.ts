import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuizzesModule } from './quizzes/quizzes.module';

@Module({
  imports: [
    QuizzesModule,
    GraphQLModule.forRoot({
      autoSchemaFile:'schema.gql',
      driver: ApolloDriver
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

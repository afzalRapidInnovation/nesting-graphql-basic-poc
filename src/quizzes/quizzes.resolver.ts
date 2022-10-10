import { Args, Int, Mutation, Parent, Query,ResolveField,Resolver } from '@nestjs/graphql';
import { QuizzesService } from './quizzes.service';
import { Quiz} from './models/quiz.model'
import { Question } from './models/question.model';
import { QuestionInput } from './input/question.input';

@Resolver((of) => Quiz)
export class QuizzesResolver {
    constructor(
        private readonly quizzesService: QuizzesService
    ){}

    @Query(returns => [Quiz])
    async quizzes(){
        return this.quizzesService.findAll()
    }

    @ResolveField(returns => [Question])
    async questions(@Parent() quiz:Quiz){
        const { id } = quiz;

        return this.quizzesService.questions(id)
    }

    @Mutation(returns => Quiz)
    async toggleShuffleAnswers(@Args({name: 'quizId', type: () => Int}) quizId :number){
        return this.quizzesService.toggleShuffleAnswers(quizId)
    }

    @Mutation(returns => Question)
    async addQuestion(@Args('questionInput') questionInput: QuestionInput){
        return this.quizzesService.addQuestion(questionInput)
    }
}
